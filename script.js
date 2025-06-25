function updateClock() {
    const now = new Date();

    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Create segmented display
    const timeHTML = `
                <span class="digit">${hours[0]}</span><span class="digit">${hours[1]}</span>
                <span class="separator">:</span>
                <span class="digit">${minutes[0]}</span><span class="digit">${minutes[1]}</span>
                <span class="separator">:</span>
                <span class="digit">${seconds[0]}</span><span class="digit">${seconds[1]}</span>
            `;

    document.getElementById('clock').innerHTML = timeHTML;

    // Format date
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;

    // Show timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/').pop();
    document.getElementById('timezone').textContent = timezone.replace('_', ' ');
}

// Update clock every second
updateClock();
setInterval(updateClock, 1000);

// Add click effects to digits
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('digit')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});