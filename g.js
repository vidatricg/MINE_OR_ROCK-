document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.getElementById('request-form');
    const responseForm = document.getElementById('response-form');

    requestForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle request form submission
        const requestData = new FormData(requestForm);
        console.log('Request Data:', Object.fromEntries(requestData));
        // Add AJAX call or further handling here
    });

    responseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle response form submission
        const responseData = new FormData(responseForm);
        console.log('Response Data:', Object.fromEntries(responseData));

        // Example of adding dynamic rows
        const detectedObjectsTable = document.getElementById('detected-objects').getElementsByTagName('tbody')[0];
        const sonarSignalDataTable = document.getElementById('sonar-signal-data').getElementsByTagName('tbody')[0];

        // Clear existing rows
        detectedObjectsTable.innerHTML = '';
        sonarSignalDataTable.innerHTML = '';

        // Example of adding data
        const detectedObjects = [
            { id: 'M001', type: 'Mine', distance: 250, coordinates: '34.0522N, 118.2437W' }
        ];
        const sonarSignalData = [
            { frequency: '20kHz', amplitude: '7dB', timestamp: '2024-07-27T15:31:00Z' },
            { frequency: '30kHz', amplitude: '6dB', timestamp: '2024-07-27T15:31:10Z' }
        ];

        detectedObjects.forEach(obj => {
            const row = detectedObjectsTable.insertRow();
            row.insertCell(0).textContent = obj.id;
            row.insertCell(1).textContent = obj.type;
            row.insertCell(2).textContent = obj.distance;
            row.insertCell(3).textContent = obj.coordinates;
        });

        sonarSignalData.forEach(signal => {
            const row = sonarSignalDataTable.insertRow();
            row.insertCell(0).textContent = signal.frequency;
            row.insertCell(1).textContent = signal.amplitude;
            row.insertCell(2).textContent = signal.timestamp;
        });
    });
});
