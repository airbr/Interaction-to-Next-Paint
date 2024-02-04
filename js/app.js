
var details = document.querySelector('details');

details.addEventListener("toggle", (event) => {
    if (details.open) {
      /* the element was toggled open */
      console.log('Open');
    } else {
    console.log('CLOSED');
      /* the element was toggled closed */
    }
  });


  function updateScoreUI() {
    performance.mark('scoreStart');
    document.getElementById('score').textContent = `Score: ${score.toFixed(2)}`;
    performance.measure('RunUpdateScoreUI', 'scoreStart');
  }
  
  function increaseScoreOnClick() {
    performance.mark('increaseStart');
    score += 1;
    updateScoreUI();
    performance.measure('RunIncreaseScoreOnClick', 'increaseStart');
  }
  
  function increaseScoreMoreRandom() {
    performance.mark('randomStart');
    let newRand = Math.random();
    for (let i = 0; i < 10000000; i++) {
      newRand = 1 + Math.random();
    }
    score += newRand;
    updateScoreUI();
    performance.measure('RunIncreaseScoreMoreRandom', 'randomStart');
  }

  function changeCookieColor() {
    performance.mark('colorStart');
    document.getElementById('cookie').style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;
    performance.measure('RunChangeCookieColor', 'colorStart');
  }