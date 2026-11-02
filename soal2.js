var pembeli = prompt("Masukkan nama pembeli:");
var jumlahNasiGoreng = Number(prompt("Masukkan jumlah nasi goreng:"));
var jumlahEsTeh = Number(prompt("Masukkan jumlah es teh:"));
var jumlahRoti = Number(prompt("Masukkan jumlah roti:"));
var hargaNasiGoreng = 15000;
var hargaEsTeh = 5000;
var hargaRoti = 7000;

var subtotalNasiGoreng = hargaNasiGoreng * jumlahNasiGoreng;
var subtotalEsTeh = hargaEsTeh * jumlahEsTeh;
var subtotalRoti = hargaRoti * jumlahRoti;

var totalBelanja = subtotalNasiGoreng + subtotalEsTeh + subtotalRoti;
var diskon = 0;

if (totalBelanja >= 50000) {
    diskon = totalBelanja * 0.10;
}

var totalBayar = totalBelanja - diskon;

console.log("Pembeli: " + pembeli);
console.log("Total Belanja: Rp" + totalBelanja.toLocaleString("id-ID"));
console.log("Diskon: Rp" + diskon.toLocaleString("id-ID"));
console.log("Total Bayar: Rp" + totalBayar.toLocaleString("id-ID"));

document.write("Pembeli: " + pembeli + "<br>");
document.write("Total Belanja: Rp" + totalBelanja.toLocaleString("id-ID") + "<br>");
document.write("Diskon: Rp" + diskon.toLocaleString("id-ID") + "<br>");
document.write("Total Bayar: Rp" + totalBayar.toLocaleString("id-ID"));