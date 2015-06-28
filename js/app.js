$(function() {
  console.log('Loaded, bro');
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
	balanceAmount.html(player.balance);
	

	$(".1").click(function() {

		 var balance = parseInt($("#balance").html())-1;
		player.bet = parseInt($("#balance").html()) - balance;
		console.log(player.balance);
		$("#balance").text(balance);
		betAmount.text(player.bet);
	});

	$(".5").click(function() {

		var balance = parseInt($("#balance").html())-5;
		player.bet = parseInt($("#balance").html()) - balance;
		console.log(player.balance);
		$("#balance").text(balance);
		betAmount.text(player.bet);

	});

	$(".25").click(function() {
		
		var balance = parseInt($("#balance").html())-25;
		player.bet = parseInt($("#balance").html()) - balance;
		console.log(player.balance);
		$("#balance").text(balance);
		betAmount.text(player.bet);
	});

	$(".100").click(function() {
		
		var balance = parseInt($("#balance").html())-100;
		player.bet = parseInt($("#balance").html()) - balance;
		console.log(player.balance);
		$("#balance").text(balance);
		betAmount.text(player.bet);
	});

	
	$(".deal").click(function() {
	
	// balanceAmount.text(player.balance);
	deck.readyCards();
	deck.dealCards();
	console.log("Player's Hands is "+player.hands[0].value+", "+player.hands[1].value);
	console.log("Dealer's Hands is "+dealer.hands[0].value+", "+dealer.hands[1].value);
	
	image1.attr("src", player.hands[0].suit);
	image2.attr("src", player.hands[1].suit);

	
	
	dealerimg1.attr("src", dealer.hands[0].suit);
	$("#dealer3").attr("src", "blackjack/card back orange.png");
	
	player.getHandValue();
	dealer.getHandValue();
	console.log("PLayer's total value is "+player.total);
	console.log("Dealer's total value is "+dealer.total);

	if ((player.total === dealer.total) && (player.total ===21)) {
		console.log("it's a tie!");
		player.balance += 2.5*player.bet;
		console.log("Player won "+player.bet+" Player's balance is "+player.balance);
		var bet = $("#amount").html();
        var money = $("#balance").html();
        var newMoney = 2.5*(parseInt(bet))+parseInt(money);
        $("#balance").html(newMoney);		
		$(".winOrLose").html("Blackjack Win!");
		$("#amount").html("0");
		dealerimg2.attr("src", dealer.hands[1].suit);

	}
		else if (player.total === 21) {
		console.log("player wins");
		this.balance = this.balance + (2.5*player.bet);
		console.log("Player won "+player.bet+" Player's balance is "+this.balance);
		var bet = $("#amount").html();
        var money = $("#balance").html();
        var newMoney = 2.5*(parseInt(bet))+parseInt(money);
        $("#balance").html(newMoney);		
		$(".winOrLose").html("Blackjack Win!");
		$("#amount").html("0");
		dealerimg2.attr("src", dealer.hands[1].suit);
		}
			else if (dealer.total === 21) {
			console.log("dealer wins");
			this.balance = this.balance + (2.5*player.bet);
		console.log("Player won "+player.bet+" Player's balance is "+player.balance);

			}

console.log(player.balance);

});


var counter =0;
$(".hit").click(function() {
	counter++;
	dealer.hit();
	player.hit();
	if (counter === 1) {
	 	image3.attr("src", player.hands[2].suit);	
	}
		else if (counter ===2) {
		image4.attr("src", player.hands[3].suit);
		}
	checkForWin();
	
	if (player.total > 21) {
		for (var i =0; i<player.hands.length; i++) {
			if (player.hands[i].value === "A") {
							player.total -= 10;
							if (player.total === 21) {
								console.log("player won");
								var bet = $("#amount").html();
						        var money = $("#balance").html();
						        var newMoney = 3.5*(parseInt(bet))+parseInt(money);
						        $("#balance").html(newMoney);		
								$(".winOrLose").html("Blackjack Win!");
								$("#amount").html("0");
								dealerimg2.attr("src", dealer.hands[1].suit);
							}
								if ((player.total > dealer.total) &&(player.total <21)) {
									console.log("player won");
									var bet = $("#amount").html();
							        var money = $("#balance").html();
							        var newMoney = 3*(parseInt(bet))+parseInt(money);
							        $("#balance").html(newMoney);		
									$(".winOrLose").html("You Win!");
									$("#amount").html("0");
									dealerimg2.attr("src", dealer.hands[1].suit);
								}
									if (player.total>21) {
										console.log("Player Bust!");
										var bet = $("#amount").html();
								        var money = $("#balance").html();
								        var newMoney = parseInt(money);
								        $("#balance").html(newMoney);		
										$(".winOrLose").html("You Lose!");
										$("#amount").html("0");
										$("#dealer3").attr("src", dealer.hands[1].suit);
									}
			}
		}

			console.log("Player Bust!");
			var bet = $("#amount").html();
			var money = $("#balance").html();
			var newMoney = parseInt(money);
			$("#balance").html(newMoney);		
			$(".winOrLose").html("You Lose!");
			$("#amount").html("0");
			dealerimg2.attr("src", dealer.hands[1].suit);
	
	}
		
	console.log(player.hands);
});

$(".stand").click(function() {
	player.stay();
	dealer.hit();
	checkForBust();
	checkForWin();

	$("#dealer3").attr("src", dealer.hands[1].suit);
	
	player.resetBet();

	 player.hands = [];
	 dealer.hands = [];
});

$(".double").click(function() {
	var bet = parseInt($("#balance").html()) - parseInt($("#amount").html());
	$("#balance").html(bet);
	var double = 2*parseInt($("#amount").html());
	$("#amount").html(double);


	player.double();

	dealer.hit();

	
	checkForBust();
	// checkForWin();
	image3.attr("src", player.hands.pop().suit);
	$("#dealer3").attr("src", dealer.hands[1].suit);

	
	player.resetBet();

	player.hands = [];
	dealer.hands = [];
});

var balanceAmount = $("#balance");

$(".playAgain").click(function() {
		player.resetHand();
		dealer.resetHand();
		player.total = 0;
		dealer.total = 0;
		image1.attr("src", "");
		image2.attr("src", "");
		image3.attr("src", "");
		image4.attr("src", "");
		dealerimg1.attr("src", "");
		dealerimg2.attr("src", "");
		dealerimg3.attr("src", "");
		dealerimg4.attr("src", "");
		console.log("Next Round!");
		$(".winOrLose").html("Next Round");
		player.balance = parseInt($("#balance").html());


	});



});


//  $(".dealer-cards").html("<div class='card card1'></div><div class='card card2 flipped'></div><div class='new-cards'></div><div class='clear'></div><div id='dealerTotal' class='dealer-total'></div>");

//     $(".player-cards").html("<div class='card card1'></div><div class='card card2'></div><div class='new-cards'></div><div class='clear'></div><div id='playerTotal' class='player-total'></div>");

//     var reloadGame = "<div class='btn' id='hit'>Hit</div><div class='btn' id='stand'>Stand</div>";
//     $(".buttons").html(reloadGame);

//     $(".dealer-cards").css("width","");
//     $(".player-cards").css("width","");

//     $("#playerTotal").html('');
//     $("#dealerTotal").html('');
//     $("#message").html('');

// }






