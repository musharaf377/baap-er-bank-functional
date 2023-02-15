document.getElementById('withDrawBtn').addEventListener('click',function(){
    const withdrawInputValue = getInputValue('withdraw-field');
    const withdrawPrevValue = getPrevBalance('withdraw');
  
    const prevTotalBalance = getPrevBalance('balance');
    
    if(prevTotalBalance < withdrawInputValue){
        alert('You have not a enough money.');
    }else{
        const totalWithdraw = withdrawInputValue + withdrawPrevValue;   
        const totalBalance = prevTotalBalance - withdrawInputValue;
        
        if(isNaN(totalWithdraw) || isNaN(totalBalance)){
            alert('Please provide a valid number.');
        }else{
            getTotalValue(totalBalance, 'balance');
            getTotalValue(totalWithdraw, 'withdraw');
        }
    }
    
})