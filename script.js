const container = document.querySelector(`.container`)

const createDivs = function(){
    for(let i = 1; i <= 256 ; i++){
       const square = document.createElement(`div`)
       square.classList.add(`square`)
       container.appendChild(square)
    }
    const square = document.querySelector(`.square`)
    container.addEventListener(`mouseover`, (e) =>{
        e.target.classList.add(`hover`)
    })
}

createDivs()