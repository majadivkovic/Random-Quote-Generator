/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [

  {
    quote:"If you’re bored with life – you don’t get up every morning with a burning desire to do things – you don’t have enough goals.",
     source:"Lou Holtz",
     citation: "Entrepreneur",
     year: 2020,
     tag:"Goals"
  },
  {
    quote:"It always seems impossible until it's done.", 
    source:"Nelson Mandela",
     citation: "Brainyquote",
     year: 2020,
     tag:"Motivational"
  },
  {
    quote:"Yesterday is not ours to recover, but tomorrow is ours to win or lose.", 
    source:"Lyndon B.Johnson",
     citation: "Brainyquote",
     year: 2020,
     tag:"Positive"
  },
  {
    quote:"Life is ten percent what happens to you and ninety percent how you respond to it.", 
    source:"Lou Holtz",
     citation: "Brainyquote",
     year: 2020,
     tag:"Life"
    
  },
  {
    quote:"With the new day comes new strength and new thoughts.", 
    source:"Eleanor Roosevelt",
     citation: "Brainyquote",
     year: 2009,
     tag:"Motivation"
  },
  {
    quote:"Knowing is not enough; we must apply. Willing is not enough; we must do.",
    source:"Johann Wolfgang von Goethe",
     citation: "Brainyquote",
     year: 2010,
     tag:"Success"
  },
  {
    quote:"Setting goals is the first step in turning the invisible into the visible.", 
    source:"Tony Robbins",
    citation: "Brainyquote",
     year: 2020,
     tag:"Motivation"
  },
  {
    quote:"We are never so defensless against suffering as when we love.", 
    source:"Sigmund Freud",
     citation: "Brainyquote",
     year: 1998,
     tag:"Love"
  },
  {
    quote:"Keep your eyes on the stars, and your feet on the ground.", 
    source:"Theodore Roosevelt",
     citation: "Brainyquote",
     year: 2020,
     tag:"Politics"
  },
  {
    quote:"I have the simplest tastes. I am always satisfied with the best.", 
    source:"Oscar Wilde",	
     citation: "Brainyquote",
     year: 2020,
     tag:"Behaviour"
  },
  {
    quote:"Failure will never overtake me if my determination to succeed is strong enough.", 
    source:"Og Mandino",
     citation: "Brainyquoter",
     year: 2020,
     tag:"Success"
  },
  {
    quote:"A person always doing his or her best becomes a natural leader, just by example.", 
    source:"Joe DiMaggio",
     citation: "Brainyquote",
     year: 2020,
     tag:"Success"
  }
  
  ]


/***
 * `getRandomColor` function
***/

function rColor () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let randomColor = "rgb(" + c1 + "," + c2 + "," + c3 + ")";
 
 document.body.style.backgroundColor = randomColor;
}



/***
 * `getRandomColor` function
***/


function getRandomQuote(){
  let messagenum = Math.floor(Math.random() * quotes.length);
  let message = quotes[messagenum];
  
  return message;
  }
  
  /***
 * `printQuote` function
***/
function printQuote(){
	rColor()
	let newQuote = getRandomQuote()
	let messageQuote = '<p class="quote">' + newQuote.quote + '</p>';
	let messageSource ='<p class="source">'+ newQuote.source ;
	let fullQuote = messageQuote + messageSource; 

	if (newQuote.citation){
		fullQuote += '<span class="citation">' + newQuote.citation + '</span>';
	}
	
	if (newQuote.year){
		fullQuote += '<span class="year">' + newQuote.year + '</span>';
	}
	if (newQuote.tag){
		fullQuote += '<span class="tag">' + newQuote.tag + '</span>';
	}
	
	fullQuote += '</p>'
	
 return document.getElementById('quote-box').innerHTML = fullQuote; 

}

window.setInterval(printQuote,10000)


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);