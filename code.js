var app = document.getElementById('app');
  
  var typewriter = new Typewriter(app, {
    loop: false,
    delay: 75,
  });
  
  typewriter
    .pauseFor(2500)
      .typeString('به نام خدا')
      .start();
/////

var app2 = document.getElementById('app2');
  
  var typewriter = new Typewriter(app2, {
    loop: false,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
      .typeString('به نام خدا')
      .start();
//////
var app3 = document.getElementById('app3');
  
  var typewriter = new Typewriter(app3, {
    loop: false,
    delay: 75,
  });

   typewriter
    .pauseFor(2500)
      .typeString('سلام زندگیم امروز یکی از بهترین روز های عمرمون هست یکی از روز های قشنگ زندگیمون باهم دیگه روزی هست که این محبت کردنمون احساساتمون حسمون دوست داشتنمون به هم دیگه بیشتر بیشتر میشه وقتی این محبتت و دوست داشنت هست یعنی عشق یعنی یکی هست نگاهت کنه یکی که باهاش نفس میکیشی یکی که زندگیته یکی که این دستاتو محکم گرفته یکی که کل روز شب حواسش بهت هست  یکی هست که همیشه دوست داشته باشه یکی هست که جونش به جونت وصله نفساش به نفسات وصله من عاشق زندگی کردن با توام تو همه جونمی همه زندگیمی همه دنیامی ارامش من یعنی این بغلت دستات بوسه هات قلبت لبات کل وجودت ارامش منه ارامش محض میدونی یعنی چی یعنی اینکه حضور تو در هر ثانیه ی من همیشه حالم خوبه وقتی دارمت کنارم وقتی پیشمی وقتی دستاتو محکم گرفتم وقتی محکم بغلت کردم و همینجوری بوست میکنم تا بینهایت این قلبم برا تو همیشه میزنه تو باید بمونی برا همیشه واسه خودمی مهم نیست که چقدر از هم دوریم مهم اینکه قلبامون بهم نزدیکه مهم ترین چیز این قلب من تو هست زندگیم اصلا کیف میکنم وقتی کل روز شبم پیشتم کنارتم کلن اروم میشم وقتی پیشتم یه روزی میرسه که میام پیشت اینقدر محکم بوست کنم و بغلت کنم تمام خون تو این رگامی تو. تو قشنگترین ریتم این تپش قلب منی این روح من به بودنت محتاجه میدونی که تو تنها دلیل تپیدن این قلبمی تو همه چیز منی تو خود منی تو قشنگترین هدیه هستی که خدا بهم داده و از خدا هم تشکر میکنم که تورو برا همیشه بهم داده حس خوب میدونی یعنی چی یعنی اینکه هر بار عاشقش بشی هر بار بیشتر از قبل دوستش داشته باشی هر بار بیشتر از قبل حس کنی بودنش بهترین اتفاق زندیگته خیلی دوست دارم زندگیم دست های تو به این قلبم زندگی میبخشه توی این قلب من کسی جز خودت نیست وقتی دارمت یعنی دنیا رو دارم این قلبم پر از عشق توعه هر کسی هم گفت چه نسبتی باهاش داری میدونی چی میگم بهشون میگم ساکن سمت چپ سینه ام هستش عاشقانه دوست دارم زندگیم بهترین حس دنیاست وقتی اونی که همه زندگیته بهت میگه زندگیم تو همونی هستی که بهش جونمم میدم میمیرم براش عمرمی تو دلم یه گوشه خلوت میخواد که فقط من باشم و این لبات هی ببوسمت هی ببوسمت حتی تصورشم قشنگه که همه لحظه های عمرمو تو بغلت باشم عشقم فقط خواستم اینو بهت بگم که یه نوع یاداوری کنم که یکی هست تا اخرش دوست داره داشتنت بزرگترین دلخوشیه زندگیمه نگاهت که میکنم و دلیل زنده بودنمو مقابلم میبینم حتی اگه کل روزمم با تو سر کنم درست همون لحظه ای که میری دلم تنگ میشه برات همیشه پیشتم زندگیم درسته نتونستم برات چیزی بخرم در اصل که میتونستم بخرم برات مهم ترین چیز تو این روز که روز عشقه هدیه هست ولی هدیه همش خرس عطر ساعت اینا نیست مهم ترین هدیه این قلبمون هست قلبمون رو بهم هدیه دادیم بزرگتر از این هدیه مگه داریم خیلی دوست دارم زندگیم💋💗🌹💗🌹<br><br><br><br><br>💋💗🌹💗🌹خانومم زندگیم عشقم نفسم عمرم جونم ولنتاینت مبارک عشقمون زندگیمون پایدار باشه همیشه انشالله💗🌹💗🌹💋')
       .start();



import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

const playIconContainer = document.getElementById('play-icon');
const audioPlayerContainer = document.getElementById('audio-player-container');
const seekSlider = document.getElementById('seek-slider');
const volumeSlider = document.getElementById('volume-slider');
const muteIconContainer = document.getElementById('mute-icon');
let playState = 'play';
let muteState = 'unmute';

const playAnimation = lottieWeb.loadAnimation({
  container: playIconContainer,
  path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Play Animation",
});

const muteAnimation = lottieWeb.loadAnimation({
    container: muteIconContainer,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mute/mute.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Mute Animation",
});

playAnimation.goToAndStop(14, true);

playIconContainer.addEventListener('click', () => {
    if(playState === 'play') {
        audio.play();
        playAnimation.playSegments([14, 27], true);
        requestAnimationFrame(whilePlaying);
        playState = 'pause';
    } else {
        audio.pause();
        playAnimation.playSegments([0, 14], true);
        cancelAnimationFrame(raf);
        playState = 'play';
    }
});

muteIconContainer.addEventListener('click', () => {
    if(muteState === 'unmute') {
        muteAnimation.playSegments([0, 15], true);
        audio.muted = true;
        muteState = 'mute';
    } else {
        muteAnimation.playSegments([15, 25], true);
        audio.muted = false;
        muteState = 'unmute';
    }
});

const showRangeProgress = (rangeInput) => {
    if(rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    else audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});
volumeSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});





/** Implementation of the functionality of the audio player */

const audio = document.querySelector('audio');
const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
const outputContainer = document.getElementById('volume-output');
let raf = null;

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
}

const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}

const displayBufferedAmount = () => {
    const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
    audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
}

const whilePlaying = () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
    raf = requestAnimationFrame(whilePlaying);
}

if (audio.readyState > 0) {
    displayDuration();
    setSliderMax();
    displayBufferedAmount();
} else {
    audio.addEventListener('loadedmetadata', () => {
        displayDuration();
        setSliderMax();
        displayBufferedAmount();
    });
}

audio.addEventListener('progress', displayBufferedAmount);

seekSlider.addEventListener('input', () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    if(!audio.paused) {
        cancelAnimationFrame(raf);
    }
});

seekSlider.addEventListener('change', () => {
    audio.currentTime = seekSlider.value;
    if(!audio.paused) {
        requestAnimationFrame(whilePlaying);
    }
});

volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;

    outputContainer.textContent = value;
    audio.volume = value / 100;
});


















