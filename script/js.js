//nome da nave
//velocidade iniciada em 0
//exibir menu para as seguintes opções:
//1. Acelerar a nave:
//2. Desacelerar a nave em 5km/s
//por mais que desacelere, a nave nao deve ter menos de 0km/s
//3. Imprimir dados de bordo.
//4. Sair do programa.
//1a. Criar uma função para cada ação de acelerar, desacelerar, e imprimir dados de bordo.
//2a. Função e modal para encerrar o programa de bordo.
let velocity = 0

const allButtons = document.querySelectorAll('button')
    .forEach(btn => {
    btn.addEventListener('mouseover', mouseOverSound)
})

const accelerateBtn = document.querySelector('#accelerate')
    .addEventListener('click', accelerate)
const decelerateBtn = document.querySelector('#decelerate')
    .addEventListener('click', decelerate)
const printOnboard = document.querySelector('#onboardData')
    .addEventListener('click', showDataOnboard)
const backSimulatorBtn = document.querySelector('#backSimulator')
    .addEventListener('click', showMenu)
const exitButton = document.querySelector('#exit')
    .addEventListener('click', exitSimulator)




function showMenu(){
    mouseClickSound()
    const modalOnboard = document.querySelector('.modal-onBoard')
    modalOnboard.style.display = 'none'

    const modal = document.querySelector('.modal-menu')
    modal.style.display = 'flex'
}

function closeMenu() {
    const menu = document.querySelector('.modal-menu')
    menu.style.display = 'none'
}

function accelerate() {
    mouseClickSound()
    velocity += 5
    console.log(velocity)
}
function decelerate() {
    mouseClickSound()
    velocity -= 5

    if (velocity < 0) {
        velocity = 0
    }
    console.log(velocity)
}
function showDataOnboard(){
    mouseClickSound()
    const currentVelocity = document.querySelector('#currentVelocity').innerText = `${velocity}km/s`
    const modalMenu = document.querySelector('.modal-menu')
    modalMenu.style.display = 'none'
    const onboard = document.querySelector('.modal-onBoard')
    onboard.style.display = 'flex'
    
}
function exitSimulator(){
    const audio = document.querySelector('#audio3')
    audio.currentTime = 0
    audio.play()
    soundPeople()

    const modalMenu = document.querySelector('.modal-menu')
    modalMenu.style.display = 'none'
    const exitMenu = document.querySelector('.exitProgram')
    exitMenu.style.display = 'flex'
}
function mouseOverSound() {
    const audio = document.querySelector('#audio2')
    audio.currentTime = 0.1
    audio.play()
}
function mouseClickSound(){
    const audio = document.querySelector('#audio')
    audio.currentTime = 0
    audio.play()
}
function soundPeople(){
    const audio = document.querySelector('#audio4')
    audio.play()
}