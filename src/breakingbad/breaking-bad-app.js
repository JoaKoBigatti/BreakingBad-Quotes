/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote=async()=>{
    
    const res= await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
    // console.log(res);
    const data= await res.json();
    // console.log(data[0])
    return data[0];
}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp=async(element)=>{
    document.querySelector('#app-title').innerHTML='Breaking Bad - App';
    element.innerHTML='Loading...';
    // await fetchQuote();
    const quoteLabel=document.createElement('blockquote');
    const authorLabel=document.createElement('h3');
    const nextQuoteButton=document.createElement('button');
    nextQuoteButton.className='button'
    nextQuoteButton.innerText='Next Quote';

    const renderQuote=(data)=>{
        quoteLabel.innerHTML= data.quote;
        authorLabel.innerHTML= data.author;
        element.replaceChildren(quoteLabel,authorLabel,nextQuoteButton);
    }

    //añadir listener
    nextQuoteButton.addEventListener('click', ()=> {
        element.innerHTML='Loading...';
        fetchQuote()
            .then(renderQuote)
    });


    fetchQuote()
        .then(renderQuote);
}

