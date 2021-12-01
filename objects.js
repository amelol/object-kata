class HighScoreBoard {
  constructor() {
    this.players = {
      "The Best Ever": 1000000,
    };
  }

  addPlayer(scoreboard, playerName, score) {
    scoreboard.players[playerName] = score;
    return scoreboard;
  }

  removePlayer(scoreboard, playerName) {
    delete scoreboard.players[playerName];
    return scoreboard;
  }

  updateScore(scoreboard, playerName, scoreToAdd) {
    scoreboard.players[playerName] += scoreToAdd;
    return scoreboard;
  }

  applyMondayBonus(scoreboard) {
    for (let playerName in scoreboard.players) {
      this.updateScore(scoreboard, playerName, 100);
    }
    return scoreboard;
  }
}

function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

function normalize(score) {
  //return 2 * score + 10;
}

module.exports = { HighScoreBoard, normalizeScore, normalize };
