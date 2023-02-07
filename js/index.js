var playersList = [];
var table = document.getElementById("playersTable");

playersList.push({
  name:'Iga Swiatek', 
  age: 21, 
  country: 'Polônia', 
  points: 10487
});
playersList.push({
  name:'Aryna Sabalenka', 
  age: 24, 
  country: 'Bielorrússia', 
  points: 6100
});
playersList.push({
  name:'Ons Jabeur', 
  age: 28, 
  country: 'Tunisia', 
  points: 5210
});
playersList.push({
  name:'Jessica Pegula', 
  age: 28, 
  country: 'Estados Unidos', 
  points: 5000
});

showTable(playersList)

function newPlayer(){
  var namePlayer = document.getElementById("name").value;
  var agePlayer = document.getElementById("age").value;
  var countryPlayer = document.getElementById("country").value;
  var pointsPlayer = document.getElementById("points").value;
  for(let i=0; i<playersList.length; i++) {
    if(namePlayer == playersList[i].name) {
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("country").value = "";
      document.getElementById("points").value = "";
      return alert("Jogadora já cadastrada!")
    } 
  }
  if(namePlayer == 0 || agePlayer == 0 || countryPlayer == 0 || pointsPlayer == 0) {
    return alert("Preencha todos os campos!")
  }
  let numberAge = Number(agePlayer)
  let numberPoints = Number(pointsPlayer)
  if(isNaN(numberAge) || isNaN(numberPoints)){
    return alert("Preencha os campos corretamente!")
  }
  playersList.push({
    name: namePlayer,
    age: agePlayer,
    country: countryPlayer,
    points: pointsPlayer
  });

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("country").value = "";
  document.getElementById("points").value = "";

  showTable(playersList);
}

function showTable() {
  table.innerHTML = "";
  playersList.sort(function(a,b) {
    return a.points > b.points ? -1 : a.points < b.points ? 1 : 0;
  })
  playersList.forEach((player, index) => {
    table.innerHTML += `
      <tr>
        <td>${player.name}</td>
        <td>${player.age}</td>
        <td>${player.country}</td>
        <td>${player.points}</td>
        <td><button class="button" id="buttonChampion" onClick="addChampion(${index})">Campeã</button></td>
        <td><button class="button" id="buttonVice" onClick="addVice(${index})">Vice-campeã</button></td>
        <td><button class="button" id="buttonSemi" onClick="addSemi(${index})">Semifinal</button></td>
      </tr>
    `;
  })
}

function addChampion(index) {
  playersList[index].points = (playersList[index].points + 2000);
  console.log(playersList[index])
  showTable(playersList)
}
function addVice(index) {
  playersList[index].points = (playersList[index].points + 1200);
  console.log(playersList[index])
  showTable(playersList)
}
function addSemi(index) {
  playersList[index].points = (playersList[index].points + 720);
  console.log(playersList[index])
  showTable(playersList)
}
