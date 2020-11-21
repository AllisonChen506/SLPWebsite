let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    ' "Dont ever, for any reason, do anything to anyone, for any reason, ever, no matter what. No matter where, or who, or who you are with, or...or where you are going, or where youve been...ever. For any reason, whatsoever." - Michael Scott, The Office',
    ' "You miss 100% of the shots you dont take - Wayne Gretzky" - Michael Scott, The Office',
    ' "People say nothing is impossible, but I do nothing every day." - Winnie the Pooh',
    ' "Life moves pretty fast. If you dont stop and look around once in a while, you could miss it" - Ferris Bueller, Ferris Buellers Day off',
    ' "Spend a little more time trying to make something of yourself and a little less time trying to impress people" - The Breakfast Club',
    ' "You can never be overdressed or overeducated" - Oscar Wilde',
    ' "Be the change that you wish to see in the world" - Mahatma Gandhi',
    ' "The only way to get what you want in this world is through hard work" - The Princess and the Frog',
    ' "You never really understand a person until you consider things from his point of view...Until you climb inside of his skin and walk around in it" - Harper Lee, To Kill a Mockingbird'
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
