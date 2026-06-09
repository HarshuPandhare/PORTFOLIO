function switchTab(tabName) {
  // Update pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + tabName).classList.add('active');

  // Update tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + tabName).classList.add('active');

  // Update sidebar files
  document.querySelectorAll('.file-item').forEach(f => f.classList.remove('active'));
  document.querySelector(`.file-item[data-tab="${tabName}"]`).classList.add('active');
}

// Typing effect for role
const roles = [
  'AI/ML Developer & Software Engineer',
  'Computer Vision Engineer',
  'Android App Developer',
  'Machine Learning Enthusiast',
  'Open Source Contributor'
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const el = document.querySelector('.cursor-text');

function typeRole() {
  if (!el) return;
  const current = roles[roleIndex];
  if (!deleting) {
    el.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeRole, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeRole, deleting ? 40 : 65);
}

typeRole();
