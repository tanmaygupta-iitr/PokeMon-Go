const PlayerPokemon=[];
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
                back:data.sprites.back_default,},
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
const pokemonData1=await getPokemondata(1);
const pokemonData2=await getPokemondata(7);
const pokemonData3=await getPokemondata(4);


var pokemonImg1=document.getElementById("pokemon-image1");
var pokemonImg2=document.getElementById("pokemon-image2");
var pokemonImg3=document.getElementById("pokemon-image3");

pokemonImg1.src=`${pokemonData1.img.front}`;
pokemonImg2.src=`${pokemonData2.img.front}`;
pokemonImg3.src=`${pokemonData3.img.front}`;


const p1=document.querySelector(".p1");
const p2=document.querySelector(".p2");
const p3=document.querySelector(".p3");
const h1=document.querySelector(".h1");
const enter=document.querySelector(".enter");
let c=0;
p1.addEventListener('click', function() {
    h1.innerHTML="You Chose BULBASAUR!";
    PlayerPokemon.push(pokemonData1);
    p2.style.display="none";
    p3.style.display="none";
    setTimeout(()=>{
        enter.style.display="block";
    },1500)
    c++;
    console.log(PlayerPokemon);
});

p2.addEventListener('click', function() {
    h1.innerHTML="You Chose SQUIRTLE!";
    PlayerPokemon.push(pokemonData2);
    p1.style.display="none";
    p3.style.display="none";
    setTimeout(()=>{
        enter.style.display="block";
    },1500)
    c++;
    console.log(PlayerPokemon);
});

p3.addEventListener('click', function() {
    h1.innerHTML="You Chose CHARMANDER!";
    PlayerPokemon.push(pokemonData3);
    p2.style.display="none";
    p1.style.display="none";
    setTimeout(()=>{
        enter.style.display="block";
    },1500)
    c++;
    console.log(PlayerPokemon);
});

window.addEventListener("keydown",(e)=>{
    if(e.key==="Enter" && c>=1){
        localStorage.setItem("playerPokemon",JSON.stringify(PlayerPokemon));
        window.location.href="map.html";
        // NEED TO APPLY LOCAL STORAGE AND BATTLE.js
    }
});
