let inputTexto = document.getElementById('textinput');

function contar(){
    inputTexto = document.getElementById('textinput').value;


    let valorConta = inputTexto.length;
    
    let spanContador = document.getElementById('spancontador');

    spanContador.innerText = valorConta;

}

inputTexto.addEventListener("keydown", contar)

