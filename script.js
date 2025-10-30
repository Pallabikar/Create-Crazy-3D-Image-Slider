// audio control + hover pause behavior
const audio = document.getElementById('bg-sound');
const playBtn = document.getElementById('play-btn');
const sliderAreas = document.querySelectorAll('.section'); // pause audio on hover over any section

// set default gentle volume
if (audio) audio.volume = 0.25;

// Play button (user gesture to allow playback)
playBtn.addEventListener('click', (e)=>{
  audio.play().catch(()=>{/* autoplay blocked; user gesture required — button click is the gesture */});
  playBtn.style.display = 'none';
});

// Pause audio when user hovers over any section, resume on leave
sliderAreas.forEach(s => {
  s.addEventListener('mouseenter', ()=> audio.pause());
  s.addEventListener('mouseleave', ()=> { if (playBtn.style.display==='none') audio.play(); });
});

// Smooth scroll for nav anchors
document.querySelectorAll('.top-nav a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({behavior:'smooth', block:'center'});
  });
});
