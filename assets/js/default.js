(function(main) {

    // The global jQuery object is passed as a parameter
    main(window.jQuery, window, document);

  }(function($, window, document) {

    // The $ is now locally scoped 
    $(function() {

      var data = { 
        lessons: [
          { 
            unit: 1,
            songs: [
              { 
                title: 'Hot Cross Buns',
                src: 'https://www.hoffmanacademy.com/resources/audio/01_Hot_Cross_Buns.mp3',
                delay: false,
              },
              { 
                title: 'Five Woodpeckers',
                src: 'https://www.hoffmanacademy.com/resources/audio/04_Five_Woodpeckers_-_Practice.mp3',
                delay: false,
              },
              { 
                title: 'Frog In The Middle',
                src: 'https://www.hoffmanacademy.com/resources/audio/05_Frog_In_The_Middle.mp3',
                delay: false,
              },
              { 
                title: 'Listen For Bells',
                src: 'https://www.hoffmanacademy.com/resources/audio/08_Listen_for_Bells.mp3',
                delay: false,
              },
            ],
          },
          { 
            unit: 2,
            songs: [
              { 
                title: 'Mouse In The House',
                src: 'https://www.hoffmanacademy.com/resources/audio/01_Mouse_in_the_House.mp3',
                delay: false,
              },
              { 
                title: 'Rain Come Wet Me',
                src: 'https://www.hoffmanacademy.com/resources/audio/02_Rain_Come_Wet_Me.mp3',
                delay: false,
              },
              { 
                title: 'Let Us Chase The Squirrel',
                src: 'https://www.hoffmanacademy.com/resources/audio/03_Let_Us_Chase_The_Squirrel.mp3',
                delay: false,
              },
              { 
                title: 'Who\'s That?',
                src: 'https://www.hoffmanacademy.com/resources/audio/04_Who_s_That_.mp3',
                delay: false,
              },
              { 
                title: 'Dinah',
                src: 'https://www.hoffmanacademy.com/resources/audio/05_Dinah.mp3',
                delay: false,
              },
              { 
                title: 'The Wild Horses',
                src: 'https://www.hoffmanacademy.com/resources/audio/06_The_Wild_Horses.mp3',
                delay: false,
              },
            ],
          },
          { 
            unit: 3,
            songs: [
              { 
                title: 'Cuckoo',
                src: 'https://www.hoffmanacademy.com/resources/audio/02_Cuckoo.mp3',
                delay: false,
              },
              { 
                title: 'Silver Birch Trees',
                src: 'https://www.hoffmanacademy.com/resources/audio/01_Silver_Birch_Tree_-_Practice.mp3',
                delay: false,
              },
              { 
                title: 'Love Somebody',
                src: 'https://www.hoffmanacademy.com/resources/audio/03_Love_Somebody.mp3',
                delay: false,
              },
            ],
          },
          { 
            unit: 4,
            songs: [
              { 
                title: 'Mary Had A Little Lamb',
                src: 'https://www.hoffmanacademy.com/resources/audio/01_Mary_Had_A_Little_Lamb_-_Practice.mp3',
                delay: false,
              },
              { 
                title: 'Oranges and Lemons',
                src: 'https://www.hoffmanacademy.com/resources/audio/02_Oranges_and_Lemons.mp3',
                delay: false,
              },
              { 
                title: 'I Have A Dog',
                src: 'https://www.hoffmanacademy.com/resources/audio/03_I_Have_A_Dog.mp3',
                delay: false,
              },
              { 
                title: 'Debka Horra',
                src: 'https://www.hoffmanacademy.com/resources/audio/04_Debka_Hora.mp3',
                delay: false,
              },
            ],
          },
          { 
            unit: 5,
            songs: [
              { 
                title: 'Ode To Joy',
                src: 'https://www.hoffmanacademy.com/resources/audio/01_Ode_to_Joy.mp3',
                delay: false,
              },
              { 
                title: 'Honeybee',
                src: 'https://www.hoffmanacademy.com/resources/audio/02_Honeybee.mp3',
                delay: false,
              },
              { 
                title: 'I Hear The Mill Wheel',
                src: 'https://www.hoffmanacademy.com/resources/audio/03_I_Hear_The_Mill_Wheel.mp3',
                delay: false,
              },
              { 
                title: 'Yankee Doodle',
                src: 'https://www.hoffmanacademy.com/resources/audio/04_Yankee_Doodle.mp3',
                delay: false,
              },
              { 
                title: 'Bagpipe',
                src: 'https://www.hoffmanacademy.com/resources/audio/06_Bagpipe.mp3',
                delay: false,
              },
              { 
                title: 'La Cinquantaine',
                src: 'https://www.hoffmanacademy.com/resources/audio/12_La_Cinquantaine_(piano).mp3',
                delay: true,
              },
            ],
          },
          { 
            unit: 6,
            songs: [
              { 
                title: 'Row, Row, Row Your Boat',
                src: 'https://www.hoffmanacademy.com/resources/audio/01_Row,_Row,_Row,_Your_Boat_-_Practice.mp3',
                delay: false,
              },
              { 
                title: 'Lady, Lady',
                src: 'https://www.hoffmanacademy.com/resources/audio/04_Lady,_Lady_(piano_solo).mp3',
                delay: true,
              },
              { 
                title: 'Harvest Dance',
                src: 'https://www.hoffmanacademy.com/resources/audio/03_Harvest_Dance.mp3',
                delay: false,
              },
              { 
                title: 'Au Claire De Lune',
                src: 'https://www.hoffmanacademy.com/resources/audio/08_Au_Clair_de_la_Lune_(piano_solo).mp3',
                delay: true,
              },
              { 
                title: 'Kye, Kye, Kule',
                src: 'https://www.hoffmanacademy.com/resources/audio/10_Kye_Kye_Kule_(piano_solo).mp3',
                delay: false,
              },
            ],
          },
        ],
      }; 
  
      $.templates({
        accordiansTmpl: 
          '  <div data-role="collapsibleset" data-theme="a" data-content-theme="a">' +
          '    {{for lessons tmpl="accordianTmpl" /}}' +
          '  </div>',
        accordianTmpl:
          '    <div data-role="collapsible">' +
          '      <h3>Unit {{:unit}}</h3>' +
          '      <ul data-role="listview">' +
          '        {{for songs tmpl="songsTmpl" /}}' +
          '      </ul>' +
          '    </div>',
        songsTmpl: 
          '      <li>' +
          '        <h4>{{:title}}</h4>' +
          '        <div>' +
          '          <audio class="video-js vjs-default-skin{{if delay}} delayPlay{{/if}}" controls preload="none" width="600" height="50" data-setup="{}">' +
          '            <source src="{{:src}}" type="audio/mp3"/>' +
          '          </audio>' +
          '        </div>' +
          '      </li>',
      });
  
      var html = $.templates.accordiansTmpl.render(data);
      $('#mainContainer').html(html).trigger('create');
      
      var activePlayer = null;
      var clicker = videojs(document.querySelector(".clicker"));
      clicker.on("ended", function() {
        if (activePlayer) {
          activePlayer.play();
        }
      });
      
      var delayPlayers = document.querySelectorAll(".delayPlay");
      for (var player of delayPlayers) {
        videojs(player).volume(1);
        videojs(player).ready(function() {
           var player = this;
           player.delayed = false;
        });
        
        videojs(player).on("play", function(){
          var p = this;
       
          if (!p.delayed && p.currentTime() === 0) {
            p.pause();
          
            setTimeout(function(){
              p.delayed = true;
              
              activePlayer = p;
              clicker.play();
            }, 5000);
          }  else {
            activePlayer = null;
          }
        });
        
        videojs(player).on("pause", function(){
          var p = this;
          if (p.delayed) {
            p.delayed = false; 
          }
        });
      }
      
    });
  }
));
