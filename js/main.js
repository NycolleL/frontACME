// import { getFilmes, getFilme } from "./filmes.js";

// function criarCard (filme) {
//     const card = document.createElement('div')
//     const titulo = document.createElement('h2')
//     titulo.textContent = filme.nome 

//     const valor = document.createElement("button")
//     valor.textContent = filme.valor_unitario
        
//         card.append(titulo, valor)

//         return card
//     }

//     async function preencherContainer () {

//         const container = document.querySelector('body')
//         const fimes = await getFilmes ()

//         const filmes = [
//         {
//             nome: "Nycolle L."
//         },
           
//         {
//             nome: "ok"
//         }
//     ]

//         filmes.forEach (filme => {
//             const card = criarCard (filme)
//             container.appendChild (card)
//         })
//     }

//     preencherContainer()