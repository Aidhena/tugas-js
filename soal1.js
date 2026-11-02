var nama = prompt("Masukkan nama siswa:");
var nilaiTugas = Number(prompt("Masukkan nilai tugas:"));
var nilaiUTS = Number(prompt("Masukkan nilai UTS:"));
var nilaiUAS = Number(prompt("Masukkan nilai UAS:"));

var nilaiAkhir = (nilaiTugas * 0.30) + (nilaiUTS * 0.30) + (nilaiUAS * 0.40);
var lulus = nilaiAkhir >= 75;
var status = "";

if (lulus == true) {
    status = "LULUS";
} else {
    status = "TIDAK LULUS";
}

console.log("Nama: " + nama);
console.log("Nilai Akhir: " + nilaiAkhir);
console.log("Status: " + status);

document.write("Nama: " + nama + "<br>");
document.write("Nilai Akhir: " + nilaiAkhir + "<br>");
document.write("Status: " + status);
