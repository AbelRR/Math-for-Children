var TitleScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload: function() {
        game.load.image('logo', 'missionBit.png');
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, what it looks like when we start the game
        create: function() {
            //add the image named 'logo' to location (290, 100)
            
            this.add.image(20, 100, 'logo'); 
            
            //adds a button with image 'start' at location (200, 180) that calls startGame when it is clicked
            this.add.button(200, 180, 'logo', this.startGame, this);
            
            //makes the background color of the whole screen per periwink
            game.stage.backgroundColor = '#CCCFFF'

        },
            
                        
            //this is a method we created and named ourselves
            //it will only run when it is told by some other method
            startGame: function() {
                
                //start the "GameScreen", as defined in the directory
                this.state.start('GameScreen');
            }
    
};