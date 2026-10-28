const screens = [...document.querySelectorAll('.screen')];
function showScreen(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>showScreen(btn.dataset.next)));
const balloonLines=['You make ordinary days feel extraordinary.','Your smile is one of my favourite things.','You deserve all the beautiful things in life.','And my heart is always cheering for you.'];
let popped=0;
document.querySelectorAll('.balloon').forEach((balloon,i)=>balloon.addEventListener('click',()=>{
 if(balloon.classList.contains('popped'))return;
 balloon.classList.add('popped');popped++;
 document.getElementById('balloon-message').textContent=balloonLines[i];
 document.querySelectorAll('#balloon-progress i')[i].classList.add('done');
 burst(balloon.getBoundingClientRect().left+balloon.offsetWidth/2,balloon.getBoundingClientRect().top+balloon.offsetHeight/2);
 if(popped===4)document.getElementById('balloon-continue').classList.remove('hidden');
}));
document.getElementById('blow-candle').addEventListener('click',()=>{
 document.getElementById('flame').classList.add('out');
 document.querySelector('.realistic-cake-wrap')?.classList.add('blown');
 document.getElementById('wish-copy').textContent='Dua made? May Allah bless this new year of your life with endless happiness, beautiful blessings, peace in your heart, and more joy than you could ever imagine. Ameen. 🤍';
 document.getElementById('blow-candle').classList.add('hidden');
 document.getElementById('wish-continue').classList.remove('hidden');
 burst(window.innerWidth/2,window.innerHeight/2);
});
document.getElementById('gift-open').addEventListener('click',()=>{
 document.getElementById('gift-open').classList.add('open');
 document.getElementById('gift-reveal').classList.remove('hidden');
 burst(window.innerWidth/2,window.innerHeight*.42,70);
});
document.getElementById('replay').addEventListener('click',()=>{
 popped=0;document.querySelectorAll('.balloon').forEach(b=>b.classList.remove('popped'));
 document.querySelectorAll('#balloon-progress i').forEach(i=>i.classList.remove('done'));
 document.getElementById('balloon-message').textContent='You make ordinary days feel extraordinary.';
 document.getElementById('balloon-continue').classList.add('hidden');
 document.getElementById('flame').classList.remove('out');
 document.querySelector('.realistic-cake-wrap')?.classList.remove('blown');
 document.getElementById('wish-copy').textContent="Tap the candle when you're ready.";
 document.getElementById('blow-candle').classList.remove('hidden');
 document.getElementById('wish-continue').classList.add('hidden');
 document.getElementById('gift-open').classList.remove('open');
 document.getElementById('gift-reveal').classList.add('hidden');
 showScreen('welcome');
});
function burst(x,y,count=34){
 const layer=document.getElementById('sparkles');
 const palette=['#ffe8a6','#fff8ed','#f4b8ca','#e7c98c','#f9dce5'];
 for(let i=0;i<count;i++){
  const el=document.createElement('span');
  el.className='burst-particle';
  el.textContent=['✦','✧','•','✦','·'][Math.floor(Math.random()*5)];
  const angle=(Math.PI*2*i/count)+(Math.random()-.5)*.5;
  const distance=55+Math.random()*105;
  el.style.setProperty('--x',`${x}px`);el.style.setProperty('--y',`${y}px`);
  el.style.setProperty('--dx',`${Math.cos(angle)*distance}px`);el.style.setProperty('--dy',`${Math.sin(angle)*distance}px`);
  el.style.setProperty('--spin',`${Math.random()*260-130}deg`);
  el.style.color=palette[Math.floor(Math.random()*palette.length)];
  el.style.fontSize=`${7+Math.random()*15}px`;
  el.style.animationDelay=`${Math.random()*90}ms`;
  layer.appendChild(el);setTimeout(()=>el.remove(),1100);
 }
 // A few tiny glowing circles add a soft glittering tail to the burst.
 for(let i=0;i<12;i++){
  const dot=document.createElement('span');dot.className='burst-particle';dot.textContent='•';
  const angle=Math.random()*Math.PI*2, distance=35+Math.random()*95;
  dot.style.setProperty('--x',`${x}px`);dot.style.setProperty('--y',`${y}px`);
  dot.style.setProperty('--dx',`${Math.cos(angle)*distance}px`);dot.style.setProperty('--dy',`${Math.sin(angle)*distance}px`);
  dot.style.setProperty('--spin','0deg');dot.style.color='#fff4c9';dot.style.fontSize=`${4+Math.random()*7}px`;
  dot.style.filter='blur(.4px) drop-shadow(0 0 5px #ffe8a6)';layer.appendChild(dot);setTimeout(()=>dot.remove(),1100);
 }
}
for(let i=0;i<35;i++){const el=document.createElement('span');el.className='sparkle';el.textContent=Math.random()>.5?'✦':'·';el.style.left=Math.random()*100+'%';el.style.top=Math.random()*100+'%';el.style.fontSize=(7+Math.random()*9)+'px';el.style.animationDelay=(Math.random()*4)+'s';document.getElementById('sparkles').appendChild(el);}

