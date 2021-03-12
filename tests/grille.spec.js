const expect = require('chai').expect;
const Grille = require('../app/grille.js');

describe('Puissance 4', () => {

    context('L\'état de la cellule', () => {
        let grille
        beforeEach(() => {
            grille = new Grille()
        })
        it('la première ligne de la première colonne doit être vide si aucun joueur n\'a joué dans cette cellule', () => {
            expect(grille.getStateOfTheCell(1, 1)).to.equal("-")
        })
        it('la première ligne de la première colonne doit avoir "X" si un joueur a mis un jeton X dans cette cellule', () => {
            grille.addToken("X", 1);
            expect(grille.getStateOfTheCell(1, 1)).to.equal("X")
        })
        it('la première ligne de la première colonne doit avoir "O" si un joueur a mis un jeton O dans cette cellule', () => {
            grille.addToken("O", 1);
            expect(grille.getStateOfTheCell(1, 1)).to.equal("O")
        })
        it('la première ligne de la première colonne doit avoir "X" et la deuxième ligne de la première doit avoir "O" si on ajoute les jetons "X" et "O" dans la première colonne', () => {
            grille.addToken("X", 1);
            grille.addToken("O", 1);
            expect(grille.getStateOfTheCell(1, 1)).to.equal("X")
            expect(grille.getStateOfTheCell(2, 1)).to.equal("O")
        })
        it('la première ligne de la première colonne doit avoir "X" et la première ligne de la deuxième colonne doit avoir "O" si on ajoute les jetons "X" et "O" dans la première et la deuxième colonnes', () => {
            grille.addToken("X", 1);
            grille.addToken("O", 2);
            expect(grille.getStateOfTheCell(1, 1)).to.equal("X")
            expect(grille.getStateOfTheCell(1, 2)).to.equal("O")
        })
        it.skip('ne doit pas laisser ajouter un jeton dans une colonne pleine', () => {
            grille.addToken("O", 1);
            grille.addToken("O", 1);
            grille.addToken("O", 1);
            grille.addToken("O", 1);
            grille.addToken("O", 1);
            grille.addToken("O", 1);

            expect(grille.addToken("O", 1)).to.throw('La colonne est pleine');
        })
    })
})

// J1 "X", J2 "O", Rien "-"
// Une seul cellule
// Cas 1
// GIVEN Grille vide
// WHEN n'importe quelle cellule
// THEN donne le résultat VIDE
// Cas 2
// GIVEN On ajoute le jeton "X" dans la première colonne de la grille vide
// WHEN je demande l'état de la première case de la première colonne
// THEN donne le résultat "X"
// WHEN je demande l'état de la deuxième case de la première colonne
// THEN donne le résultat "-"
// Cas 3
// GIVEN On ajoute le jeton "X" dans la première colonne de la grille vide
// et On ajoute le jeton "O" dans la deuxième colonne de la grille
// WHEN je demande l'état de la première case de la première colonne
// THEN donne le résultat "X"
// WHEN je demande l'état de la deuxième case de la première colonne
// THEN donne le résultat "O"
//Cas 1 Grille vide => [["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"]]
//Cas 2 Grille [["-","-","-","-","-","X"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"]]
//Cas 3 [["-","-","-","-","-","X"],["-","-","-","-","-","O"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"]]
