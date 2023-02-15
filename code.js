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








/*
	AUTHOR: Osvaldas Valutis, www.osvaldas.info
*/
(function($, window, document, undefined) {
    var isTouch = 'ontouchstart' in window,
        eStart = isTouch ? 'touchstart' : 'mousedown',
        eMove = isTouch ? 'touchmove' : 'mousemove',
        eEnd = isTouch ? 'touchend' : 'mouseup',
        eCancel = isTouch ? 'touchcancel' : 'mouseup',
        secondsToTime = function(secs) {
            var hours = Math.floor(secs / 3600),
                minutes = Math.floor(secs % 3600 / 60),
                seconds = Math.ceil(secs % 3600 % 60);
            return (hours == 0 ? '' : hours > 0 && hours.toString().length < 2 ? '0' + hours + ':' : hours + ':') + (minutes.toString().length < 2 ? '0' + minutes : minutes) + ':' + (seconds.toString().length < 2 ? '0' + seconds : seconds);
        },
        canPlayType = function(file) {
            var audioElement = document.createElement('audio');
            return !!(audioElement.canPlayType && audioElement.canPlayType('audio/' + file.split('.').pop().toLowerCase() + ';').replace(/no/, ''));
        };

    $.fn.audioPlayer = function(params) {
        var params = $.extend({
                classPrefix: 'audioplayer',
                strPlay: '',
                strPause: '',
                strVolume: ''
            }, params),
            cssClass = {},
            cssClassSub = {
                playPause: 'playpause',
                playing: 'playing',
                time: 'time',
                timeCurrent: 'time-current',
                timeDuration: 'time-duration',
                bar: 'bar',
                barLoaded: 'bar-loaded',
                barPlayed: 'bar-played',
                volume: 'volume',
                volumeButton: 'volume-button',
                volumeAdjust: 'volume-adjust',
                noVolume: 'novolume',
                mute: 'mute',
                mini: 'mini'
            };

        for (var subName in cssClassSub)
            cssClass[subName] = params.classPrefix + '-' + cssClassSub[subName];

        this.each(function() {
            if ($(this).prop('tagName').toLowerCase() != 'audio')
                return false;

            var $this = $(this),
                audioFile = $this.attr('src'),
                isAutoPlay = $this.get(0).getAttribute('autoplay'),
                isAutoPlay = isAutoPlay === '' || isAutoPlay === 'autoplay' ? true : false,
                isLoop = $this.get(0).getAttribute('loop'),
                isLoop = isLoop === '' || isLoop === 'loop' ? true : false,
                isSupport = false;

            if (typeof audioFile === 'undefined') {
                $this.find('source').each(function() {
                    audioFile = $(this).attr('src');
                    if (typeof audioFile !== 'undefined' && canPlayType(audioFile)) {
                        isSupport = true;
                        return false;
                    }
                });
            } else if (canPlayType(audioFile)) isSupport = true;

            var thePlayer = $('<div class="' + params.classPrefix + '">' + (isSupport ? $('<div>').append($this.eq(0).clone()).html() : '<embed src="' + audioFile + '" width="0" height="0" volume="100" autostart="' + isAutoPlay.toString() + '" loop="' + isLoop.toString() + '" />') + '<div class="' + cssClass.playPause + '" title="' + params.strPlay + '"><a href="#">' + params.strPlay + '</a></div></div>'),
                theAudio = isSupport ? thePlayer.find('audio') : thePlayer.find('embed'),
                theAudio = theAudio.get(0);

            if (isSupport) {
                thePlayer.find('audio').css({
                    'width': 0,
                    'height': 0,
                    'visibility': 'hidden'
                });
                thePlayer.append('<div class="' + cssClass.time + ' ' + cssClass.timeCurrent + '"></div><div class="' + cssClass.bar + '"><div class="' + cssClass.barLoaded + '"></div><div class="' + cssClass.barPlayed + '"></div></div><div class="' + cssClass.time + ' ' + cssClass.timeDuration + '"></div><div class="' + cssClass.volume + '"><div class="' + cssClass.volumeButton + '" title="' + params.strVolume + '"><a href="#">' + params.strVolume + '</a></div><div class="' + cssClass.volumeAdjust + '"><div><div></div></div></div></div>');

                var theBar = thePlayer.find('.' + cssClass.bar),
                    barPlayed = thePlayer.find('.' + cssClass.barPlayed),
                    barLoaded = thePlayer.find('.' + cssClass.barLoaded),
                    timeCurrent = thePlayer.find('.' + cssClass.timeCurrent),
                    timeDuration = thePlayer.find('.' + cssClass.timeDuration),
                    volumeButton = thePlayer.find('.' + cssClass.volumeButton),
                    volumeAdjuster = thePlayer.find('.' + cssClass.volumeAdjust + ' > div'),
                    volumeDefault = 0,
                    adjustCurrentTime = function(e) {
                        theRealEvent = isTouch ? e.originalEvent.touches[0] : e;
                        theAudio.currentTime = Math.round((theAudio.duration * (theRealEvent.pageX - theBar.offset().left)) / theBar.width());
                    },
                    adjustVolume = function(e) {
                        theRealEvent = isTouch ? e.originalEvent.touches[0] : e;
                        theAudio.volume = Math.abs((theRealEvent.pageX - volumeAdjuster.offset().left) / volumeAdjuster.width());
                    },
                    updateLoadBar = setInterval(function() {
                      if (theAudio.buffered.length > 0) {
                        barLoaded.width((theAudio.buffered.end(0) / theAudio.duration) * 100 + '%');
                        if (theAudio.buffered.end(0) >= theAudio.duration)
                            clearInterval(updateLoadBar);
                      }
                    }, 100);

                var volumeTestDefault = theAudio.volume,
                    volumeTestValue = theAudio.volume = 0.111;
                if (Math.round(theAudio.volume * 1000) / 1000 == volumeTestValue) theAudio.volume = volumeTestDefault;
                else thePlayer.addClass(cssClass.noVolume);

                timeDuration.html('&hellip;');
                timeCurrent.text(secondsToTime(0));

                theAudio.addEventListener('loadeddata', function() {
                    timeDuration.text(secondsToTime(theAudio.duration));
                    volumeAdjuster.find('div').width(theAudio.volume * 100 + '%');
                    volumeDefault = theAudio.volume;
                });

                theAudio.addEventListener('timeupdate', function() {
                    timeCurrent.text(secondsToTime(theAudio.currentTime));
                    barPlayed.width((theAudio.currentTime / theAudio.duration) * 100 + '%');
                });

                theAudio.addEventListener('volumechange', function() {
                    volumeAdjuster.find('div').width(theAudio.volume * 100 + '%');
                    if (theAudio.volume > 0 && thePlayer.hasClass(cssClass.mute)) thePlayer.removeClass(cssClass.mute);
                    if (theAudio.volume <= 0 && !thePlayer.hasClass(cssClass.mute)) thePlayer.addClass(cssClass.mute);
                });

                theAudio.addEventListener('ended', function() {
                    thePlayer.removeClass(cssClass.playing);
                });

                theBar.on(eStart, function(e) {
                        adjustCurrentTime(e);
                        theBar.on(eMove, function(e) {
                            adjustCurrentTime(e);
                        });
                    })
                    .on(eCancel, function() {
                        theBar.unbind(eMove);
                    });

                volumeButton.on('click', function() {
                    if (thePlayer.hasClass(cssClass.mute)) {
                        thePlayer.removeClass(cssClass.mute);
                        theAudio.volume = volumeDefault;
                    } else {
                        thePlayer.addClass(cssClass.mute);
                        volumeDefault = theAudio.volume;
                        theAudio.volume = 0;
                    }
                    return false;
                });

                volumeAdjuster.on(eStart, function(e) {
                        adjustVolume(e);
                        volumeAdjuster.on(eMove, function(e) {
                            adjustVolume(e);
                        });
                    })
                    .on(eCancel, function() {
                        volumeAdjuster.unbind(eMove);
                    });
            } else thePlayer.addClass(cssClass.mini);

            if (isAutoPlay) thePlayer.addClass(cssClass.playing);

            thePlayer.find('.' + cssClass.playPause).on('click', function() {
                if (thePlayer.hasClass(cssClass.playing)) {
                    $(this).attr('title', params.strPlay).find('a').html(params.strPlay);
                    thePlayer.removeClass(cssClass.playing);
                    isSupport ? theAudio.pause() : theAudio.Stop();
                } else {
                    $(this).attr('title', params.strPause).find('a').html(params.strPause);
                    thePlayer.addClass(cssClass.playing);
                    isSupport ? theAudio.play() : theAudio.Play();
                }
                return false;
            });

            $this.replaceWith(thePlayer);
        });
        return this;
    };
})(jQuery, window, document);









