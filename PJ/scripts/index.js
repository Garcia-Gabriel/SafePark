const hamburguer = document.querySelector('.hamburger') //Variável botão hamburger
const mobile_menu = document.querySelector('.mobile-nav')

// função que faz a lista de classe css normal do botão hamburguer para a classe "is-active"

hamburguer.addEventListener('click', function () { 
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active'); //Função que faz o botão hamburguer abrir e fechar o menu mobile
});

/*Função que coloca uma sombra no menu mobile ao scrollar*/

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 80){
        header.classList.add('scroll-header')
    }
    else{
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

/*Função que faz o as perguntas expandirem*/

const accordionItems = document.querySelectorAll('.questions-item') /*Estruturas que contém as perguntas| Accordion = Acordeão por causa do movimento de "expandir" e "armazenar"*/

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions-header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions-content')

    /*Se a classe de cada item conter 'accordion-open' no nome, remove os atributos do tipo 'style'*/
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*FUNÇÃO DO BOTÃO DE SCROLL-UP*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    /*Quando o scroll é maior que 200vh, aciciona a classe "show-scroll" na tag que tem a classe "scroll-top" */

    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

/*Quando houver scroll na página, execute a função scrollUp*/
window.addEventListener('scroll', scrollUp)

/*FUNÇÃO QUE FAZ O TEMA DA PÁGINA MUDAR (DARK MODE | LIGHT MODE)*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-uil-sun'

// Recebemos o tema que o usuário escolheu (caso ele tenha escolhido)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Obtemos o tema atual da interface está usando validando a classe "dark-theme" 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'uil-uil-sun'

// Validamos se um tema foi escolhido anteriormente
if (selectedTheme) {
  // Se a validação foi preenchida, perguntamos se o tema dark foi ativado ou não, assim, removendo ou não
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Ativamos ou desativamos o tema quando o botão(ícone) de dark mode é apertado
themeButton.addEventListener('click', () => {
    // Adiciona ou remove o tema dark
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvamos o tema que o usuário escolheu 
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// FUNÇÃO DE SCROLL SUAVE DOS BOTÕES DO MENU

const menuItems = document.querySelectorAll('nav a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId);
})

function scrollToId(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

// FUNÇÃO DE ANIMAÇÃO DOS ELEMENTOS

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-container`)
sr.reveal(`.home-img`, {delay: 500})
sr.reveal(`.home-social`, {delay: 600})
sr.reveal(`.about-img, .contact-box`, {origin: 'left'})
sr.reveal(`.about-data, .contact-form`, {origin: 'right'})
sr.reveal(`.steps-card, .footer`, {interval: 100})
sr.reveal(`.questions-group`, {origin: 'right'})
