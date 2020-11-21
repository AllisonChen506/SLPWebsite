let btn2 = document.getElementById('btn2');
let output2 = document.getElementById('output2');
let books = [
    ' "The Picture of Dorian Gray" - Oscar Wilde',
    ' "Brave New World" - Aldous Huxley',
    ' "1984" - George Orwell',
    ' "No Longer Human" - Osamu Dazai',
    ' "Thus Spoke Zarathustra" - Friedrich Nietschze',
    ' "The Sailor Who Fell From Grace With The Sea" - Yukio Mashima',
    ' "A Tale of Two Cities" - Charles Dickens',
];

btn2.addEventListener('click', function(){
    var randomBook = books[Math.floor(Math.random() * books.length)]
    output2.innerHTML = randomBook;
})
