/* document.querySelector('[data-action="destroy"]').addEventListener('click', function(){
  document.querySelector('body').classList.add('cross');
  document.addEventListener('click',function(el) {
    el.target.outerHTML = '';
  })
  setInterval(spawnJCVD,20);
});
function spawnJCVD()
{
  let jcvd = document.createElement('img');
  jcvd.setAttribute('src','./shooting.gif');
  jcvd.style.position = 'absolute';
  jcvd.style.top = Math.floor(Math.random() * Math.floor(screen.height)) + 'px' ;
  jcvd.style.left = Math.floor(Math.random() * Math.floor(screen.width)) + 'px' ;
  document.querySelector('body').appendChild(jcvd);
}
*/





// Select the div via it's id and store the selected element
// inside gameContainer var.
let gameContainer = document.querySelector('#game-container');
let bouton = document.querySelector('.bouton');
let childDivs = document.querySelectorAll('#game-container>div');
let cpt = 0;    // Nbr de coup dans le compteur



//Focntion couleurs inverser
function invertColor(div) {
  let green = "green-color";
  let red = "red-color";
  if (div.classList.contains(green)) {
    div.classList.remove(green);
    div.classList.add(red);

  } else {
    div.classList.remove(red);
    div.classList.add(green);
  };
};

// Fonction afficher une victoire
function checkVictory(divs)
{
  let victoryStatus = true;
  for (let i = 0; i < divs.length; i++)
  {
    if (divs[i].classList.contains('green-color'))
    {
      victoryStatus = false;
      break;
    }
  }
  if (victoryStatus == true)
  {
    setTimeout(function()
    {
    alert('Vous avez gagné');
    },500);
  }
};


// Fonction mettre en vert tous ce qui est rouge
function reset(div)
{
  let green = "green-color";
  let red = "red-color";
  if (div.classList.contains(red)) {
    div.classList.remove(red);
    div.classList.add(green);
  };
};


// Fonction afficher une Défaite et reseter le nombre de coup
function checkLoose(divs)
{
  let looseStatus = true;
  for (let i = 0; i < divs.length; i++)
  {
    if (divs[i].classList.contains('green-color'))
    {
      looseStatus = true;
      setTimeout(function()
      {

      alert('Vous avez perdu');
      for(let i = 0; i < childDivs.length; i++)
      {reset(childDivs[i]);}
      cpt = 0;
      document.getElementById('compteur').innerHTML = cpt;
      },500);
      break;
    }
  }
};
document.getElementById('compteur').innerHTML = cpt;


// When someone clicks on anything inside the game container, it triggers
gameContainer.addEventListener('click', function(el){
  // We get the target of the click event, which is the specific div and not
  // the container div
  let clickedElement = el.target;
  for(let i = 0; i < childDivs.length; i++){
      if (childDivs[i] == clickedElement){
    // childDivs[i] allow us to display every value of the childDivs array
    // because we select it via the array key [i]
      if (i > 0 && i<(childDivs.length - 1)){
        invertColor(childDivs[i + 1]);
        invertColor(childDivs[i - 1]);
        invertColor(childDivs[i]);

        } else if (i == 0) {
          invertColor(childDivs[i + 1]);
          invertColor(childDivs[i]);

        } else if (i == (childDivs.length - 1)) {
          invertColor(childDivs[i - 1]);
          invertColor(childDivs[i]);
     }
    }
  }
  cpt++;
  document.getElementById('compteur').innerHTML = cpt;
  if (cpt > 5 ) {
    checkLoose(childDivs);

  }
  checkVictory(childDivs);
});

// resetter la partie et le nombre de coup quand on cliquer sur recomener
bouton.addEventListener('click', function()
{
  for(let i = 0; i < childDivs.length; i++)
  reset(childDivs[i]);
  cpt = 0
  document.getElementById('compteur').innerHTML = cpt;
});
