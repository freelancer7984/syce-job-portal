// LOGIN SYSTEM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const u = username.value;
    const p = password.value;
    const msg = document.getElementById("loginMsg");

    if (u === "student" && p === "1234") {
      localStorage.setItem("role", "student");
      location.href = "jobs.html";
    } 
    else if (u === "admin" && p === "admin123") {
      localStorage.setItem("role", "admin");
      location.href = "jobs.html";
    } 
    else {
      msg.style.color = "red";
      msg.innerText = "Invalid credentials";
    }
  });
}
function filterJobs() {
  const input = document.getElementById("searchJob").value.toLowerCase();
  const jobs = document.getElementsByClassName("job-card");

  for (let job of jobs) {
    job.style.display = job.innerText.toLowerCase().includes(input)
      ? "block" : "none";
  }
}


