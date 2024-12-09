function fetchRecommendations(name, grades, interests) {
    fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, grades, interests })
    })
    .then(response => response.json())
    .then(data => displayRecommendations(data))
    .catch(error => console.error('Error fetching recommendations:', error));
}

