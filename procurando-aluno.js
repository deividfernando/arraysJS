const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const alunosEMedias = [alunos, medias];

ExibeNomeENota('João');

function ExibeNomeENota(aluno) {
    if (alunosEMedias[0].includes(aluno)) {

        // const alunos = alunosEMedias[0];
        // const medias = alunosEMedias[1];

        const [alunos, medias] = alunosEMedias;

        let indice = alunos.indexOf(aluno);
        let media = medias[indice] 
        //console.log(indice);
        
        console.log(`Aluno ${aluno} está cadastrado e sua média é ${media}`);
    } else {
        console.log(`Aluno não encotrado`);
    }
}