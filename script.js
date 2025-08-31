const message = `Aku minta maaf untuk semuanya, aku minta maaf karena selama ini aku udah nyakitin kamu tanpa sadar, aku benar-benar minta maaf. And I want you to know, I'll be here, waiting for you.\n\nWe still love each other bby, please give our relationship one last chance bby, satu kali untuk terakhir kalinya.\n\nI will be better than before, hubungan kita akan lebih baik dari sebelomnya karena kita sudah mengenal satu sama lain.\n\nAku ga bisa pergi ninggalin kamu gitu aja bby, aku mau usahain sekali lagi, aku mau nunjukkin kalo aku berubah, aku mau ngasih yang terbaik bby.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}




