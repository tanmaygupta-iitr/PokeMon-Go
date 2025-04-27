// import { PlayerPokemon } from "./CP.js";
import {collisionArea,Satisfy} from "./Satisfy.js"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const audio1=new Audio();
audio1.src="./Assets/assets_town.mp3";
document.addEventListener("DOMContentLoaded",()=>{
    audio1.play();
    audio1.loop=true;
})
function DrawImgManual(src,x,y,width,height){
    const Img=new Image();
    Img.src=`./Assets/${src}.png`;
    Img.onload=()=>{
        ctx.drawImage(Img,x,y,width,height);
    }
    return Img;
}
const TreeImg = new Image();
TreeImg.src = "./Assets/tree2.png";
TreeImg.onload = function() {
    for(let i=0;i<20;i++){
        ctx.drawImage(TreeImg, 0,i*30);
        ctx.drawImage(TreeImg,770,i*30)
    }
    for(let i=0;i<25;i++){
        ctx.drawImage(TreeImg, (i+1)*30,0);
        ctx.drawImage(TreeImg, (i+1)*30,565);
    }   
    for(let i=0;i<7;i++){
        for(let j=0;j<4;j++){
            ctx.drawImage(TreeImg,30+j*30,350+i*30);
            ctx.drawImage(TreeImg,650+j*30,350+i*30);
        }  
    }
};
const grassPlain=new Image();
grassPlain.src="./Assets/grassplain.png";
grassPlain.onload=()=>{
    for(let i=0;i<24;i++){
        for(let j=0;j<7;j++){
            ctx.drawImage(grassPlain,30+30*i,35+j*74);
        }
    }  
}
const bush=new Image();
bush.src="./Assets/bush.png";
bush.onload=()=>{
    for(let i=0;i<4;i++){
        for(let j=0;j<17;j++){
            ctx.drawImage(bush,30+15*j,35+15*i);
        }  
    }
    for(let i=0;i<13;i++){
        for(let j=0;j<3;j++){
            ctx.drawImage(bush,30+15*j,95+15*i);
        }  
    }
    for(let i=0;i<4;i++){
        for(let j=0;j<18;j++){
            ctx.drawImage(bush,500+15*j,35+15*i);
        }  
    }
    for(let i=0;i<13;i++){
        for(let j=0;j<4;j++){
            ctx.drawImage(bush,710+15*j,95+15*i);
        }  
    }
    for(let i=0;i<8;i++){
        for(let j=0;j<10;j++){
            ctx.drawImage(bush,205+15*i,350+15*j);
            ctx.drawImage(bush,460+15*i,350+15*j);
        }  
    }
}
const roadplain=new Image();
const roadplain1=new Image();
roadplain.src="./Assets/plaincity.png";
roadplain1.src="./Assets/plaincity1.png";
roadplain.onload=()=>{
    for(let i=0;i<2;i++){
        for(let j=0;j<8;j++){
            ctx.drawImage(roadplain,30+91.5*j,290+30*i,100,30);
        }
    }
    for(let i=0;i<9;i++){
        ctx.drawImage(roadplain1,450,35+i*30,50,75);
    }
    ctx.drawImage(roadplain,330,125,120,30);
    ctx.drawImage(roadplain,330,242,120,30);  
    for(let i=0;i<9;i++){
        ctx.drawImage(roadplain1,450,35+i*30,50,75);
    }
}
roadplain1.onload=()=>{
    for(let i=0;i<4;i++){
        for(let j=0;j<2;j++){
            ctx.drawImage(roadplain1,286+14*j,35+70*i,30,90);
        }
    }
}
const Gym=new Image();
Gym.src="./Assets/Gym.png";
Gym.onload=()=>{
    ctx.drawImage(Gym,324,348,120,84);
}
const fence_1=DrawImgManual("fence",75,260,120,30)
const fence_2=DrawImgManual("fence",156,230,120,30)
const house1=DrawImgManual("house1",95,100,80,100);
const house2=DrawImgManual("house2",185,102,80,100);
const house3_1=DrawImgManual("house_fence",330,35,120,90);
const house3_2=DrawImgManual("house_fence",330,260,120,90);
const water_up1=DrawImgManual("waterpond",330,150,64,47);
const water_up2=DrawImgManual("waterpond",390,150,64,47);
const water_down1=DrawImgManual("waterpond1",330,195,64,47);
const water_down2=DrawImgManual("waterpond1",390,195,64,47);  
const oakLab=DrawImgManual("oakLab",510 ,100,102,100); 
const pok_centre=DrawImgManual("pokemon-centre",630,100,80,100);
const flowers1=DrawImgManual("flowers",500,220 ,107,70);
const flowers2=DrawImgManual("flowers",607,220 ,100,70);

