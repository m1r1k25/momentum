const quotes = [
	{ 
		"quoteEn" : "The only sin is ignorance", 
		"sourceEn" : "Christopher Marlowe",
		"quoteRu" : "Единственный грех - это незнание",
		"sourceRu" : "Кристофер Марлоу"
	},
	{
		"quoteEn" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
		"sourceEn" : "Demosthenes",
		"quoteRu" : "Человек - его самая легкая шутка, потому что то, что он хочет быть правдой, он обычно считает правдой.",
		"sourceRu" : "Демосфен"
	},
	{
		"quoteEn" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
		"sourceEn" : "Mark Twain",
		"quoteRu" : "Ложь может путешествовать по всему миру, в то время как правда надевает туфли.",
		"sourceRu" : "Марк Твен"
	},
	{
		"quoteEn" : "Great minds discuss ideas; average minds discuss events; small minds discuss people", 
		"sourceEn" : "Eleanor Roosevelt",
		"quoteRu" : "Великие умы обсуждают идеи; средние умы обсуждают события; маленькие умы обсуждают людей",
		"sourceRu" : "Елеонор Рузвельт"
	},
	{
		"quoteEn" : "If you have a garden and a library, you have everything you need", 
		"sourceEn" : "Marcus Tullius Cicero",
		"quoteRu" : "Если у вас есть сад и библиотека, у вас есть все необходимое",
		"sourceRu" : "Марк Туллий Цицерон"
	},
	{
		"quoteEn" : "Truth comes out in wine", 
		"sourceEn" : "Pliny the Elder",
		"quoteRu" : "Истина в вине",
		"sourceRu" : "Плиний Старший"
	},
	{
		"quoteEn" : "Everything in the universe is within you. Ask all from yourself", 
		"sourceEn" : "Rumi",
		"quoteRu" : "Все во вселенной находится внутри вас. Спроси все у себя",
		"sourceRu" : "Рами"
	},
	{
		"quoteEn" : "When I get a little money I buy books; and if any is left I buy food and clothes", 
		"sourceEn" : "Desiderius Erasmus",
		"quoteRu" : "Когда у меня немного денег, я покупаю книги; и если что-то осталось, я покупаю еду и одежду",
		"sourceRu" : "Десидериус Эразм"
	}
];
const changeQuote = document.querySelector(".change-quote");
const quotation = document.getElementById("quotation");
const source = document.getElementById("source");
const select = document.querySelector('select');

function randomQuote() {
	let random = quotes[Math.floor(Math.random() * quotes.length)];
   let lang = select.value;
	if (lang === "en") {
	quotation.innerText = `"${random.quoteEn}."`;
   source.innerText = random.sourceEn;
	} else {
	quotation.innerText = `"${random.quoteRu}."`;
   source.innerText = random.sourceRu;
	} 
	
}

randomQuote();

changeQuote.addEventListener('click', randomQuote);

select.addEventListener('change', randomQuote);

function setLocalStorage() {
   localStorage.setItem('language', select.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
   if(localStorage.getItem('language')) {
   select.value = localStorage.getItem('language');
   randomQuote();
   }
}
window.addEventListener('load', getLocalStorage);















