console.log("COMECOU O PROGARMA")

document.querySelector('#items').addEventListener('wheel', (event) => {
        if(event.deltaX > 0){
            event.target.scrollBy(300, 0)
            console.log("AEEE")
        } else {
            event.target.scrollBy(-300, 0)
            console.log("Voltou")
        }
})