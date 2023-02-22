const container = document.querySelector('.container')
const button = document.querySelector('.size')
const reset = document.querySelector('.reset')


let area 
button.addEventListener('click', ()=>{
   area= window.prompt('Enter Size of Board')
   if(area > 100 || area < 2){
    alert("UNABLE TO MAKE BOARD!")
   } else {
    makeBoard()
   }
   
})



function makeBoard(){
container.style.gridTemplateColumns = `repeat(${area},1fr)`
container.style.gridTemplateRows=`repeat(${area},1fr)`

let total = area * area


for (let i = 0; i <total ; i++){
    let box = document.createElement('div')
    container.appendChild(box)
    box.className='.box'
    box.addEventListener('mouseover', ()=>{
        box.style.backgroundColor='blue';
        box.style.opacity=".5"
        
    })

}

}
function clearBoard(){
container.backgroundColor='white'
}

console.log(reset.addEventListener('click',(clearBoard)  
))
