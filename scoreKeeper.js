function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("scores")) || [];
  

    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("scores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
  }
  
  document.getElementById("clearScores").onclick = clearHighscores;
  

  printHighscores();