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
		while (this.total < 17) {
		this.total *= 0;
		this.hands.push(deck.getCard());
		this.getHandValue();
		console.log(this.getHandValue);
		console.log("the total value of dealor is "+this.total);
	}
	}
	
}