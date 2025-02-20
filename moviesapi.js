"use strict"

async function pesquisarFilmes(movies){

    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${movies}`

    const response = await fetch(url)
    const data = await response.json()
    const filmes  = data.description
    const filmesimg = []

    filmes.forEach(function(filmes){
        filmesimg.push(filmes['#IMG_POSTER'])
        console.log(filmes['#IMG_POSTER'])
    })

    console.log(filmesimg)
    return filmesimg
}

function criarImgFilmes(link){
    const galeria = document.getElementById('galeria')
    const novaImgFilmes = document.createElement('img')
    novaImgFilmes.src = link
    galeria.appendChild(novaImgFilmes)
}

async function preencherFotosFilmes(){
    const movie = document.getElementById('movies').value
    //const movie = document.getElementById('movie').value
    const fotosFilmes = await pesquisarFilmes(movie)
    const galeria = document.getElementById('galeria')

    
    galeria.replaceChildren('')
    fotosFilmes.forEach(criarImgFilmes)
}


document.getElementById('pesquisar')
        .addEventListener('click', preencherFotosFilmes)