function showCourseDetails(title, description) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('courseModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('courseModal').style.display = 'none';
}

// Optional: Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById('courseModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
