// Variáveis
const btn = document.querySelector('[data-js="btn"]')
const nav = document.querySelector('.nav')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const ativo = 'ativo'

// Função que ativa o menu tablet, acima de 600px
const handleClick = () => {
  const media = matchMedia('(min-width: 650px)').matches

  if (!media) {
    nav.classList.add('active-mobile')
    main.classList.add('active-mobile')
  }

  if (media) {
    nav.classList.toggle(ativo)
    header.classList.toggle(ativo)
    main.classList.toggle(ativo)
  }
}

// Função para remover classe ativo com resize abaixo de 650px
const handleResize = () => {
  const media = matchMedia('(min-width: 650px)').matches

  if (!media) {
    nav.classList.remove(ativo)
    header.classList.remove(ativo)
    main.classList.remove(ativo)
  }
}

// Eventos
btn.addEventListener('click', handleClick)
window.addEventListener('resize', handleResize)

// Parte do Mobile
const btn2 = document.querySelector('.btn2')

const activeMobile = () => {
  nav.classList.remove('active-mobile')
  main.classList.remove('active-mobile')
}

// Evento btn2
btn2.addEventListener('click', activeMobile)
