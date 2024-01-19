var elPokeList = document.querySelector(".js-pokelist");
var elimg = document.querySelector(".js-name");
var slicePokemons = pokemons.slice(0, 20);

for (var poke of slicePokemons) {
  var newList = document.createElement("li");
  var newPokemonNum = document.createElement("span");
  var newPokeImg = document.createElement("img");
  var newPokemonName = document.createElement("strong");
  var newCondyCount = document.createElement("time");
  var newListType = document.createElement("h6");
  var newListCandy = document.createElement("p");

  newPokemonNum.textContent = poke.num;
  newPokeImg.src = poke.img;
  newPokeImg.alt = poke.name + "pokemon qaxramoni";
  newPokemonName.textContent = poke.name;
  newCondyCount.textContent = poke.spawn_chance;
  newListType.textContent = poke.type.join(", ");
  newListCandy.textContent = poke.candy;

  newList.append(newPokemonNum, newPokeImg, newPokemonName, newCondyCount, newListType, newListCandy);
  elPokeList.appendChild(newList);
}




// maximum sonni topish formulasi //

var numbers = [1, 4, 6, 10, 3, 8, 9];
var result = 0;
for(var num of numbers){
  if(num > result){
    result = num;
  }
}
console.log(result);