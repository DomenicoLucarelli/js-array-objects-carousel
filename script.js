const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let thumbnailsEl = document.getElementById('thumbnails');
let imageEl = document.getElementById('image');
let upArrowEl = document.getElementById('upArrow');
let downArrowEl = document.getElementById('downArrow');
let index = 0;
let titleEl = document.getElementById('title');
let textEl = document.getElementById('text');
let startEl = document.getElementById('start');
let stoptEl = document.getElementById('stop');
let reverseEl = document.getElementById('reverse');



for(let i=0; i< images.length; i++){
    
    let newEl = document.createElement('img');
    newEl.src = images[i].image ;
    newEl.classList.add('thumbStyle');
    thumbnailsEl.append(newEl);
    
}


imageEl.src = images[index].image;

titleEl.innerHTML = images[index].title;

textEl.innerHTML = images[index].text;

let thumbImages = document.querySelectorAll('.thumbStyle');

thumbImages[index].classList.add('active');

downArrowEl.addEventListener('click', scrollDown);

upArrowEl.addEventListener('click', scrollUp);

// let autoDownScroll = setInterval(scrollDown , 3000);

startEl.addEventListener('click', function(){
    let autoScroll = setInterval(scrollDown, 3000)
    
    stoptEl.addEventListener('click', function(){
        clearInterval(autoScroll)
        
    })
    
})

reverseEl.addEventListener('click', function(){
    let reverseScroll = setInterval(scrollUp, 3000);

    stoptEl.addEventListener('click', function(){
        clearInterval(reverseScroll)
        
    })
})


















// ---------------------FUNCTIONS------------------------------

function scrollDown(){
    index++ ;

    if(index <= images.length - 1){

        imageEl.src = images[index].image;

        titleEl.innerHTML = images[index].title;

        textEl.innerHTML = images[index].text;

        thumbImages[index].classList.add('active');

        thumbImages[index - 1].classList.remove('active');



    }else{
        index = 0 ;

        imageEl.src = images[index].image;

        titleEl.innerHTML = images[index].title;

        textEl.innerHTML = images[index].text;

        thumbImages[index].classList.add('active');

        thumbImages[images.length - 1].classList.remove('active');

    }
    
}


function scrollUp(){
    index--

    if(index < 0){

        index = images.length - 1;

        imageEl.src = images[index].image;

        titleEl.innerHTML = images[index].title;

        textEl.innerHTML = images[index].text;

        thumbImages[index].classList.add('active');

        thumbImages[images.length - 1 - index].classList.remove('active');



    }else{

        imageEl.src = images[index].image;

        titleEl.innerHTML = images[index].title;

        textEl.innerHTML = images[index].text;

        thumbImages[index].classList.add('active');

        thumbImages[index + 1].classList.remove('active');


    }

}