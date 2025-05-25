// Data materi lengkap sesuai request, deskripsi dan contoh singkat tiap topik
const materiJS = {
    "JS W3School": {
        deskripsi: "Sumber belajar utama JavaScript dari W3Schools.",
        contoh: `console.log("Belajar JavaScript di W3Schools!");`
    },
    "JS HOME": {
        deskripsi: "JavaScript adalah bahasa pemrograman untuk membuat halaman web interaktif.",
        contoh: `console.log("Halo dari JavaScript!");`
    },
    "JS Introduction": {
        deskripsi: "JavaScript memungkinkan pembuatan web yang dinamis.",
        contoh: `alert("Selamat datang di JavaScript!");`
    },
    "JS Where To": {
        deskripsi: "JavaScript bisa diletakkan di head, body, atau file eksternal.",
        contoh: `document.body.style.backgroundColor = "lightblue";`
    },
    "JS Output": {
        deskripsi: "Output JavaScript dapat ditampilkan di console, alert, atau HTML.",
        contoh: `document.getElementById("demo").innerHTML = "Output ke HTML";`
    },
    "JS Statement": {
        deskripsi: "Statement adalah instruksi JavaScript.",
        contoh: `let x = 5; let y = 10; console.log(x + y);`
    },
    "JS Syntax": {
        deskripsi: "Sintaks JavaScript harus benar agar kode berjalan.",
        contoh: `console.log("Syntax benar");`
    },
    "JS Comments": {
        deskripsi: "Komentar digunakan untuk penjelasan kode.",
        contoh: `// Ini komentar satu baris`
    },
    "JS Variables": {
        deskripsi: "Variabel menyimpan data menggunakan var, let, atau const.",
        contoh: `let nama = "Dion"; console.log(nama);`
    },
    "JS Let": {
        deskripsi: "Let adalah variabel yang bisa diubah dan memiliki scope blok.",
        contoh: `let umur = 20; umur = 21; console.log(umur);`
    },
    "JS Const": {
        deskripsi: "Const adalah variabel konstan yang tidak bisa diubah.",
        contoh: `const pi = 3.14; console.log(pi);`
    },
    "JS Operators": {
        deskripsi: "Operator melakukan operasi matematika dan logika.",
        contoh: `console.log(5 + 3);`
    },
    "JS Arithmetic": {
        deskripsi: "Operator aritmatika untuk operasi matematika dasar.",
        contoh: `console.log(10 / 2);`
    },
    "JS Assignment": {
        deskripsi: "Operator assignment memberi nilai ke variabel.",
        contoh: `let a = 5; a += 3; console.log(a);`
    },
    "JS Data Types": {
        deskripsi: "Tipe data seperti string, number, boolean, dll.",
        contoh: `let tipe = typeof "Dion"; console.log(tipe);`
    },
    "JS Functions": {
        deskripsi: "Fungsi menjalankan blok kode saat dipanggil.",
        contoh: `function sapa() { return "Halo!"; } console.log(sapa());`
    },
    "JS Objects": {
        deskripsi: "Objek adalah koleksi properti dan nilai.",
        contoh: `let orang = {nama:"Dion", umur:21}; console.log(orang.nama);`
    },
    "JS Objects Properties": {
        deskripsi: "Properti adalah nilai dalam objek.",
        contoh: `console.log(orang.umur);`
    },
    "JS Objects Methods": {
        deskripsi: "Method adalah fungsi dalam objek.",
        contoh: `orang.sapa = function() { return "Hai!"; }; console.log(orang.sapa());`
    },
    "JS Objects Display": {
        deskripsi: "Menampilkan objek dalam console.",
        contoh: `console.log(orang);`
    },
    "JS Objects Constructors": {
        deskripsi: "Membuat objek dengan fungsi konstruktor.",
        contoh: `function Orang(nama, umur) { this.nama = nama; this.umur = umur; } let dion = new Orang("Dion", 21); console.log(dion.nama);`
    },
    "JS Events": {
        deskripsi: "Event adalah aksi pengguna seperti klik atau hover.",
        contoh: `document.body.onclick = () => alert("Body diklik!");`
    },
    "JS Strings": {
        deskripsi: "String adalah teks dalam tanda kutip.",
        contoh: `let teks = "Halo Dunia"; console.log(teks.length);`
    },
    "JS String Methods": {
        deskripsi: "Metode string seperti toUpperCase dan slice.",
        contoh: `console.log("dion".toUpperCase());`
    },
    "JS String Search": {
        deskripsi: "Mencari teks dalam string dengan indexOf.",
        contoh: `console.log("javascript".indexOf("script"));`
    },
    "JS String Templates": {
        deskripsi: "Template literal menggunakan backticks dan ${}.",
        contoh: `let nama = "Dion"; console.log(\`Halo, \${nama}!\`);`
    },
    "JS Numbers": {
        deskripsi: "Tipe data angka untuk perhitungan.",
        contoh: `console.log(100 + 50);`
    },
    "JS BigInt": {
        deskripsi: "BigInt untuk angka sangat besar.",
        contoh: `const big = 9007199254740991n; console.log(big + 1n);`
    },
    "JS Number Methods": {
        deskripsi: "Metode angka seperti toFixed dan toString.",
        contoh: `let num = 3.14159; console.log(num.toFixed(2));`
    },
    "JS Number Properties": {
        deskripsi: "Properti angka seperti MAX_VALUE.",
        contoh: `console.log(Number.MAX_VALUE);`
    },
    "JS Arrays": {
        deskripsi: "Array menyimpan daftar nilai.",
        contoh: `let arr = [1,2,3]; console.log(arr[0]);`
    },
    "JS Array Methods": {
        deskripsi: "Metode array seperti push, pop, shift.",
        contoh: `arr.push(4); console.log(arr);`
    },
    "JS Array Search": {
        deskripsi: "Mencari nilai dengan indexOf atau includes.",
        contoh: `console.log(arr.includes(3));`
    },
    "JS Array Sort": {
        deskripsi: "Mengurutkan array dengan sort().",
        contoh: `arr.sort((a,b) => b - a); console.log(arr);`
    },
    "JS Dates": {
        deskripsi: "Tanggal dan waktu dengan objek Date.",
        contoh: `let d = new Date(); console.log(d.toDateString());`
    },
    "JS Date Formats": {
        deskripsi: "Format tanggal dengan toLocaleDateString.",
        contoh: `console.log(new Date().toLocaleDateString());`
    },
    "JS Date Get Methods": {
        deskripsi: "Mengambil bagian tanggal seperti getFullYear().",
        contoh: `console.log(new Date().getFullYear());`
    },
    "JS Date Set Methods": {
        deskripsi: "Mengubah bagian tanggal seperti setDate().",
        contoh: `let dt = new Date(); dt.setDate(15); console.log(dt);`
    },
    "JS Math": {
        deskripsi: "Objek Math untuk fungsi matematika.",
        contoh: `console.log(Math.sqrt(16));`
    },
    "JS Random": {
        deskripsi: "Menghasilkan angka acak dengan Math.random().",
        contoh: `console.log(Math.floor(Math.random() * 10));`
    },
    "JS Booleans": {
        deskripsi: "Tipe data true/false.",
        contoh: `let aktif = true; console.log(aktif);`
    },
    "JS Comparisons": {
        deskripsi: "Operator perbandingan seperti == dan ===.",
        contoh: `console.log(5 === '5');`
    },
    "JS If Else": {
        deskripsi: "Percabangan if-else dalam logika.",
        contoh: `if (5 > 3) { console.log("Benar"); } else { console.log("Salah"); }`
    },
    "JS Switch": {
        deskripsi: "Percabangan switch-case.",
        contoh: `switch(2) { case 1: console.log("Satu"); break; case 2: console.log("Dua"); break; }`
    },
    "JS Loop For": {
        deskripsi: "Perulangan dengan for.",
        contoh: `for(let i=0; i<3; i++) { console.log(i); }`
    },
    "JS Loop For In": {
        deskripsi: "Loop untuk properti objek.",
        contoh: `for(let key in orang) { console.log(key + ": " + orang[key]); }`
    },
    "JS Loop For Of": {
        deskripsi: "Loop untuk iterable seperti array.",
        contoh: `for(let val of arr) { console.log(val); }`
    },
    "JS Loop While": {
        deskripsi: "Perulangan while.",
        contoh: `let i = 0; while(i < 3) { console.log(i); i++; }`
    }
};

