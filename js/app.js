$(function() {
  console.log('Loaded, bro');
  









var blackJack = function(playerOrDealor) {

	if (this.total === 21) {
		// console.log(playerOrDealor+" WINS");
			// console.log(this.balance);
			return true;
	}
	
}

	$(".1").click(function() {
		player.balance -= 1;
		console.log(player.balance);
	});

	$(".5").click(function() {
		player.balance -= 5;
		console.log(player.balance);
	});

	$(".25").click(function() {
		player.balance -= 25;
		console.log(player.balance);
	});

	$(".100").click(function() {
		player.balance -= 100;
		console.log(player.balance);
	});

	// player.bet = 1000- player.balance;

	

	$(".deal").click(function() {
		
	deck.readyCards();
	deck.dealCards();
	console.log("Player's Hands is "+player.hands[0].value+", "+player.hands[1].value);
	console.log("Dealer's Hands is "+dealer.hands[0].value+", "+dealer.hands[1].value);
	player.getHandValue();
	dealer.getHandValue();
	console.log("PLayer's total value is "+player.total);
	console.log("Dealer's total value is "+dealer.total);

	if ((player.total === dealer.total) && (player.total ===21)) {
		console.log("it's a tie!");
		player.balance += 2.5*player.bet;
		console.log("Player won "+player.bet+" Player's balance is "+player.balance);

	}
		else if (blackJack(player)) {
		console.log("player wins");
		this.balance = this.balance + (2.5*player.bet);
		console.log("Player won "+player.bet+" Player's balance is "+this.balance);
		}
			else if (blackJack(dealer)) {
			console.log("dealer wins");
			this.balance = this.balance + (2.5*player.bet);
		console.log("Player won "+player.bet+" Player's balance is "+player.balance);
			}

				

console.log(player.balance);

});



$(".hit").click(function() {
	dealer.hit();
	player.hit();
	// checkForWin();
	console.log(player.hands);
});

$(".stand").click(function() {
	player.stay();
	dealer.hit();
	checkForBust();
	if (!checkForBust()) {
		checkForWin();
	}
	// if (checkForWin()) {
	// 	console.log("Player Wins");
	// } else {
	// 	console.log("Dealer Wins");
	// }
	
	// resetDeal(player);
	// resetDeal(dealer);
	 player.hands = [];
	 dealer.hands = [];
});

$(".double").click(function() {
	player.double();
	dealer.hit();
	checkForBust();
	if (!checkForBust()) {
		checkForWin();
	}
	// if (checkForWin()) {
	// 	console.log("Player Wins");
	// } else {
	// 	console.log("Dealer Wins");
	// }
	// resetDeal(player);
	// resetDeal(player);
	player.hands = [];
	dealer.hands = [];
});

});




