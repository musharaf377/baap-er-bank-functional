
 document.getElementById('depositBtn').addEventListener('click', function(){
    const depositInputBalance = getInputValue('deposit-field');
    const depositPrevBalance = getPrevBalance('deposit-balance');
    const totalPrevBlance = getPrevBalance('balance');

    const totalValue = depositInputBalance + depositPrevBalance;
    const totalBalance = totalPrevBlance + depositInputBalance;
    

    if(isNaN(totalValue) || typeof totalValue !== 'number'){
        alert('please provide valid number.');
    }else{
        getTotalValue(totalValue, 'deposit-balance');
        getTotalValue(totalBalance, 'balance');

    }
    
})

