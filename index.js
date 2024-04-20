import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "enter your pin",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin)
    console.log("Correct pin number");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "Fast Cash", "Check Balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    console.log(amountAns.amount);
    //Assignment Operator
    //=,-=,+=
    myBalance -= amountAns.amount;
    console.log("your current balance is: " + myBalance);
}
else if (operationAns.operation === "Check Balance") {
    console.log("your Account balance is:" + myBalance);
}
else if (operationAns.operation == "Fast Cash") {
    let fastCash = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter Amount",
            type: "list",
            choices: ["1000", "2000", "3000", "10000", "50000"]
        },
    ]);
    if (fastCash.amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= fastCash.amount;
        console.log(`${fastCash.amount}Sucessfully Withdrawed`);
        console.log(`Youe remainingBalance is:${myBalance}`);
    }
}
else {
    console.log("Income pin number");
}
