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
// FASE 1
const cPR = document.getElementById(`PRbtn`)
const before = document.getElementById(`save`)
const PRcount = document.getElementById(`PRcount`)
const PRbtn = document.querySelector(`.ctaPR`)

PRcount.addEventListener(`input`, function () {
    if (PRcount.value >= 1 && PRcount.value <= 15) {
        document.getElementById(`PRbtn`).disabled = false 
    } else {
        document.getElementById(`PRbtn`).disabled = true
    }
})

function buatPR() {
    const date = new Date()
    const tahun = date.getFullYear()
    let bulan = date.getMonth() + 1
    let hari = date.getDate()
    if (hari < 10) {
        hari = `0${date.getDate()}`
    } else {
        hari
    }
    if (bulan < 10) {
        bulan = `0${date.getMonth()}`  
    } else {
        bulan
    }
    console.log(bulan)
    const createPR = document.querySelector(`.mnContent`)
    let pelajaran = [`TIdak ada`, `IPA`, `IPS`, `PPKN`, `Matematika`, `Fisika`, `PJOK`, `MUSIK`]

    if (PRcount.value > 15 || PRcount.value < 1) {
        alert(`Banyak bet PR,Gak tau di kerjain ya xixixixixi`)
        PRcount.value = ``
    } else if (PRcount.value <= 15 || PRcount.value >= 1) {
        createPR.innerHTML = ""
        console.log(PRcount)
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
    // FASE 2
    for(let n = 0; n < parseInt(PRcount.value); n++) {
        console.log(n)
        const parent = document.querySelector(`.mnContent`)
        const contain = document.querySelectorAll(`div.New`)[n]
        const setPR = document.querySelectorAll(`button.set`)[n]
        const inpTitle = document.querySelectorAll(`input.inpPRTitle`)[n]
        const inpPn = document.querySelectorAll(`select.selectP`)[n]
        const des = document.querySelectorAll(`textarea.inpDes`)[n]
        const deadline = document.querySelectorAll(`input.date`)[n]
        const deletePR = document.querySelectorAll(`button.delete`)[n]
        if (inpTitle.value) {
            setPR.disabled = false
        } else {
            setPR.disabled = true
        }
        
        setPR.addEventListener(`click`, function() {
            contain.innerHTML = ``
            const title = document.createElement(`h3`)

            contain.appendChild(title)
            title.innerHTML = inpTitle.value
            console.log(`coba dlu gak sih`)
        })
        deletePR.addEventListener(`click`, function() {
            parent.removeChild(contain)
            n++ ; n--
            console.log(n)
            console.log(`coba delete gak sih`)
            if (n == parseInt(PRcount.value) - 1) {
                alert(`Bruh :():`)
                PRbtn.innerHTML = ``
                createPR.classList.remove(`Add`)
                createPR.appendChild(before.cloneNode(true))
                const cPR = document.getElementById(`PRbtn`)
                cPR.onclick = buatPR
            }
        })
            console.log(n)
    }
    // FASE 3
    const finalBtn = document.getElementById(`buat`)
    function final() {
    
    }
    finalBtn.onclick = final
    console.log(before)
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
