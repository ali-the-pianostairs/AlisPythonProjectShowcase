// Tab switching
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// Copy button
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.parentElement.innerText.replace(/^Copy\s*/, '');
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = 'Copy'), 1500);
    });
  });
});

// Expand/Collapse code
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrapper = btn.parentElement;
    wrapper.classList.toggle('open');
    btn.textContent = wrapper.classList.contains('open') ? 'Collapse Code' : 'Expand Code';
  });
});
