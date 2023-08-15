const nomes = ['Evaldo', 'Mari', 'Camis'];

nomes.forEach(function (nome) {
    console.log(nome);
});

nomes.forEach(nome => {
    console.log(nome);
});

nomes.forEach(ImprimeNome);

function ImprimeNome (nome) {
    console.log(nome);
}