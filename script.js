const txtEl = document.getElementById('txt')
const velEl = document.getElementById('Vel')
const txt = 'We are our own sun!'
let idx = 1
let Vel = 300 / velEl.value

writeText()

function writeText() {
    txtEl.innerText = txt.slice(0, idx)

    idx++

    if(idx > txt.length) {
        idx = 1
    }

    setTimeout(writeText, Vel)
}


velEl.addEventListener('input', (e) => Vel = 300 / e.target.value)