ctx.save();

function drawMap(){
    for(let i=0;i<20;i++){
        ctx.drawImage(TreeImg, 0,i*30);
        ctx.drawImage(TreeImg,770,i*30);
    }
    for(let i=0;i<25;i++){
        ctx.drawImage(TreeImg, (i+1)*30,0);
        ctx.drawImage(TreeImg, (i+1)*30,565);
    }   
    for(let i=0;i<7;i++){
        for(let j=0;j<4;j++){
            ctx.drawImage(TreeImg,30+j*30,350+i*30);
            ctx.drawImage(TreeImg,650+j*30,350+i*30);
        }  
    }
    //bush
    for(let i=0;i<4;i++){
        for(let j=0;j<17;j++){
            ctx.drawImage(bush,30+15*j,35+15*i);
        }  
    }
    for(let i=0;i<13;i++){
        for(let j=0;j<3;j++){
            ctx.drawImage(bush,30+15*j,95+15*i);
        }  
    }
    for(let i=0;i<4;i++){
        for(let j=0;j<18;j++){
            ctx.drawImage(bush,500+15*j,35+15*i);
        }  
    }
    for(let i=0;i<13;i++){
        for(let j=0;j<4;j++){
            ctx.drawImage(bush,710+15*j,95+15*i);
        }  
    }
    for(let i=0;i<8;i++){
        for(let j=0;j<10;j++){
            ctx.drawImage(bush,205+15*i,350+15*j);
            ctx.drawImage(bush,460+15*i,350+15*j);
        }  
    }
    // for(let i=0;i<4;i++){
    //     ctx.drawImage(bush,300,350+15*i);
    // }
    //roads
    for(let i=0;i<2;i++){
        for(let j=0;j<8;j++){
            ctx.drawImage(roadplain,30+91.5*j,290+30*i,100,30);
        }
    }
    for(let i=0;i<9;i++){
        ctx.drawImage(roadplain1,450,35+i*30,50,75);
    }
    for(let i=0;i<9;i++){
        ctx.drawImage(roadplain1,450,35+i*30,50,75);
    }
    ctx.drawImage(roadplain,330,125,120,30);
    ctx.drawImage(roadplain,330,242,120,30);
    for(let i=0;i<4;i++){
        for(let j=0;j<2;j++){
            ctx.drawImage(roadplain1,286+14*j,35+70*i,30,90);
        }
    }
    //houses
    ctx.drawImage(Gym,324,348,120,84);
    ctx.drawImage(fence_1,75,260,120,30);
    ctx.drawImage(fence_2,156,230,120,30);
    ctx.drawImage(house1,95,100,80,100);
    ctx.drawImage(house2,185,102,80,100);
    ctx.drawImage(house3_1,330,35,120,90);
    ctx.drawImage(house3_2,330,260,120,90);
    ctx.drawImage(water_up1,330,150,64,47);
    ctx.drawImage(water_up2,390,150,64,47);
    ctx.drawImage(water_down1,330,195,64,47);
    ctx.drawImage(water_down2,390,195,64,47);
    ctx.drawImage(oakLab,510 ,100,102,100);
    ctx.drawImage(pok_centre,630,100,80,100);
    ctx.drawImage(flowers1,500,220 ,107,70);
    ctx.drawImage(flowers2,607,220 ,100,70);
    // for(let i=0;i<collisionArea.length;i++){
    //     const obj=collisionArea[i];
    //     ctx.strokeStyle="red";
    //     ctx.lineWidth=3;
    //     ctx.strokeRect(obj.x,obj.y,obj.w,obj.h);
    // }
}


