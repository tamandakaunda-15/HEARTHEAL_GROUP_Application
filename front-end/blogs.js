document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const hiddenContent = button.nextElementSibling;

            if (hiddenContent && hiddenContent.classList.contains('hidden-content')) {
                hiddenContent.classList.toggle('show');
                button.textContent = hiddenContent.classList.contains('show') ? 'Read less' : 'Read more';
            }
        });
    });
});