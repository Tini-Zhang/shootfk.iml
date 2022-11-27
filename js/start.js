function start()
{
    const title=document.getElementById('title');
    title.style.visibility="hidden";
    const startbtn=document.getElementById('start');
    startbtn.style.visibility="hidden";
    setTimeout(showzq1,100);
    setTimeout(showzq1,200);
    setTimeout(showhh,300);
    setTimeout(showzq1,400);
    setTimeout(showzq1,500);
    setTimeout(function (){
        alert("游戏结束，您的得分是\n"+score.toString());
        while(true){}
    },30000);
}