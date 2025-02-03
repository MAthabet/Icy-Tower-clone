
// You can write more code here

/* START OF COMPILED CODE */

import PlatformGroup from "../prefabs/PlatformGroup.js";
import P_Player2 from "../prefabs/P_Player2.js";
import P_Player from "../prefabs/P_Player.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// platformGroup
		const platformGroup = new PlatformGroup(this);
		this.add.existing(platformGroup);

		// p_Player2
		const p_Player2 = new P_Player2(this, this.game.config.width/4, 7*this.game.config.height/8);

		this.add.existing(p_Player2);

		// p_Player
		const p_Player = new P_Player(this, 3*this.game.config.width/4, 7*this.game.config.height/8);
		this.add.existing(p_Player);

		// collider
		this.physics.add.collider(p_Player, platformGroup.group);

		// collider_1
		this.physics.add.collider(p_Player2, platformGroup.group);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
