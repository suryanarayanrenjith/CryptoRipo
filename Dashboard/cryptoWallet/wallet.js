document.addEventListener('DOMContentLoaded', () => {
    const cryptoTypeSelect = document.getElementById('cryptoType');
    const privateKeyField = document.getElementById('privateKeyField');
    const privateKeyInput = document.getElementById('privateKey');
    const cryptoAmountInput = document.getElementById('cryptoAmount');
    const transactionMessage = document.getElementById('transactionMessage');
    const diaBalanceElement = document.getElementById('diaBalance');

    let diaBalance = parseFloat(diaBalanceElement.textContent);

    cryptoTypeSelect.addEventListener('change', () => {
        if (cryptoTypeSelect.value === 'dia') {
            privateKeyField.style.display = 'block';
            privateKeyInput.setAttribute('required', true);
        } else {
            privateKeyField.style.display = 'none';
            privateKeyInput.removeAttribute('required');
        }
    });

    const buyCryptoForm = document.getElementById('buyCryptoForm');
    buyCryptoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const cryptoType = cryptoTypeSelect.value;
        const cryptoAmount = parseFloat(cryptoAmountInput.value);

        if (cryptoType === 'dia') {
            const privateKey = privateKeyInput.value;

            if (!validatePrivateKey(privateKey)) {
                transactionMessage.textContent = 'Invalid private key.';
                document.getElementById('transactionResult').style.display = 'block';
                return;
            }

            if (cryptoAmount > 100) {
                transactionMessage.textContent = 'The account does not have enough coins';
                document.getElementById('transactionResult').style.display = 'block';
                return;
            }

            diaBalance += cryptoAmount;
            diaBalanceElement.textContent = diaBalance.toFixed(2);
        }

        transactionMessage.textContent = `You have successfully purchased ${cryptoAmount} units of ${cryptoType.toUpperCase()}.`;
        document.getElementById('transactionResult').style.display = 'block';
    });

    function validatePrivateKey(key) {
        const isValidLength = key.length >= 44;
        const startsWithS = key.startsWith('S');
        const doesNotStartWithG = !key.startsWith('G');
        return isValidLength && startsWithS && doesNotStartWithG;
    }
});