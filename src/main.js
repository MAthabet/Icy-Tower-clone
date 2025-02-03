import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 430,
		height: 932,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		pixelArt: true,
		physics: 
		{
			default: 'arcade',
			arcade:
			{
				gravity:
				{
					x: 0,
					y: 0
				},
				debug: true
			}
		}
	});

	game.scene.add("Level", Level);
	game.scene.add("Preload", Preload, true);
});