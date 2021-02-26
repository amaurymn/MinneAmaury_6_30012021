$(document).ready(function () {
    const loadMoreButton = $('#loadMoreBtn');

    loadMoreButton.click(function () {
        $(this).text('');
        let spinner = document.createElement('i');
        spinner.classList.add('fa-2x', 'fas', 'fa-snowflake', 'fa-spin');
        this.appendChild(spinner);
    });
});
