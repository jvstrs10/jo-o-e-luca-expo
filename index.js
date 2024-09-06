document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const reference = document.getElementById('reference').value.trim();
    const resultDiv = document.getElementById('result');

    if (!reference) {
        resultDiv.innerHTML = 'Por favor, digite uma referência.';
        return;
    }

    try {
        const response = await fetch(`https://bible-api.com/${reference}`);
        const data = await response.json();
        
        if (data.text) {
            resultDiv.innerHTML = `
                <h2>${data.reference}</h2>
                <p>${data.text}</p>
            `;
        } else {
            resultDiv.innerHTML = 'Referência não encontrada.';
        }
    } catch (error) {
        resultDiv.innerHTML = 'Erro ao buscar versículo.';
        console.error('Erro:', error);
    }
}); 

/*
function PesquisarVersiculo(){
    const reference = document.getElementById('reference').value.trim();
    const resultDiv = document.getElementById('result');

    if (!reference) {
        resultDiv.innerHTML = 'Por favor, digite uma referência.';
        return;
    }

    try {
        const response = await fetch(`https://bible-api.com/${reference}`);
        const data = await response.json();
        
        if (data.text) {
            resultDiv.innerHTML = `
                <h2>${data.reference}</h2>
                <p>${data.text}</p>
            `;
        } else {
            resultDiv.innerHTML = 'Referência não encontrada.';
        }
    } catch (error) {
        resultDiv.innerHTML = 'Erro ao buscar versículo.';
        console.error('Erro:', error);
    }   
} */