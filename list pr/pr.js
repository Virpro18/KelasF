const PRcount = document.getElementById(`PRcount`)
const PRbtn = document.querySelector(`.ctaPR`)

PRcount.addEventListener(`input`, function () {
    document.getElementById(`PRbtn`).disabled = false
})

function buatPR() {
    const createPR = document.querySelector(`.mnContent`)
    let pelajaran = [`TIdak ada`,`IPA`,`IPS`,`PPKN`,`Matematika`,`Fisika`,`PJOK`,`MUSIK`]

    if (PRcount.value > 15 || PRcount.value < 1) {
        alert(`Banyak bet PR,Gak tau di kerjain ya xixixixixi`)
        PRcount.value = ``
    } else if (PRcount.value <= 15 || PRcount.value >= 1) {
        createPR.innerHTML = ""
        const btnAdd = document.createElement(`button`)
        for (let i = 1; i <= parseInt(PRcount.value); i++) {
            console.log(i)
            const newDiv = document.createElement(`div`)
            const inpAdd = document.createElement(`input`)
            const select = document.createElement(`select`)
            const inpD = document.createElement(`input`)
            const inpDescription = document.createElement(`input`)

            createPR.appendChild(newDiv)
            newDiv.appendChild(inpAdd)
            newDiv.appendChild(select)
            newDiv.appendChild(inpDescription)
            newDiv.appendChild(inpD)

            for (let lo = 0; lo < pelajaran.length; lo++) {
                const option = document.createElement(`option`)
                select.appendChild(option)
                option.textContent = pelajaran[lo]
            }

            PRbtn.appendChild(btnAdd)

            newDiv.classList.add(`New`)
            createPR.classList.add(`Add`)
            inpDescription.classList.add(`inpDes`)
            inpAdd.setAttribute(`placeholder`, `Judul`)
            inpDescription.setAttribute(`placeholder`, `Deskripsi (opsional)`)
            inpD.setAttribute(`type`, `date`)
        }
        btnAdd.setAttribute(`onclick`, `PR()`)
        btnAdd.textContent = `Buat`

    }
}
document.onkeydown = function (e) {
    let isi
    if (e.keyCode == 13) {
        if (document.getElementById(`PRcount`).value) {
            buatPR()
        }
    }
}