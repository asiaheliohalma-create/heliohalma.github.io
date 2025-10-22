
function toggleMobileNav(){ const nav = document.querySelector('.nav'); if(!nav) return; nav.style.display = (nav.style.display==='flex')?'none':'flex'; }
document.addEventListener('DOMContentLoaded', ()=>{
  const links = document.querySelectorAll('.nav a');
  links.forEach(a=>{ if(location.pathname.endsWith(a.getAttribute('href'))){ a.style.background='var(--yellow)'; } });
});
