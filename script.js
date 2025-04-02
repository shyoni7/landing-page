const form = document.querySelector(".contact-form");
const thankYou = document.getElementById("thank-you-message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // מונע טעינה מחדש של הדף

  // שולח את הנתונים
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // מנקה את הטופס
      thankYou.style.display = "block"; // מציג את הודעת התודה
    } else {
      alert("אירעה שגיאה בשליחה. נסה שוב.");
    }
  })
  .catch(error => {
    alert("אירעה תקלה. נסה שוב מאוחר יותר.");
  });
});
