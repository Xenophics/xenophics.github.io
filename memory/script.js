(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://i.pinimg.com/originals/16/88/bc/1688bcd43697602edcae25bc667bf336.jpg"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "파이리",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png",
			id: 1,
		},
		{
			name: "뮤",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/015101.png",
			id: 2
		},
		{
			name: "푸린",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003901.png",
			id: 3
		},
		{
			name: "또가스",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/010901.png",
			id: 4
		}, 
		{
			name: "이상해씨",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
			id: 5
		},
		{
			name: "이브이",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/013301.png",
			id: 6
		},
		{
			name: "피카츄",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png",
			id: 7
		},
		{
			name: "후파",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/072002.png",
			id: 8
		},
		{
			name: "디안시",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/071902.png",
			id: 9
		},
		{
			name: "아르세우스",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/049301.png",
			id: 10
		},
		{
			name: "개구마르",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/065601.png",
			id: 11
		},
		{
			name: "염버니",
			img: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/081301.png",
			id: 12
		},
	];
    
	Memory.init(cards);


})();