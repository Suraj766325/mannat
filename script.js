let a=document.getElementById("box22");
let b=document.getElementById("box21");
let c=document.getElementById("container");

a.addEventListener("mousemove",function(dets){
    let x=Math.ceil(Math.random()*80+10);
    let y=Math.ceil(Math.random()*80+10);

   a.style.position = "absolute";    
    a.style.top=x+"%";
    a.style.left=y+"%";
})
b.addEventListener("click",function(){
    c.innerHTML=`<div id="box1"><h1>Love You Too 💕</h1></div>
        <div id="quote">
            <blockquote>"If a hug represented how much I loved you, I would hold you in my arms forever."</blockquote>
        </div>
        `
})