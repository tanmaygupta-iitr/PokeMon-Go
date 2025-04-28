//taking all the elements:
// import { getPokemondata } from "./CP.js";
let attackBtn=document.getElementsByClassName("attackBtn")[0];
let diaglogBox=document.getElementsByClassName("dialog-box")[0];

const audio1=new Audio();
audio1.src="./Assets/assets_battle.mp3";
document.addEventListener('DOMContentLoaded',()=>{
    audio1.play();
    audio1.loop=true;
})
const myImg=document.getElementsByClassName("myImg")[0];
const enemyImg=document.getElementsByClassName("enemyImg")[0];

const myname=document.getElementsByClassName("myname")[0];
const enemyname=document.getElementsByClassName("enemyname")[0];

let myHpDisplay=document.getElementsByClassName("hpMy")[0];
let enemyHpDisplay=document.getElementsByClassName("hpEnemy")[0];

const  mymove1=document.getElementsByClassName("myMoves1")[0];  
const  mymove2=document.getElementsByClassName("myMoves2")[0];
const  mymove3=document.getElementsByClassName("myMoves3")[0];
const  mymove4=document.getElementsByClassName("myMoves4")[0];


const  enemymove1=document.getElementsByClassName("enemyMoves1")[0];  
const  enemymove2=document.getElementsByClassName("enemyMoves2")[0];
const  enemymove3=document.getElementsByClassName("enemyMoves3")[0];
const  enemymove4=document.getElementsByClassName("enemyMoves4")[0];

let gameOver=false;
//variables needed:
let myPokemon=[];
let enemyPokemon=[];

myPokemon=  JSON.parse(localStorage.getItem("playerPokemon"));
enemyPokemon=  JSON.parse(localStorage.getItem("enemyPokemon"));


let mymaxHp=0;
let enemymaxHp=0;
let enemyCurrHp=0;
let myCurrHp=0;
// let myTurn=true;
let myhp_percent=(myCurrHp/mymaxHp)*100;
let enemyhp_percent=(enemyCurrHp/enemymaxHp)*100;


console.log("MyPokemon:",myPokemon.hp)
console.log("EnemeyPokemon:",enemyPokemon.hp)

myHpDisplay.style.width=`${myhp_percent}%`;
enemyHpDisplay.style.width=`${enemyhp_percent}%`;
let mymoveSelected=false;
let enemymoveSelected=false;
let myMove=null;
let enemyMove=null;
function Myintialize(){
    mymaxHp=Number(myPokemon[0].hp);
    
    myCurrHp=mymaxHp;
    myImg.src=`${myPokemon[0].img.gif_back}`;

    myname.textContent=`${myPokemon[0].name.toUpperCase()}`;

    mymove1.textContent=`${myPokemon[0].moves.move1.name}`;
    mymove2.textContent=`${myPokemon[0].moves.move2.name}`;
    mymove3.textContent=`${myPokemon[0].moves.move3.name}`;
    mymove4.textContent=`${myPokemon[0].moves.move4.name}`;
    myhp_percent=(myCurrHp/mymaxHp)*100;
    myHpDisplay.style.width=`${myhp_percent}%`;
    mymoveSelected=false;
    myMove=null;
    
}
function enemyinitialize(){
    enemymaxHp=Number(enemyPokemon[0].hp);
    enemyCurrHp=enemymaxHp;
    enemyImg.src=`${enemyPokemon[0].img.gif_front}`;
    enemyname.textContent=`${enemyPokemon[0].name.toUpperCase()}`;
    enemymove1.textContent=`${enemyPokemon[0].moves.move1.name}`;
    enemymove2.textContent=`${enemyPokemon[0].moves.move2.name}`;
    enemymove3.textContent=`${enemyPokemon[0].moves.move3.name}`;
    enemymove4.textContent=`${enemyPokemon[0].moves.move4.name}`;
    enemyhp_percent=(enemyCurrHp/enemymaxHp)*100;
    enemyHpDisplay.style.width=`${enemyhp_percent}%`;
    enemymoveSelected=false;
    enemyMove=null;
    
}
Myintialize();
enemyinitialize();





// diaglogBox.textContent="Select Yours and Enemy's Moves.";
mymove1.addEventListener('click',()=>{
    
    if(!mymoveSelected){
        
        myMove=myPokemon[0].moves.move1;
        mymove1.style.background="gray";
        mymoveSelected=true;
    }   
})
mymove2.addEventListener('click',()=>{
    if(!mymoveSelected){
        myMove=myPokemon[0].moves.move2;
        mymove2.style.background="gray";

        mymoveSelected=true;
    }
})
mymove3.addEventListener('click',()=>{
    if(!mymoveSelected ){
        myMove=myPokemon[0].moves.move3;
        mymove3.style.background="gray";

        mymoveSelected=true;
    }
})
mymove4.addEventListener('click',()=>{
    if(!mymoveSelected ){
        myMove=myPokemon[0].moves.move4;
        mymove4.style.background="gray";
        mymoveSelected=true;
    }   
})

