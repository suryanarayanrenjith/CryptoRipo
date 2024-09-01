document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const projectName = getQueryParam('name');
    const projectDescription = getQueryParam('description');
    const projectPrice = getQueryParam('price');
    const projectCurrency = getQueryParam('currency');

    document.getElementById('projectTitle').textContent = projectName || 'Project Title';
    document.getElementById('projectDescription').textContent = projectDescription || 'Project Description';
    document.getElementById('projectPrice').textContent = projectPrice || '0.0';
    document.getElementById('projectCurrency').textContent = projectCurrency || 'ETH';

    document.getElementById('purchaseButton').addEventListener('click', () => {
        alert(`Purchasing ${projectName} for ${projectPrice} ${projectCurrency}`);
    });
});