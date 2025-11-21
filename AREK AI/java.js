// --- Database Tebak-Tebakan ---
const tebakTebakan = [
  { q: "Sayur apa yang bisa nelpon?", a: "Wortel (Wartel)" },
  { q: "Gendang apa yang nggak bisa dipukul?", a: "Gendang telinga" },
  {
    q: "Kenapa zombie kalau nyerang bareng-bareng?",
    a: "Karena kalau sendiri namanya Zomblo",
  },
  { q: "Penyanyi luar negeri yang suka sepedaan?", a: "Selena Gowes" },
  { q: "Buah apa yang durhaka?", a: "Melon Kundang" },
  { q: "Hewan apa yang paling hening?", a: "Semut (Semut-semut nyenyap)" },
  { q: "Kenapa air mata warnanya bening?", a: "Kalau ijo namanya air matcha" },
  { q: "Sapi, sapi apa yang nempel di tembok?", a: "Stiker sapi" },
  { q: "Lele apa yang bisa terbang?", a: "Lelelawar" },
  { q: "Apa bahasa Cinanya orang botak?", a: "Kin Clong" },
  { q: "Kecil, hitam, keringetan?", a: "Semut lagi push-up" },
  { q: "Ikan, ikan apa yang dicari polisi?", a: "Ikan sabu - sabu" },
  { q: "Penyakit apa yang bisa nendang sama mukul?", a: "Kung flu" },
  { q: "Apa yang paling sering dijual di toko baju?", a: "Ya baju" },
];

// --- Variabel Selektor ---
let currentIndex = 0;
const questionEl = document.getElementById("question-box");
const answerEl = document.getElementById("answer-box");
const revealBtn = document.getElementById("reveal-btn");
const controls = document.getElementById("controls");
const gameArea = document.getElementById("game-area");
const btnBad = document.getElementById("next-bad-btn");
const btnGood = document.getElementById("next-good-btn");

// --- Fungsi Utama ---

// 1. Memuat Pertanyaan Baru
function loadQuestion() {
  // Reset tampilan ke awal
  answerEl.classList.remove("revealed");
  revealBtn.style.display = "inline-block";
  controls.style.display = "none";

  // Pilih pertanyaan secara acak
  currentIndex = Math.floor(Math.random() * tebakTebakan.length);

  // Tampilkan teks
  questionEl.textContent = tebakTebakan[currentIndex].q;
  answerEl.textContent = tebakTebakan[currentIndex].a;
}

// 2. Membuka Jawaban
function revealAnswer() {
  answerEl.classList.add("revealed");
  revealBtn.style.display = "none";
  controls.style.display = "block";

  // Efek getar pada container game
  gameArea.classList.add("shaking");
  setTimeout(() => {
    gameArea.classList.remove("shaking");
  }, 500);
}

// 3. Lanjut ke Pertanyaan Berikutnya
function nextQuestion(isFunny) {
  if (isFunny) {
    alert("Sip!👍 Bapak bangga sama selera humor kamu.");
  } else {
    console.log("Yah, penonton kecewa...");
  }
  loadQuestion();
}

// --- Event Listeners ---
// Ini mendengarkan klik tombol tanpa harus tulis onclick di HTML
revealBtn.addEventListener("click", revealAnswer);
btnBad.addEventListener("click", () => nextQuestion(false));
btnGood.addEventListener("click", () => nextQuestion(true));

// Jalankan saat halaman pertama kali dibuka
window.onload = loadQuestion;
