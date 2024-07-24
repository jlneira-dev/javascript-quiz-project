class Quiz {
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++
    }

    shuffleQuestions() {
        this.questions.sort(function(a, b) {
            return 0.5 - Math.random()
        })
    }

    checkAnswer(answer) {
<<<<<<< HEAD
        if (this.getQuestion().answer === answer) {
            this.correctAnswers++
        }
    }
=======
      if (this.getQuestion().answer === answer) {
          this.correctAnswers++
      }
  }
>>>>>>> 88c52ab318563afdd49511c208eba30a0f0dee28

    hasEnded() {
        if (this.currentQuestionIndex<this.questions.length) {
            return false
        } else {
            return true
        }
    }

    filterQuestionsByDifficulty(difficulty) {
<<<<<<< HEAD
        if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
            return false;
        }
        this.questions = this.questions.filter(question => question.difficulty === difficulty);
    }
  
    averageDifficulty() {
        const calAvg = this.questions.reduce((sum, currentValue) => sum + currentValue.difficulty, 0) / this.questions.length;
        return calAvg;
=======
      if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
        return false;
    }
    this.questions = this.questions.filter(question => question.difficulty === difficulty);

    }

    averageDifficulty() {
      const calAvg = this.questions.reduce((sum, currentValue) => sum + currentValue.difficulty, 0) / this.questions.length;
      return calAvg;
>>>>>>> 88c52ab318563afdd49511c208eba30a0f0dee28
    }
}
