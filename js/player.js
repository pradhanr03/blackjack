var image1 = $("#player4");
var image2 = $("#player3");
var image3 = $("#player2");
var image4 = $("#player1");
var dealerimg1 = $("#dealer4");
var dealerimg2 = $("#dealer3");
var dealerimg3 = $("#dealer2");
var dealerimg4 = $("#dealer1");
var betAmount = $("#amount");
var balanceAmount = $("#balance");


var player = {
    hands: [],
    startBalance: 1000,
    balance: 1000,
    bet: 0,
    total: 0,
    getHandValue: function() {
        for (var i = 0; i < this.hands.length; i++) {
            if ((this.hands[i].value === "J") || (this.hands[i].value === "Q") || (this.hands[i].value === "K")) {
                this.total += 10;
                console.log("added 10 for J Q K");
            } else if (this.hands[i].value === "A") {
                this.total += 11;
                console.log("added 11 for A");
            } else if (this.total > 21) {
                if (this.hands[i].value === "A") {
                    this.total -= 10;
                }
            } else {
                this.total += this.hands[i].value;
                console.log(this.hands[i].value);
                console.log("added the value for numbers");
            }
        }
    },
    hit: function() {
        if (this.total < 21) {
            this.total *= 0;
            this.hands.push(deck.getCard());
            this.getHandValue();
            // checkForWin();	
            console.log(this.getHandValue);
            console.log("The total value of player is " + this.total);
        }
        checkForWin();
    },
    stay: function() {
        checkForWin();
        console.log(this.balance);
        console.log(dealer.balance);
    },
    double: function() {
        this.hit();
        // checkForWin();	
        // this.balance -= this.bet;
        console.log(player.hands);
        console.log(player.balance);

    },
    betWon: function() {

        this.balance += this.bet;
        console.log(player.balance);
        $("#balance").text(this.balance);

    },
    resetBet: function() {
        this.bet = 0;
        $("#amount").text(this.bet);
    },
    resetHand: function() {
        this.hands = [];
    }
}

