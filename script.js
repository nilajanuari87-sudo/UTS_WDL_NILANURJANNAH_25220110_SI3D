const parameter = new URLSearchParams(window.location.search);
const menu = parameter.get("menu");

const judul = document.getElementById("judulHalaman");
const isi = document.getElementById("isiHalaman");

const dataMahasiswa = [
    ["25220110", "NILA NURJANNAH", "SI-3D", "Aktif"],
];

const dataKelas = [
    ["SI-3D", "Sistem Informasi 3D", "25 Mahasiswa"],
];

const dataAktivitas = [
    ["Jadwal Perkuliahan", "Senin, 3 Matakuliah"],
    ["Jadwal Perkuliahan", "Selasa, 2 Matakuliah"],
    ["Jadwal Perkuliahan", "Rabu, 2 Matakuliah"],
    ["Jadwal Perkuliahan", "jumat, 2 Matakuliah"]
];

const dataDokumen = [
    ["Lampiran Dokumen 1", "Matakuliah A"],
    ["Lampiran Dokumen 2", "Matakuliah B"],
    ["Lampiran Dokumen 3", "Matakuliah C"]
];

// MEMBUAT TABEL
function buatTabel(header, data) {
    return `
        <div class="page-card">
            <table>
                <thead>
                    <tr>
                        ${header.map(item => `<th>${item}</th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                    ${data.map(row => `
                        <tr>
                            ${row.map(item => `<td>${item}</td>`).join("")}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;
}

// MENAMPILKAN HALAMAN MAHASISWA
if (menu === "mahasiswa") {
    judul.textContent = "Data Mahasiswa";

    isi.innerHTML = buatTabel(
        ["NIM", "Nama Mahasiswa", "Kelas", "Status"],
        dataMahasiswa
    );
    
}

// MENAMPILKAN HALAMAN KELAS
else if (menu === "kelas") {
    judul.textContent = "Data Kelas";

    isi.innerHTML = buatTabel(
        ["Kode Kelas", "Nama Kelas", "Jumlah Mahasiswa"],
        dataKelas
    );
}

// MENAMPILKAN HALAMAN AKTIVITAS
else if (menu === "aktivitas") {
    judul.textContent = "Aktifitas Selanjutnya";

    isi.innerHTML = `
        <div class="page-card">
            ${dataAktivitas.map(item => `
                <div class="page-item">
                    <strong>${item[0]}</strong>
                    <p>${item[1]}</p>
                </div>
            `).join("")}
        </div>
    `;
}

// MENAMPILKAN HALAMAN STATISTIK
else if (menu === "statistik") {
    judul.textContent = "Statistik Mahasiswa";

    isi.innerHTML = `
        <div class="dashboard-grid">
            <div class="card">
                <h3>Total Mahasiswa</h3>
                <h2>120</h2>
            </div>

            <div class="card">
                <h3>Total Kelas</h3>
                <h2>3</h2>
            </div>

            <div class="card">
                <h3>Total Aktivitas</h3>
                <h2>4</h2>
            </div>
        </div>

        <div class="page-card">
            <h3>Grafik Statistik</h3>
            <img src="Chart_Statistik.svg"
                 alt="Grafik Statistik"
                 style="width:100%;max-height:300px;object-fit:contain;">
        </div>
    `;
}

// MENAMPILKAN HALAMAN DOKUMEN
else if (menu === "dokumen") {
    judul.textContent = "Daftar Dokumen";

    isi.innerHTML = `
        <div class="page-card">
            ${dataDokumen.map(item => `
                <div class="page-item">
                    <strong>${item[0]}</strong>
                    <p>${item[1]} | Tugas Perkuliahan</p>
                </div>
            `).join("")}
        </div>
    `;
}

// MENAMPILKAN HALAMAN SETTINGS
else if (menu === "settings") {
    judul.textContent = "Settings";

    isi.innerHTML = `
        <div class="page-card">
            <h3>Pengaturan Profil</h3>

            <p>Nama Lengkap</p>
            <input type="text" id="nama" value="NILA NURJANNAH">

            <br><br>

            <p>Kelas</p>
            <input type="text" id="kelas" value="SI-3D">

            <br><br>

            <button onclick="simpanPengaturan()">Simpan</button>

            <p id="pesan"></p>
        </div>
    `;
}

// JIKA MENU TIDAK DITEMUKAN
else {
    judul.textContent = "Halaman Tidak Ditemukan";
}

// SIMPAN PENGATURAN
function simpanPengaturan() {
    document.getElementById("pesan").textContent =
        "Pengaturan berhasil disimpan!";
}

// KONFIRMASI KELUAR
function konfirmasiKeluar() {
    return confirm("Apakah kamu yakin ingin keluar?");
}

// PENCARIAN
document.getElementById("search").addEventListener("input", function() {
    const kata = this.value.toLowerCase();

    document.querySelectorAll("#isiHalaman tr, .page-item").forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(kata)
            ? ""
            : "none";
    });
});

