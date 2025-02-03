
// You can write more code here

import P_Platform from "./P_Platform.js";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlatformGroup extends Phaser.GameObjects.Layer {

	constructor(scene) {
		super(scene);

		

		/* START-USER-CTR-CODE */
		this.group = scene.add.group({
			classType: P_Platform
		})
		for(let i = 0; i < 5; i++)
		{
			let x = Phaser.Math.Between(0, scene.game.config.width/2);
			let y = scene.game.config.height - 64 * i - 32;
			let platform = this.group.get(x,y);
			let platform2 = this.group.get(x + scene.game.config.width/2 , y);
		}
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
