// Data menu
const menu = {
    "Nasi Goreng": 10000,
    "Lalapan": 15000,
    "Es Teh": 5000
};

let total = 0;

// Menambah pesanan
function tambah() {
    let nama = document.getElementById("menu").value;
    let jumlah = Number(document.getElementById("jumlah").value);

    if (!nama || jumlah <= 0) {
        alert("Pilih menu dan jumlah!");
        return;
    }

    let subtotal = menu[nama] * jumlah;
    total += subtotal;

    document.getElementById("tabel").innerHTML +=
        `<tr><td>${nama}</td><td>${jumlah}</td><td>Rp ${subtotal}</td></tr>`;

    document.getElementById("total").innerText = total;
}

// Tombol tambah
form.addEventListener("submit", function(e) {
    e.preventDefault();
    tambah();
    form.reset();
});

// Hitung kembalian
hitung.addEventListener("click", function() {
    let bayar = Number(document.getElementById("bayar").value);
    hasil.innerText = bayar >= total
        ? "Kembalian: Rp " + (bayar - total)
        : "Uang tidak cukup!";
});