async function generateTable() {
    const number = document.getElementById('baseNumber').value;
    const container = document.getElementById('result-container');
    
    // A te backend címed (ha megjavul a szerver, ezt fogja hívni)
    const backendUrl = `http://multiplication-backend.jcloud.jedlik.cloud/api/multiplication/${number}`;

    container.innerHTML = "Betöltés...";

    try {
        const response = await fetch(backendUrl);
        
        if (!response.ok) {
            throw new Error('Hiba történt a lekérés során');
        }

        const data = await response.json();
        displayTable(data);
    } catch (error) {
        container.innerHTML = `<p class="error">Hiba: ${error.message}</p>`;
    }
}

function displayTable(data) {
    const container = document.getElementById('result-container');
    let html = `<h2>Szorzótábla: ${data.base_number}</h2><table>`;
    html += "<tr><th>Szorzó</th><th>Eredmény</th></tr>";

    data.table.forEach(item => {
        html += `<tr><td>${data.base_number} x ${item.multiplier}</td><td>${item.result}</td></tr>`;
    });

    html += "</table>";
    container.innerHTML = html;
}