const BASE_URL = "https://ptf-web-dizajn-2022.azurewebsites.net/";  

fetch(`${BASE_URL}/books`)
    .then(response => {
        return response.json();
    })
    .then(books => {
        renderBooks(books);
    })

const renderBooks = (books) => {

    console.log(books);
    const booksRow = document.getElementById('listing-knjiga-u-ponudi');

    let resultHtml = '';
    let i=0;

    books.forEach(books => {
        if (i%4==0){
            resultHtml += `
            <tr>
                <th>
                    <img src=${books.image} class="slikaKarte" alt="">
                    <div>
                        <h5 class="card-title">${books.name}</h5>
                        <h4>Author: ${books.author.name}</h4>
                        <h4>Genre: ${books.genre}</h4>
                    </div>
                    <h6>
                        <button type="button" onclick="putBook()">Edit book</button>
                        <button type="button" onclick="deleteBook('${books.id}')">Delete</button>
                    </h6>
                </th>
                `;
        }
        else if(i%4==3){
            resultHtml += `
                <th>
                    <img src=${books.image} class="slikaKarte" alt="">
                    <div>
                        <h5 class="card-title">${books.name}</h5>
                        <h4>Author: ${books.author.name}</h4>
                        <h4>Genre: ${books.genre}</h4>
                    </div>
                    <h6>
                        <button type="button" onclick="putBookForm()">Edit book</button>
                        <button type="button" onclick="deleteBook('${books.id}')">Delete</button>
                    </h6>
                </th>
            </tr>
                `;
        }
        else{
            resultHtml += `
            <th>
                <img src=${books.image} class="slikaKarte" alt="">
                <div>
                    <h5 class="card-title">${books.name}</h5>
                    <h4>Author: ${books.author.name}</h4>
                    <h4>Genre: ${books.genre}</h4>
                </div>
                <h6>
                    <button type="button" onclick="putBookForm()">Edit book</button>
                    <button type="button" onclick="deleteBook('${books.id}')">Delete</button>
                </h6>
            </th>
            `;
        }
        i += 1;
    });

    booksRow.innerHTML = resultHtml;
}

const renderKnjigePonuda = (books) => {
    fetch(`${BASE_URL}/books`)
    .then(response => {
        return response.json();
    })
    .then(books => {
        renderBooks(books);
    })
}

const deleteBook = (id) => {
    if(confirm("Jeste li sigurni da želite obrisati ovu knjigu!") == true){
        fetch(`${BASE_URL}/books/${String(id)}`, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        })
        .then(res => {
            console.log(res);
        })

        alert("Knjiga uspješno obrisana!"); 
        window.location.reload();
    }
    else{
        alert("Brisanje knjige je otkazano!");
    }
}