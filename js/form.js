class Form {
  constructor() {
    this.greetings = createElement("h2");
    this.input = createInput("name");
    this.buttonImg = createImg("./images/start.png");
    this.greetings2 = createElement("h2");
  }
  display() {
    this.input.position(380, 180);
    this.input.size(180, 30);
    this.buttonImg.position(475 + 50, 250);
    this.buttonImg.size(150, 50);

    this.buttonImg.mousePressed(() => {
      console.log();

      this.input.hide();
      this.buttonImg.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      console.log(player.index);
      player.addPlayer();
      player.updateCount(playerCount);
    this.greetings.html("Hello " + player.name);
      this.greetings.position(300, 180);
    });
  }

  hide() {
    this.buttonImg.hide();
    this.input.hide();
    this.greetings.hide();
  }
  end() {
    
   //Add a code to reset and reload the game





   

 
      this.greetings2.html(
      "Congratulations " + player.name + " Your Rank is " + player.rank
    );
    this.greetings2.position(300, 185);
  }
}
