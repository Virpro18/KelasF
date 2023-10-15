let answer = document.getElementById(`botAns`)
let input = document.getElementById(`userInput`)

window.setTimeout("waktu()", 1000);

	function waktu() {
		var waktu = new Date();
		setTimeout("waktu()", 1000);
		document.getElementById("jam").innerHTML = waktu.getHours();
		document.getElementById("menit").innerHTML = waktu.getMinutes();
		document.getElementById("detik").innerHTML = waktu.getSeconds();
	}

    function jawab(answer,waktu,jam,menit,detik,day) {
        waktu = new Date()
        jam = waktu.getHours()
        menit = waktu.getMinutes()
        detik = waktu.getSeconds()
        if(jam < 12) {
            day = "Pagi"
        } else if (jam < 15) {
         day = "Siang"
        } else if (jam < 18) {
         day = "Sore  "
        } else if (jam <= 24){
         day = "Malam"
        }
        if (input.value) {
     answer = document.querySelector(`div#botAns p`)
        answer.innerHTML = ` ${day} ${input.value} Selamat datang di Web KelasF`
        input.value = ``
    }
}