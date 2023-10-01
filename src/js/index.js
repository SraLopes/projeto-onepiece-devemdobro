// OBJETIVO 1 - Quando clicar no botão do personagem na lista marcar o botao como seleciodado
//passo 1 - pegar os botoes no JS pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll('.botao');

//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
//passo 1 - pegar os personagens no JS para mostrar o conteudo deles

const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => {

    botao.addEventListener('click', () => {

        // passo3 - verificar se já existe um botao selecionado se sim, devemos remover a seleção dele
        desselecionarBotao(); 
        desselecionarPersonagem();

        // passo 2 - dicionar a classe "selecionado" no botao que o usu clicou
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    })
});







function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

