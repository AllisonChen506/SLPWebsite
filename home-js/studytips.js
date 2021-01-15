let btn1 = document.getElementById('btn1');
let output1 = document.getElementById('output1');
let tips= [
    ' Do five minutes of revision everyday ',
    ' Use the Pomodoro Technique ',
    ' Try teaching the concept to someone else ',
    ' Take frequent study breaks ',
    ' Try rewarding yourself after completing a set of work ',
    ' Participate in Class ',
    ' Keep track of your deadlines',
    ' Visit office hours and ask your professors for help ',
    ' Try to keep a clean study space ',
    ' Drink water and eat healthy ', 
    ' Test yourself',
    ' Turn off your phone ',
    ' Avoid procrastinating ',
    ' Form study groups'
];

btn1.addEventListener('click', function(){
    var randomTip = tips[Math.floor(Math.random() * tips.length)]
    output1.innerHTML = randomTip;
})
