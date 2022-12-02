//I have to make quiz about my passionate  similar to markone 
var readlineSync=require('readline-sync');
var score=0;
//Quiz on Macbook Air M1

function play(question,answer)
{
    var userAnswer=readlineSync.question(question);
    if(userAnswer===answer){
        console.log("Yess");
        score=score+1;
    }else 
        console.log("Wrong Answer");
    console.log("Current Score:"+score);
    console.log("-------------------------------");
}

var questionAnswerBunch=[
{
    question:"Do You like Macbook Air M1",
    answer:"Yes"
},
{
    question:"Which year this laptop is launched",
    answer:"2020"
},
{
    question:"Which OS is used in Macbook",
    answer:"MacOS"
},
{
    question:"Latest MacOs Running in latest Macbook",
    answer:"MacOs Ventura"
},
{
    question:"Do you like to purchase this in 2022 ?",
    answer:"Yes"
}
]

for(var i=0;i<questionAnswerBunch.length;i++){
    if(score==2)
        console.log("Hurrah You crossed Level 1 :) ");
    if(score==4)
        console.log("Hurrah You crossed Level 2 :) ")
    play(questionAnswerBunch[i].question,questionAnswerBunch[i].answer);
}
//Final Ranking and Level of User 
if(score>=4)
{
    console.log("You are Level 3 Candidate");
}
else if(score>=2)
{
    console.log("You are Level 2 Candidate");
}
else
{
    console.log("You are Level 1 Candidate");
}
