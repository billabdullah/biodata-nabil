function tampilkanPesan() {
    const nama = document.getElementById("nama").textContent;
    const pesan = document.getElementById("pesan");

    pesan.textContent = "Halo, saya " + nama + ". Senang bisa memperkenalkan diri!";
}

function tutupPesan() {
    const pesan = document.getElementById("pesan");

    pesan.textContent = "";
}