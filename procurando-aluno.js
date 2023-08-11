const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const alunosEMedias = [alunos, medias];

ExibeNomeENota('João');

function ExibeNomeENota(aluno) {
    if (alunosEMedias[0].includes(aluno)) {
        
        const indice = alunosEMedias[0].indexOf(aluno);
        //console.log(indice);
        const media = alunosEMedias[1][indice];
        console.log(`Aluno ${aluno} está cadastrado e sua média é ${media}`);
    } else {
        console.log(`Aluno não encotrado`);
    }
}