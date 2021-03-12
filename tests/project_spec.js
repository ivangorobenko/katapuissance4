const expect = require('chai').expect;
const Project = require('../app/project.js');

describe('Puissance 4', () => {

    const project = new Project()

    context('L\état de la cellule', () => {
        it('la première ligne de la première colonne doit être vide si aucun joueur n\'a joué dans cette cellule', () => {
            expect(project.getStateOfTheCell(1, 1)).to.equal("-")
        })
        it('la première ligne de la première colonne doit avoir "X" si un joueur a mis un jeton X dans cette cellule', () => {
            expect(project.getStateOfTheCell(1, 1)).to.equal("X")
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
