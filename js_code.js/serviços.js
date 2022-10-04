const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>Armazem</p> <br> <p>Armazenamos sua mecadoria em um espaço seguro, garantindo o melhor cuidado com o seu produto.</p> <br>',
                    '<p>Logistica</p> <br> <p> Somos operador logístico, realizamos o processo de cabotagem e cross-docking, com uma distribuição na qual a mercadoria é recebida no armazém com segurança e realocada. . </p> <br>',
                    '<p>Importação e Exportação</p> <br> <p> Fazemos a remessa de qualquer destinatário ou remetente, a partir da sua chegada nos recintos aduaneiros.</p> <br>'

]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index; 
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = ' Passe por cima de alguma imagem para ler a descrição ';
    } )
} );

