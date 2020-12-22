
const quoteList = [
    "“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney",
    "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
    "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
    "“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown",
    "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
    "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
  ];;
const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
document.getElementById("text").innerHTML =  randomQuote

const newQuote = document.querySelector("#new-quote")
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
function newQuoteGenerator(){
    document.getElementById("text").innerHTML =  shuffleQuote(quoteList)
}
newQuote.addEventListener("click",newQuoteGenerator)
