"use strict";
//selecionando o botao
const btnEnvio = document.querySelector("#btn-enviar");
//selecionado o campo de entrada
const inputCEP = document.querySelector("#btn-cep");

//adicionando o evento ao botao
btnEnvio.addEventListener("click", async (e) =>{
    e.preventDefault();
    //pegando o valor do input
    const inputValue = inputCEP.value;
    if(inputValue != ""){
        
        //configurando a URL
        let uRL = `https://api.postmon.com.br/v1/cep/${inputValue}`;

        //enviando a requisição para o servidor
        let resultado = await fetch(uRL, {mode: "cors"});
        //filtrando o resultado em um json mais limpo
        let json = await resultado.json();
        
        //verificando se houve o response do servidor
        //alert("O Cep informado não existe!");
        console.log(json);
        if(json.cep != "" || json.cep != undefined){
            showInfor({
                bairo: json.bairro,
                cidade: json.cidade,
                cep: json.cep,
                estado: json.estado
            });
        }else {
            alert("O Cep informado não existe!");
        }
    }
})

/*Implementado a funcão que mostra o resultado */

function showInfor(json){
    document.querySelector("#itens-container #bairo").innerHTML = `${json.bairo}`;
    document.querySelector("#itens-container #cidade").innerHTML = `${json.cidade}`;
    document.querySelector("#itens-container #estado").innerHTML = `${json.estado}`;
    document.querySelector("#itens-container #cep").innerHTML = `${json.cep}`;

    document.querySelector(".hiden").classList.remove("hiden");
}



