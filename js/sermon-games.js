/**
 * Oasis Church Aberdeen - Sermon Games JavaScript
 */

(function() {
  'use strict';

  // Game data (will be loaded from JSON)
  let gameData = null;
  
  // Current game state
  let currentGame = 'quiz';

  // DOM Elements
  const gameContainer = document.getElementById('game-container');
  const gameLoading = document.getElementById('game-loading');
  const gameSelectorBtns = document.querySelectorAll('.game-selector__btn');

  // ============================================
  // Initialize
  // ============================================

  function init() {
    if (!gameContainer) return;
    
    // Load game data
    loadGameData();
    
    // Set up game selector buttons
    gameSelectorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        selectGame(game);
      });
    });
  }

  // ============================================
  // Load Game Data
  // ============================================

  async function loadGameData() {
    try {
      // For now, use embedded data. In production, this would fetch from JSON
      gameData = getEmbeddedGameData();
      
      // Update sermon info in header
      updateSermonInfo();
      
      // Load default game (quiz)
      loadGame('quiz');
    } catch (error) {
      console.error('Failed to load game data:', error);
      showError('Failed to load game data. Please try again later.');
    }
  }

  function updateSermonInfo() {
    if (!gameData) return;
    
    const titleEl = document.getElementById('sermon-title');
    const dateEl = document.getElementById('sermon-date');
    const speakerEl = document.getElementById('sermon-speaker');
    const seriesEl = document.getElementById('sermon-series');
    const verseEl = document.getElementById('memory-verse');
    const verseRefEl = document.getElementById('memory-verse-ref');
    
    if (titleEl) titleEl.textContent = gameData.sermonTitle;
    if (dateEl) dateEl.textContent = gameData.sermonDate;
    if (speakerEl) speakerEl.textContent = gameData.sermonSpeaker;
    if (seriesEl) seriesEl.textContent = gameData.sermonSeries;
    if (verseEl) verseEl.textContent = `"${gameData.memoryVerse.text}"`;
    if (verseRefEl) verseRefEl.textContent = gameData.memoryVerse.reference;
  }

  // ============================================
  // Game Selection
  // ============================================

  function selectGame(game) {
    currentGame = game;
    
    // Update active button
    gameSelectorBtns.forEach(btn => {
      btn.classList.toggle('game-selector__btn--active', btn.dataset.game === game);
      btn.setAttribute('aria-selected', btn.dataset.game === game);
    });
    
    // Load the selected game
    loadGame(game);
    
    // Scroll to game section
    const gameSection = document.getElementById('game-section');
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function loadGame(game) {
    if (!gameData) return;
    
    showLoading();
    
    // Small delay for visual feedback
    setTimeout(() => {
      switch (game) {
        case 'quiz':
          initQuizGame();
          break;
        case 'crossword':
          initCrosswordGame();
          break;
        case 'wordsearch':
          initWordSearchGame();
          break;
        case 'fillblanks':
          initFillBlanksGame();
          break;
        case 'memoryverse':
          initMemoryVerseGame();
          break;
        default:
          showError('Game not found');
      }
    }, 300);
  }

  function showLoading() {
    gameContainer.innerHTML = `
      <div class="game-loading">
        <div class="loading__spinner"></div>
        <p>Loading game...</p>
      </div>
    `;
  }

  function showError(message) {
    gameContainer.innerHTML = `
      <div class="empty-state">
        <svg class="empty-state__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h3 class="empty-state__title">Oops!</h3>
        <p class="empty-state__text">${message}</p>
      </div>
    `;
  }

  // ============================================
  // Quiz Game
  // ============================================

  let quizState = {
    currentIndex: 0,
    score: 0,
    answers: [],
    answered: false
  };

  function initQuizGame() {
    quizState = {
      currentIndex: 0,
      score: 0,
      answers: [],
      answered: false
    };
    
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const questions = gameData.quiz.questions;
    const question = questions[quizState.currentIndex];
    const progress = ((quizState.currentIndex) / questions.length) * 100;
    const letters = ['A', 'B', 'C', 'D'];
    
    gameContainer.innerHTML = `
      <div class="quiz-game">
        <div class="quiz-game__header">
          <span class="quiz-game__progress-text">Question ${quizState.currentIndex + 1} of ${questions.length}</span>
        </div>
        <div class="quiz-game__progress-bar">
          <div class="quiz-game__progress-fill" style="width: ${progress}%"></div>
        </div>
        <h3 class="quiz-game__question">${question.question}</h3>
        <div class="quiz-game__options">
          ${question.options.map((option, i) => `
            <button class="quiz-game__option" data-index="${i}" ${quizState.answered ? 'disabled' : ''}>
              <span class="quiz-game__option-letter">${letters[i]}</span>
              <span>${option}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-game__feedback" id="quiz-feedback" style="display: none;"></div>
      </div>
    `;

    // Add click handlers
    gameContainer.querySelectorAll('.quiz-game__option').forEach(btn => {
      btn.addEventListener('click', () => handleQuizAnswer(parseInt(btn.dataset.index)));
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleQuizKeyboard);
  }

  function handleQuizKeyboard(e) {
    if (quizState.answered) return;
    
    const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    const index = keyMap[e.key.toLowerCase()];
    
    if (index !== undefined) {
      handleQuizAnswer(index);
    }
  }

  function handleQuizAnswer(index) {
    if (quizState.answered) return;
    quizState.answered = true;
    
    const questions = gameData.quiz.questions;
    const question = questions[quizState.currentIndex];
    const isCorrect = index === question.correct;
    
    if (isCorrect) {
      quizState.score++;
    }
    
    quizState.answers.push({ index, isCorrect });
    
    // Update UI
    const options = gameContainer.querySelectorAll('.quiz-game__option');
    options.forEach((opt, i) => {
      opt.disabled = true;
      if (i === question.correct) {
        opt.classList.add('quiz-game__option--correct');
      } else if (i === index && !isCorrect) {
        opt.classList.add('quiz-game__option--incorrect');
      }
    });

    // Show feedback
    const feedback = document.getElementById('quiz-feedback');
    if (feedback) {
      feedback.innerHTML = `<p><strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect.'}</strong> ${question.explanation}</p>`;
      feedback.style.display = 'block';
    }

    // Move to next question after delay
    setTimeout(() => {
      document.removeEventListener('keydown', handleQuizKeyboard);
      quizState.currentIndex++;
      quizState.answered = false;
      
      if (quizState.currentIndex < questions.length) {
        renderQuizQuestion();
      } else {
        showQuizResults();
      }
    }, 2500);
  }

  function showQuizResults() {
    const questions = gameData.quiz.questions;
    const percentage = Math.round((quizState.score / questions.length) * 100);
    let message = '';
    
    if (percentage === 100) {
      message = 'Perfect score! You really paid attention to the sermon!';
      triggerConfetti();
    } else if (percentage >= 80) {
      message = 'Great job! You have a solid understanding of the message.';
      triggerConfetti();
    } else if (percentage >= 60) {
      message = 'Good effort! Consider reviewing the sermon to strengthen your understanding.';
    } else {
      message = 'Keep learning! Why not watch the sermon again and try once more?';
    }
    
    gameContainer.innerHTML = `
      <div class="quiz-game">
        <div class="quiz-game__results">
          <div class="quiz-game__score">${quizState.score}/${questions.length}</div>
          <p class="quiz-game__score-text">You scored ${percentage}%</p>
          <p>${message}</p>
          <div class="quiz-game__actions">
            <button class="btn btn--primary" id="quiz-retry">Play Again</button>
            <button class="btn btn--outline" id="quiz-another">Try Another Game</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('quiz-retry')?.addEventListener('click', initQuizGame);
    document.getElementById('quiz-another')?.addEventListener('click', () => selectGame('crossword'));
  }

  // ============================================
  // Crossword Game
  // ============================================

  let crosswordState = {
    grid: [],
    userGrid: [],
    selectedCell: null,
    direction: 'across',
    words: []
  };

  function initCrosswordGame() {
    const crossword = gameData.crossword;
    crosswordState = {
      grid: crossword.grid,
      userGrid: crossword.grid.map(row => row.map(cell => cell === '#' ? '#' : '')),
      selectedCell: null,
      direction: 'across',
      words: crossword.words
    };
    
    renderCrossword();
  }

  function renderCrossword() {
    const { grid, userGrid, words } = crosswordState;
    const size = grid.length;
    
    // Calculate cell numbers
    const cellNumbers = {};
    let num = 1;
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (grid[row][col] !== '#') {
          const isAcrossStart = (col === 0 || grid[row][col - 1] === '#') && col < size - 1 && grid[row][col + 1] !== '#';
          const isDownStart = (row === 0 || grid[row - 1][col] === '#') && row < size - 1 && grid[row + 1][col] !== '#';
          if (isAcrossStart || isDownStart) {
            cellNumbers[`${row}-${col}`] = num++;
          }
        }
      }
    }

    // Separate clues by direction
    const acrossClues = words.filter(w => w.direction === 'across');
    const downClues = words.filter(w => w.direction === 'down');

    gameContainer.innerHTML = `
      <div class="crossword-game">
        <div class="crossword-grid-wrapper">
          <div class="crossword-grid" style="grid-template-columns: repeat(${size}, 1fr);">
            ${grid.map((row, rowIndex) => 
              row.map((cell, colIndex) => {
                const key = `${rowIndex}-${colIndex}`;
                const number = cellNumbers[key] || '';
                if (cell === '#') {
                  return `<div class="crossword-cell crossword-cell--block"></div>`;
                }
                return `
                  <div class="crossword-cell crossword-cell--letter" data-row="${rowIndex}" data-col="${colIndex}">
                    ${number ? `<span class="crossword-cell__number">${number}</span>` : ''}
                    <input type="text" maxlength="1" class="crossword-cell__input" 
                           data-row="${rowIndex}" data-col="${colIndex}"
                           value="${userGrid[rowIndex][colIndex]}"
                           aria-label="Row ${rowIndex + 1}, Column ${colIndex + 1}">
                  </div>
                `;
              }).join('')
            ).join('')}
          </div>
          <div class="crossword-actions">
            <button class="btn btn--primary btn--sm" id="crossword-check">Check Answers</button>
            <button class="btn btn--outline btn--sm" id="crossword-reveal">Reveal All</button>
            <button class="btn btn--outline btn--sm" id="crossword-clear">Clear</button>
          </div>
        </div>
        <div class="crossword-clues">
          <div class="crossword-clues__section">
            <h4 class="crossword-clues__title">Across</h4>
            <div class="crossword-clues__list">
              ${acrossClues.map(clue => {
                const num = cellNumbers[`${clue.row}-${clue.col}`];
                return `<div class="crossword-clue" data-row="${clue.row}" data-col="${clue.col}" data-direction="across">
                  <span class="crossword-clue__number">${num}.</span> ${clue.clue}
                </div>`;
              }).join('')}
            </div>
          </div>
          <div class="crossword-clues__section">
            <h4 class="crossword-clues__title">Down</h4>
            <div class="crossword-clues__list">
              ${downClues.map(clue => {
                const num = cellNumbers[`${clue.row}-${clue.col}`];
                return `<div class="crossword-clue" data-row="${clue.row}" data-col="${clue.col}" data-direction="down">
                  <span class="crossword-clue__number">${num}.</span> ${clue.clue}
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Add event listeners
    gameContainer.querySelectorAll('.crossword-cell__input').forEach(input => {
      input.addEventListener('input', handleCrosswordInput);
      input.addEventListener('keydown', handleCrosswordKeydown);
      input.addEventListener('focus', handleCrosswordFocus);
    });

    gameContainer.querySelectorAll('.crossword-clue').forEach(clue => {
      clue.addEventListener('click', () => {
        const row = parseInt(clue.dataset.row);
        const col = parseInt(clue.dataset.col);
        const input = gameContainer.querySelector(`.crossword-cell__input[data-row="${row}"][data-col="${col}"]`);
        if (input) input.focus();
      });
    });

    document.getElementById('crossword-check')?.addEventListener('click', checkCrossword);
    document.getElementById('crossword-reveal')?.addEventListener('click', revealCrossword);
    document.getElementById('crossword-clear')?.addEventListener('click', clearCrossword);
  }

  function handleCrosswordInput(e) {
    const input = e.target;
    const row = parseInt(input.dataset.row);
    const col = parseInt(input.dataset.col);
    const value = input.value.toUpperCase();
    
    input.value = value;
    crosswordState.userGrid[row][col] = value;
    
    // Move to next cell
    if (value) {
      moveToNextCell(row, col);
    }
  }

  function handleCrosswordKeydown(e) {
    const input = e.target;
    const row = parseInt(input.dataset.row);
    const col = parseInt(input.dataset.col);
    
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        moveToCellAt(row, col + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        moveToCellAt(row, col - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        moveToCellAt(row + 1, col);
        break;
      case 'ArrowUp':
        e.preventDefault();
        moveToCellAt(row - 1, col);
        break;
      case 'Backspace':
        if (!input.value) {
          e.preventDefault();
          moveToPrevCell(row, col);
        }
        break;
    }
  }

  function handleCrosswordFocus(e) {
    const input = e.target;
    crosswordState.selectedCell = {
      row: parseInt(input.dataset.row),
      col: parseInt(input.dataset.col)
    };
  }

  function moveToNextCell(row, col) {
    const { grid } = crosswordState;
    const size = grid.length;
    
    // Try moving right first
    if (col + 1 < size && grid[row][col + 1] !== '#') {
      moveToCellAt(row, col + 1);
    } else if (row + 1 < size && grid[row + 1][col] !== '#') {
      moveToCellAt(row + 1, col);
    }
  }

  function moveToPrevCell(row, col) {
    const { grid } = crosswordState;
    
    if (col - 1 >= 0 && grid[row][col - 1] !== '#') {
      moveToCellAt(row, col - 1);
    } else if (row - 1 >= 0 && grid[row - 1][col] !== '#') {
      moveToCellAt(row - 1, col);
    }
  }

  function moveToCellAt(row, col) {
    const input = gameContainer.querySelector(`.crossword-cell__input[data-row="${row}"][data-col="${col}"]`);
    if (input) {
      input.focus();
      input.select();
    }
  }

  function checkCrossword() {
    const { grid, userGrid } = crosswordState;
    let allCorrect = true;
    
    gameContainer.querySelectorAll('.crossword-cell--letter').forEach(cell => {
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      const userValue = userGrid[row][col];
      const correctValue = grid[row][col];
      
      cell.classList.remove('crossword-cell--correct');
      
      if (userValue === correctValue) {
        cell.classList.add('crossword-cell--correct');
      } else if (userValue) {
        allCorrect = false;
      } else {
        allCorrect = false;
      }
    });
    
    if (allCorrect && userGrid.flat().filter(c => c !== '#' && c !== '').length === grid.flat().filter(c => c !== '#').length) {
      triggerConfetti();
      showGameComplete('Crossword Complete!', 'You solved the crossword puzzle!');
    }
  }

  function revealCrossword() {
    const { grid } = crosswordState;
    
    gameContainer.querySelectorAll('.crossword-cell__input').forEach(input => {
      const row = parseInt(input.dataset.row);
      const col = parseInt(input.dataset.col);
      input.value = grid[row][col];
      crosswordState.userGrid[row][col] = grid[row][col];
    });
    
    checkCrossword();
  }

  function clearCrossword() {
    crosswordState.userGrid = crosswordState.grid.map(row => row.map(cell => cell === '#' ? '#' : ''));
    
    gameContainer.querySelectorAll('.crossword-cell__input').forEach(input => {
      input.value = '';
    });
    
    gameContainer.querySelectorAll('.crossword-cell--correct').forEach(cell => {
      cell.classList.remove('crossword-cell--correct');
    });
  }

  // ============================================
  // Word Search Game
  // ============================================

  let wordSearchState = {
    grid: [],
    words: [],
    foundWords: [],
    selecting: false,
    startCell: null,
    currentCells: []
  };

  function initWordSearchGame() {
    const wordSearch = gameData.wordSearch;
    wordSearchState = {
      grid: wordSearch.grid,
      words: wordSearch.words,
      foundWords: [],
      selecting: false,
      startCell: null,
      currentCells: []
    };
    
    renderWordSearch();
  }

  function renderWordSearch() {
    const { grid, words, foundWords } = wordSearchState;
    const size = grid.length;
    
    gameContainer.innerHTML = `
      <div class="wordsearch-game">
        <div class="wordsearch-grid" style="grid-template-columns: repeat(${size}, 1fr);" id="wordsearch-grid">
          ${grid.map((row, rowIndex) => 
            row.map((cell, colIndex) => `
              <div class="wordsearch-cell" data-row="${rowIndex}" data-col="${colIndex}">${cell}</div>
            `).join('')
          ).join('')}
        </div>
        <div class="wordsearch-words">
          <h4 class="wordsearch-words__title">Find These Words</h4>
          <div class="wordsearch-words__list">
            ${words.map(w => `
              <span class="wordsearch-word ${foundWords.includes(w.word) ? 'wordsearch-word--found' : ''}" data-word="${w.word}">${w.word}</span>
            `).join('')}
          </div>
          <div class="wordsearch-stats">
            <div class="wordsearch-stat">
              <div class="wordsearch-stat__value" id="words-found">${foundWords.length}</div>
              <div class="wordsearch-stat__label">Found</div>
            </div>
            <div class="wordsearch-stat">
              <div class="wordsearch-stat__value">${words.length}</div>
              <div class="wordsearch-stat__label">Total</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const gridEl = document.getElementById('wordsearch-grid');
    
    // Mouse events
    gridEl.addEventListener('mousedown', handleWordSearchStart);
    gridEl.addEventListener('mousemove', handleWordSearchMove);
    gridEl.addEventListener('mouseup', handleWordSearchEnd);
    gridEl.addEventListener('mouseleave', handleWordSearchEnd);
    
    // Touch events
    gridEl.addEventListener('touchstart', handleWordSearchTouchStart, { passive: false });
    gridEl.addEventListener('touchmove', handleWordSearchTouchMove, { passive: false });
    gridEl.addEventListener('touchend', handleWordSearchEnd);
  }

  function handleWordSearchStart(e) {
    if (!e.target.classList.contains('wordsearch-cell')) return;
    
    wordSearchState.selecting = true;
    wordSearchState.startCell = {
      row: parseInt(e.target.dataset.row),
      col: parseInt(e.target.dataset.col)
    };
    wordSearchState.currentCells = [wordSearchState.startCell];
    
    e.target.classList.add('wordsearch-cell--selecting');
  }

  function handleWordSearchMove(e) {
    if (!wordSearchState.selecting) return;
    if (!e.target.classList.contains('wordsearch-cell')) return;
    
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    const { startCell } = wordSearchState;
    
    // Calculate cells in line from start to current
    const cells = getCellsInLine(startCell.row, startCell.col, row, col);
    
    // Clear previous selection
    gameContainer.querySelectorAll('.wordsearch-cell--selecting').forEach(cell => {
      cell.classList.remove('wordsearch-cell--selecting');
    });
    
    // Highlight new selection
    cells.forEach(cell => {
      const cellEl = gameContainer.querySelector(`.wordsearch-cell[data-row="${cell.row}"][data-col="${cell.col}"]`);
      if (cellEl) cellEl.classList.add('wordsearch-cell--selecting');
    });
    
    wordSearchState.currentCells = cells;
  }

  function handleWordSearchTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.classList.contains('wordsearch-cell')) {
      handleWordSearchStart({ target });
    }
  }

  function handleWordSearchTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.classList.contains('wordsearch-cell')) {
      handleWordSearchMove({ target });
    }
  }

  function handleWordSearchEnd() {
    if (!wordSearchState.selecting) return;
    
    wordSearchState.selecting = false;
    
    // Check if selection matches a word
    const selectedWord = wordSearchState.currentCells
      .map(cell => wordSearchState.grid[cell.row][cell.col])
      .join('');
    
    const reversedWord = selectedWord.split('').reverse().join('');
    
    const matchedWord = wordSearchState.words.find(w => 
      w.word === selectedWord || w.word === reversedWord
    );
    
    if (matchedWord && !wordSearchState.foundWords.includes(matchedWord.word)) {
      // Word found!
      wordSearchState.foundWords.push(matchedWord.word);
      
      // Mark cells as found
      wordSearchState.currentCells.forEach(cell => {
        const cellEl = gameContainer.querySelector(`.wordsearch-cell[data-row="${cell.row}"][data-col="${cell.col}"]`);
        if (cellEl) {
          cellEl.classList.remove('wordsearch-cell--selecting');
          cellEl.classList.add('wordsearch-cell--found');
        }
      });
      
      // Update word list
      const wordEl = gameContainer.querySelector(`.wordsearch-word[data-word="${matchedWord.word}"]`);
      if (wordEl) wordEl.classList.add('wordsearch-word--found');
      
      // Update counter
      const counter = document.getElementById('words-found');
      if (counter) counter.textContent = wordSearchState.foundWords.length;
      
      // Check if all words found
      if (wordSearchState.foundWords.length === wordSearchState.words.length) {
        triggerConfetti();
        setTimeout(() => {
          showGameComplete('Word Search Complete!', 'You found all the words!');
        }, 500);
      }
    } else {
      // Clear selection
      gameContainer.querySelectorAll('.wordsearch-cell--selecting').forEach(cell => {
        cell.classList.remove('wordsearch-cell--selecting');
      });
    }
    
    wordSearchState.currentCells = [];
  }

  function getCellsInLine(startRow, startCol, endRow, endCol) {
    const cells = [];
    const dRow = Math.sign(endRow - startRow);
    const dCol = Math.sign(endCol - startCol);
    
    // Only allow horizontal, vertical, or diagonal lines
    const rowDiff = Math.abs(endRow - startRow);
    const colDiff = Math.abs(endCol - startCol);
    
    if (rowDiff !== 0 && colDiff !== 0 && rowDiff !== colDiff) {
      // Not a valid line, just return start cell
      return [{ row: startRow, col: startCol }];
    }
    
    let row = startRow;
    let col = startCol;
    
    while (true) {
      cells.push({ row, col });
      
      if (row === endRow && col === endCol) break;
      
      row += dRow;
      col += dCol;
      
      // Safety check
      if (cells.length > 20) break;
    }
    
    return cells;
  }

  // ============================================
  // Fill in the Blanks Game
  // ============================================

  let fillBlanksState = {
    currentVerse: 0,
    answers: [],
    checked: false
  };

  function initFillBlanksGame() {
    fillBlanksState = {
      currentVerse: 0,
      answers: [],
      checked: false
    };
    
    renderFillBlanks();
  }

  function renderFillBlanks() {
    const verses = gameData.fillBlanks.verses;
    const verse = verses[fillBlanksState.currentVerse];
    
    // Create text with blanks
    let textWithBlanks = verse.text;
    let blankIndex = 0;
    textWithBlanks = textWithBlanks.replace(/_____/g, () => {
      const idx = blankIndex++;
      return `<input type="text" class="fillblanks-game__blank" data-index="${idx}" placeholder="..." autocomplete="off">`;
    });
    
    // Shuffle hints
    const shuffledHints = [...verse.blanks].sort(() => Math.random() - 0.5);
    
    gameContainer.innerHTML = `
      <div class="fillblanks-game">
        <div class="fillblanks-game__verse">
          <p class="fillblanks-game__reference">${verse.reference}</p>
          <p class="fillblanks-game__text">${textWithBlanks}</p>
        </div>
        <div class="fillblanks-game__hint">
          <p class="fillblanks-game__hint-title">Word Bank:</p>
          <div class="fillblanks-game__hint-words">
            ${shuffledHints.map(word => `<span class="fillblanks-game__hint-word">${word}</span>`).join('')}
          </div>
        </div>
        <div class="fillblanks-game__actions">
          <button class="btn btn--primary" id="fillblanks-check">Check Answers</button>
          <button class="btn btn--outline" id="fillblanks-reveal">Show Answers</button>
          ${verses.length > 1 ? `<button class="btn btn--outline" id="fillblanks-next">Next Verse</button>` : ''}
        </div>
      </div>
    `;

    // Add event listeners
    document.getElementById('fillblanks-check')?.addEventListener('click', checkFillBlanks);
    document.getElementById('fillblanks-reveal')?.addEventListener('click', revealFillBlanks);
    document.getElementById('fillblanks-next')?.addEventListener('click', nextFillBlanksVerse);
    
    // Focus first blank
    const firstBlank = gameContainer.querySelector('.fillblanks-game__blank');
    if (firstBlank) firstBlank.focus();
  }

  function checkFillBlanks() {
    const verses = gameData.fillBlanks.verses;
    const verse = verses[fillBlanksState.currentVerse];
    const blanks = gameContainer.querySelectorAll('.fillblanks-game__blank');
    let allCorrect = true;
    
    blanks.forEach((blank, index) => {
      const userAnswer = blank.value.trim().toLowerCase();
      const correctAnswer = verse.blanks[index].toLowerCase();
      
      blank.classList.remove('fillblanks-game__blank--correct', 'fillblanks-game__blank--incorrect');
      
      if (userAnswer === correctAnswer) {
        blank.classList.add('fillblanks-game__blank--correct');
      } else {
        blank.classList.add('fillblanks-game__blank--incorrect');
        allCorrect = false;
      }
    });
    
    if (allCorrect) {
      triggerConfetti();
    }
  }

  function revealFillBlanks() {
    const verses = gameData.fillBlanks.verses;
    const verse = verses[fillBlanksState.currentVerse];
    const blanks = gameContainer.querySelectorAll('.fillblanks-game__blank');
    
    blanks.forEach((blank, index) => {
      blank.value = verse.blanks[index];
      blank.classList.remove('fillblanks-game__blank--incorrect');
      blank.classList.add('fillblanks-game__blank--correct');
    });
  }

  function nextFillBlanksVerse() {
    const verses = gameData.fillBlanks.verses;
    fillBlanksState.currentVerse = (fillBlanksState.currentVerse + 1) % verses.length;
    renderFillBlanks();
  }

  // ============================================
  // Memory Verse Game
  // ============================================

  let memoryVerseState = {
    hintsRevealed: 0,
    checked: false
  };

  function initMemoryVerseGame() {
    memoryVerseState = {
      hintsRevealed: 0,
      checked: false
    };
    
    renderMemoryVerse();
  }

  function renderMemoryVerse() {
    const memoryVerse = gameData.memoryVerseChallenge;
    
    gameContainer.innerHTML = `
      <div class="memoryverse-game">
        <p class="memoryverse-game__reference">${memoryVerse.reference}</p>
        <div class="memoryverse-game__prompt">
          <p>Type the memory verse from memory. Use the hints if you get stuck!</p>
        </div>
        <div class="memoryverse-game__input-area">
          <textarea class="memoryverse-game__textarea" id="memoryverse-input" placeholder="Start typing the verse..."></textarea>
        </div>
        <div class="memoryverse-game__hints" id="memoryverse-hints">
          <p class="memoryverse-game__hints-title">Hints (${memoryVerseState.hintsRevealed}/${memoryVerse.hints.length} revealed)</p>
          <div class="memoryverse-game__hints-list">
            ${memoryVerse.hints.map((hint, i) => `
              <span class="memoryverse-game__hint ${i < memoryVerseState.hintsRevealed ? 'memoryverse-game__hint--revealed' : ''}">${i < memoryVerseState.hintsRevealed ? hint : '• • •'}</span>
            `).join('')}
          </div>
        </div>
        <div class="memoryverse-game__feedback" id="memoryverse-feedback" style="display: none;"></div>
        <div class="memoryverse-game__actions">
          <button class="btn btn--primary" id="memoryverse-check">Check My Answer</button>
          <button class="btn btn--outline" id="memoryverse-hint">Reveal Hint</button>
          <button class="btn btn--outline" id="memoryverse-show">Show Verse</button>
        </div>
      </div>
    `;

    document.getElementById('memoryverse-check')?.addEventListener('click', checkMemoryVerse);
    document.getElementById('memoryverse-hint')?.addEventListener('click', revealMemoryVerseHint);
    document.getElementById('memoryverse-show')?.addEventListener('click', showMemoryVerse);
  }

  function checkMemoryVerse() {
    const memoryVerse = gameData.memoryVerseChallenge;
    const userInput = document.getElementById('memoryverse-input')?.value.trim() || '';
    const correctVerse = memoryVerse.verse;
    
    // Calculate accuracy
    const userWords = userInput.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w);
    const correctWords = correctVerse.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w);
    
    let matches = 0;
    userWords.forEach((word, i) => {
      if (correctWords[i] === word) matches++;
    });
    
    const accuracy = correctWords.length > 0 ? Math.round((matches / correctWords.length) * 100) : 0;
    
    // Show feedback
    const feedback = document.getElementById('memoryverse-feedback');
    if (feedback) {
      let message = '';
      if (accuracy === 100) {
        message = 'Perfect! You know this verse by heart!';
        triggerConfetti();
      } else if (accuracy >= 80) {
        message = 'Excellent! You\'re almost there!';
      } else if (accuracy >= 50) {
        message = 'Good effort! Keep practicing!';
      } else {
        message = 'Keep working on it! Try using the hints.';
      }
      
      feedback.innerHTML = `
        <div class="memoryverse-game__accuracy">
          <span class="memoryverse-game__accuracy-value">${accuracy}%</span>
          <span class="memoryverse-game__accuracy-label">Accuracy</span>
        </div>
        <p style="text-align: center; margin-bottom: var(--space-lg);">${message}</p>
        <div class="memoryverse-game__comparison">
          <p class="memoryverse-game__comparison-title">Correct verse:</p>
          <p class="memoryverse-game__comparison-text">${correctVerse}</p>
        </div>
      `;
      feedback.style.display = 'block';
    }
  }

  function revealMemoryVerseHint() {
    const memoryVerse = gameData.memoryVerseChallenge;
    
    if (memoryVerseState.hintsRevealed < memoryVerse.hints.length) {
      memoryVerseState.hintsRevealed++;
      
      // Update hints display
      const hintsContainer = document.getElementById('memoryverse-hints');
      if (hintsContainer) {
        hintsContainer.innerHTML = `
          <p class="memoryverse-game__hints-title">Hints (${memoryVerseState.hintsRevealed}/${memoryVerse.hints.length} revealed)</p>
          <div class="memoryverse-game__hints-list">
            ${memoryVerse.hints.map((hint, i) => `
              <span class="memoryverse-game__hint ${i < memoryVerseState.hintsRevealed ? 'memoryverse-game__hint--revealed' : ''}">${i < memoryVerseState.hintsRevealed ? hint : '• • •'}</span>
            `).join('')}
          </div>
        `;
      }
    }
  }

  function showMemoryVerse() {
    const memoryVerse = gameData.memoryVerseChallenge;
    const input = document.getElementById('memoryverse-input');
    if (input) {
      input.value = memoryVerse.verse;
    }
  }

  // ============================================
  // Utility Functions
  // ============================================

  function triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  function showGameComplete(title, message) {
    gameContainer.innerHTML = `
      <div class="game-complete">
        <div class="game-complete__icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 class="game-complete__title">${title}</h2>
        <p class="game-complete__message">${message}</p>
        <div class="game-complete__actions">
          <button class="btn btn--primary" id="game-play-again">Play Again</button>
          <button class="btn btn--outline" id="game-try-another">Try Another Game</button>
        </div>
      </div>
    `;

    document.getElementById('game-play-again')?.addEventListener('click', () => loadGame(currentGame));
    document.getElementById('game-try-another')?.addEventListener('click', () => {
      const games = ['quiz', 'crossword', 'wordsearch', 'fillblanks', 'memoryverse'];
      const currentIndex = games.indexOf(currentGame);
      const nextGame = games[(currentIndex + 1) % games.length];
      selectGame(nextGame);
    });
  }

  // ============================================
  // Embedded Game Data (for demo purposes)
  // ============================================

  function getEmbeddedGameData() {
    return {
      sermonId: "2026-02-02-hope-series",
      sermonTitle: "Finding Hope in Uncertain Times",
      sermonDate: "2 February 2026",
      sermonSpeaker: "Pastor Will Hanekom",
      sermonSeries: "Living with Hope",
      memoryVerse: {
        text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        reference: "Romans 15:13"
      },
      quiz: {
        questions: [
          {
            question: "According to Romans 15:13, what does the God of hope fill us with?",
            options: ["Wisdom and understanding", "Joy and peace", "Strength and courage", "Faith and love"],
            correct: 1,
            explanation: "Romans 15:13 says God fills us with 'all joy and peace as you trust in him.'"
          },
          {
            question: "What is the source of our hope according to this passage?",
            options: ["Our own efforts", "Other people", "The Holy Spirit", "Good circumstances"],
            correct: 2,
            explanation: "The verse says we 'overflow with hope by the power of the Holy Spirit.'"
          },
          {
            question: "What must we do to receive joy and peace from God?",
            options: ["Work harder", "Trust in Him", "Pray more", "Read the Bible daily"],
            correct: 1,
            explanation: "The verse says 'as you trust in him' - trust is the key to receiving God's joy and peace."
          },
          {
            question: "What does it mean to 'overflow' with hope?",
            options: ["To have just enough hope", "To have hope that spills over to others", "To hope occasionally", "To keep hope to yourself"],
            correct: 1,
            explanation: "Overflowing hope means having so much that it naturally spills over and impacts those around us."
          },
          {
            question: "Why is hope important during uncertain times?",
            options: ["It makes us feel better temporarily", "It anchors us to God's faithfulness", "It helps us ignore problems", "It's not really important"],
            correct: 1,
            explanation: "Hope anchors us to God's unchanging character and promises, even when circumstances are difficult."
          },
          {
            question: "According to the sermon, hope is NOT:",
            options: ["A confident expectation", "Rooted in God's faithfulness", "Wishful thinking", "A gift from God"],
            correct: 2,
            explanation: "Biblical hope is not wishful thinking - it's a confident expectation based on God's character and promises."
          },
          {
            question: "What role does the Holy Spirit play in our hope?",
            options: ["No role at all", "He gives us the power to hope", "He takes away our hope", "He only helps pastors"],
            correct: 1,
            explanation: "The Holy Spirit empowers us to overflow with hope - it's His power working in us."
          },
          {
            question: "How can we cultivate hope in our daily lives?",
            options: ["Ignore difficult circumstances", "Trust God and focus on His promises", "Pretend everything is fine", "Avoid other people"],
            correct: 1,
            explanation: "We cultivate hope by actively trusting God and keeping our focus on His faithful promises."
          }
        ]
      },
      crossword: {
        size: 10,
        grid: [
          ["H", "O", "P", "E", "#", "J", "O", "Y", "#", "#"],
          ["O", "#", "E", "#", "#", "#", "#", "#", "#", "#"],
          ["L", "#", "A", "#", "T", "R", "U", "S", "T", "#"],
          ["Y", "#", "C", "#", "#", "#", "#", "#", "#", "#"],
          ["#", "#", "E", "#", "#", "#", "#", "#", "#", "#"],
          ["S", "P", "I", "R", "I", "T", "#", "#", "#", "#"],
          ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
          ["F", "A", "I", "T", "H", "#", "#", "#", "#", "#"],
          ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
          ["L", "O", "V", "E", "#", "#", "#", "#", "#", "#"]
        ],
        words: [
          {word: "HOPE", row: 0, col: 0, direction: "across", clue: "A confident expectation in God's promises (Romans 15:13)"},
          {word: "JOY", row: 0, col: 5, direction: "across", clue: "One of the things God fills us with"},
          {word: "HOLY", row: 0, col: 0, direction: "down", clue: "The ___ Spirit gives us power"},
          {word: "PEACE", row: 0, col: 2, direction: "down", clue: "Inner calm that comes from trusting God"},
          {word: "TRUST", row: 2, col: 4, direction: "across", clue: "What we must do to receive joy and peace"},
          {word: "SPIRIT", row: 5, col: 0, direction: "across", clue: "The Holy ___ empowers us to overflow with hope"},
          {word: "FAITH", row: 7, col: 0, direction: "across", clue: "Believing in what we cannot see"},
          {word: "LOVE", row: 9, col: 0, direction: "across", clue: "God's greatest attribute (1 John 4:8)"}
        ]
      },
      wordSearch: {
        size: 12,
        grid: [
          ["H", "O", "P", "E", "F", "U", "L", "T", "R", "U", "S", "T"],
          ["P", "E", "A", "C", "E", "J", "O", "Y", "F", "U", "L", "A"],
          ["S", "P", "I", "R", "I", "T", "H", "O", "L", "Y", "G", "B"],
          ["F", "A", "I", "T", "H", "F", "U", "L", "N", "E", "S", "S"],
          ["O", "V", "E", "R", "F", "L", "O", "W", "I", "N", "G", "R"],
          ["G", "R", "A", "C", "E", "M", "E", "R", "C", "Y", "O", "O"],
          ["P", "R", "O", "M", "I", "S", "E", "S", "L", "O", "V", "E"],
          ["B", "L", "E", "S", "S", "I", "N", "G", "S", "J", "E", "M"],
          ["C", "O", "M", "F", "O", "R", "T", "E", "R", "H", "R", "A"],
          ["S", "T", "R", "E", "N", "G", "T", "H", "O", "P", "E", "N"],
          ["R", "E", "J", "O", "I", "C", "E", "A", "L", "W", "A", "S"],
          ["G", "O", "D", "S", "L", "O", "V", "E", "F", "O", "R", "U"]
        ],
        words: [
          {word: "HOPE", startRow: 0, startCol: 0, direction: "right"},
          {word: "TRUST", startRow: 0, startCol: 7, direction: "right"},
          {word: "PEACE", startRow: 1, startCol: 0, direction: "right"},
          {word: "JOY", startRow: 1, startCol: 5, direction: "right"},
          {word: "SPIRIT", startRow: 2, startCol: 0, direction: "right"},
          {word: "HOLY", startRow: 2, startCol: 6, direction: "right"},
          {word: "FAITH", startRow: 3, startCol: 0, direction: "right"},
          {word: "GRACE", startRow: 5, startCol: 0, direction: "right"},
          {word: "MERCY", startRow: 5, startCol: 5, direction: "right"},
          {word: "PROMISES", startRow: 6, startCol: 0, direction: "right"},
          {word: "LOVE", startRow: 6, startCol: 8, direction: "right"},
          {word: "BLESSINGS", startRow: 7, startCol: 0, direction: "right"},
          {word: "STRENGTH", startRow: 9, startCol: 0, direction: "right"},
          {word: "REJOICE", startRow: 10, startCol: 0, direction: "right"}
        ]
      },
      fillBlanks: {
        verses: [
          {
            reference: "Romans 15:13",
            text: "May the God of _____ fill you with all _____ and _____ as you _____ in him, so that you may _____ with hope by the power of the Holy _____.",
            blanks: ["hope", "joy", "peace", "trust", "overflow", "Spirit"]
          },
          {
            reference: "Hebrews 11:1",
            text: "Now _____ is confidence in what we _____ for and assurance about what we do not _____.",
            blanks: ["faith", "hope", "see"]
          },
          {
            reference: "Jeremiah 29:11",
            text: "For I know the _____ I have for you, declares the Lord, plans to _____ you and not to _____ you, plans to give you _____ and a _____.",
            blanks: ["plans", "prosper", "harm", "hope", "future"]
          }
        ]
      },
      memoryVerseChallenge: {
        verse: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        reference: "Romans 15:13",
        hints: [
          "May the God of hope...",
          "...fill you with all joy and peace...",
          "...as you trust in him...",
          "...so that you may overflow with hope...",
          "...by the power of the Holy Spirit."
        ]
      }
    };
  }

  // ============================================
  // Initialize on DOM Ready
  // ============================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
