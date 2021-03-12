class Grille {

    constructor() {
        this.state = "-"
    }

    getStateOfTheCell(lineNm,columnNm) {
        return this.state;
    }

    addToken(token, columnNm){
        this.state = "X";
    }

}

module.exports = Grille
