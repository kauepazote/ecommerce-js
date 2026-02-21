const url = 'https://dummyjson.com/products'



 async function consumir(){
    const resposta = await fetch(url)
  
    const resp = await resposta.json();

    console.log(resp)
 

  const card_produtos = document.getElementById("produtos");


  

     resp.products.forEach(function(produtos){

    const div = document.createElement("div")

    div.classList.add("produtos_card")
    
    const img = document.createElement("img")
    
    const titulo = document.createElement("h1");

    const descricao = document.createElement("p")

    const preco = document.createElement("h2")

    const comprar = document.createElement("button");

   const carinho = document.createElement("button");

   const favoritar = document.createElement("img")

  
  titulo.classList.add("titulo");
  preco.classList.add("preco");


   comprar.classList.add("comprar")
   carinho.classList.add("adicionar")

   comprar.innerText = "Comprar"
   carinho.innerText = "Adicionar ao Carrinho"

   
    img.src = produtos.thumbnail;
    img.alt = produtos.title;
    img.classList.add("imagem_produto")

  
  favoritar.classList.add("favoritar")
  favoritar.src = "img/coracao.png"

  function favorito(){

    let favoritado = false;

  favoritar.addEventListener("click",function(){

    if(favoritado == false){

      favoritar.src= "img/coracao_vermelho.png"

      favoritado = true;
    }

    else{

      favoritar.src = "img/coracao.png";

      favoritado = false;

    }
  })

  }
  favorito();

  titulo.append(produtos.title)

  descricao.append(produtos.description)

  preco.append(produtos.price);
    

  div.append(favoritar)
  div.append(img)
  div.append(titulo)
  div.append(descricao)
  div.append(preco)
  div.append(comprar)
  div.append(carinho)

    
  card_produtos.appendChild(div)

    
    })

 }

function carrinho(){

  let escolha_carrinho = document.getElementById("produtos")

  escolha_carrinho.addEventListener("click",function(evento){
    
  const botao = evento.target.closest(".adicionar");

  if(!botao) return; // impede de acontecer de continuar a função;


  const infoTotal = botao.parentElement;

  const carrinho_usuario = JSON.parse(localStorage.getItem("teste")) || [];

  const infoImagem = infoTotal.getElementsByClassName("imagem_produto")[0].src;

  const infoNome = infoTotal.getElementsByClassName("titulo")[0].innerText;

  const infoPreco = infoTotal.getElementsByClassName("preco")[0].innerText

  console.log(infoImagem)
  console.log(infoNome)
  console.log(infoPreco)

const informacoes = {

  imagem: infoImagem,
  nome: infoNome,
  preco:infoPreco

}

carrinho_usuario.push(informacoes);

  localStorage.setItem("teste",JSON.stringify(carrinho_usuario))

 

  })


}

let entrar_carrinho = document.getElementById("carrinho");


entrar_carrinho.addEventListener("click",function(){

  window.location.href = "carrinho.html"

})

consumir();
carrinho();
