
const createDivs = function(divs){
    const container = document.querySelector(`.container`)
    container.innerHTML = ``
    for(let i = 1; i <= divs*divs ; i++){
       const square = document.createElement(`div`)
       let squareSize = 800 / divs;
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`
       square.classList.add(`square`)
       container.appendChild(square)
    }
    container.addEventListener(`mouseover`, (e) =>{
        e.target.classList.add(`hover`)
    })
}
createDivs(16)

const button = document.querySelector(`.button`)
button.addEventListener(`click`, (e)=>{
    let answer = prompt(`Introduce the grid number`)
    if(answer > 100) alert(`Number is WAY too high`)
    else createDivs(answer)
})