function DrawImgPlayer(src,x,y,width,height){
    const Img=new Image();
    Img.src=`./Player/${src}.png`;
    Img.onload=()=>{
        ctx.drawImage(Img,x,y,width,height);
    }
    return Img;
}
let playerInfo=parseInt(localStorage.getItem("playerInfo"));
let playerPokemon=parseInt(localStorage.getItem("playerPokemon"));
const player={
    x:110,
    y:200,
    width:14,
    height:19,
    pokemon:[],
}


// clearRect(0,0,canvas.width,canvas.height);
drawMap()
drawMap();
const p_left=DrawImgPlayer("player-left-stand",player.x,player.y,player.width,player.height);
const p_right=DrawImgPlayer("player-right-stand",player.x,player.y,player.width,player.height);
const p_up=DrawImgPlayer("player-up-stand",player.x,player.y,player.width,player.height);
const p_down=DrawImgPlayer("player-down-stand",player.x,player.y,player.width,player.height);
ctx.drawImage(p_down,player.x,player.y,player.width,player.height);
window.addEventListener('keydown',(e)=>{
    if(!['w','a','s','d'].includes(e.key)){
        console.log( " Use WASD for movement!");
        return;
    }
    else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawMap();
        let d=4;
        let x1=player.x;
        let y1=player.y;
        console.log(player.x +"," + player.y);
        if(e.key==='w'){
            y1-=d;
            if(!Satisfy(x1,y1)){
                player.x=x1;
                player.y=y1;
            }
            
            ctx.drawImage(p_up,player.x,player.y,player.width,player.height); 
            console.log(p_up);
        }
        if(e.key==="a"){
            x1-=d;
            if(!Satisfy(x1,y1)){
                player.x=x1;
                player.y=y1;
            }
            ctx.drawImage(p_left,player.x,player.y,player.width,player.height);
        }
        if(e.key==="s"){
            y1+=d;
            if(!Satisfy(x1,y1)){
                player.x=x1;
                player.y=y1;
            }
            ctx.drawImage(p_down,player.x,player.y,player.width,player.height); 
            
        }
        if(e.key==="d"){
            x1+=d;
            if(!Satisfy(x1,y1)){
                player.x=x1;
                player.y=y1;
        
            }
            ctx.drawImage(p_right,player.x,player.y,player.width,player.height);
        }
        // ctx.strokeRect(player.x,player.y,player.width,player.height);   
    }
});
let oaklabX=554;
let oakLabY=196;

let c=0;
let GymX=394;
let GymY=432;
if(localStorage.playerInfo && localStorage.playerPokemon){
    setTimeout(()=>{
        alert("Go to the Pokemon Gym for battle!");
    })
    window.addEventListener("keydown",(e)=>{
        if(player.x==GymX && player.y==GymY){
            alert("Press ENTER to FIGHT!");
            if(e.key==="Enter"){
                window.location.href="/Battle.html";
                audio1.pause();
            }
        }
    });
}
else{
    setTimeout(()=>{
        alert("Use WASD for Movement.\nGo to the Oak's Lab and press Enter to choose your starter Pokemon!");
    },1500);
    window.addEventListener("keydown",(e)=>{
        if(player.x==oaklabX && player.y==oakLabY){
            if(c==0){
                alert("Press ENTER to enter OAK's LAB");
                c++;
            }
            if(e.key==="Enter"){
                localStorage.setItem("playerInfo",JSON.stringify(player));
                window.location.href="/CP.html";
                audio1.pause();
            }
        }
    });
}
