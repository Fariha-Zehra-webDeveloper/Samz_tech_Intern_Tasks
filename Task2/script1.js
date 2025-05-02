function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.querySelector('.hamburger');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close sidebar when clicking outside
document.getElementById('overlay').addEventListener('click', toggleSidebar);