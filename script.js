let generatedCaptcha = "";

// Harflardan iborat CAPTCHA yaratish
function generateCaptcha() {
  const canvas = document.getElementById("captchaCanvas");
  const ctx = canvas.getContext("2d");

  // Canvas tozalash
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Faqat harflar (raqam yo‘q)
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz";
  generatedCaptcha = "";
  for (let i = 0; i < 5; i++) {
    generatedCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // CAPTCHA ni chizish
  ctx.font = "24px Arial";
  ctx.fillStyle = "#333";
  ctx.fillText(generatedCaptcha, 10, 30);
}

// PIN va CAPTCHA tekshirish
function checkPIN() {
  const pin = document.getElementById("pin").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();
  const message = document.getElementById("message");

  message.textContent = "";
  message.style.color = "red";

  if (captchaInput !== generatedCaptcha) {
    message.textContent = "Код проверки введен неверно.";
    generateCaptcha(); // yangilash
    return;
  }

  if (pin === "1290") {
    message.style.color = "green";
    message.textContent = "Успешно! Документ открывается...";
    setTimeout(() => {
      window.location.href = "https://drive.google.com/file/d/1Vlk7IryGyV5FTCqzdj7bcT5KxIHd2ng-/view";
    }, 1000);
  } else {
    message.textContent = "Неверный PIN-код. Пожалуйста, попробуйте снова.";
  }
}

// Klaviaturada Enter bosilsa PIN tekshiradi
document.getElementById("pin").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPIN();
  }
});

// Sahifa yuklanganda CAPTCHA avtomatik hosil bo‘ladi
window.onload = generateCaptcha;
