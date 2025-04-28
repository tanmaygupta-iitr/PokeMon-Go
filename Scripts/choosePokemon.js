const audio1=new Audio();
audio1.src="./Assets/assets_opening.mp3";
window.addEventListener('DOMContentLoaded',()=>{
    audio1.play();
    audio1.loop=true;
})
async function getPokemondata(pokemonId){
    try {
        let response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data=await  response.json();
        console.log("data fetched successfully");
        // console.log(data);
        const PokemonData={
            id:data.id,
            name:data.forms[0].name,
            img:{
                front:data.sprites.front_default,
                back:data.sprites.back_default,
            },
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
        return PokemonData;
    } catch (error) {
        console.log(error);
    }
}
const PlayerPokemon=[];
const EnemyPokemon=[];
const ChoicesArr=[];
let PokCount=0;
const h1Element=document.getElementsByClassName("h1")[0];
const pokemonContainer=document.getElementsByClassName("pokemon_container")[0];
for(let i=0;i<12;i++){
    let randomNo=Math.floor(Math.random()*100)+1;
    let randomNo2=Math.floor(Math.random()*100)+1;
    for(let i=0;i<ChoicesArr.length;i++){
        if(randomNo===ChoicesArr[i].id){
            randomNo=randomNo2;
            break;
        }
    }
    const pokemonData=await getPokemondata(randomNo);
    ChoicesArr.push(pokemonData);
    const myh3=document.createElement("h3");
    myh3.classList.add("h3");
    myh3.textContent=`${pokemonData.name}`;
    const myImg=document.createElement("img");
    myImg.src=`${ChoicesArr[i].img.front}`;
    console.log(myImg.src);
    myImg.classList.add("img");
    const myDiv=document.createElement("div");
    myDiv.classList.add("pokemon");
    myDiv.appendChild(myImg);
    myDiv.appendChild(myh3); 
    pokemonContainer.appendChild(myDiv);  
    myDiv.addEventListener('click',()=>{
        if(PokCount<6){
            ++PokCount;
            if(PlayerPokemon.length<3){
                if(myDiv.style.backgroundColor==="gray"){
                    PokCount=PokCount-2;
                    PlayerPokemon.pop();
                    myDiv.style.backgroundColor="rgb(209, 221, 255)";
                }
                else{
                    PlayerPokemon.push(pokemonData);
                    myDiv.style.backgroundColor="gray";
                }
                
            }
            if(PlayerPokemon.length===3 && h1Element.innerHTML==="<h1>SELECT POKEMONS FOR ENEMY[ANY 3]!</h1>"){
                if(myDiv.style.backgroundColor==="red"){
                    PokCount=PokCount-2;
                    EnemyPokemon.pop();
                    myDiv.style.backgroundColor="rgb(209, 221, 255)";
                }
                else if(myDiv.style.backgroundColor==="gray"){
                    PokCount--;
                }
                else{
                    myDiv.style.backgroundColor="red";
                    EnemyPokemon.push(pokemonData);
                }   
            }
            if(PokCount===3){
                h1Element.innerHTML="<h1>SELECT POKEMONS FOR ENEMY[ANY 3]!</h1>";
            }
            
            console.log(PokCount);
        }
    })
}
const selectBtn=document.getElementsByClassName("selectBtnDiv")[0];
selectBtn.addEventListener('click',()=>{
    if(PokCount!==6){
        alert("You must Select 6 Pokemons!");  
    }
    else{
        localStorage.setItem("playerPokemon",JSON.stringify(PlayerPokemon));
        localStorage.setItem("enemyPokemon",JSON.stringify(EnemyPokemon));
        window.location.href="/map.html";
    }
})
