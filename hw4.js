let amountNum=prompt('Enter amount of numbers',);
let evenNum=0;
let oddNum=0;
let countNum=0;
let checkProbEv;
let checkProbOd;

function randomGen (amNum) {
        for (i=0; i<amNum; i++){
        let randNum=Math.random();
        randNum *=1000-100+1
        randNum=Math.round(randNum);
        console.log(randNum);
        countNum++;
        if (randNum%2==0){
            evenNum++;
            }
            else {
            oddNum++;
            }
        }
        checkProbEv=(evenNum/countNum*100).toFixed(1); //відсоток парних
        checkProbOd=(oddNum/countNum*100).toFixed(1); //відсоток парних


    return 'Amount of numbers=' + countNum +'\n Even numbers=' +  evenNum +'\n Odd numbers=' +  oddNum +'\n Percentage ratio even =' +  checkProbEv + '%' +'\n Percentage ratio odd =' +  checkProbOd + '%'
        
    }

console.log (randomGen(amountNum))



