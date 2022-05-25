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
    const booksRow = document.getElementById('slike-knjiga');

    let resultHtml = '';
    let i=0;

    books.forEach(books => {
        if(i<6){
            resultHtml += `
            <a> <img src="${books.image}" alt="" 
                style="object-fit:contain;
                width:50px;
                height:50px;
                border: solid 1px #CCC"/>
                </a> 
            `; 
        }
        i += 1;
    });

    booksRow.innerHTML = resultHtml;
}