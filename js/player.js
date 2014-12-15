var player;


function player_create() {

	//Physics
	player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
	game.physics.enable( player, Phaser.Physics.ARCADE);
	
	player.body.allowGravity = true;
	player.body.collideWorldBounds = true;

	
    cursors = game.input.keyboard.createCursorKeys();
	game.camera.focusOnXY(game.world.width/2, game.world.height/2)
    game.camera.follow(player);
	
}


function player_update() {

	
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
        player.body.velocity.x -=20;
				
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x +=20;
    }

}