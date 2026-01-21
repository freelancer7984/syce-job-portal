const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const u = username.value;
    const p = password.value;
    const msg = document.getElementById("loginMsg");

    if (u === "student" && p === "1234") {
      msg.style.color = "green";
      msg.innerText = "Login successful";
      setTimeout(() => location.href = "jobs.html", 1000);
    } else {
      msg.style.color = "red";
      msg.innerText = "Invalid credentials";
    }
  });
}
