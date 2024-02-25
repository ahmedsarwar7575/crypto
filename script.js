async function maincoin() {
    
        let url = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Csolana%2CEthereum%2CDogeCoin%2CTether%2CCardano%2CTronix%2Cshib%2Catom%2Cmatic%2CBinanceCoin%2C&vs_currencies=usd`);
        let data = await url.json();
        console.log(data.bitcoin.usd);
        console.log(data);

            document.querySelector('.bitcoin h3').innerHTML = `Price: ${data.bitcoin.usd} usd`
            document.querySelector('.ethe h3').innerHTML = `Price: ${data.ethereum.usd} usd`
            document.querySelector('.bnb h3').innerHTML = `Price: ${data.binancecoin.usd} usd`
            document.querySelector('.doge h3').innerHTML = `Price: ${data.dogecoin.usd} usd`
        
}
maincoin();

// let button = document.querySelector('.search-btn')

// async function searchcoin() {
//         let search = document.querySelector("#cryptoInput").value
//         let url = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${search}&vs_currencies=usd`);
//         let data = await url.json();
//         // const final = JSON.parse(data);
//         // console.log(data.search.usd);
//         console.log(data);
//             // document.querySelector('.seacrh-row h3').innerHTML = `Price: ${data[search].usd} usd`
//             // document.querySelector('.seacrh-row h2').innerHTML = ` ${search}`
           
        
// }
// button.addEventListener('click', searchcoin);



let button = document.querySelector('.search-btn');

let rate = document.querySelector('.srch h3')

async function searchCoin() {
    
    let search = document.querySelector("#cryptoInput").value.toLowerCase();
    let url = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${search}&vs_currencies=usd`);
    let data = await url.json();
    let prices = data[search]
    let price = prices.usd
    // console.log(price)
   
        rate.innerText =  `Price: ${price} USD`;
        document.querySelector('.srch h2').innerHTML = `${search}`;
    
       
 
}
// searchCoin()

button.addEventListener('click', searchCoin);