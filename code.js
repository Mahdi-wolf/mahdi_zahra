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





       var music = document.querySelector('.music-element')
       var playBtn = document.querySelector('.play')
       var seekbar = document.querySelector('.seekbar')
       var currentTime = document.querySelector('.current-time')
       var duration = document.querySelector('.duration')
       
       
       function handlePlay() {
           if (music.paused) {
               music.play();
               playBtn.class0Name = 'pause'
               playBtn.innerHTML = '<i class="material-icons">pause</i>'
           } else {
               music.pause();
               playBtn.className = 'play'
               playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
           }
           music.addEventListener('ended', function () {
               playBtn.className = 'play'
               playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
               music.currentTime = 0
           });
       }
       
       
       music.onloadeddata = function () {
           seekbar.max = music.duration
           var ds = parseInt(music.duration % 60)
           var dm = parseInt((music.duration / 60) % 60)
           duration.innerHTML = dm + ':' + ds
       }
       music.ontimeupdate = function () { seekbar.value = music.currentTime }
       handleSeekBar = function () { music.currentTime = seekbar.value }
       music.addEventListener('timeupdate', function () {
           var cs = parseInt(music.currentTime % 60)
           var cm = parseInt((music.currentTime / 60) % 60)
           currentTime.innerHTML = cm + ':' + cs
       }, false)
       
       
       
       var favIcon = document.querySelector('.favorite')
       function handleFavorite() {
           favIcon.classList.toggle('active');
       }
       
       var repIcon = document.querySelector('.repeat')
       function handleRepeat() {
           if (music.loop == true) {
               music.loop = false
               repIcon.classList.toggle('active')
           }
           else {
               music.loop = true
               repIcon.classList.toggle('active')
           }
       }
       
       var volIcon = document.querySelector('.volume')
       var volBox = document.querySelector('.volume-box')
       var volumeRange = document.querySelector('.volume-range')
       var volumeDown = document.querySelector('.volume-down')
       var volumeUp = document.querySelector('.volume-up')
       
       function handleVolume() {
           volIcon.classList.toggle('active')
           volBox.classList.toggle('active')
       }
       
       volumeDown.addEventListener('click', handleVolumeDown);
       volumeUp.addEventListener('click', handleVolumeUp);
       
       function handleVolumeDown() {
           volumeRange.value = Number(volumeRange.value) - 20
           music.volume = volumeRange.value / 100
       }
       function handleVolumeUp() {
           volumeRange.value = Number(volumeRange.value) + 20
           music.volume = volumeRange.value / 100
       }

















