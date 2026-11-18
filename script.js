const tempatKarakter = document.getElementById('tempat-karakter');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

const API_URL = 'https://api.disneyapi.dev/character';

async function getData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("status " + response.status);
        
        const data = await response.json();

        data.data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.imageUrl || 'https://via.placeholder.com/200'}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Film: ${item.films?.[0] || 'Karakter Disney'}</p>
            `;
            tempatKarakter.appendChild(card);
        });

    } catch (err) {
        error.textContent = "Error nich.. Gagal memuat data " + err.message;
    } finally {
        loading.style.display = "none";
    }
}

getData();