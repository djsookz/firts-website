/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';
		

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#607D8B';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#26AFF3';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	"songs": [
		{
			"name": "Sound 23",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 23.mp3",
			"cover_art_url": "/img/Logoo.png"
		},
		{
			"name": "Sound 22",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 22.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 21",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 21.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 20",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 20.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 19",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 19.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 18",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 18.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 17",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 17.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 16",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 16 (Sold).mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 15",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 15.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 14",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 14 (Sold).mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 13",
			"artist": "Dj Sookz",
			"url": "/audio/Sound 13.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 12",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 12.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 11",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 11.mp3",
			"cover_art_url": "/img/Logoo.png"	},
		{
			"name": "Sound 10",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 10.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 9",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 9.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 8",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 8.mp3",
			"cover_art_url": "/img/Logoo.png"	},
		{
			"name": "Sound 7",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 7.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 6",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 6.mp3",
			"cover_art_url": "/img/Logoo.png"	},
		{
			"name": "Sound 5",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 5 (Sold).mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 4",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 4.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 3",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 3 (Sold).mp3",
			"cover_art_url": "/img/Logoo.png"	},
		{
			"name": "Sound 2",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 2.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sound 1",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sound 1.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Dimaka - Narkotik",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sookz - Narkotik.mp3",
			"cover_art_url": "/img/narkotik.png"		},
		{
			"name": "Dimaka - Usili",
			"artist": "Dj Sookz",
			
			"url": "/audio/Dimaka - Usili.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Dimaka - Monster",
			"artist": "Dj Sookz",
			
			"url": "/audio/Dimaka - Monster.mp3",
			"cover_art_url": "/img/Logoo.png"		},
		{
			"name": "Sookz ft. Chemshirov & Jordan S. - Jungle",
			"artist": "Dj Sookz",
			
			"url": "/audio/Sookz ft. Chemshirov & Jordan S. - Jungle.mp3",
			"cover_art_url": "/img/jungle.png"		},
		{
			"name": "Zer0 Gang - Tip Top ",
			"artist": "Zer0 Gang",
			
			"url": "/audio/Zer0 Gang - Tip Top.mp3",
			"cover_art_url": "/img/zg.jpg"		},
		{
			"name": "Nik0 x Vali0 x G043V - Filmari",
			"artist": "Zer0 Gang",
			
			"url": "/audio/Nik0  x  Vali0  x G043V - FILMARI  (prod.by Sookz).mp3",
			"cover_art_url": "/img/zg.jpg"		},
		{
			"name": "Nik0 x Vali0 x G043V - Rapari",
			"artist": "Zer0 Gang",
			
			"url": "/audio/Nik0 x Vali0 x G043V - RAPARI (prod.by Sookz).mp3",
			"cover_art_url": "/img/zg.jpg"		},
		{
			"name": "Nik0 x Vali0 x G043V - Akciya RESPECT",
			"artist": "Zer0 Gang",
			
			"url": "/audio/Nik0 x Vali0 x G043V - Akciya RESPECT [Official Audio].mp3",
			"cover_art_url": "/img/zg.jpg"		},
		{
			"name": "Nik0 x Vali0 x G043V - KINTI PILEYA",
			"artist": "Zer0 Gang",
			
			"url": "/audio/Nik0 x Vali0 x G043V - KINTI PILEYA [Official Audio].mp3",
			"cover_art_url": "/img/zg.jpg"		},
            {
			"name": "Vessou - Vyprosa (Cover by Dimaka)",
			"artist": "Dj Sookz",
			
			"url": "/audio/Vessou - Vyprosa (Cover by Dimaka).mp3",
			"cover_art_url": "/img/vyprosa.jpg"		},
            {
			"name": "VessoU - Mashina na vremeto (Cover by Dimaka)",
			"artist": "Dimaka",
			
			"url": "/audio/Dimaka - Mashina na vreemeto.mp3",
			"cover_art_url": "/img/Mashina.jpg"		},
	],
  "callbacks": {
        'play': function(){
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function(){
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
  waveforms: {
    sample_rate: 50
  }
});
document.getElementById('large-visualization').style.height = document.getElementById('album-art').offsetWidth + 'px';
console.log('It works')

$(document).ready(function () {
    $('.submit').click(function (event) {
    console.log('Clicked button')
    
    var emial = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('status')
    statusElm.empty()
    
    if(email.length > 5 && email.includes ('@') && email.includes('.')){
        statusElm.append('<div>Emial is valid</div>')
    } else{
        event.preventDefault()
        statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >= 2) {
        statusElm.append('<div>Subject is valid</div>')
    }else{
        event.preventDefault()
        statusElm.append('<div>Subject is not valid</div>')
    }

    if(message.length >= 10) {
        statusElm.append('<div>Message is valid</div>')
    }else{
        event.preventDefault()
        statusElm.append('<div>Messaget is not valid</div>')
    }
    })
})