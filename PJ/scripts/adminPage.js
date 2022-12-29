



// FUNÇÃO DE DARK MODE
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