document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const profilePic = document.querySelector('.profile img');
    const profileMenu = document.querySelector('.profile-menu');
    const dashboard = document.querySelector('.dashboard');
    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    const searchBar = document.getElementById('searchBar');
    const linkWalletForm = document.getElementById('linkWalletForm');
    const buyCryptoForm = document.getElementById('buyCryptoForm');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggle) {
            themeToggle.checked = true;
        }
        if (themeLabel) {
            themeLabel.textContent = 'Light Mode';
        }
    }

    if (menuToggle && sideMenu && dashboard) {
        menuToggle.addEventListener('click', () => {
            if (sideMenu.style.left === '-250px') {
                sideMenu.style.left = '0';
                dashboard.style.marginLeft = '250px';
            } else {
                sideMenu.style.left = '-250px';
                dashboard.style.marginLeft = '0';
            }
        });
    }

    if (profilePic && profileMenu) {
        profilePic.addEventListener('click', () => {
            profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
        });

        window.addEventListener('click', (e) => {
            if (!profilePic.contains(e.target) && !profileMenu.contains(e.target)) {
                profileMenu.style.display = 'none';
            }
        });
    }

    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const filter = e.target.value.toLowerCase();
            const codeItems = document.querySelectorAll('.code-item');
            codeItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(filter) ? 'block' : 'none';
            });
        });
    }

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.profile-content');
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });

        const dashboardContent = document.getElementById('dashboardContent');
        if (dashboardContent) {
            dashboardContent.style.display = 'none';
        }
    }

    const cryptoWalletLink = document.querySelector('nav ul li a[href="#cryptoWallet"]');
    if (cryptoWalletLink) {
        cryptoWalletLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('cryptoWallet');
        });
    }

    const homeLink = document.querySelector('nav ul li a[href="#"]');
    if (homeLink) {
        homeLink.addEventListener('click', () => {
            const sections = document.querySelectorAll('.profile-content');
            sections.forEach(section => {
                section.style.display = 'none';
            });

            const dashboardContent = document.getElementById('dashboardContent');
            if (dashboardContent) {
                dashboardContent.style.display = 'block';
            }
        });
    }

    if (themeToggle && themeLabel) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('light-mode');
                themeLabel.textContent = 'Light Mode';
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                themeLabel.textContent = 'Dark Mode';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    if (linkWalletForm) {
        linkWalletForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const walletType = document.getElementById('walletType').value;
            const walletAddress = document.getElementById('walletAddress').value;

            alert(`Wallet linked successfully!\nWallet Type: ${walletType}\nWallet Address: ${walletAddress}`);
        });
    }

    if (buyCryptoForm) {
        buyCryptoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const cryptoType = document.getElementById('cryptoType').value;
            const cryptoAmount = document.getElementById('cryptoAmount').value;
            const transactionMessage = document.getElementById('transactionMessage');

            if (cryptoAmount > 0) {
                transactionMessage.textContent = `You have successfully purchased ${cryptoAmount} units of ${cryptoType.toUpperCase()}.`;
            } else {
                transactionMessage.textContent = 'Please enter a valid amount.';
            }
            document.getElementById('transactionResult').style.display = 'block';
        });
    }

    document.querySelectorAll('.profile-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section-id');
        if (sectionId) {
            showSection(sectionId);
        }
    });
});
});