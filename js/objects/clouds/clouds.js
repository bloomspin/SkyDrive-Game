function clouds_preload() {

    game.load.image('cloud1', '../assets/images/cloud1.png');

}

var distance = 300;
var speed = 1;
var stars;

var max = 2;
var xx = [];
var yy = [];
var zz = [];
var ss = [];
function clouds_create() {

    if (game.renderType === Phaser.WEBGL)
    {
        max = 500;
    }

    var sprites = game.add.spriteBatch();

    clouds = [];

    for (var i = 0; i < max; i++)
    {
        xx[i] = Math.floor(Math.random() * (screenW*20)) + 0;
        yy[i] = Math.floor(Math.random() * (screenH*10)) + 0;
        zz[i] = Math.floor(Math.random() * 1700) - 100;
		ss[i] = Math.floor(Math.random() * 100) + 10;
		
        var cloud = game.make.sprite( xx[i], yy[i], 'cloud1');
        cloud.anchor.set(0.5);
		cloud.scale.set(ss[i]/100);
        sprites.addChild(cloud);

        clouds.push(cloud);
    }
		
	
}

function clouds_update() {


	
}