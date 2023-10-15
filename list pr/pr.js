

function buatPR() {
    const createPR = document.querySelector(`.mnContent`)
    const inpAdd = document.createElement(`input`)
    const btnAdd = document.createElement(`button`)

    createPR.innerHTML = ""
    createPR.appendChild(inpAdd)
    createPR.appendChild(btnAdd)
    createPR.classList.add (`Add`)
    inpAdd.setAttribute(`placeholder`, ``)
    btnAdd.setAttribute(`onclick`, `lala()`)
    btnAdd
}