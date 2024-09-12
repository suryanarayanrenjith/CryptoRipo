document.addEventListener('DOMContentLoaded', () => {
    const cryptoTypeSelect = document.getElementById('cryptoType');
    const privateKeyField = document.getElementById('privateKeyField');
    const privateKeyInput = document.getElementById('privateKey');
    const cryptoAmountInput = document.getElementById('cryptoAmount');
    const transactionMessage = document.getElementById('transactionMessage');
    const diaBalanceElement = document.getElementById('diaBalance');
    const connectButton = document.createElement('button');
    connectButton.id = 'connectDiamWallet';
    connectButton.textContent = 'Connect to Diam Wallet';
    document.querySelector('.wallet-purchase').appendChild(connectButton);

    let diaBalance = parseFloat(diaBalanceElement.textContent);
    let userPublicKey = null;

    cryptoTypeSelect.addEventListener('change', () => {
        if (cryptoTypeSelect.value === 'dia') {
            privateKeyField.style.display = 'block';
            privateKeyInput.setAttribute('required', true);
        } else {
            privateKeyField.style.display = 'none';
            privateKeyInput.removeAttribute('required');
        }
    });

    connectButton.addEventListener('click', () => {
        if (window.diam) {
            window.diam
                .connect()
                .then((result) => {
                    userPublicKey = result.message[0];
                    transactionMessage.textContent = `Connected to Diam Wallet! Public key: ${userPublicKey}`;
                    document.getElementById('transactionResult').style.display = 'block';
                    connectButton.disabled = true;
                })
                .catch((error) => {
                    transactionMessage.textContent = `Error connecting to Diam Wallet: ${error.message}`;
                    document.getElementById('transactionResult').style.display = 'block';
                });
        } else {
            transactionMessage.textContent = 'Diam Wallet is not installed!';
            document.getElementById('transactionResult').style.display = 'block';
        }
    });

    const buyCryptoForm = document.getElementById('buyCryptoForm');
    buyCryptoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const cryptoType = cryptoTypeSelect.value;
        const cryptoAmount = parseFloat(cryptoAmountInput.value);

        if (cryptoType === 'dia') {
            if (!userPublicKey) {
                transactionMessage.textContent = 'Please connect to Diam Wallet first.';
                document.getElementById('transactionResult').style.display = 'block';
                return;
            }

            const privateKey = privateKeyInput.value;

            if (!validatePrivateKey(privateKey)) {
                transactionMessage.textContent = 'Invalid private key.';
                document.getElementById('transactionResult').style.display = 'block';
                return;
            }

            if (cryptoAmount > 100) {
                transactionMessage.textContent = 'The account does not have enough coins.';
                document.getElementById('transactionResult').style.display = 'block';
                return;
            }

            const transactionXDR = "Your Transaction XDR here";
            const network = "Diamante Testnet";

            window.diam
                .sign(transactionXDR, true, network)
                .then((res) => {
                    transactionMessage.textContent = `Transaction successful: ${cryptoAmount} DIA purchased! Transaction result: ${res}`;
                    diaBalance += cryptoAmount;
                    diaBalanceElement.textContent = diaBalance.toFixed(2);
                })
                .catch((error) => {
                    transactionMessage.textContent = `Error signing transaction: ${error.message}`;
                });
        } else {
            transactionMessage.textContent = `You have successfully purchased ${cryptoAmount} units of ${cryptoType.toUpperCase()}.`;
            document.getElementById('transactionResult').style.display = 'block';
        }
    });

    function validatePrivateKey(key) {
        const isValidLength = key.length >= 44;
        const startsWithS = key.startsWith('S');
        const doesNotStartWithG = !key.startsWith('G');
        return isValidLength && startsWithS && doesNotStartWithG;
    }
});
