document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let showName = document.getElementById('input-show').value;
    fetchShows(showName);
});

function fetchShows(query) {
    let url = 'https://api.tvmaze.com/search/shows?q=' + query;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayShows(data);
        });
}

function displayShows(shows) {
    let container = document.querySelector('.show-container');
    container.innerHTML = '';
    shows.forEach(show => {
        let showData = document.createElement('div');
        showData.className = 'show-data';

        let showImage = document.createElement('img');
        showImage.src = show.show.image ? show.show.image.medium : '';
        showData.appendChild(showImage);

        let showInfo = document.createElement('div');
        showInfo.className = 'show-info';

        let showTitle = document.createElement('h1');
        showTitle.textContent = show.show.name;
        showInfo.appendChild(showTitle);

        let showSummary = document.createElement('p');
        showSummary.innerHTML = show.show.summary || 'No summary available';
        showInfo.appendChild(showSummary);

        showData.appendChild(showInfo);
        container.appendChild(showData);
    });
}
