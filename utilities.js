function print(value){
    console.log(value);
}


// get inner text of element 
function getInnerTextById(elementId){
   const innerTextelement= document.getElementById(elementId);
   const innerTextString = innerTextelement.innerText ;
   const innerTextInt= parseInt(innerTextString);
   return innerTextInt;
}


// get innervalue of input element 
function getInnerValueById(elementId){
    const innerValueElement= document.getElementById(elementId);
    const innervalueString = innerValueElement.value ;
    const innervalueInt= parseInt(innervalueString);
    return innervalueInt;
 }
 
// Set inner text of element 
function setInnerTextById(elementId, updateText){
    const innerTextelement= document.getElementById(elementId);
    innerTextelement.innerText= updateText;
    // return innerText;
 }
//  check the input is a number or not 
function updateCalc(){
    // define id 
    const incomeId = 'income-field';
    const foodCostId = 'food-cost';
    const rentCostId= 'rent-cost';
    const clothesCostId = 'clothes-cost';
    const totalExpensesId= "total-expenses";
    const balanceId = 'balance';
    // getting inner value as integer
    const income = getInnerValueById(incomeId);
    const foodCost = getInnerValueById(foodCostId);
    const rentCost = getInnerValueById(rentCostId);
    const clothesCost = getInnerValueById(clothesCostId);
    
    // total expenses calculation;
    const totalExpenses = foodCost + rentCost + clothesCost ;
    const balance = income-totalExpenses;
    setInnerTextById(balanceId, balance);
    setInnerTextById(totalExpensesId, totalExpenses);
    // updateSave();

}
function updateSave(){
    const savePercentId = "save-percent";
    const incomeId = 'income-field';
    const balanceId = 'balance';
    const savingAmonutId = "saving-amonut";
    const remainingBalanceId = "remaining-balance";
    const savePercent= getInnerValueById(savePercentId);
    const income= getInnerValueById(incomeId);
    const savingAmonut= ((income/100)*savePercent).toFixed(2);
    const balance = getInnerTextById(balanceId);
    const remainingBalance= (balance-savingAmonut).toFixed(2);
    setInnerTextById(savingAmonutId, savingAmonut);
    setInnerTextById(remainingBalanceId, remainingBalance);
}

document.getElementById('calculate').addEventListener('click', function(){
    updateCalc();
})

document.getElementById('save').addEventListener('click', function(){
    updateSave();
})