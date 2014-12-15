function clouds_preload() {

    game.load.image('cloud1', 'assets/images/cloud1.png');

}

var distance = 300;
var speed = 1;
var stars;

var max = 2;
var xx = [];
var yy = [];
var zz = [];

function clouds_create() {

    if (game.renderType === Phaser.WEBGL)
    {
        max = 200;
    }

    var sprites = game.add.spriteBatch();

    stars = [];

    for (var i = 0; i < max; i++)
    {
        xx[i] = Math.floor(Math.random() * (screenW*2)) + 0;
        yy[i] = Math.floor(Math.random() * (screenH*20)) + 0;
        zz[i] = Math.floor(Math.random() * 1700) - 100;
		
        var star = game.make.sprite( xx[i], yy[i], 'cloud1');
        star.anchor.set(0.5);
		star.scale.set(1);
        sprites.addChild(star);

        stars.push(star);
    }
		
	
}

function clouds_update() {


	
}