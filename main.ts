import inquirer from "inquirer";
//Define the list of currencies and their exchange rate..

const currency: any = {
    
    USD: 1,//Base Currency
    EUR: 0.91,//European Currency(Euro)
    CAD: 1.3,//Canadian Currency(Dollar)
    AUD: 1.65,//Australian Dollar
    GBP: 0.76,//British pound
    INR: 74.57,//indian Rupees
    PKR: 280, //Paistani Rupees

};
let user_answer = await inquirer.prompt(
    [
       {
            name: "from",
            message: "Enter from Currency",
            type: "list",
            choices:["USD","EUR", "CAD", "AUD","GBP","INR","PKR"]
      
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices:["USD", "EUR", "CAD","AUD","GBP","INR","PKR"]
            
        
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
    ]
        
        
         
)
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount =amount/fromAmount
let convertedAmount = baseAmount *toAmount
console.log(Math.round(convertedAmount));

