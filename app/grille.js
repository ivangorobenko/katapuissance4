class Grille {

    constructor() {
        this.state = [
            ["-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-"],
        ]
    }

    getStateOfTheCell(lineNm, columnNm) {
        return this.state[columnNm - 1][lineNm - 1];
    }

    addToken(token, columnNm) {
        const column = this.state[columnNm - 1];
        const indexOfTheNextFreeCellInTheColumn = column.findIndex(cell => cell === "-");
        column[indexOfTheNextFreeCellInTheColumn] = token;
    }

}

module.exports = Grille
