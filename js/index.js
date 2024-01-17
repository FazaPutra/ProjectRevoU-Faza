const luas = document.getElementById("sisi");
const hitung = document.getElementById("hitung");
const output = document.getElementById("output");
hitung.addEventListener("click", function () {
  let s = sisi.value;
  let l = s * s;
  output.innerHTML = `Luas persegi yang memiliki sisi ${s} adalah ${l}`;
});
reset.addEventListener("click", function () {
  sisi.value = "null";
  output.innerHTML = "";
});

const kel = document.getElementById("sisiKel");
const hitungKel = document.getElementById("hitungKel");
const outputKel = document.getElementById("outputKel");
hitungKel.addEventListener("click", function () {
  let s = sisiKel.value;
  let l = 4 * s;
  outputKel.innerHTML = `Keliling persegi yang memiliki sisi ${s} adalah ${l}`;
});
resetKel.addEventListener("click", function () {
  sisiKel.value = "null";
  outputKel.innerHTML = "";
});
