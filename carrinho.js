

let carrinho = JSON.parse(localStorage.getItem("teste")) || [];


let mostrar = document.getElementById("carrinho");

function mostrarElemento(){

carrinho.forEach(item => {
    
   let img = document.createElement("img");
   let nome = document.createElement("h1");
   let preco = document.createElement("h2");
   let botao = document.createElement("button")

   let div = document.createElement("div")
   
   div.classList.add("teste");

   botao.innerText = "Remover"
   
   botao.classList.add("remover_item")

   img.src = item.imagem;

   nome.textContent = item.nome

   preco.textContent = item.preco

    div.append(img);
    div.append(nome);
    div.append(preco);
    div.append(botao);

    mostrar.appendChild(div)

});
}



function removerElemento(){

let carrinho = document.getElementById("carrinho")


carrinho.addEventListener("click",function(evento){

let botao = evento.target.closest(".remover_item")

if(!botao) return;

const conteudo = evento.target.closest(".teste")


conteudo.remove()



})

}

mostrarElemento();
removerElemento();