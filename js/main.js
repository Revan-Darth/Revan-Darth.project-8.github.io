var money = [
    {
        text: "Bitcoin",
        value: 1,
        selected: true,
        imageSrc: "../images/icons/bitcoin.svg"
    },
    {
        text: "Litecoin",
        value: 2,
        selected: false,
        imageSrc: "../images/icons/Litecoin.svg"
    },
     {
        text: "Dogiecoin",
        value: 3,
        selected: false,
        imageSrc: "../images/icons/Dogie.svg"
    },
     {
        text: "Ethereum",
        value: 4,
        selected: false,
        imageSrc: "../images/icons/Etherium.svg"
    },
];
var country = [
    {
        text: "USD",
        value: 1,
        selected: true,
        imageSrc: "../images/icons/USA.svg"
    },
    {
        text: "EUR",
        value: 2,
        selected: false,
        imageSrc: "../images/icons/Euro.svg"
    },
     {
        text: "RUB",
        value: 3,
        selected: false,
        imageSrc: "../images/icons/Rus.png"
    },
     {
        text: "PLN",
        value: 4,
        selected: false,
        imageSrc: "../images/icons/Poland.svg"
    },
];



let openPopUp = document.querySelector('.header-top__dots');
let closePopUp = document.querySelector('.popup__close');
let PopUp = document.querySelector('.popup');
let bodyLock = document.querySelector('body');

openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	PopUp.classList.add('active');
	bodyLock.classList.add('lock');
});
closePopUp.addEventListener('click', () => {
	PopUp.classList.remove('active');
	bodyLock.classList.remove('lock');
});



$(document).ready(function(){
	$('.header__switchers-wrapper').click(function() {
		$('.header__switchers-wrapper').toggleClass('active');
	});

	$('.header__column-sel').styler();

	$('.questions__title').click(function(){ // на какой класс (кнопку) будем нажимать
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.drop-values').ddslick({
	    data:money,
	    width:300,
	    imagePosition:"left",
	    onSelected: function(selectedData){
	        //callback function: do something with selectedData;
	    }   
	});
	$('.drop-country').ddslick({
	    data:country,
	    width:300,
	    imagePosition:"left",
	    onSelected: function(selectedData){
	        //callback function: do something with selectedData;
	    }
	});
	$('#switcher-theme').click(function() {
		$('body, .main').children().toggleClass('dark');
	});

});