// Reference elemen penting
const nav = document.getElementById('materi-nav');
const title = document.querySelector('#materi-content h3');
const desc = document.getElementById('materi-description');
const editor = document.getElementById('code-editor');
const output = document.getElementById('code-output');
const runBtn = document.getElementById('run-code');

const btnLightOn = document.getElementById('btn-light-on');
const btnLightOff = document.getElementById('btn-light-off');
const imgLampu = document.getElementById('myImage');

// Inisialisasi mode gelap saat load
window.onload = () => {
    document.body.classList.add('dark-mode');
    imgLampu.src = 'aset/bulb_off.jpg';
};

// Fungsi toggle lampu
btnLightOn.addEventListener('click', () => {
    imgLampu.src = 'aset/bulb_on.jpg';
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
});

btnLightOff.addEventListener('click', () => {
    imgLampu.src = 'aset/bulb_off.jpg';
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
});

// Buat daftar tombol materi dari objek materiJS
function buatDaftarMateri() {
    Object.keys(materiJS).forEach((key, i) => {
        const btn = document.createElement('button');
        btn.textContent = key;
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => {
            tampilkanMateri(key);
            setActiveButton(i);
        });
        nav.appendChild(btn);
    });
}

// Set tombol aktif
function setActiveButton(index) {
    const buttons = nav.querySelectorAll('button');
    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

// Tampilkan materi berdasarkan nama
function tampilkanMateri(key) {
    const data = materiJS[key];
    title.textContent = key;
    desc.textContent = data.deskripsi;
    editor.value = data.contoh;
    output.textContent = '';
}

// Jalankan kode JS dari editor dan tampilkan hasil console.log atau error
runBtn.addEventListener('click', () => {
    output.textContent = ''; // bersihkan output

    // Tangkap console.log output
    const logs = [];
    const originalConsoleLog = console.log;

    console.log = function (...args) {
        logs.push(args.map(a => String(a)).join(' ') + '\n');
        originalConsoleLog.apply(console, args);
    };

    try {
        // Jalankan kode yang ada di editor
        const code = editor.value;
        new Function(code)();
        output.textContent = logs.join('') || 'Kode dijalankan tanpa output.';
    } catch (error) {
        output.textContent = 'Error: ' + error.message;
    }

    // Kembalikan fungsi console.log ke normal
    console.log = originalConsoleLog;
});

// Inisialisasi tampilan materi awal
buatDaftarMateri();
tampilkanMateri(Object.keys(materiJS)[0]);
setActiveButton(0);
