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
                gif_front:data.sprites.other.showdown.front_default,
                gif_back:data.sprites.other.showdown.back_default,
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
        console.log(PokemonData.img.gif_front);
        console.log(PokemonData.img.gif_back);
        console.log("Useful data Extracted succesfully!");
        return PokemonData;
    } catch (error) {
        console.log(error);
    }
}
const PlayerPokemon=[];
const ChoicesArrMy=[];
let PokCount=0;
const h1My=document.getElementsByClassName("h1")[0];
const h1Enemy=document.getElementsByClassName("h1_enemy")[0];
const pokemonContainer=document.getElementsByClassName("pokemon_container")[0];
const enemyContainer=document.getElementsByClassName("enemy_container")[0];
for(let i=0;i<8;i++){
    let randomNo=Math.floor(Math.random()*100)+1;
    for(let i=0;i<ChoicesArrMy.length;i++){
        if(randomNo===ChoicesArrMy[i].id){
            randomNo+=150+i;
            break;
        }
    }
    const pokemonData=await getPokemondata(randomNo);
    ChoicesArrMy.push(pokemonData);
    const myh3=document.createElement("h3");
    myh3.classList.add("h3");
    myh3.textContent=`${pokemonData.name}`;
    const myImg=document.createElement("img");
    myImg.src=`${ChoicesArrMy[i].img.front}`;
    console.log(myImg.src);
    myImg.classList.add("img");
    const myDiv=document.createElement("div");
    myDiv.classList.add("pokemon-my");
    myDiv.appendChild(myImg);
    myDiv.appendChild(myh3); 
    pokemonContainer.appendChild(myDiv);  
    myDiv.addEventListener('click',()=>{
        if(PokCount<4){
            ++PokCount;
            if(PlayerPokemon.length<=3){
                if(myDiv.style.backgroundColor==="gray"){
                    PokCount=PokCount-2;
                    PlayerPokemon.pop();
                    myDiv.style.backgroundColor="rgb(209, 221, 255)";
                }
                else{
                    if(PlayerPokemon.length===3){
                        PokCount--;
                    }
                    else{
                        PlayerPokemon.push(pokemonData);
                        myDiv.style.backgroundColor="gray";
                    }
                    
                }    
            }
            console.log(PokCount);
        }
    })
}
let enemyPokCount=0;
const ChoicesArr=[];
const EnemyPokemon=[];
for(let i=0;i<8;i++){
    let randomNo=Math.floor(Math.random()*100)+1;
    for(let i=0;i<ChoicesArr.length;i++){
        if(randomNo===ChoicesArr[i].id){
            randomNo+=150+i;
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
    myDiv.classList.add("pokemon-enemy");
    myDiv.appendChild(myImg);
    myDiv.appendChild(myh3); 
    enemyContainer.appendChild(myDiv);  
    myDiv.addEventListener('click',()=>{
        if(enemyPokCount<4){
            ++enemyPokCount;
            if(EnemyPokemon.length<=3){
                if(myDiv.style.backgroundColor==="red"){
                    enemyPokCount=enemyPokCount-2;
                    EnemyPokemon.pop();
                    myDiv.style.backgroundColor="rgb(209, 221, 255)";
                }
                else{
                    if(EnemyPokemon.length===3){
                        enemyPokCount--;
                    }
                    else{
                        EnemyPokemon.push(pokemonData);
                        myDiv.style.backgroundColor="red";
                    }
                    
                }    
            }
            console.log(enemyPokCount);
        }
    })
}
const selectBtn=document.getElementsByClassName("selectBtnDiv")[0];
selectBtn.addEventListener('click',()=>{
    if(PokCount!==3 || enemyPokCount!==3){
        alert("You must Select 6 Pokemons!");  
    }
    else{
        localStorage.setItem("playerPokemon",JSON.stringify(PlayerPokemon));
        localStorage.setItem("enemyPokemon",JSON.stringify(EnemyPokemon));
        window.location.href="/map.html";
    }
})
