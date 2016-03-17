//createsa TitleScreen object
var TitleScreen = {
    
    //the preload function loads first 
    //it is where we load our assets
    preload:fucntion() {
    game.load.image('logo', 'TitleScreen.jpg'):
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, what it looks like when we start the game
    create: fucntion() {
            
        //
        this.add.image.(290, 100,. 'logo');
    }

};