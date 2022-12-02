//creating an object class
class MoneyMaster{
    constructor(targetWork){
        if(targetWork ==='calculate'){
            this.updateCalc();
        }
        if(targetWork ==='save'){
            this.updateSave();
        }
    }
    clear(){
        const totalExpensesId= "total-expenses";
        const balanceId = 'balance';
        const savingAmonutId = "saving-amonut";
        const remainingBalanceId = "remaining-balance";
        this.setInnerTextById(balanceId, '00');
        this.setInnerTextById(totalExpensesId, '00');
        this.setInnerTextById(savingAmonutId, '00');
        this.setInnerTextById(remainingBalanceId, '00');
    }
    // check input validity 
    controlInputValidity(inputFieldId){
        this.controlKeyPressig(inputFieldId);
        this.controlKeyUp(inputFieldId)
    }
    // control key up press
    controlKeyUp(inputFieldId){
        document.getElementById(inputFieldId).addEventListener("keyup", function(inputField){
            let pressedKey= inputField.target.value;
            // first way  this way can not control keyPress event.
            let lengthOfInput = pressedKey.length;
            let lastPressed = pressedKey[lengthOfInput-1];
            if(isNaN(pressedKey) || lastPressed ==" "){
                inputField.target.value=pressedKey.slice(0, -1);
            }
            // // another way , this way can  control keyPress event. but not the perfect way
        
            // let inputString= inputFieldId.target.value;
            // for (const item of inputString) {
            //     if(isNaN(item) || item==" "){
            //         var index = inputString.indexOf(item);
            //         break;
            //     }
            // }
            // inputField.targetId.value =inputString.slice(0, index);
        })
    }
    // control key pressing
    controlKeyPressig(inputFieldId){
        document.getElementById(inputFieldId).addEventListener('keypress', function(inputField){
            let pressedKey= inputField.target.value;
            let lengthOfInput = pressedKey.length;
            let lastPressed = pressedKey[lengthOfInput-1];
            if(isNaN(pressedKey) || lastPressed===" "){
                inputField.target.value=pressedKey.slice(0, -1);
            }
        })
    }

    // get inner text of element 
    getInnerTextById(elementId){
        const innerTextelement= document.getElementById(elementId);
        const innerTextString = innerTextelement.innerText ;
        const innerTextInt= parseInt(innerTextString);
        return innerTextInt;
    }
    
    
    // get innervalue of input element 
    getInnerValueById(elementId){
        const innerValueElement= document.getElementById(elementId);
        const innervalueString = innerValueElement.value ;
        // check any inputField is empty or not
        if(innervalueString.length === 0 ){
            alert('some of input field is not filled up')
            return 1;
        }
        const innervalueInt= parseInt(innervalueString);
        return innervalueInt;
    }
    
    // Set inner text of element 
    setInnerTextById(elementId, updateText){
        const innerTextelement= document.getElementById(elementId);
        innerTextelement.innerText= updateText;
        // return innerText;
    }
    //  check the input is a number or not 
    updateCalc(){
        // define id 
        const incomeId = 'income-field';
        const foodCostId = 'food-cost';
        const rentCostId= 'rent-cost';
        const clothesCostId = 'clothes-cost';
        const totalExpensesId= "total-expenses";
        const balanceId = 'balance';
        // getting inner value as integer
        const income = this.getInnerValueById(incomeId);
        // to stop the function if income input is empty
        if(income===1){
            return ;
        }
        const foodCost = this.getInnerValueById(foodCostId)
        // to stop the function if food cost input is empty;
        if(foodCost===1){
            return ;
        }
        const rentCost = this.getInnerValueById(rentCostId);
        // to stop the function if rent cose input is empty
        if(rentCost===1){
            return ;
        }
        const clothesCost = this.getInnerValueById(clothesCostId);
        // to stop the function if clothes cost input is empty
        if(clothesCost===1){
            return ;
        }
        // total expenses calculation;
        const totalExpenses = foodCost + rentCost + clothesCost ;
        // check the expenses is more than income or not 
        const balance = income-totalExpenses;
        if(totalExpenses >income){
            alert('Invalid input!!!. your expenses is more than your income')
            return ;
        }
        this.setInnerTextById(balanceId, balance);
        this.setInnerTextById(totalExpensesId, totalExpenses);
        // updateSave();
    
    }
    updateSave(){
        const savePercentId = "save-percent";
        const incomeId = 'income-field';
        const balanceId = 'balance';
        const savingAmonutId = "saving-amonut";
        const remainingBalanceId = "remaining-balance";
        const savePercent= this.getInnerValueById(savePercentId);
        // to stop the program if save input is empty
        if(savePercent===1){
            return;
        }
        const income= this.getInnerValueById(incomeId);
        // to stop the program if income input is empty
        if(income===1){
            return;
        }
        const savingAmonut= ((income/100)*savePercent).toFixed(2);
        const balance = this.getInnerTextById(balanceId);
        // checking the savings in valid or not 
        if(savingAmonut>balance){
            alert('you account ballance is not sufficient for this savings');
            return;
        }
        const remainingBalance= (balance-savingAmonut).toFixed(2);
        this.setInnerTextById(savingAmonutId, savingAmonut);
        this.setInnerTextById(remainingBalanceId, remainingBalance);
    }
}




// creating an object of a class MoneyMaster
const moneyMaster= new MoneyMaster();
moneyMaster.clear();

//check the input is valid or not
moneyMaster.controlInputValidity('income-field');
moneyMaster.controlInputValidity('food-cost');
moneyMaster.controlInputValidity('rent-cost');
moneyMaster.controlInputValidity('clothes-cost');
moneyMaster.controlInputValidity('save-percent');


document.getElementById('calculate').addEventListener('click', function(){
    const moneyMaster= new MoneyMaster("calculate");
})

document.getElementById('save').addEventListener('click', function(){
    const moneyMaster= new MoneyMaster("save");
})

