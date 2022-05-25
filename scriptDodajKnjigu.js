const BASE_URL = "https://ptf-web-dizajn-2022.azurewebsites.net/";  

// 
fetch(`${BASE_URL}/authors`)
    .then(response => {
        return response.json();
    })
    .then(authors => {
        console.log(authors)
    })

const addBook = () => {

    const title = document.getElementById('booksTitle').value;
    const genre = document.getElementById('booksGenre').value;
    const image = document.getElementById('booksImage').value;
    const authorId = document.getElementById('authorsId').value;

    fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            name: title,
            genre: genre,
            image: image,
            authorId: authorId
        })
    })
    .then(res => {
        console.log(res);
    })
}