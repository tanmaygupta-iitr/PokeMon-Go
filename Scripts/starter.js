const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const audio1=new Audio();

if(canvas.style.display!=="none"){
    audio1.src="./Assets/assets_opening.mp3";
    document.addEventListener('mousemove',()=>{
        audio1.play();
        audio1.loop=true;
    })

    const introMap=new Image();
    introMap.src="./Assets/introScreen.png"
    function popUp(){
        alert("Press ENTER to start!");
    }
    introMap.onload=()=>{
        ctx.drawImage(introMap,0,0,800,600);
        setTimeout(()=>{
            popUp();
        },3000);
    }
    localStorage.removeItem("playerPokemon");
    localStorage.removeItem("playerInfo");
    localStorage.removeItem("enemyPokemon");
    window.addEventListener("keydown",(e)=>{
        if(e.key!=="Enter"){
            popUp();
        }
        else{
            alert("Welcome To Pokemon Game!");
            window.location.href="/map.html";
        }
    })
}
