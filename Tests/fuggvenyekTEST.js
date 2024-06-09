import { exportedForTesting } from "./../fuggvenyek.js"

/*let fuggvenyek =[
    [0,  "nev.letrehoz"],
    [1,  "nev.jatekListaFeltolt"],
    [2,  "nev.jatekMenet"],
    [3,  "nev.nyertAllapot"],
    [4,  "nev.lepesekAllapot"],
    [5,  "nev.jatekKezdese"],
    [6,  "nev.gombKicserel"],
    [7,  "nev.palya_valasztas"],
    [8,  "nev.ellenoriz"],
    [9,  "nev.vizszintes_ell"],
    [10, "nev.fuggoleges_ell"],
    [11, "nev.atlo_ell"]
]*/
//var obj = new objectcreate();
//obj[fuggvenyek[0][1]]();

let gtesztesetek = [
    [[1,2,3], [1,2,3]]
]

for(let elem = 0; elem < exportedForTesting.length; elem++){
    let fuggveny = exportedForTesting[elem][1];
    let tesztesetek = [[/*Paraméterek*/], /** Várt eredmény */];
    QUnit.module(fuggveny.name + "függvény", function() {
        QUnit.test(`Létezik?`, function(assert) {
            assert.ok(fuggveny);
        });
    
        QUnit.test(`Függvény?`, function(assert) {
            assert.ok(typeof fuggveny === "function");
        });

        if(false/* Paraméterek */){
            for(let i = 0; i < tesztesetek.length; i++){
                let visszateres = fuggveny.apply(this, tesztesetek[i][0])
                if(!Array.isArray(visszateres)){
                    QUnit.test(`The number is ${tesztesetek[i][0]}.`, function(assert) {
                        assert.equal(visszateres, tesztesetek[i][1]);
                    });
                }
                else{
                    QUnit.test(`The number is ${tesztesetek[i][0]}.`, function(assert) {
                        assert.equal(tesztesetek[i][1][0].apply(this, /** Paraméterek */), /** Várt eredmény */);
                    });
                }

            }
        }
    });
}

function osszehasonlit(tomb1, tomb2){

}

function bennevan(tomb1, tomb2){

}
function ebbenasorrendben(tomb1, tomb2){

}

function tomb(){
    return [1,2,3];
}
//console.log(typeof nev.jatekKezdese)

QUnit.module("Egyéb", function() {
    QUnit.test(`t`, function(assert) {
        assert.equal(tomb(), [1,2,3]);
    });
});
//console.log(Array.isArray(tomb()))