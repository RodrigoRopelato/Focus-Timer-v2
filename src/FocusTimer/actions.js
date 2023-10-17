import state from "./state.js"
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()

}

export function reset() {
    state.isRunning = false
    state.isRunning = document.documentElement.classList.remove('running')
    
    timer.updateDisplay()
}

export function setPlus() {
    let minutes = Number(el.minutes.textContent)+5
    let seconds = Number(el.seconds.textContent)
    minutes = minutes > 60 ? 60 : minutes
    timer.updateDisplay(minutes,seconds)
}

export function setMinus() {
    let minutes = Number(el.minutes.textContent)-5
    let seconds = Number(el.seconds.textContent)
    minutes = minutes < 0 ? 0 : minutes
    timer.updateDisplay(minutes,seconds)
}

export function tree() {
    state.ismute = document.documentElement.classList.toggle('music-on')
    
    if(!state.ismute){
        ClearState()
    }
    
    if(state.ismute) {
        sounds.floresta.play()
        el.tree[0].classList.add('secundary')
        return
    }
    
}
export function rain() {
    state.ismute = document.documentElement.classList.toggle('music-on')

    if(!state.ismute){
        ClearState()
    }

    if(state.ismute) {
        sounds.chuva.play()
        el.rain[0].classList.add('secundary')
        return
    }
}
export function storefront() {
    state.ismute = document.documentElement.classList.toggle('music-on')
    
    if(!state.ismute){
        ClearState()
    }

    if(state.ismute) {
        sounds.cafeteria.play()
        el.storefront[0].classList.add('secundary')
        return
    }

}
export function fire() {
    state.ismute = document.documentElement.classList.toggle('music-on')

    if(!state.ismute){
        ClearState()
    }

    if(state.ismute) {
        sounds.lareira.play()
        el.fire[0].classList.add('secundary')
        return
    }

}

function ClearState() {
    document.documentElement.classList.remove('music-on')
    el.tree[0].classList.remove('secundary')
    el.rain[0].classList.remove('secundary')
    el.storefront[0].classList.remove('secundary')
    el.fire[0].classList.remove('secundary')
    
    sounds.floresta.pause()
    sounds.chuva.pause()
    sounds.cafeteria.pause()
    sounds.lareira.pause()
}
