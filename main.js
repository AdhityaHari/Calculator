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

// Fungsi untuk menambahkan karakter pada layar kalkulator
function insert(num) {
	var result = document.getElementById('result');
	var lastChar = result.value[result.value.length - 1];
	if (isNaN(num) && isNaN(lastChar)) {
		result.value = result.value.substring(0, result.value.length - 1) + num;
	} else if (isNaN(num) && lastChar == '.') {
		result.value = result.value.substring(0, result.value.length - 1) + num;
	} else {
		result.value += num;
	}
}

// Fungsi untuk menghapus karakter terakhir pada layar kalkulator
function back() {
	var result = document.getElementById('result');
	result.value = result.value.substring(0, result.value.length - 1);
}

// Fungsi untuk menghapus seluruh karakter pada layar kalkulator
function clearScreen() {
	var result = document.getElementById('result');
	result.value = '';
}

// Fungsi untuk menghitung hasil dari ekspresi pada layar kalkulator
function calculate() {
	var result = document.getElementById('result');
	var exp = result.value;
	// Validasi input
	if (/[^-()\d/*+.sin\(\)cos\(\)tan\(\)πe]/.test(exp)) {
		alert('Input tidak valid');
		return;
	}
	// Perbaikan presedensi operasi
	exp = exp.replace(/sin/g, 'Math.sin');
	exp = exp.replace(/cos/g, 'Math.cos');
	exp = exp.replace(/tan/g, 'Math.tan');
	exp = exp.replace(/π/g, 'Math.PI');
	exp = exp.replace(/e/g, 'Math.E');
	exp = exp.replace(/\^/g, '**');
	exp = exp.replace(/√/g, 'Math.sqrt');
	result.value = eval(exp);
}
