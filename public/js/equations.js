// user inputs to calulate Time value of money equations
const timeValueInputs = {
    presentValue: 14146.40,
    futureValue: 19166,
    interestRate: null,
    years: 5,
    compounding: {
        yearly: 1,
        monthly: 12,
        weekly: 52,
        daily: 365,
    }
}

//polymorphus equation for calculating different variables of Time Value of Money based on user input
const timeValueMoneyEquation = (timeValueInputs) => {
    numberOfPeriods = timeValueInputs.years * timeValueInputs.compounding.yearly;

    if (!timeValueInputs.futureValue) {
        futureValue = timeValueInputs.presentValue * (1 + (timeValueInputs.interestRate / 100)) ** numberOfPeriods;
        console.log(`The future value of your investment will be ${futureValue.toFixed(2)}`)
        return futureValue.toFixed(2);
    }
    if (!timeValueInputs.presentValue) {
        presentValue = timeValueInputs.futureValue * (1/ ((1 + timeValueInputs.interestRate/100)**(numberOfPeriods)))
        console.log(`The present value of this investment is $${presentValue.toFixed(2)}`);
        return presentValue.toFixed(2);
    }
    if (!timeValueInputs.interestRate) {
        interestRate = ((((timeValueInputs.futureValue / timeValueInputs.presentValue) ** (1/numberOfPeriods))) - 1)*100;
        console.log(`The interest rate needed to reach your investment goal is ${interestRate.toFixed(2)}`)
        return interestRate.toFixed(2);
    }
    if (!timeValueInputs.years) {
        years = Math.log(timeValueInputs.futureValue / timeValueInputs.presentValue) / Math.log(1 + (timeValueInputs.interestRate / 100))
        console.log(`Youll reach your investment goal in ${years.toFixed(2)}`)
        return years.toFixed(2);
    }
}
timeValueMoneyEquation(timeValueInputs)
//----------------------------------------------------------------------------------------------------------------//

// inputs needed to calculate future value of annuities
const annuityInputs = {
    annuityPayments: 20000,
    interestRate: 9,
    years: 30,
    ordinary: true,
}
// will calculate the future value of an annuity, depending on whether it is a ordinary annuity or annuity due.
const annuityInvestmentEquation = (annuityInputs) => {
    if (annuityInputs.ordinary = true) {
        futureValue = annuityInputs.annuityPayments * ((((1+(annuityInputs.interestRate/100))**(annuityInputs.years))-1)/(annuityInputs.interestRate/100));
        console.log(`In ${annuityInputs.years} years your investment will be worth $${futureValue.toFixed(2)}`)
        return futureValue.toFixed(2);
    }
    if (annuityInputs.ordinary = false) {
        futureValue = annuityInputs.annuityPayments * ((((1+(annuityInputs.interestRate/100))**(annuityInputs.years))-1)/(annuityInputs.interestRate/100)) * (1 + (interestRate / 100));
        console.log(`In ${annuityInputs.years} years your investment will be worth $${futureValue.toFixed(2)}`)
        return futureValue.toFixed(2);
    }
}
//---------------------------------------------------------------------------------------------------------//

// inputs to calculate mortgage payments
const mortgageInfo = {
    interestRate: 8,
    years: 30,
    downPayment: 20000,
    mortgagecost: 120000,
}
// equations for calculating monthly mortage payments
const fixedMortgagePayment = (mortgageInfo) => {
    numOfPaymentyears = mortgageInfo.years * 12;
    remainingMortgage = mortgageInfo.mortgagecost - mortgageInfo.downPayment;
    monthlyIntRate = (mortgageInfo.interestRate / 100) / 12;
    presentValueAnnuityFactor = (1 - (1 / (1 + monthlyIntRate) ** (numOfPaymentyears))) / (monthlyIntRate)
    monthlyPayment = remainingMortgage / presentValueAnnuityFactor
    console.log(`The monthly payment for your Mortgage will be $${monthlyPayment.toFixed(2)}.`)
    return monthlyPayment.toFixed(2);
    totalInterestPay = 
    totalPayed = 
}

const mortgageGraphData = {

}

// addEventListener('click',timeValueMoneyEquation)
// addEventListener('click',annuityInvestmentEquation)
// addEventListener('click',fixedMortgagePayment)