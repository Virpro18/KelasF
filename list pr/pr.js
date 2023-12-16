// Pengecekan Data PR
if (localStorage.length > 0) {
    document.getElementById(`re`).remove()
    for (let i = 0; i <= parseInt(localStorage.getItem(`P`)); i++) {
        if (localStorage.getItem(`deadline${i}`)) {
            console.log(`ada` + localStorage.length)
            console.log(`i sebanyak ${i}`)

            const dead = new Date(localStorage.getItem(`deadline${i}`)) - new Date()
            const days = Math.floor(dead / (24 * 60 * 60 * 1000));
            console.log(days)
            console.log(new Date())
            const tip = document.createElement(`div`)
            const contain = document.createElement(`div`)
            const fiDe = document.createElement(`div`)
            const finish = document.createElement(`button`)
            const failed = document.createElement(`button`)
            const titlev = document.createElement(`h3`)
            const tLeft = document.createElement(`h2`)
            const pelajaran = document.createElement(`h3`)
            const desc = document.createElement(`p`)
            const box = document.querySelector(`.contentPR`)

            console.log(`sisa${days}`)
            console.log(typeof (days))

            box.appendChild(contain)
            contain.appendChild(tip)
            tip.appendChild(tLeft)
            tip.appendChild(titlev)
            if (localStorage.getItem(`pelajaran${i}`)) {
                tip.appendChild(pelajaran)
                pelajaran.textContent = localStorage.getItem(`pelajaran${i}`)
            }
            if (localStorage.getItem(`description${i}`)) {
                contain.appendChild(desc)
                desc.textContent = localStorage.getItem(`description${i}`)
            }

            contain.appendChild(fiDe)
            fiDe.appendChild(finish)
            fiDe.appendChild(failed)

            contain.classList.add(`lastS`)
            fiDe.classList.add(`fiDe`)
            finish.classList.add(`selesai`)
            failed.classList.add(`gagal`)

            titlev.textContent = localStorage.getItem(`title${i}`)
            tLeft.textContent = `${days} Hari Lagi`

            finish.textContent = `Finish`
            failed.textContent = `Delete`
            
            function del() {
                contain.remove()
                localStorage.removeItem(`title${i}`)
                localStorage.removeItem(`deadline${i}`)
                if (localStorage.getItem(`pelajaran${i}`)) {
                    localStorage.removeItem(`pelajaran${i}`)
                }
                if (localStorage.getItem(`description${i}`)) {
                    localStorage.removeItem(`description${i}`)
                }
                localStorage.removeItem(`P`)
                localStorage.setItem(`p`,parseInt(localStorage.getItem(`P`)))
            }
            if (days == 0) {
                contain.remove()
                del()
            }
            const delet = document.querySelectorAll(`button.gagal`)[i]
            delet.addEventListener(`click`,function() {
                let p = parseInt(localStorage.getItem(`P`))
                console.table(typeof(p))
                localStorage.setItem(`P`,p-1)
                del()
            })
            console.log(finish)
            if (localStorage.getItem(`p`) == 0) {
                localStorage.removeItem(`P`)
            }
        }
    }
}
// Pengecekan Data PR END

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
// FASE 1: Pembuatan,Pengisian, dan Pengambilan data
const cPR = document.getElementById(`PRbtn`)
const before = document.getElementById(`save`)
const PRcount = document.getElementById(`PRcount`)
const box = document.querySelector(`div.contentPR`)
let p = 0

