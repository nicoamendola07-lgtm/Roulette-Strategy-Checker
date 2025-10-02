const board = ["0", "00", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18",
    "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"];
const rowBetContents = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"];
const middleBetContents = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
let bank = 1000;
let profit = 0;
let maxLossStreak = 0;
let maxWinStreak = 0;
let loseStreak = 0;
let winStreak = 0;
const minBet = 25;
let betOne = minBet;
let betTwo = minBet;

function generateSpin() {
    const index = Math.floor(Math.random() * board.length);
    const spin = board[index];
    let spinWhatColor = ""
    document.getElementById("spinOutput").textContent = spin;
    if (spin == "0" || spin == "00") {
        spinWhatColor = 'green';
    }
    else if (parseInt(spin) % 2 == 0) {
        spinWhatColor = 'red';
    } else {
        spinWhatColor = 'black';
    }
    document.getElementById("spinColor").textContent = spinWhatColor
    bettingLogic(spin);
}
function bettingLogic(spin) {
    if (rowBetContents.includes(spin) && middleBetContents.includes(spin)) {
        profit = (betOne + betTwo) *2;
        bank = bank + profit;
        betOne = minBet;
        betTwo = minBet;
        loseStreak = 0;
        winStreak++;
        document.getElementById("result").textContent = "Both bets won"
        document.getElementById("bankAccount").textContent = bank;
        document.getElementById("profit").textContent = profit;
        streak();
    }
    else if (middleBetContents.includes(spin)) {
        profit = (betTwo * 2) - betOne;
        bank = bank + profit;
        betOne = minBet;
        betTwo = minBet;
        loseStreak = 0;
        winStreak++;
        document.getElementById("result").textContent = "Middle bet won"
        document.getElementById("bankAccount").textContent = bank;
        document.getElementById("profit").textContent = profit;
        streak();
    }
    else if (rowBetContents.includes(spin)) {
        profit = (betOne * 2) - betTwo;
        bank = bank + profit;
        betOne = minBet;
        betTwo = minBet;
        loseStreak = 0;
        winStreak++;
        document.getElementById("result").textContent = "Row bet won"
        document.getElementById("bankAccount").textContent = bank;
        document.getElementById("profit").textContent = profit;
        streak();
    } else {
        profit = -1 * (betOne + betTwo);
        bank = bank + profit;
        betOne += minBet;
        betTwo += minBet;
        loseStreak++;
        winStreak = 0;
        document.getElementById("result").textContent = "Both bets lost";
        document.getElementById("bankAccount").textContent = bank;
        document.getElementById("profit").textContent = profit;
        streak();
    }
}
function streak() {
    if (loseStreak > maxLossStreak) {
        maxLossStreak = loseStreak;
        document.getElementById("loseStreak").textContent = maxLossStreak;
    } else {
        document.getElementById("loseStreak").textContent = maxLossStreak;
    }
    if (winStreak > maxWinStreak) {
        maxWinStreak = winStreak;
        document.getElementById("winStreak").textContent = maxWinStreak;
    } else {
        document.getElementById("winStreak").textContent = maxWinStreak;
    }
} 
function clearAll() {
    document.getElementById("bankAccount").textContent = "";
    document.getElementById("profit").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("spinOutput").textContent = "";
    document.getElementById("spinColor").textContent = "";
    document.getElementById("winStreak").textContent = "";
    document.getElementById("loseStreak").textContent = "";
    betOne = minBet;
    betTwo = minBet;
    bank = 1000;
    profit = 0;
} 