// Birthday countdown: local browser time, targeting 2 November 2026.
function updateCountdown(){
 const target = new Date(2026, 10, 2, 0, 0, 0).getTime();
 const now = Date.now();
 let remaining = Math.max(0, target-now);
 const day = 86400000, hour = 3600000, minute = 60000;
 const d = Math.floor(remaining/day); remaining -= d*day;
 const h = Math.floor(remaining/hour); remaining -= h*hour;
 const m = Math.floor(remaining/minute); remaining -= m*minute;
 const s = Math.floor(remaining/1000);
 const set = (id,val)=>{const el=document.getElementById(id);if(el)el.textContent=String(val).padStart(2,'0');};
 set('days',d);set('hours',h);set('minutes',m);set('seconds',s);
 const label=document.querySelector('.countdown-label');
 if(label && now>=target) label.textContent="TODAY IS YOUR DAY — LET'S CELEBRATE";
}
updateCountdown();
setInterval(updateCountdown,1000);


// Photo lightbox: opens each original photo separately without changing the image itself.
const photoButtons = [...document.querySelectorAll('.photo-open')];
const lightbox = document.getElementById('photo-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
let currentPhoto = 0;
function openPhoto(index){
 if(!photoButtons.length || !lightbox) return;
 currentPhoto = (index + photoButtons.length) % photoButtons.length;
 const button = photoButtons[currentPhoto];
 const thumbnail = button.querySelector('img');
 const source = button.dataset.photo || thumbnail?.src; lightboxImage.src = source;
 lightboxImage.alt = thumbnail?.alt || 'Photo memory';
 lightboxImage.onerror = () => { if (button.dataset.photo && lightboxImage.src !== new URL(button.dataset.photo, document.baseURI).href) lightboxImage.src = new URL(button.dataset.photo, document.baseURI).href; };
 lightboxImage.onload = () => { lightboxImage.style.visibility = 'visible'; };
 lightboxImage.style.visibility = 'visible';
 lightboxCaption.textContent = button.dataset.caption || '';
 lightbox.classList.remove('hidden'); document.body.classList.add('lightbox-open');
 document.getElementById('lightbox-close').focus();
}
function closePhoto(){if(!lightbox)return;lightbox.classList.add('hidden');document.body.classList.remove('lightbox-open');lightboxImage.removeAttribute('src');lightboxImage.onerror=null;}
photoButtons.forEach((button,index)=>button.addEventListener('click',()=>openPhoto(index)));
document.getElementById('lightbox-close')?.addEventListener('click',closePhoto);
document.getElementById('lightbox-prev')?.addEventListener('click',()=>openPhoto(currentPhoto-1));
document.getElementById('lightbox-next')?.addEventListener('click',()=>openPhoto(currentPhoto+1));
lightbox?.addEventListener('click',event=>{if(event.target===lightbox)closePhoto();});
document.addEventListener('keydown',event=>{
 if(lightbox && !lightbox.classList.contains('hidden')){
  if(event.key==='Escape')closePhoto();
  if(event.key==='ArrowLeft')openPhoto(currentPhoto-1);
  if(event.key==='ArrowRight')openPhoto(currentPhoto+1);
 }
});

// Soft romantic instrumental: starts automatically on interaction
const birthdayAudio = document.getElementById('birthday-audio');
const musicToggle = document.getElementById('music-toggle');

if (birthdayAudio && musicToggle) {
  // Attempt to start music when the website opens
  birthdayAudio.volume = 0.5;

  const startMusic = async () => {
    try {
      await birthdayAudio.play();
      musicToggle.textContent = '♫ Pause music';
      musicToggle.setAttribute('aria-pressed', 'true');
      return true;
    } catch (error) {
      // Autoplay may be blocked by the browser
      musicToggle.textContent = '♫ Play our song';
      musicToggle.setAttribute('aria-pressed', 'false');
      return false;
    }
  };

  // Try autoplay on page load
  startMusic();

  // If autoplay is blocked, start music on the first visitor interaction
  const startOnFirstInteraction = async () => {
    if (birthdayAudio.paused) {
      await startMusic();
    }

    if (!birthdayAudio.paused) {
      document.removeEventListener('click', startOnFirstInteraction);
      document.removeEventListener('touchstart', startOnFirstInteraction);
    }
  };

  document.addEventListener('click', startOnFirstInteraction);
  document.addEventListener('touchstart', startOnFirstInteraction, {
    passive: true
  });

  // Music button: play or pause
  musicToggle.addEventListener('click', async () => {
    if (birthdayAudio.paused) {
      await startMusic();
    } else {
      birthdayAudio.pause();
      musicToggle.textContent = '♫ Play our song';
      musicToggle.setAttribute('aria-pressed', 'false');
    }
  });
}
