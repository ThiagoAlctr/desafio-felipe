//Nome e quantidade de experiência do herói.
let nomeHeroi = 'Sirius Black';
let expHeroi = 7794;

//Variável para ranking do herói.
let rankingHeroi;

//Laço de repetição usado para definir qual nível do herói de acordo com sua experiência.
if (expHeroi <= 1000) {
    rankingHeroi = 'Ferro'
} else if (expHeroi <= 2000) {
    rankingHeroi = 'Bronze'
} else if (expHeroi <= 5000) {
    rankingHeroi = 'Prata'
} else if (expHeroi <= 7000) {
    rankingHeroi = 'Ouro'
} else if (expHeroi <= 8000) {
    rankingHeroi = 'Platina'
} else if (expHeroi <= 9000) {
    rankingHeroi = 'Ascendente'
} else if (expHeroi <= 10000) {
    rankingHeroi = 'Imortal'
} else {
    rankingHeroi = 'Radiante'
}

//Mensagem final a exibir nome do herói e seu respectivo ranking.
console.log('O Herói de nome: ' + nomeHeroi + ' está no nível de: ' + rankingHeroi);