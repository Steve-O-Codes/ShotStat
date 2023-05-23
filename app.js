let homeScore = 0;
let awayScore = 0;
let game = 1;

const homeScoreEl = document.getElementsByClassName("home-score")[0];
const awayScoreEl = document.getElementsByClassName("away-score")[0];
const homeAddScore = document.getElementsByClassName("home-add-score")[0];
const awayAddScore = document.getElementsByClassName("away-add-score")[0];
const resetBtn = document.getElementsByClassName("reset-btn")[0];
const saveBtn = document.getElementsByClassName("save-btn")[0];
const gameScoreEl = document.getElementById("game-score");
const table = document.getElementById("game-scores");

const reset = () => {
  homeScore = 0;
  awayScore = 0;
  awayScoreEl.innerHTML = awayScore;
  homeScoreEl.innerHTML = homeScore;
};

homeAddScore.addEventListener("click", (e) => {
  if (e.target.id === "home-add-one") {
    homeScore++;
  } else if (e.target.id === "home-add-two") {
    homeScore += 2;
  } else if (e.target.id === "home-add-three") {
    homeScore += 3;
  }
  homeScoreEl.innerHTML = homeScore;
});

awayAddScore.addEventListener("click", (e) => {
  if (e.target.id === "away-add-one") {
    awayScore++;
  } else if (e.target.id === "away-add-two") {
    awayScore += 2;
  } else if (e.target.id === "away-add-three") {
    awayScore += 3;
  }
  awayScoreEl.innerHTML = awayScore;
});

resetBtn.addEventListener("click", reset);

saveBtn.addEventListener("click", () => {
  table.classList.remove("hidden");
  let outcome = "";
  if (homeScore === awayScore) {
    outcome = "Draw";
  } else if (homeScore > awayScore) {
    outcome = "Home Team Wins 🎉";
  } else {
    outcome = "Away Team Wins 👏";
  }

  const row = table.insertRow();
  const hScore = row.insertCell(0);
  const aScore = row.insertCell(1);
  const outcomeCell = row.insertCell(2);

  hScore.innerHTML = `${homeScore}`;
  aScore.innerHTML = `${awayScore}`;
  outcomeCell.innerHTML = `${outcome}`;
  reset();
});