var checkForWin = function() {

    if ((player.total > 21) && (dealer.total < 22)) {
        for (var i = 0; i < player.hands.length; i++) {
            if (player.hands[i].value === "A") {
                player.total -= 10;
                if (player.total === 21) {
                    console.log("player won");
                    var bet = $("#amount").html();
                    var money = $("#balance").html();
                    var newMoney = 3.5 * (parseInt(bet)) + parseInt(money);
                    $("#balance").html(newMoney);
                    $(".winOrLose").html("Blackjack Win!");
                    $("#amount").html("0");
                    dealerimg2.attr("src", dealer.hands[1].suit);
                }
                if ((player.total > dealer.total) && (player.total < 21)) {
                    console.log("player won");
                    var bet = $("#amount").html();
                    var money = $("#balance").html();
                    var newMoney = 3 * (parseInt(bet)) + parseInt(money);
                    $("#balance").html(newMoney);
                    $(".winOrLose").html("You Win!");
                    $("#amount").html("0");
                    dealerimg2.attr("src", dealer.hands[1].suit);
                }
                if (player.total > 21) {
                    console.log("Player Bust!");
                    var bet = $("#amount").html();
                    var money = $("#balance").html();
                    var newMoney = parseInt(money);
                    $("#balance").html(newMoney);
                    $(".winOrLose").html("You Lose!");
                    $("#amount").html("0");
                    dealerimg2.attr("src", dealer.hands[1].suit);
                }
            }
        }


    } else if ((dealer.total > 21) && (player.total < 22)) {
        for (var i = 0; i < dealer.hands.length; i++) {
            if (dealer.hands[i].value === "A") {
                dealer.total -= 10;
                if (dealer.total === 21) {
                    console.log("player lose");
                    var bet = $("#amount").html();
                    var money = $("#balance").html();
                    var newMoney = parseInt(money);
                    $("#balance").html(newMoney);
                    $(".winOrLose").html("You Lose!");
                    $("#amount").html("0");
                    dealerimg2.attr("src", dealer.hands[1].suit);
                }
                if ((player.total < dealer.total) && (dealer.total < 21)) {
                    console.log("player lose");
                    var bet = $("#amount").html();
                    var money = $("#balance").html();
                    var newMoney = parseInt(money);
                    $("#balance").html(newMoney);
                    $(".winOrLose").html("You Lose!");
                    $("#amount").html("0");
                    dealerimg2.attr("src", dealer.hands[1].suit);
                }
                if (dealer.total > 21) {
                    console.log("Dealer Bust!");
                    var bet = $("#amount").html();
                    var money = $("#balance").html();
                    var newMoney = parseInt(money) + 3 * (parseInt(bet));
                    $("#balance").html(newMoney);
                    $(".winOrLose").html("You Win!");
                    $("#amount").html("0");
                    dealerimg2.attr("src", dealer.hands[1].suit);
                }
            }
        }

    } else if ((dealer.total > 21) && (player.total > 21)) {
        for (var i = 0; i < dealer.hands.length; i++) {
            if (dealer.hands[i].value === "A") {
                dealer.total -= 10;
                for (var j = 0; j < player.hands.length; j++) {
                    if (player.hands[j].value === "A") {
                        player.total -= 10;
                        if (dealer.total > 21) {
                            console.log("Dealer Bust!");
                            var bet = $("#amount").html();
                            var money = $("#balance").html();
                            var newMoney = parseInt(money) + 3 * (parseInt(bet));
                            $("#balance").html(newMoney);
                            $(".winOrLose").html("Dealer Bust!");
                            $("#amount").html("0");
                            dealerimg2.attr("src", dealer.hands[1].suit);
                        }
                        if ((player.total < dealer.total) && (dealer.total < 22)) {
                            console.log("player lose");
                            var bet = $("#amount").html();
                            var money = $("#balance").html();
                            var newMoney = parseInt(money);
                            $("#balance").html(newMoney);
                            $(".winOrLose").html("You Lose!");
                            $("#amount").html("0");
                            dealerimg2.attr("src", dealer.hands[1].suit);
                        }
                        if ((player.total > dealer.total) && (player.total < 22)) {
                            console.log("player won");
                            var bet = $("#amount").html();
                            var money = $("#balance").html();
                            var newMoney = 3 * (parseInt(bet)) + parseInt(money);
                            $("#balance").html(newMoney);
                            $(".winOrLose").html("You Win!");
                            $("#amount").html("0");
                            dealerimg2.attr("src", dealer.hands[1].suit);
                        }
                    }
                }
            }
        }
    } else if ((player.total > dealer.total) && (player.total < 22)) {
        console.log("player won");
        var bet = $("#amount").html();
        var money = $("#balance").html();
        var newMoney = 3 * (parseInt(bet)) + parseInt(money);
        $("#balance").html(newMoney);
        $(".winOrLose").html("You Win!");
        $("#amount").html("0");
        dealerimg2.attr("src", dealer.hands[1].suit);

    } else if ((player.total > dealer.total) && (player.total === 21)) {
        console.log("player won");
        var bet = $("#amount").html();
        var money = $("#balance").html();
        var newMoney = 3.5 * (parseInt(bet)) + parseInt(money);
        $("#balance").html(newMoney);
        $(".winOrLose").html("You Win!");
        $("#amount").html("0");
        dealerimg2.attr("src", dealer.hands[1].suit);

    } else if ((player.total === dealer.total) && (player.total === 21)) {
        console.log("Blackjack!");
        dealerimg2.attr("src", dealer.hands[1].suit);
        var bet = $("#amount").html();
        var money = $("#balance").html();
        var newMoney = 3.5 * (parseInt(bet)) + parseInt(money);
        $("#balance").html(newMoney);
        $(".winOrLose").html("BlackJack!");
        $("#amount").html("0");
        dealerimg2.attr("src", dealer.hands[1].suit);

    } else if ((player.total === dealer.total) && (player.total < 21)) {
        dealerimg2.attr("src", dealer.hands[1].suit);
        console.log("Tie!");
        var bet = $("#amount").html();
        var money = $("#balance").html();
        var newMoney = 3 * (parseInt(bet)) + parseInt(money);
        $("#balance").html(newMoney);
        $(".winOrLose").html("You're Lucky!");
        $("#amount").html("0");


    } else if ((player.total <= 21) && (dealer.total <= 21)) {
        if (player.total > dealer.total) {
            console.log("player won");
            var bet = $("#amount").html();
            var money = $("#balance").html();
            var newMoney = 3 * (parseInt(bet)) + parseInt(money);
            $("#balance").html(newMoney);
            $(".winOrLose").html("You Win!");
            $("#amount").html("0");
            dealerimg2.attr("src", dealer.hands[1].suit);
        } else if (dealer.total === 21) {
            dealerimg2.attr("src", dealer.hands[1].suit);
            console.log("player lose");
            var bet = $("#amount").html();
            var money = $("#balance").html();
            var newMoney = parseInt(money);
            $("#balance").html(newMoney);
            $(".winOrLose").html("You Lose!");
            $("#amount").html("0");
        }
    }

}

var checkForBust = function() {
    if (dealer.total > 21) {
        player.balance += 2 * player.bet;
        console.log("Player Wins");
        return true
    }
}
