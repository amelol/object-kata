const { expect, it } = require("@jest/globals");
let { HighScoreBoard, normalizeScore, normalize } = require("../objects");

describe("high score board", () => {
  it("should create a scoreboard", () => {
    let scoreboard = new HighScoreBoard();
    expect(scoreboard.players).toStrictEqual({
      "The Best Ever": 1000000,
    });
  });

  it("should add a new player", () => {
    let scoreboard = new HighScoreBoard();
    scoreboard.addPlayer(scoreboard, "Olha Amielina", 12345);
    expect(scoreboard.players).toStrictEqual({
      "The Best Ever": 1000000,
      "Olha Amielina": 12345,
    });
  });

  it("should remove a player", () => {
    let scoreboard = new HighScoreBoard();
    scoreboard.addPlayer(scoreboard, "Olha Amielina", 12345);
    scoreboard.removePlayer(scoreboard, "The Best Ever");
    expect(scoreboard.players).toStrictEqual({
      "Olha Amielina": 12345,
    });
  });

  it("should not remove a player that is in the scoreboard", () => {
    let scoreboard = new HighScoreBoard();
    scoreboard.removePlayer(scoreboard, "The XX Player");
    expect(scoreboard.players).toStrictEqual({
      "The Best Ever": 1000000,
    });
  });

  it("should inclease the score of a player on the scoreboard", () => {
    let scoreboard = new HighScoreBoard();
    scoreboard.updateScore(scoreboard, "The Best Ever", 1);
    expect(scoreboard.players).toStrictEqual({
      "The Best Ever": 1000001,
    });
  });

  it(
    "should increase the score of all players on" +
      "scoreboard by 100 points on Monday",
    () => {
      let scoreboard = new HighScoreBoard();
      scoreboard.applyMondayBonus(scoreboard);
      expect(scoreboard.players).toStrictEqual({
        "The Best Ever": 1_000_100,
      });
    }
  );

  it("should normalize score based on function", () => {
    let normalize = jest.fn(() => 900);
    let params = {
      score: 400,
      normalizeFunction: normalize,
    };
    let newScore = normalizeScore(params);
    expect(newScore).toBe(900);
  });

  it("should normalize score", () => {
    let newScore = normalize(400);
    expect(newScore).toBe(810);
  });
});
