function preload() {
	    

}

function create() {
	
	//World
	game.world.setBounds(0, 0, screenW*2, screenH*20);
	game.stage.backgroundColor = 0x1acee9;
	
	//physics
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 250;
   
	//Game Objects
	player_create();
	clouds_create();
	
	
}

function update() {

	

	//Run Player Update
	player_update();
	clouds_update();

}