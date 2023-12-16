let answer = document.getElementById(`botAns`)
let input = document.getElementById(`userInput`)

window.setTimeout("waktu()", 1000);

function waktu() {
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    if (waktu.getHours() <10) {
        document.getElementById("jam").innerHTML = `0` + waktu.getHours();
    } else {
        document.getElementById("jam").innerHTML =waktu.getHours();
    }
    if (waktu.getMinutes() < 10) {
        document.getElementById("menit").innerHTML = `0` + waktu.getMinutes();
    } else {
        document.getElementById("menit").innerHTML =waktu.getMinutes();
    }
    if (waktu.getSeconds() < 10 ) {
        document.getElementById("detik").innerHTML = `0` + waktu.getSeconds();
    } else {
        document.getElementById("detik").innerHTML = waktu.getSeconds();
    }
}

function jawab(answer, waktu, jam, menit, detik, day) {
    waktu = new Date()
    jam = waktu.getHours()
    menit = waktu.getMinutes()
    detik = waktu.getSeconds()
    if (jam < 12) {
        day = "Pagi"
    } else if (jam < 15) {
        day = "Siang"
    } else if (jam < 18) {
        day = "Sore  "
    } else if (jam <= 24) {
        day = "Malam"
    }
    if (input.value) {
        answer = document.querySelector(`div#botAns p`)
        answer.innerHTML = ` ${day} ${input.value} Selamat datang di Web KelasF`
        input.value = ``
    }
}
document.getElementsByClassName(`.botBtn`).onclick = jawab()
document.addEventListener(`keypress`, function () {
    document.onkeydown = function (e) {
        if (e.keyCode == 13) {
            if (input.value) {
                jawab()
            }
        }
    }
})
