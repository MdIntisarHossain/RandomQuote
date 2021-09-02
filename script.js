let quotes = [];

function newQuote(){
    
}

async function getQuotes(){
    const url = "https://type.fit/api/quotes";
    try{
        const response = await fetch(url);
        quotes = await response.json();


    }

    catch(error){
        alert()
    }
}

getQuotes()





