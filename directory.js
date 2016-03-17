// Initialize Phaser game with screen size 650 x 480 in the gameDiv tag
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

//adds the TitleScreen as a phaser state to the game
game.state.add('TitleScreen', Titlescreen);

//begins the game at the TitleScreen state
game.stte.start('TitleScreen');