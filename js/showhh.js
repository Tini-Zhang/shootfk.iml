
function showhh(){
    const bkg=document.getElementById('main');
    const zq1=document.createElement('div');
    bkg.appendChild(zq1);
    const zq1i=document.createElement('img');
    zq1.appendChild(zq1i);
    zq1i.src="image/hh.PNG";
    zq1i.alt="huanghong";
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
        score=score-3;
    }
    setInterval(function ()
    {
        var current=ele.offsetLeft;
        ele.style.left=(current+10).toString()+"px";
        if(current>window.innerWidth-100){
            ele.style.left="8px";
            const y=Math.round(Math.random()*73+5).toString();
            ele.style.top=y+"%";
        }
    },1);

}

showhh();
