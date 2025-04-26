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

const  move1=document.getElementsByClassName("Moves1")[0];  
const  move2=document.getElementsByClassName("Moves2")[0];
const  move3=document.getElementsByClassName("Moves3")[0];
const  move4=document.getElementsByClassName("Moves4")[0];

async function getPokemondata(pokemonId){
    try {
        let response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data=await  response.json();
        console.log("data fetched successfully");
        // console.log(data);
        const PokemonData={
            id:data.id,
            name:data.forms[0].name,
            img:data.sprites.front_default,
            hp: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
            damage: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
            moves:{
                move1:{
                    name:data.moves[0].move.name,
                    accuracy:85,
                },
                move2:{
                    name:data.moves[1].move.name,
                    accuracy:75,
                },
                move3:{
                    name:data.moves[2].move.name,
                    accuracy:90,
                },
                move4:{
                    name:data.moves[3].move.name,
                    accuracy:100,
                },
            }
        }
        console.log("Useful data Extracted succesfully!");
        // console.log(PokemonData);
        console.log(PokemonData.img);
        return PokemonData;
    } catch (error) {
        console.log(error);
    }
}

let gameOver=false;
//variables needed:
let myPokemon=null;
let enemyPokemon=null;

let mymaxHp=0;
let enemymaxHp=0;

let enemyCurrHp=0;
let myCurrHp=0;
let myTurn=true;

myPokemon=  JSON.parse(localStorage.getItem("playerPokemon"))[0];
myImg.src=`${myPokemon.img.back}`;
// console.log(myPokemon);


let random=(Math.floor(Math.random()*150)+1);
enemyPokemon=await getPokemondata(random);
enemyImg.src=`${enemyPokemon.img}`;

mymaxHp=Number(myPokemon.hp);
enemymaxHp=Number(enemyPokemon.hp);

enemyCurrHp=enemymaxHp;
myCurrHp=mymaxHp;

myname.textContent=`${myPokemon.name.toUpperCase()}`;
enemyname.textContent=`${enemyPokemon.name.toUpperCase()}`;

move1.textContent=`${myPokemon.moves.move1.name}`;
move2.textContent=`${myPokemon.moves.move2.name}`;
move3.textContent=`${myPokemon.moves.move3.name}`;
move4.textContent=`${myPokemon.moves.move4.name}`;

let myhp_percent=(myCurrHp/mymaxHp)*100;
let enemyhp_percent=(enemyCurrHp/enemymaxHp)*100;


console.log("MyPokemon:",myPokemon.hp)
console.log("EnemeyPokemon:",enemyPokemon.hp)

myHpDisplay.style.width=`${myhp_percent}`;
enemyHpDisplay.style.width=`${enemyhp_percent}%`;
let moveSelected=false;
let myMove=null;
move1.addEventListener('click',()=>{
    if(!gameOver){
        diaglogBox.textContent="YOUR TURN!";
    }
    
    if(!moveSelected && myTurn){
        myMove=myPokemon.moves.move1;
        move1.style.background="gray";
        moveSelected=true;
    }   
})
move2.addEventListener('click',()=>{
    if(!moveSelected && myTurn){
        myMove=myPokemon.moves.move2;
        move2.style.background="gray";

        moveSelected=true;
    }
})
move3.addEventListener('click',()=>{
    if(!moveSelected && myTurn){
        myMove=myPokemon.moves.move3;
        move3.style.background="gray";

        moveSelected=true;
    }
})
move4.addEventListener('click',()=>{
    if(!moveSelected && myTurn){
        myMove=myPokemon.moves.move4;
        move4.style.background="gray";
        moveSelected=true;
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
                    window.location.href="../map.html";
                }
            });
        },3000);

        
    }
}
const MenuBtn=document.getElementsByClassName("menu")[0];
MenuBtn.addEventListener('click',()=>{

    diaglogBox.textContent="GOING BACK TO MAP...";
    setTimeout(()=>{
        localStorage.removeItem("playerPokemon");
        localStorage.removeItem("playerInfo");
        window.location.href="/map.html";
    },3500);
    
})

function myAttack(myMove){
    setTimeout(()=>{
        
        const damage=myPokemon.damage;
        let attackDamage=Math.floor((((Math.random()*myMove.accuracy)/100)*damage)/3);
        

        enemyCurrHp=enemyCurrHp-attackDamage;
        enemyhp_percent=Math.max(0,(enemyCurrHp/enemymaxHp)*100);
        console.log("EnemyHp:",enemyCurrHp);
        console.log("EnemyHp%:",enemyhp_percent);

        enemyHpDisplay.style.width= `${enemyhp_percent}%`;
        if(enemyCurrHp<=0){
            setTimeout(()=>{
                diaglogBox.textContent=`${enemyPokemon.name} Fainted! You Won!`;
    
            gameOver=true;
            gameEnd();
            return;
            },1000);
        }
        diaglogBox.textContent="ENEMY'S TURN!";
        myTurn=false;
        
    },1200);
    
}
function EnemyAttack(enemyMove){
    setTimeout(()=>{
        const damage1=enemyPokemon.damage;
        let attackDamage1=(((Math.random()*enemyMove.accuracy)/100)*damage1)/3;
        console.log("Enemy:",attackDamage1);

        myCurrHp-=attackDamage1;
        myhp_percent=Math.max(0,(myCurrHp/mymaxHp)*100);
        console.log("PLayerHp:",myCurrHp);
        console.log("PlayerHp%:",myhp_percent);
        myHpDisplay.style.width=`${myhp_percent}%`;
        if(myCurrHp<=0){
            setTimeout(()=>{
                diaglogBox.textContent=`${myPokemon.name} Fainted! You lost!`;
                gameOver=true;
                gameEnd();
                return;
            },1000)
        }
        diaglogBox.textContent="YOUR TURN!";
        myTurn=true;
    },2800);
    
}
attackBtn.addEventListener('click',()=>{
    move1.style.background="green";
    move2.style.background="green";
    move3.style.background="green";
    move4.style.background="green";
    if(!gameOver){
        if(moveSelected && myTurn){
            setTimeout(()=>{
                diaglogBox.textContent="YOUR TURN!";
                myAttack(myMove);
                if(enemyCurrHp<=0){
                    gameOver=true;
                    gameEnd();
                }
                diaglogBox.textContent="ENEMY'S TURN";
    
                EnemyAttack(enemyPokemon.moves.move3);
            },1500);
            
            if(myCurrHp<=0 || enemyCurrHp<=0){
                gameOver=true;
                // console.log("GameOver!");
            }else{
                moveSelected=false;
            }
        } 
    }    
})

