let apiQuotes = [];

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}

async function getQuotes(){
    const url = "https://type.fit/api/quotes";
    try{
        const response = await fetch(url);
        apiQuotes = await response.json();
        newQuote();
    }
    catch(error){
    }
}

getQuotes()