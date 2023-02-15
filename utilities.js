function getInputValue(inputValue){
    const element = document.getElementById(inputValue);
    const inputStringValue = element.value;
    const inputValueAmount = parseFloat(inputStringValue);
    element.value = '';
    return inputValueAmount;
}

function getPrevBalance(previousValue){
    const element = document.getElementById(previousValue);
    const prevStringValue = element.innerText;
    const preValue = parseFloat(prevStringValue);
    return preValue;
}

function getTotalValue(totalValue, elementId){
    
    const textElement = document.getElementById(elementId);
    return textElement.innerText = totalValue;
}
