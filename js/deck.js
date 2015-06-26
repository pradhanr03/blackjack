var shuffle = function(o) {
		for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    		return o;
	}

var deck = {
	suit : ["Heart", "Diamond", "Spade", "Club"],
	value : [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
	cards : [],
	
	makeDeck : function() {
		for (var i = 0; i < this.suit.length; i++) {
			for (var j = 0; j < this.value.length; j++) {
				this.cards.push(new Card((this.value[j]), (this.suit[i])));
				console.log("hello");
			}
				// return this.cards;
			// debugger;
			
		}
		// return this.cards;
	},	
	shuffledcards : function() {
		this.cards = shuffle(this.cards);
	},
	readyCards : function () {
		this.makeDeck();
		this.shuffledcards();
		return this.cards;
	},
	getCard : function () {
		return this.cards.pop();
	},
	resetHand : function(handArray) {
		while (handArray.length) {
			handArray.pop();
		}
	},
	dealCards : function () {
		this.resetHand(player.hands);
		this.resetHand(dealer.hands);
		player.hands.push(deck.cards.pop());
		dealer.hands.push(deck.cards.pop());
		player.hands.push(deck.cards.pop());
		dealer.hands.push(deck.cards.pop());
	}

}
