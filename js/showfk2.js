
var xmax=(window.innerWidth-100).toString();

function showzq2(){
    const bkg2=document.getElementById('main');
    const zq2=document.createElement('div');
    bkg2.appendChild(zq2);
    const zq2i=document.createElement('img');
    zq2.appendChild(zq2i);
    zq2i.src="image/fk.jpg";
    zq2i.alt="zhouqi";
    zq2.style.position="absolute";
    const y=Math.round(Math.random()*73+5).toString();
    zq2.style.left=xmax+"px";
    zq2.style.top=y+"%";
    animate(zq2);
}

function animate(ele2){
    ele2.onclick=function (){
        ele2.style.left=xmax+"px";
        const y=Math.round(Math.random()*73+5).toString();
        ele2.style.top=y+"%";
    }
    setInterval(function ()
    {
        var current=ele2.offsetLeft;
        ele2.style.left=(current-15).toString()+"px";
        if(current<8){
            ele2.style.left=xmax+"px";
            const y=Math.round(Math.random()*73+5).toString();
            ele2.style.top=y+"%";
        }
    },1);

}

showzq2();
