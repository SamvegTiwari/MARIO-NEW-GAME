
NoseX="";
NoseY="";
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_gameover= loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	mario_coin=loadSound("coin.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.parent('game_console')
	video.size(800,400)
	poseNet=ml5.poseNet(video, model_loaded);
	poseNet.on("pose", got_results);
	
}

function model_loaded(){
	console.log("MODEL LOADED BY SAMVEG");
}

function got_results(results){

if(results.length>0){
	console.log(results);
	NoseX= results[0].pose.nose.x;
	NoseY=results[0].pose.nose.y;
	
}


}

function draw() {
	game()

}






