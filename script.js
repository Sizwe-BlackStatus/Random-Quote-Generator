const quoteList = [
  "“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney",
  "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
  "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
  "“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown",
  "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
  "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
  "“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen",
  "“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino",
  "“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai",
  "“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou",
  " “Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe",
  "“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?” – Brian Tracy",
  "“We Generate Fears While We Sit. We Overcome Them By Action.” – Dr. Henry Link",
  "“Whether You Think You Can Or Think You Can’t, You’re Right.” – Quote By Henry Ford",
  "“Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.” – Life Quote By Helen Keller",
  "“The Man Who Has Confidence In Himself Gains The Confidence Of Others.” – Hasidic Proverb",
];
const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
document.getElementById("text").innerHTML = randomQuote;
const newQuote = document.getElementById("new-quote");
const whatsappBtn = document.getElementById("whatsapp");
const twitterBtn = document.getElementById("twitter");
colourChange();

function shuffleQuote(quoteList) {
  for (
    var currentIndex = quoteList.length - 1;
    currentIndex > 0;
    currentIndex--
  ) {
    var randomIndex = Math.floor(Math.random() * quoteList.length);
    var temporaryValue = quoteList[currentIndex];
    quoteList[currentIndex] = quoteList[randomIndex];
    quoteList[randomIndex] = temporaryValue;
  }
  return quoteList[0];
}
function newQuoteGenerator() {
  document.getElementById("text").innerHTML = shuffleQuote(quoteList);
}
function colourChange() {
  let colourChar = "0123456789ABCDEF";
  let colourCode = "";
  for (let i = 0; i < 6; i++) {
    colourCode += colourChar[Math.floor(Math.random() * colourChar.length)];
  }
  colourCode = "#" + colourCode;
  document.body.style.backgroundColor = colourCode;
  document.getElementById("text").style.color = colourCode;
  document.getElementById("new-quote").style.background = colourCode;
  document.getElementById("whatsapp").style.background = colourCode;
  document.getElementById("twitter").style.background = colourCode;
}
function shareWhatsapp() {
  window.open("https://web.whatsapp.com/send?text=" + shuffleQuote(quoteList));
}
function shareTwitter() {
  window.open("http://twitter.com/share?text=" + shuffleQuote(quoteList));
}
newQuote.addEventListener("click", newQuoteGenerator);
newQuote.addEventListener("click", colourChange);
whatsappBtn.addEventListener("click", shareWhatsapp);
twitterBtn.addEventListener("click", shareTwitter);
