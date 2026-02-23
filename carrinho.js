let carrinho = JSON.parse(localStorage.getItem("Produtos")) || [];


let mostrar = document.getElementById("carrinho");

function mostrarElemento(){

carrinho.forEach(item => {
    
   let img = document.createElement("img");
   let nome = document.createElement("h1");
   let preco = document.createElement("h2");
   let botao = document.createElement("button")

   let div = document.createElement("div")
   
   div.classList.add("produtos");

   div.dataset.id = item.id;

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

let produtos = document.getElementById("carrinho")


produtos.addEventListener("click",function(evento){

let botao = evento.target.closest(".remover_item")

if(!botao) return;

const conteudo = evento.target.closest(".produtos")


let id = conteudo.dataset.id;

carrinho = carrinho.filter(item => item.id !== id);

localStorage.setItem("Produtos", JSON.stringify(carrinho));

conteudo.remove();

})

}

 function ValorCarrinho(){
  

 carrinho.forEach(function(item){

 let subtotal = document.createElement("h1")

 subtotal.innerText = item.preco

 console.log(subtotal)
 })

 }




mostrarElemento();
removerElemento();
ValorCarrinho();