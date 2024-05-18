var qoutes=[
  {
    qoute:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
    auther:"Marilyn Monroe"
  },
  {
    qoute:"So many books, so little time.",
    auther:"Frank Zappa"
  }
  ,
  {
    qoute:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    auther:"Albert Einstein"
  },
  {
    qoute:"A room without books is like a body without a soul",
    auther:"Marcus Tullius Cicero"
  },
  {
    qoute:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    auther:" Bernard M. Baruch"
  },
  {
    qoute:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    auther:"Dr. Seuss"
  },
  {
    qoute:"You only live once, but if you do it right, once is enough.",
    auther:"Mae West"
  },
  {
    qoute:"Be the change that you wish to see in the world.",
    auther:" Mahatma Gandhi"
  },
  {
    qoute:"In three words I can sum up everything I've learned about life: it goes on.",
    auther:"Robert Frost"
  },
  {
    qoute:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    auther:"J.K. Rowling"
  },
  {
    qoute:"If you tell the truth, you don't have to remember anything.",
    auther:" Mark Twain"
  }
]
var lastRandomIndex = -1;

function rondomQuote() {
    var min = 0;
    var max = (qoutes.length-1);
    var i;

    do {
        i = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (i === lastRandomIndex);

    document.getElementById("q").innerHTML = qoutes[i].qoute;
    document.getElementById("a").innerHTML = qoutes[i].auther;
}


