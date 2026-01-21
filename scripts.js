// HOME SEARCH
function goToJobs() {
  window.location.href = "jobs.html";
}

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
      msg.style.color = "green";
      msg.innerText = "Student login successful";
      setTimeout(() => location.href = "jobs.html", 1000);
    } 
    else if (u === "admin" && p === "admin123") {
      localStorage.setItem("role", "admin");
      msg.style.color = "green";
      msg.innerText = "Admin login successful";
      setTimeout(() => location.href = "jobs.html", 1000);
    } 
    else {
      msg.style.color = "red";
      msg.innerText = "Invalid credentials";
    }
  });
}

// JOB SEARCH
function filterJobs() {
  const input = document.getElementById("searchJob").value.toLowerCase();
  const jobs = document.getElementsByClassName("job-card");

  for (let job of jobs) {
    job.style.display = job.innerText.toLowerCase().includes(input)
      ? "block" : "none";
  }
}

// APPLY JOB
function applyJob() {
  alert("Application submitted successfully!");
}

// LOGOUT
function logout() {
  localStorage.clear();
  location.href = "login.html";
}

let selectedJob = null;

// Select job
function selectJob(element) {
  // Remove previous selection
  const jobs = document.getElementsByClassName("job-card");
  for (let job of jobs) {
    job.classList.remove("selected");
  }

  // Add selection
  element.classList.add("selected");
  selectedJob = element.innerText;
}

// Apply job
function applyJob() {
  if (!selectedJob) {
    alert("Please select a job first!");
    return;
  }

  alert("Application submitted for:\n" + selectedJob);
}
