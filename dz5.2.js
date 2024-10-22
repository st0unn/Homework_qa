var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

function price(obj){
    let costPrice=0;
    for (let key in obj){
        costPrice += parseInt(obj[key].replace(' грн', ''));
        
    }
    return console.log('Cost of services provided:' + costPrice)
}

price(services);

function minPrice(obj){
    let mPrice;
    for (let key in obj){
        mPrice=parseInt(obj[key].replace(' грн', ''));
        break;
    }
    
    let currentPrice;    
    for (let key in obj){
        currentPrice = parseInt(obj[key].replace(' грн', ''));
        if (currentPrice < mPrice){
            mPrice=currentPrice;
        }
    }
    return console.log('Minimum price:' + mPrice)
}

minPrice(services);

function maxPrice(obj){
    let mxPrice;
    for (let key in obj){
        mxPrice=parseInt(obj[key].replace(' грн', ''));
        break;
    }
    
    let currentPrice;    
    for (let key in obj){
        currentPrice = parseInt(obj[key].replace(' грн', ''));
        if (currentPrice > mxPrice){
            mxPrice=currentPrice;
        }
    }
    return console.log('Maximum price:' + mxPrice)
}

maxPrice(services);





