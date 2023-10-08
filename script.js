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
        if (input.value) {
           if(jam < 12) {
               day = "pagi"
           } else if (jam > 3) {
            day = "siang"
           }
     answer = document.querySelector(`div#botAns p`)
        answer.innerHTML = ` ${day} ${input.value} Selamat datang di Web KelasF`
        input.value = ``
    }
}