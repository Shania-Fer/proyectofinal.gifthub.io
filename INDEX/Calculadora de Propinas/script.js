const calculateButton = document.getElementById('calculate-button');
const tipAmount = document.getElementById('tip-amount');

calculateButton.addEventListener('click', () => {
    const total = parseFloat(document.getElementById('total').value);
    const percentage = parseInt(document.getElementById('percentage').value);
    
    if (isNaN(total) || isNaN(percentage)) {
        tipAmount.textContent = 'Error';
        return;
    }
    
    const tip = (total * percentage) / 100;
    tipAmount.textContent = tip.toFixed(2);
});
