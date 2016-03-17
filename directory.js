// Initialize Phaser game with screen size 640 x 480 in the gameDiv tag
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDIV');

//adds the Title
game.state.add('TitleScreen', TitleScreen); 

//begins the game at the Titlescreen state
game.state.start('TitleScreen')