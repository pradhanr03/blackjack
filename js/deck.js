var shuffle = function(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var deck = {
    suit: ["Heart", "Diamond", "Spade", "Club"],
    value: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
    cards: [],
    shoe: [],
    imageArray: ["blackjack/heart/heart2.jpg", "blackjack/heart/heart3.jpg", "blackjack/heart/heart4.png", "blackjack/heart/heart5.png", "blackjack/heart/heart6.jpg", "blackjack/heart/heart7.png", "blackjack/heart/heart8.jpg", "blackjack/heart/heart9.png", "blackjack/heart/heart10.svg", "blackjack/heart/heartJ.jpg", "blackjack/heart/heartQ.jpg", "blackjack/heart/heartK.jpg", "blackjack/heart/heartA.jpg", "blackjack/diamond/diam2.png", "blackjack/diamond/diam3.png", "blackjack/diamond/diam4.jpg", "blackjack/diamond/diam5.png", "blackjack/diamond/diam6.svg", "blackjack/diamond/diam7.png", "blackjack/diamond/diam8.png", "blackjack/diamond/diam9.jpg", "blackjack/diamond/diam10.png", "blackjack/diamond/diamJ.jpg", "blackjack/diamond/diamQ.jpg", "blackjack/diamond/diamK.jpg", "blackjack/diamond/diamA.png", "blackjack/spade/spade2.jpg", "blackjack/spade/spade3.jpg", "blackjack/spade/spade4.jpg", "blackjack/spade/spade5.jpg", "blackjack/spade/spade6.jpg", "blackjack/spade/spade7.jpg", "blackjack/spade/spade8.jpg", "blackjack/spade/spade9.jpg", "blackjack/spade/spade10.jpg", "blackjack/spade/spadeJ.jpg", "blackjack/spade/spadeQ.jpg", "blackjack/spade/spadeK.jpg", "blackjack/spade/spadeA.jpg", "blackjack/club/club2.png", "blackjack/club/club3.png", "blackjack/club/club4.svg", "blackjack/club/club5.jpg", "blackjack/club/club6.jpg", "blackjack/club/club7.png", "blackjack/club/club8.jpg", "blackjack/club/club9.svg", "blackjack/club/club10.jpg", "blackjack/club/clubJ.jpg", "blackjack/club/clubQ.jpg", "blackjack/club/clubK.jpg", "blackjack/club/clubA.jpg", ],
    // // imageArra9

    makeDeck: function() {
        for (var i = 0; i < this.suit.length; i++) {
            for (var j = 0; j < this.value.length; j++) {
                this.cards.push(new Card((this.value[j]), (this.suit[i])));
                console.log("hello");

            }

        }

    },
    makeImgDeck: function() {
        for (var i = 0; i < this.cards.length; i++) {
            this.cards[i].suit = this.imageArray[i];
        }
    },
    shuffledcards: function() {
        this.cards = shuffle(this.cards);
    },
    readyCards: function() {
        this.makeDeck();
        this.makeImgDeck();
        this.shuffledcards();
        return this.cards;
    },
    getCard: function() {
        return this.cards.pop();
    },
    resetHand: function(handArray) {
        while (handArray.length) {
            this.shoe.push(handArray.pop());
        }
    },
    dealCards: function() {
        // this.resetHand(player.hands);
        // this.resetHand(dealer.hands);
        player.hands.push(deck.cards.pop());
        dealer.hands.push(deck.cards.pop());
        player.hands.push(deck.cards.pop());
        dealer.hands.push(deck.cards.pop());
    }

}

// var imageArray = ["f465PnkSRe-6.png", "stage9.png", "stage8.png", "stage7.png", "stage6.png", "stage5.png", "stage4.png", "stage3.png", "stage2.png", "stage1.png"];

// 		var image = document.getElementById("image");

// 		image.setAttribute("src", imageArray[this.guesses-1]);


// var imageArray = ["heart2.jpg"]
