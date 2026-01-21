document.getElementById("searchForm").addEventListener("submit", function(e) {
e.preventDefault();
const search = document.getElementById("searchInput").value;
window.location.href = "jobs.html?search=" + search;
});