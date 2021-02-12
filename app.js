//Grape Inpute Field
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const submitBtn = document.querySelector(".btn");
const submitInto = document.querySelector("#book-list")

//Implement function
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Please Fill Up The All Field!");
    }else{
        const newRow = document.createElement("tr");

        //Create New Title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        title.value = "";

        //Create New Author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        author.value = "";

        //Create New Year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        year.value = "";

        //Create New Book List
        submitInto.appendChild(newRow)
    }
    
})
