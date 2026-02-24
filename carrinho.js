let carrinho = JSON.parse(localStorage.getItem("Produtos")) || [];


let mostrar = document.getElementById("carrinho");

function mostrarElemento(){

carrinho.forEach(item => {
    
   let img = document.createElement("img");
   let nome = document.createElement("h1");
   let preco = document.createElement("h2");
   let botao = document.createElement("button")
   let quantidade = document.createElement("input")
   let div = document.createElement("div")
   
   div.classList.add("produtos");

   preco.classList.add("preco")

   div.dataset.id = item.id;
   
   quantidade.classList.add("quantidade")
   quantidade.value = 1;
   quantidade.min = 1;
   quantidade.type = "number"

   botao.innerText = "Remover"
   
   botao.classList.add("remover_item")

   img.src = item.imagem;

   nome.textContent = item.nome

   preco.textContent = item.preco

    div.append(img);
    div.append(nome);
    div.append(preco);
    div.append(quantidade)
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

carrinho = carrinho.filter(item => item.id != id);

localStorage.setItem("Produtos", JSON.stringify(carrinho));

conteudo.remove();
calcularTotal();

})

}
 function calcularTotal(){
  
let total = 0;


carrinho.forEach(function(item){

    total+= Number(item.preco)

});



let mostrar = document.getElementById("preco_produto");


mostrar.innerHTML = total.toFixed(2)


let preco_final = document.getElementById("total")


let final = total + 8;

preco_final.innerText = final.toFixed(2)

 }




mostrarElemento();
removerElemento();
calcularTotal();