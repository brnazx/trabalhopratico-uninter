function mostrarMensagem() {
    
    const mensagem = document.getElementById('mensagem');
    mensagem.classList.remove('oculto')

    const botao = document.querySelector('.botao');
    botao.disabled = true;
}