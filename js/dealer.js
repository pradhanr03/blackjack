var dealer = {
	hands : [],
	balance : 100000000000000,
	total : 0,
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
		var dealerimg3 = $("#dealer2");
		var dealerimg4 = $("#dealer1");
		var dealCounter = 0;
		while (this.total < 17) {
		dealCounter++;
		this.total *= 0;
		this.hands.push(deck.getCard());
		this.getHandValue();
			if (dealCounter === 1) {
			dealerimg3.attr("src", dealer.hands[2].suit);
			}
				else if (dealCounter === 2) {
					dealerimg4.attr("src", dealer.hands[3].suit);
				}
		console.log(this.getHandValue);
		console.log("the total value of dealor is "+this.total);
	}
	console.log("this is the dealer counter "+dealCounter);
	// return dealCounter;
	},
	resetHand : function() {
		this.hands = [];
	}
	
}