PRcount.addEventListener(`input`, function () {
    if (PRcount.value >= 1 && PRcount.value <= 20) {
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
    const createPR = document.querySelector(`div.mnContent`)
    let pelajaran = [`Tidak ada`, `IPA`, `IPS`, `PPKN`, `Matematika`, `Fisika`, `PJOK`, `Musik`, `Agama`, `B.Indo`, `B.Inggris`, `Informatika`]

    if (PRcount.value > 20 || PRcount.value < 1) {
        alert(`Banyak bet PR,Gak tau di kerjain ya xixixixixi`)
        PRcount.value = ``
    } else if (PRcount.value <= 15 || PRcount.value >= 1) {
        createPR.innerHTML = ""
        console.log(PRcount)
        for (let i = 1; i <= parseInt(PRcount.value); i++) {
            console.log(i)
            const newDiv = document.createElement(`div`)
            const comDiv = document.createElement(`div`)
            const dt = document.createElement(`div`)

            const inpAdd = document.createElement(`input`)
            const inpD = document.createElement(`input`)
            const inpDk = document.createElement(`input`)

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
            dt.appendChild(NO)
            dt.appendChild(inpD)
            dt.appendChild(PE)
            dt.appendChild(inpDk)
            newDiv.appendChild(comDiv)
            comDiv.appendChild(btnSetPR)
            comDiv.appendChild(btnDeletePR)

            for (let lo = 0; lo < pelajaran.length; lo++) {
                const option = document.createElement(`option`)
                select.appendChild(option)
                option.textContent = pelajaran[lo]
                option.classList.add(`optionP`)
            }

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
            NO.textContent = `Tanggal saat ini`

            inpD.setAttribute(`type`, `date`)
            inpD.setAttribute(`value`, `${tahun}-${bulan}-${hari}`)
            inpD.classList.add(`date`)

            inpDk.setAttribute(`type`, `date`)
            inpDk.classList.add(`date1`)

            comDiv.classList.add(`commit`)

            btnSetPR.textContent = `Set`
            btnSetPR.classList.add(`set`)

            btnDeletePR.textContent = `Delete`
            btnDeletePR.classList.add(`delete`)
        }
    }
    // FASE 1 END
    // FASE 2 : penyimpanan Data PR
    for (let n = 0; n < parseInt(PRcount.value); n++) {
        console.log(n)
        const parent = document.querySelector(`.mnContent`)
        const contain = document.querySelectorAll(`div.New`)[n]
        const setPR = document.querySelectorAll(`button.set`)[n]
        const inpTitle = document.querySelectorAll(`input.inpPRTitle`)[n]
        const inpPn = document.querySelectorAll(`select.selectP`)[n]
        const des = document.querySelectorAll(`textarea.inpDes`)[n]
        const deadline = document.querySelectorAll(`input.date`)[n]
        const deadline1 = document.querySelectorAll(`input.date1`)[n]
        const deletePR = document.querySelectorAll(`button.delete`)[n]

        setPR.disabled = true
        deadline.disabled = true
        deadline1.required = true



        let j = 0
        deadline1.addEventListener(`change`, function () {
            const tanggal = new Date(this.value)

            if (tanggal < new Date()) {
                j++
                alert(`jangan ngawur dah` + j)
                this.value = ``
            }
            if (j == 7) {
                alert(`udahlah`)
                location.reload()
            }
        })

        inpTitle.addEventListener(`input`, function () {
            deadline1.addEventListener(`input`, function () {
                if (inpTitle.value && new Date(deadline1.value) > new Date()) {
                    setPR.disabled = false
                } else {
                    setPR.disabled = true
                }
            })
        })
        deadline1.addEventListener(`input`, function () {
            inpTitle.addEventListener(`input`, function () {
                if (inpTitle.value && deadline1.value) {
                    setPR.disabled = false
                } else {
                    setPR.disabled = true
                }
            })
        })
        function set() {
            p++
            const tip = document.createElement(`div`)
            const fiDe = document.createElement(`div`)
            const finish = document.createElement(`button`)
            const failed = document.createElement(`button`)
            const titlev = document.createElement(`h3`)
            const tLeft = document.createElement(`h2`)
            const pelajaran = document.createElement(`h3`)
            const desc = document.createElement(`p`)
            const timeL = new Date(deadline1.value) - new Date(deadline.value)
            const days = Math.floor(timeL / (24 * 60 * 60 * 1000));
            console.log(`hari ` + days)
            console.log(new Date(deadline1.value))

            contain.innerHTML = ``
            box.appendChild(contain)
            if (inpPn.value == `Tidak ada`) {
                contain.appendChild(tLeft)
                contain.appendChild(titlev)
            } else {
                contain.appendChild(tip)
                tip.appendChild(tLeft)
                tip.appendChild(titlev)
                tip.appendChild(pelajaran)
            }
            if (des.value) {
                contain.appendChild(desc)
            }
            contain.appendChild(fiDe)
            fiDe.appendChild(finish)
            fiDe.appendChild(failed)

            contain.classList.add(`lastS`)
            fiDe.classList.add(`fiDe`)
            finish.classList.add(`selesai`)
            failed.classList.add(`gagal`)
            contain.classList.remove(`New`)

            titlev.innerHTML = inpTitle.value
            pelajaran.innerHTML = inpPn.value
            desc.textContent = des.value
            tLeft.innerHTML = `${days} Hari Lagi`
            finish.textContent = `Finish`
            failed.textContent = `Delete`

            // document.querySelectorAll(`.gagal`).forEach(function(cell){
            //     cell.addEventListener(`click`,function() {
            //         contain.remove()
            //     })
            // })
            document.querySelectorAll(`.gagal`)[n].addEventListener(`click`, function() {
                contain.remove()
                localStorage.removeItem(`title${n}`)
                localStorage.removeItem(`deadline${n}`)
                localStorage.removeItem(`P`)
                localStorage.setItem(`P`,parseInt(localStorage.getItem(`P`))+ -1)
            })
            if (document.getElementById(`re`)) {
                document.getElementById(`re`).remove()
            }
            if (localStorage.getItem(`P`)) {
                localStorage.setItem(`P`, parseInt(localStorage.getItem(`P`)) + 1)
                localStorage.setItem(`title${localStorage.getItem(`P`)}`, inpTitle.value)
                localStorage.setItem(`deadline${localStorage.getItem(`P`)}`, deadline1.value)
                if (inpPn.value != `Tidak Ada`) {
                    localStorage.setItem(`pelajaran${localStorage.getItem(`P`)}`, inpPn.value)
                }
                if (des.value) {
                    localStorage.setItem(`description${localStorage.getItem(`P`)}`, des.value)
                }
            } else {
                localStorage.setItem(`P`, p)
                localStorage.setItem(`title${n}`, inpTitle.value)
                if (inpPn.value != `Tidak Ada`) {
                    localStorage.setItem(`pelajaran${n}`, inpPn.value)
                }
                if (des.value) {
                    localStorage.setItem(`description${n}`, des.value)
                }
                localStorage.setItem(`deadline${n}`, deadline1.value)
            }

            console.log(inpTitle)
            console.log(`coba dlu gak sih`)
        }
        setPR.onclick = set

        contain.addEventListener(`keypress`, function () {
            contain.onkeydown = function (e) {
                if (e.keyCode == 13) {
                    if (inpTitle.value && deadline1.value) {
                        set()
                    }
                }
            }
        })
        deletePR.addEventListener(`click`, function () {
            parent.removeChild(contain)
            n++; n--
            console.log(n)
            console.log(`coba delete gak sih`)
            if (n == parseInt(PRcount.value) - 1) {
                alert(`Bruh :():`)
                createPR.classList.remove(`Add`)
                createPR.appendChild(before.cloneNode(true))
                const cPR = document.getElementById(`PRbtn`)
                cPR.onclick = buatPR
            }
        })
    }
    // TAMBAHAN
}

cPR.onclick = buatPR
document.addEventListener(`keypress`, function () {
    document.onkeydown = function (e) {
        let isi
        if (e.keyCode == 13) {
            if (document.getElementById(`PRcount`)) {
                if (document.getElementById(`PRcount`).value) {
                    buatPR()
                }
            }
        }
    }
})
// capek bang