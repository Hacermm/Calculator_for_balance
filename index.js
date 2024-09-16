function updateBalance() {
    const radioInput = document.getElementById('input'); 
    const radioOutput = document.getElementById('output'); 
    const resultContainer = document.getElementById('resultContainer');

    const amount = document.getElementById('numberInput').value; 

    if (radioInput.checked) {
        const newElement = document.createElement('p');
        newElement.textContent = `+${amount} mədaxil`;
        resultContainer.appendChild(newElement);
    } else if (radioOutput.checked) {
        const newElement = document.createElement('p');
        newElement.textContent = `-${amount} məxaric`;  
        resultContainer.appendChild(newElement);
    }
}