enemymove1.addEventListener('click',()=>{
    
    if(!enemymoveSelected){
        enemyMove=enemyPokemon[0].moves.move1;
        enemymove1.style.background="gray";
        enemymoveSelected=true;
    }   
})
enemymove2.addEventListener('click',()=>{
    if(!enemymoveSelected){
        enemyMove=enemyPokemon[0].moves.move2;
        enemymove2.style.background="gray";

        enemymoveSelected=true;
    }
})
enemymove3.addEventListener('click',()=>{
    if(!enemymoveSelected ){
        enemyMove=enemyPokemon[0].moves.move3;
        enemymove3.style.background="gray";

        enemymoveSelected=true;
    }
})
enemymove4.addEventListener('click',()=>{
    if(!enemymoveSelected ){
        enemyMove=enemyPokemon[0].moves.move4;
        enemymove4.style.background="gray";
        enemymoveSelected=true;
    }   
})
// let i=Math.floor(Math.random()*3)+1;
function gameEnd(){
    if(gameOver){
        setTimeout(()=>{
            diaglogBox.textContent="GAMEOVER! Well Played";

            alert("Press Enter to continue");
            window.addEventListener("keydown",(e)=>{
                if(e.key==="Enter"){                   
                localStorage.removeItem("playerPokemon");
                localStorage.removeItem("playerInfo");
                localStorage.removeItem("enemyPokemon")
                    window.location.href="/map.html";
                }
            });
        },1000);

        
    }
}
const MenuBtn=document.getElementsByClassName("menu")[0];
MenuBtn.addEventListener('click',()=>{

    diaglogBox.textContent="GOING BACK TO MAP...";
    setTimeout(()=>{
        localStorage.removeItem("playerPokemon");
        localStorage.removeItem("playerInfo");
        localStorage.removeItem("enemyPokemon");
        window.location.href="/map.html";
    },3500);
    
})


function myAttack(myMove){
    setTimeout(()=>{
        
        const damage=myPokemon[0].damage;
        let attackDamage=Math.floor((((Math.random()*myMove.accuracy)/100)*damage)/3);
        console.log("Player:",attackDamage)
        diaglogBox.textContent=`${myPokemon[0].name.toUpperCase()} did a damage of ${attackDamage}`;

        enemyCurrHp=enemyCurrHp-attackDamage;
        enemyhp_percent=Math.max(0,(enemyCurrHp/enemymaxHp)*100);
        console.log("EnemyHp:",enemyCurrHp);
        console.log("EnemyHp%:",enemyhp_percent);

        enemyHpDisplay.style.width= `${enemyhp_percent}%`;
        if(enemyCurrHp<=0){
            setTimeout(()=>{
                if(enemyCurrHp<=0 && myCurrHp<=0){
                    diaglogBox.textContent="Both the Pokemons Fainted!";
                }else{
                    diaglogBox.textContent=`${enemyPokemon[0].name} Fainted! `;
                }
                enemyPokemon.splice(0,1);
                if(enemyPokemon.length!=0){ 
                    enemyinitialize();
                }
                else{
                    gameOver=true;
                    diaglogBox.textContent="You Won! Enemy Lost."
                    gameEnd();
                }
                
            },1000);
        }
        return attackDamage;
        
    },600);
    return 0;
    
    
}
function EnemyAttack(enemyMove){
    setTimeout(()=>{
        const damage1=enemyPokemon[0].damage;
        let attackDamage1=Math.floor((((Math.random()*enemyMove.accuracy)/100)*damage1)/3);
        console.log("Enemy:",attackDamage1);
        console.log("acc:",enemyMove);
        diaglogBox.textContent+=` and ${enemyPokemon[0].name.toUpperCase()} did a damage of ${attackDamage1}.`;
        myCurrHp-=attackDamage1;
        myhp_percent=Math.max(0,(myCurrHp/mymaxHp)*100);
        console.log("PLayerHp:",myCurrHp);
        console.log("PlayerHp%:",myhp_percent);
        myHpDisplay.style.width=`${myhp_percent}%`;
        if(myCurrHp<=0){
            setTimeout(()=>{
                if(enemyCurrHp<=0 && myCurrHp<=0){
                    diaglogBox.textContent="Both the Pokemons Fainted!";
                }else{
                    diaglogBox.textContent=`${myPokemon[0].name} Fainted! `;
                }
                myPokemon.splice(0,1);
                if(myPokemon.length!=0){     
                    Myintialize();
                }
                else{
                    gameOver=true;
                    diaglogBox.textContent="You Lost! Enemy Won."
                    gameEnd();
                }
                
            },1000);
        }
        return attackDamage1;
    },600);
    return 0;
    
    
}
const battleBtn=document.getElementsByClassName("BattleBtn")[0];
battleBtn.addEventListener('click',()=>{
    mymove1.style.background="green";
    enemymove1.style.background="green";
    mymove2.style.background="green";
    enemymove2.style.background="green";
    mymove3.style.background="green";
    enemymove3.style.background="green";
    mymove4.style.background="green";
    enemymove4.style.background="green";
    if(!gameOver){
        if(mymoveSelected && enemymoveSelected){
            setTimeout(()=>{
                myAttack(myMove);
                EnemyAttack(enemyMove);
            },1500);
            
            if(myCurrHp<=0 || enemyCurrHp<=0){
                gameOver=true;
            }else{
                mymoveSelected=false;
                enemymoveSelected=false;
            }
        } 
    }
    else{
        gameEnd();
    }   

})

