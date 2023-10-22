window.setTimeout("waktu()", 1000);

function waktu() {
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    if (waktu.getHours() < 10) {
        document.getElementById("jam").innerHTML = `0` + waktu.getHours();
    } else {
        document.getElementById("jam").innerHTML = waktu.getHours();
    }
    if (waktu.getMinutes() < 10) {
        document.getElementById("menit").innerHTML = `0` + waktu.getMinutes();
    } else {
        document.getElementById("menit").innerHTML = waktu.getMinutes();
    }
    if (waktu.getSeconds() < 10) {
        document.getElementById("detik").innerHTML = `0` + waktu.getSeconds();
    } else {
        document.getElementById("detik").innerHTML = waktu.getSeconds();
    }
}

const PRcount = document.getElementById(`PRcount`)
const PRbtn = document.querySelector(`.ctaPR`)
const cPR = document.getElementById(`PRbtn`)

PRcount.addEventListener(`input`, function () {
    document.getElementById(`PRbtn`).disabled = false
})

function buatPR() {
    const date = new Date()
    const tahun = date.getFullYear()
    let bulan = date.getMonth() + 1
    let hari = date.getDate()
    if (hari < 10) {
        hari = `0` + date.getDate()
    } else {
        hari = date.getDate()
    }
    if (bulan < 10) {
        bulan = `0` + date.getMonth()
    } else {
        let bulan = date.getMonth()
    }
    const createPR = document.querySelector(`.mnContent`)
    let pelajaran = [`TIdak ada`, `IPA`, `IPS`, `PPKN`, `Matematika`, `Fisika`, `PJOK`, `MUSIK`]

    if (PRcount.value > 15 || PRcount.value < 1) {
        alert(`Banyak bet PR,Gak tau di kerjain ya xixixixixi`)
        PRcount.value = ``
    } else if (PRcount.value <= 15 || PRcount.value >= 1) {
        createPR.innerHTML = ""
        const btnAdd = document.createElement(`button`)

        for (let i = 1; i <= parseInt(PRcount.value); i++) {
            console.log(i)
            const newDiv = document.createElement(`div`)
            const comDiv = document.createElement(`div`)
            const dt = document.createElement(`div`)

            const inpAdd = document.createElement(`input`)
            const inpD = document.createElement(`input`)

            const select = document.createElement(`select`)

            const inpDescription = document.createElement(`textarea`)

            const PE = document.createElement(`p`)
            const NO = document.createElement(`p`)

            const btnDeletePR = document.createElement(`button`)
            const btnSetPR = document.createElement(`button`)

            createPR.appendChild(newDiv)
            newDiv.appendChild(inpAdd)
            newDiv.appendChild(select)
            newDiv.appendChild(inpDescription)
            newDiv.appendChild(dt)
            dt.appendChild(PE)
            dt.appendChild(NO)
            dt.appendChild(inpD)
            newDiv.appendChild(comDiv)
            comDiv.appendChild(btnSetPR)
            comDiv.appendChild(btnDeletePR)

            for (let lo = 0; lo < pelajaran.length; lo++) {
                const option = document.createElement(`option`)
                select.appendChild(option)
                option.textContent = pelajaran[lo]
                option.classList.add(`optionP`)
            }

            PRbtn.appendChild(btnAdd)

            newDiv.classList.add(`New`)
            createPR.classList.add(`Add`)

            inpAdd.setAttribute(`placeholder`, `Judul`)
            inpAdd.setAttribute(`type`, `text`)
            inpAdd.classList.add(`inpPRTitle`)

            select.classList.add(`selectP`)

            inpDescription.classList.add(`inpDes`)
            inpDescription.setAttribute(`placeholder`, `Deskripsi (opsional)`)

            dt.classList.add(`deadline`)

            PE.textContent = `Tanggal di Kumpulkan`
            NO.textContent = `Note: Tanggal saat ini`

            inpD.setAttribute(`type`, `date`)
            inpD.setAttribute(`value`, `${tahun}-${bulan}-${hari}`)
            inpD.classList.add(`date`)

            comDiv.classList.add(`commit`)

            btnSetPR.textContent = `Set`
            btnSetPR.classList.add(`set`)
            
            btnDeletePR.textContent = `Delete`
            btnDeletePR.classList.add(`delete`)
        }
        btnAdd.setAttribute(`id`, `buat`)
        btnAdd.textContent = `Buat`
    }
    for(let n = 0; n < parseInt(PRcount.value); n++) {
        console.log(n)
        const setPR = document.querySelectorAll(`button.set`)[n]
        const title = document.querySelectorAll(`input.inpPRTitle`)[n]
        const deletePR = document.querySelectorAll(`button.delete`)[n]
        setPR.addEventListener(`click`, function() {
            console.log(`coba dlu gak sih`)
            console.log(title.value)
        })
        deletePR.addEventListener(`click`, function() {
            console.log(`coba delete gak sih`)
        })

    }
}
cPR.onclick = buatPR


document.addEventListener(`keypress`, function () {
    document.onkeydown = function (e) {
        let isi
        if (e.keyCode == 13) {
            if (document.getElementById(`PRcount`).value) {
                buatPR()
            }
        }
    }
})
// document.body.addEventListener(`mousemove`, function(event){
//     const w = Math.round((event.clientX / window.innerWidth) * 225 + 1)
//     const h = Math.round((event.clientY / window.innerHeight) * 225 + 1)
//     document.body.style.backgroundColor = `rgb(${w},${h},70)`
//     console.log(w,h)
// })
