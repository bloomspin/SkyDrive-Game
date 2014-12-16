var player;

function player_preload() {

    game.load.image('player', '../assets/images/player1.png');

}

function player_create(startX,startY) {

	//Physics
	player = game.add.sprite(startX, startY, 'player');
	game.physics.enable( player, Phaser.Physics.ARCADE);
	
	player.body.allowGravity = true;
	player.body.collideWorldBounds = true;

	
    cursors = game.input.keyboard.createCursorKeys();
	game.camera.focusOnXY(game.world.width/2, game.world.height/2)
    game.camera.follow(player);
	
}


function player_update() {

	//Game Controls
    if (cursors.up.isDown)
    {

		player.body.velocity.y -=20;
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y +=10;
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x -=5;
				
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x +=5;
    }
	console.log(game.world);
	
	//When on the ground stop all X velocity
	if(player.body.y+player.body.height==game.world.bounds.height){
		//player.body.velocity.x=0
	}
	

}