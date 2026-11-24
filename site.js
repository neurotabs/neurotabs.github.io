(function(){
  var yr = document.getElementById('year');
  if(yr) yr.textContent = new Date().getFullYear();
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Theme toggle */
  var root = document.documentElement;
  document.getElementById('themeToggle').addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try{ localStorage.setItem('theme', next); }catch(e){}
  });

  /* Back to top */
  var toTop = document.getElementById('toTop');
  window.addEventListener('scroll', function(){ toTop.classList.toggle('show', window.scrollY > 400); }, { passive: true });
  toTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
})();
