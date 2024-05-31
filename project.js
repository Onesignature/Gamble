// 1. Deposit money in the slot machine
// 2. How many lines to bet on
// 3. collect bet amount
// 4. Spin slot machine 
// 5. Check if the user won
// 6. Give user their winnings
// 7. Play again

// function deposit()
// {
//     return 1
// }

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true)
    {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0)
        {
            console.log("invalid deposit amount, try again.");
        }
        else
        {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true)
        {
            const lines = prompt("Enter the number of lines to bet on (1-3): ");
            const numberOfLines = parseFloat(lines);
    
            if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3)
            {
                console.log("invalid deposit amount, try again.");
            }
            else
            {
                return numberOfLines;
            }
        }
};

let depositAmount = deposit();
const lines = getNumberOfLines()