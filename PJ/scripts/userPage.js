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

const closeModalButton = document.querySelector(".parking-lot-details-close-button")

closeModalButton.addEventListener('click', closeDetailsModal)

// FUNÇÃO QUE FAZ O BOTÃO DE "VER MAIS" ABRIR O MODAL DE ESTACIONAMENTOS POR PERTO

const modalContainer = document.querySelector(".modal-container")
const detailsModal = document.querySelector(".parking-lot-details-modal")

// Como um "queryselectorAll" trabalha com um vetor de elementos, é necessário utilizar um laço de repetição para cada elemento, assim, passando aplicando a função para cada elemento contendo a classe "show-modal-button"
for (let showModalButtons of document.querySelectorAll('.show-modal-button')){
  // Quando algum botão da classe show-modal-button for clicado, ele executa a função openDetailsModal(função que abre o modal)
  showModalButtons.addEventListener('click', openDetailsModal )

// Função que abre o modal
  function openDetailsModal(){
    // Quando a função for executada, ele vai adicionar a classe "modal-container-show" no elemento de classe modalContainer, assim, recebendo as propriedades CSS da classe "modal-container-show" que é a que torna o container visível
    modalContainer.classList.add("modal-container-show")
    detailsModal.classList.add('parking-lot-details-modal')
    detailsModal.classList.remove('parking-lot-details-modal-closed')
  }
}

modalContainer.addEventListener('click', (event) => {
  // Aqui é uma condição de se o click do usuário for em algum conteúdo do modal ou no próprio modal, ele não faz nada, agora, se for em algo fora do modal, ele executa a função "closeDetailsModal"
  if(
    detailsModal.contains(event.target) ||
    reservationInfoModal.contains(event.target) ||
    paymentModal.contains(event.target) ||
    reviewModal.contains(event.target)
    ) return;
    detailsModal.classList.remove('parking-lot-details-modal')
    paymentModal.classList.remove('payment-modal')
    reviewModal.classList.remove('reservation-review-modal')
    reviewModal.classList.remove('reservation-review-modal')
    detailsModal.classList.add('parking-lot-details-modal-closed')
    paymentModal.classList.add('payment-modal-closed')
    reviewModal.classList.add('reservation-review-modal-closed')
    
    closeDetailsModal();
})

// Função que remove a classe "moda-container-show" do elemento de classe "modal-container", assim, fazendo com que o elemento perca as propriedades CSS de classe modal-container-show que o fazem ser visível/mostrado na tela
function closeDetailsModal(){
  modalContainer.classList.remove("modal-container-show")
}


// FUNÇÃO QUE FECHA O MODAL DO ESTACIONAMENTO E ABRE O MODAL DE DETALHES DA RESERVA

// botão de abrir o modal de detalhes da reserva
const bookingButton = document.querySelector('.booking-button') 

// modal de informações sobre a reserva
const reservationInfoModal = document.querySelector('.reservation-info-modal-closed') 

bookingButton.addEventListener('click', closeParkingLotModal)


function closeParkingLotModal(){
  detailsModal.classList.remove('parking-lot-details-modal')
  detailsModal.classList.add('parking-lot-details-modal-closed')
  reservationInfoModal.classList.remove('reservation-info-modal-closed')
  reservationInfoModal.classList.add('reservation-info-modal')
}

// FUNÇÃO QUE FECHA O MODAL DE DETALHES DA RESERVA E ABRE O MODAL DE PAGAMENTO

//botão do modal do estacionamento
const openPaymentButton = document.querySelector('.open-payment-button')

// modal de forma de pagamento
const paymentModal = document.querySelector('.payment-modal-closed')

openPaymentButton.addEventListener('click', openPaymentModal)

function openPaymentModal(){
  reservationInfoModal.remove()
  paymentModal.classList.remove('payment-modal-closed')
  paymentModal.classList.add('payment-modal')
}

// FUNÇÃO QUE TROCA AS OPÇÕES DE PAGAMENTO

const cardMethodArea = document.querySelector('.card-method-area')
const pixMethodArea = document.querySelector('.pix-area-closed')
const pixPaymentButton =  document.querySelector('.pix-payment-button')
const cardPaymentButton = document.querySelector('.card-payment-button-active')

pixPaymentButton.addEventListener('click', showPixArea)
cardPaymentButton.addEventListener('click', showCardArea)

function showPixArea(){
  cardMethodArea.style.display = 'none'
  cardPaymentButton.classList.remove('card-payment-button-active')
  cardPaymentButton.classList.add('card-payment-button')
  pixPaymentButton.classList.add('pix-payment-button-active')
  pixMethodArea.classList.remove('pix-area-closed')
}

function showCardArea(){
  cardMethodArea.style.display = 'block'
  pixMethodArea.classList.add('pix-area-closed')
  pixPaymentButton.classList.remove('pix-payment-button-active')
  cardPaymentButton.classList.add('card-payment-button-active')
  cardPaymentButton.classList.remove('card-payment-button')
}

// FUNÇÃO QUE FECHA O MODAL DE FORMA DE PAGAMENTO E ABRE O DE REVISÃO DA RESERVA

const confirmPaymentButton = document.querySelector('.confirm-payment-button')
const reviewModal = document.querySelector('.reservation-review-modal-closed')

confirmPaymentButton.addEventListener('click', openReviewModal)

function openReviewModal(){
  paymentModal.classList.remove('payment-modal')
  paymentModal.classList.add('payment-modal-closed')
  reviewModal.classList.remove('reservation-review-modal-closed')
  reviewModal.classList.add('reservation-review-modal')
}

/* FUNÇÃO QUE GUARDA E MOSTRA AS INFORMAÇÕES DA RESERVA NO MODAL DE REVISÃO DA RESERVA*/

// Armazenando os valores dos inputs dos dados da reserva
const reservationCheckInValue = document.querySelector('#reservation-check-in-time')
const reservationCheckOutValue = document.querySelector('#reservation-check-out-time')
const reservationFloorValue = document.querySelector('#floor')
const reservationVacancyValue = document.querySelector('#vacancy')

// Transformando os elementos de texto das informações da reserva em variáveis
const CheckInTimeTextValue = document.querySelector('#check-in-time-text-value')
const CheckOutTimeTextValue = document.querySelector('#check-out-time-text-value')
const floorTextValue = document.querySelector('#floor-text-value')
const vacancyTextValue = document.querySelector('#vacancy-text-value')

openPaymentButton.addEventListener('click', SwitchReservationInfo)


// ESSA PARTE DA FUNÇÃO ESTÁ SENDO ATUALIZADA 04/01/2023
function SwitchReservationInfo(){
  CheckInTimeTextValue.innerText += reservationCheckInValue.value
  CheckOutTimeTextValue.innerText += reservationCheckOutValue.value
  floorTextValue.innerHTML += reservationFloorValue.value
  vacancyTextValue.innerHTML += reservationVacancyValue.value
}


/*FUNÇÃO DO BOTÃO DE SCROLL-UP*/

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  /*Quando o scroll é maior que 200vh, aciciona a classe "show-scroll" na tag que tem a classe "scroll-top" */

  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

/*Quando houver scroll na página, execute a função scrollUp*/
window.addEventListener('scroll', scrollUp)
