const container = document.querySelector('.container')
const button = document.querySelector('.size')
const reset = document.querySelector('.reset')
const newCol = document.querySelector('.newColor')
const eraser= document.querySelector('.eraser')
const blue = document.querySelector('.blue')


let area 
button.addEventListener('click', ()=>{
   area= window.prompt('Enter Size of Board')
   if(area > 101 || area < 2){
    alert("UNABLE TO MAKE BOARD!")
   } else {
    makeBoard()
   }
   
})

let box

function makeBoard(){
container.style.gridTemplateColumns = `repeat(${area},1fr)`
container.style.gridTemplateRows=`repeat(${area},1fr)`


let total = area * area


for (let i = 0; i <total ; i++){
    let box = document.createElement('div')
    container.appendChild(box)
    box.className='.box'
    newCol.addEventListener('click', ()=> {
        randomColor(box)
    })
    reset.addEventListener('click', ()=> {
        box.style.backgroundColor='white'
    })
    eraser.addEventListener('click', ()=> {
        box.addEventListener('mouseover', ()=> {
            box.style.backgroundColor='white'
        })
    })
    blue.addEventListener('click', ()=> {
        box.addEventListener('mouseover', ()=> {
            box.style.backgroundColor = blue.textContent
        })
    })
         
   
    
}
}
function randomColor(elem){
   
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    elem.addEventListener('mouseover', ()=> {
        elem.style.backgroundColor= `rgb(${r},${g}, ${b})`
    })
    
}
