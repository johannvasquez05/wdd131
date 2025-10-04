document.addEventListener('DOMContentLoaded', function () {
    let count = localStorage.getItem('reviewCount');
    count = count ? parseInt(count, 10) + 1 : 1;
    localStorage.setItem('reviewCount', String(count));

    document.getElementById('reviewCount').textContent =
        `You have submitted ${count} review${count === 1 ? '' : 's'}.`;
});