function checkPIN() {
  const pin = document.getElementById("pin").value.trim();
  const message = document.getElementById("message");

  message.textContent = "";
  message.style.color = "red";

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

// 📱 Enter tugmasi mobilda ham ishlasin
document.getElementById("pin").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPIN();
  }
});
