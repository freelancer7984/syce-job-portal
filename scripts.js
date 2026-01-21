// LOGIN LOGIC
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("loginMsg");

    // Dummy credentials (for project)
    if (username === "student" && password === "1234") {
      msg.style.color = "green";
      msg.innerText = "Login successful! Redirecting...";
      
      // Save login state
      localStorage.setItem("loggedIn", "true");

      setTimeout(() => {
        window.location.href = "jobs.html";
      }, 1000);
    } else {
      msg.style.color = "red";
      msg.innerText = "Invalid username or password!";
    }
  });
}
