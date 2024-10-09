function convert() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert('Silakan masukkan angka yang valid!');
        document.getElementById('fahrenheit').value = '';
        document.getElementById('calculation').value = '';
    }
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
}

function reverse() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('calculation').value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    } else {
        alert('Silakan masukkan angka yang valid!');
        document.getElementById('celsius').value = '';
        document.getElementById('calculation').value = '';
    }
}