let elements=[  {image:"img/diamant.gif",nom:"hologramme 1",categorie:"animaux",prix:200},
                {image:"img/lion-removebg.png",nom:"hologramme 2",categorie:"animaux",prix:200},
                {image:"img/Leia.gif",nom:"hologrammel 3",categorie:"animaux",prix:200},
                {image:"img/nissanT.gif",nom:"hologrammel 4",categorie:"animaux",prix:200}
            ];
let i=0;
let boutonL=document.querySelector(".boutonL");
let boutonR=document.querySelector(".boutonR");
let tel=document.querySelector("#telephone");
let holo=document.createElement("img");
fondHolo.style.transition="all 1000ms";
holo.setAttribute("src",elements[0].image);
holo.className="holo"
holo.style.width="100%";
holo.style.height="100%";
holo.style.scale="0%";
holo.style.opacity="0";
holo.style.transform="translateY(-80px)";
holo.style.transformOrigin="bottom center";
holo.style.transition="all 1000ms"
fondHolo.appendChild(holo);

tel.onclick=()=>{
    if (holo.style.opacity=="0") {
        holo.style.opacity="1";
        holo.style.scale="100%";
        fondHolo.style.opacity="1";
        fondHolo.style.scale="100%";
    }else if (holo.style.opacity=="1") {
        holo.style.opacity="0";
        holo.style.scale="0%";
        fondHolo.style.opacity="0";
        fondHolo.style.scale="0%";
    }
};

function opacite1() {
    holo.style.opacity="1";
    holo.style.scale="100%";
    fondHolo.style.opacity="1";
    fondHolo.style.scale="100%";
}
function opacite0() {
    holo.style.opacity="0";
    holo.style.scale="0%";
    fondHolo.style.opacity="0";
    fondHolo.style.scale="0%";
}
boutonR.onclick=()=>{
    opacite1();
    setTimeout(() => {
        if (i==elements.length-1) {
            i=0
        }else{
            i++
        }
        holo.setAttribute("src",elements[i].image)
        opacite1()
        }, 1000);
        console.log(i, elements.length)
    }
boutonL.onclick=()=>{
    opacite1();
    setTimeout(() => {
        if (i==0) {
            i=elements.length-1
        }else{
            i--
        }
        holo.setAttribute("src",elements[i].image)
        opacite1()
        }, 1000);
        console.log(i, elements.length)
    }
