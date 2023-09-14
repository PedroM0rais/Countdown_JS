'use strict'

const formartarDigito = (digito) => `0${digito}`.slice(-2)

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos')
    const minutos = document.getElementById('minutos')
    const horas = document.getElementById('horas')
    const dias = document.getElementById('dias')

    const qtdSegundos = tempo % 60
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60)
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
    const qtdDias = Math.floor(tempo  / (60 * 60 * 24))

    segundos.textContent = formartarDigito(qtdSegundos)
    minutos.textContent = formartarDigito(qtdMinutos)
    horas.textContent = formartarDigito(qtdHoras)
    dias.textContent = formartarDigito(qtdDias)
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id)
    
    const contar = () => {
        if(tempo == 0) {
            pararContagem()
        }
        atualizar(tempo)
        tempo--
    }
    const id = setInterval(contar,1000)
}

const tempoRestante = () => {
    // 13 de setembro de 2023
    const dataEvento = new Date('2024-01-01 00:00:00')
    const hoje = Date.now()
    return Math.floor((dataEvento - hoje)) 
}

contagemRegressiva(tempoRestante())