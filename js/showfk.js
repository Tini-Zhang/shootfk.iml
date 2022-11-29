
function showzq1(){
    const bkg=document.getElementById('main');
    const zq1=document.createElement('button');
    bkg.appendChild(zq1);
    const zq1i=document.createElement('img');
    zq1.appendChild(zq1i);
    zq1i.src="image/fk.jpg";
    zq1i.alt="zhouqi";
    zq1.style.position="absolute";
    const y=Math.round(Math.random()*73+5).toString();
    zq1.style.left="8px";
    zq1.style.top=y+"%";
    animate(zq1);
}

function animate(ele){
    ele.onclick=function (){
        ele.style.left="8px";
        const y=Math.round(Math.random()*73+5).toString();
        ele.style.top=y+"%";
        score=score+2;
    }
    setInterval(function ()
    {
        var current=ele.offsetLeft;
        ele.style.left=(current+1).toString()+"px";
        if(current>window.innerWidth-100){
            ele.style.left="8px";
            const y=Math.round(Math.random()*73+5).toString();
            ele.style.top=y+"%";
            score=score-1;
        }
    },1000);

}

showzq1();
