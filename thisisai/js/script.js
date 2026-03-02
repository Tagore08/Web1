(function(){
var navbar=document.getElementById('navbar');
var hamburger=document.getElementById('hamburger');
var mobileMenu=document.getElementById('mobileMenu');
var mobileLinks=document.querySelectorAll('.mobile-menu-link');
var catTops=document.querySelectorAll('.cat-top');
var reveals=document.querySelectorAll('.reveal');
var anchors=document.querySelectorAll('a[href^="#"]');

window.addEventListener('scroll',function(){
if(window.scrollY>50){navbar.classList.add('scrolled')}
else{navbar.classList.remove('scrolled')}
},{passive:true});

function closeMenu(){
hamburger.classList.remove('active');
mobileMenu.classList.remove('active');
document.body.style.overflow='';
}

hamburger.addEventListener('click',function(){
hamburger.classList.toggle('active');
mobileMenu.classList.toggle('active');
if(mobileMenu.classList.contains('active')){
document.body.style.overflow='hidden';
}else{
document.body.style.overflow='';
}
});

for(var i=0;i<mobileLinks.length;i++){
mobileLinks[i].addEventListener('click',closeMenu);
}

function toggleBlock(el){
var block=el.closest('.cat-block');
var wasOpen=block.classList.contains('open');
var allOpen=document.querySelectorAll('.cat-block.open');
for(var j=0;j<allOpen.length;j++){
allOpen[j].classList.remove('open');
}
if(!wasOpen){
block.classList.add('open');
setTimeout(function(){
var top=block.getBoundingClientRect().top+window.pageYOffset-90;
window.scrollTo({top:top,behavior:'smooth'});
},100);
}
}

for(var k=0;k<catTops.length;k++){
catTops[k].addEventListener('click',function(){
toggleBlock(this);
});
catTops[k].addEventListener('keydown',function(e){
if(e.key==='Enter'||e.key===' '){
e.preventDefault();
toggleBlock(this);
}
});
}

if('IntersectionObserver' in window){
var obs=new IntersectionObserver(function(entries){
for(var m=0;m<entries.length;m++){
if(entries[m].isIntersecting){
entries[m].target.classList.add('active');
obs.unobserve(entries[m].target);
}
}
},{threshold:0.1,rootMargin:'0px 0px -20px 0px'});
for(var n=0;n<reveals.length;n++){
obs.observe(reveals[n]);
}
}else{
for(var p=0;p<reveals.length;p++){
reveals[p].classList.add('active');
}
}

for(var q=0;q<anchors.length;q++){
anchors[q].addEventListener('click',function(e){
var href=this.getAttribute('href');
if(href && href.length>1 && href.charAt(0)==='#'){
e.preventDefault();
var target=document.querySelector(href);
if(target){
var top=target.getBoundingClientRect().top+window.pageYOffset-90;
window.scrollTo({top:top,behavior:'smooth'});
}
}
});
}

})();
