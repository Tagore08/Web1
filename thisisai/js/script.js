const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>50)});
const hamburger=document.getElementById('hamburger'),mm=document.getElementById('mobileMenu');
hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');mm.classList.toggle('active');document.body.style.overflow=mm.classList.contains('active')?'hidden':''});
function closeMenu(){hamburger.classList.remove('active');mm.classList.remove('active');document.body.style.overflow=''}
function toggleBlock(el){const b=el.closest('.cat-block'),w=b.classList.contains('open');document.querySelectorAll('.cat-block.open').forEach(x=>x.classList.remove('open'));if(!w){b.classList.add('open');setTimeout(()=>{b.scrollIntoView({behavior:'smooth',block:'start'})},100)}}
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active')})},{threshold:.1,rootMargin:'0px 0px -20px 0px'});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t)window.scrollTo({top:t.offsetTop-90,behavior:'smooth'})})});
