// handle deposit button event
document.getElementById('deposit_button').addEventListener('click', function(){
    // get input value
    const get_deposit_value = document.getElementById('deposit_input_area').value;

    // set input value to deposit area
    const new_previous_deposit = document.getElementById('previous_deposit');
    new_previous_deposit.innerText = '$' + (parseInt(new_previous_deposit.innerText.substring(1)) + parseInt(get_deposit_value));

    //update balance area
    const new_balance = document.getElementById('previous_balance');
    new_balance.innerText = '$' + (parseInt(new_balance.innerText.substring(1)) + parseInt(get_deposit_value));

    //clear the withdraw input area
    document.getElementById('deposit_input_area').value = '';
})

// handle withdraw button event
document.getElementById('withdraw_button').addEventListener('click', function(){
    // get withdraw value
    const get_withdraw_value = document.getElementById('withdraw_input_area').value;

    // set withdraw value to withdraw area
    document.getElementById('previous_withdraw').innerText = '$' + get_withdraw_value;

    //update balance area
    const new_balance = document.getElementById('previous_balance');
    new_balance.innerText = '$' + (parseInt(new_balance.innerText.substring(1)) - parseInt(get_withdraw_value));

    //clear the withdraw input area
    document.getElementById('withdraw_input_area').value = '';
})