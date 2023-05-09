// Fungsi untuk menambahkan karakter pada layar kalkulator
function insert(num) {
	document.getElementById('result').value += num;
}

// Fungsi untuk menghapus karakter terakhir pada layar kalkulator
function back() {
	var result = document.getElementById('result').value;
	document.getElementById('result').value = result.substring(0, result.length - 1);
}

// Fungsi untuk membersihkan layar kalkulator
function clearScreen() {
	document.getElementById('result').value = '';
}

// Fungsi untuk menghitung hasil dari ekspresi matematika yang dimasukkan
function calculate() {
	var result = document.getElementById('result').value;
	document.getElementById('result').value = eval(result);
}
