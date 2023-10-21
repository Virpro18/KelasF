window.setTimeout("waktu()", 1000);

function waktu() {
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    document.getElementById("jam").innerHTML = waktu.getHours();
    document.getElementById("menit").innerHTML = waktu.getMinutes();
    document.getElementById("detik").innerHTML = waktu.getSeconds();
}

const PRcount = document.getElementById(`PRcount`)
const PRbtn = document.querySelector(`.ctaPR`)
const cPR = document.getElementById(`PRbtn`)

PRcount.addEventListener(`input`, function () {
    document.getElementById(`PRbtn`).disabled = false
})

function buatPR() {
    const date = new Date()
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
            const inpDescription = document.createElement(`textarea`)
            const inpD = document.createElement(`input`)
            const btnDeletePR = document.createElement(`button`)
            const btnSetPR = document.createElement(`button`)

            createPR.appendChild(newDiv)
            newDiv.appendChild(inpAdd)
            newDiv.appendChild(select)
            newDiv.appendChild(inpDescription)
            newDiv.appendChild(inpD)
            newDiv.appendChild(btnSetPR)
            newDiv.appendChild(btnDeletePR)

            for (let lo = 0; lo < pelajaran.length; lo++) {
                const option = document.createElement(`option`)
                select.appendChild(option)
                option.textContent = pelajaran[lo]
                option.setAttribute(`id`, `optionP`)
            }

            PRbtn.appendChild(btnAdd)

            newDiv.classList.add(`New`)
            createPR.classList.add(`Add`)
            inpAdd.setAttribute(`placeholder`, `Judul`)
            inpAdd.setAttribute(`type`,`text`)
            inpAdd.classList.add(`inpPRTitle`)

            select.classList.add(`selectP`)
            
            inpDescription.classList.add(`inpDes`)
            inpDescription.setAttribute(`placeholder`, `Deskripsi (opsional)`)

            inpD.setAttribute(`type`, `date`)
            inpD.classList.add(`date`)

            btnSetPR.textContent = `Set`
            btnDeletePR.textContent = `Delete`
        }
        btnAdd.setAttribute(`id`, `buat`)
        btnAdd.textContent = `Buat`
        
    }
    document.getElementById(`buat`).onclick = setPR
}
cPR.onclick = buatPR
function setPR() {
    console.log(`aman`)
}
document.addEventListener(`keypress`, function() {
    document.onkeydown = function (e) {
        let isi
        if (e.keyCode == 13) {
            if (document.getElementById(`PRcount`).value) {
                buatPR()
            }
        }
    }
})