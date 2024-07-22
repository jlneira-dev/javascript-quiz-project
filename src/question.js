class Question {
    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty
    }
    shuffleChoices() {
        this.choices.sort(function(a, b) {
            return 0.5 - Math.random()
        })
    }
}