var player = {
	hands : [],
	balance : 1000,
	bet : 1000 - this.balance,
	total : 0,
	// this.chips = ["1","5","25","100"],
	getHandValue : function() {
		for(var i = 0; i < this.hands.length; i++) {
			if((this.hands[i].value === "J") || (this.hands[i].value === "Q") || (this.hands[i].value === "K")) {
				this.total += 10;
				console.log("added 10 for J Q K");
			} else if(this.hands[i].value === "A") {
				this.total += 11;
				console.log("added 11 for A");
			} else {
				this.total += this.hands[i].value;
				console.log(this.hands[i].value);
				console.log("added the value for numbers");
			}
		}
	},
	hit : function() {
		if (this.total < 21) {
		this.total *= 0;
		this.hands.push(deck.getCard());
		this.getHandValue();
		// checkForWin();	
		console.log(this.getHandValue);
		console.log("The total value of player is "+this.total);
		}
	},
	stay : function() {
		checkForWin();	
		console.log(this.balance);
		console.log(dealer.balance);
	},
	double : function() {
		this.hit();
		// checkForWin();	
		this.balance -= this.bet;
		console.log(player.hands);
		console.log(player.balance);

	},



}

var checkForWin = function() {

	if (player.total <= 21)  {
		 if (player.total > dealer.total) {
			console.log("Player Wins");
			player.balance += 2*player.bet;
			return true;
		}
		

		// return "Player Wins";
	}
			else if (dealer.total <= 21) {
				if (player.total < dealer.total) {
				console.log("Dealer Wins");
			// return "Dealor Wins";
				dealer.balance += 2*player.bet;
				return false;

				}
			}
					else if ((player.total > 21) && (dealer.total < player.total)) {
						console.log("Dealer Wins");
						dealer.balance += 2*player.bet;
						return false;	
					}
						else if (player.total === dealer.total) {
							player.balance += 2*player.bet;
							console.log("it's a tie!");
							return false;
						}

	
}

var checkForBust = function() {
	if (dealer.total >21) {
		player.balance += 2*player.bet;
		console.log("Player Wins");
		return true
	}
}

// var resetDeal = function(playerOrDealer) {
// 	for (var i=0; i<playerOrDealer.hands.length; i++) {
// 		playerOrDealer.hands[i].pop();
// 		}
// 	for (var j=0; j<playerOrDealer.hands.length; j++) {
// 		playerOrDealer.hands[j].pop();
// 		}
// }
// // player.hands = [];