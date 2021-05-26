import {Canvas2dGraphics} from './sandy-canvas-module.js';
const canvas=document.getElementById('canvas'),
      _canvasObj=new Canvas2dGraphics(canvas),
      WIDTH=1000,
      HEIGHT=1000,
      numCol=10,
      numRow=10,
      boxSize=WIDTH/numCol,
      player1Color="#cc3399",
      player2Color='#66ccff',
      player3Color='#4A37F8',
      player4Color='#919DF4',
      player5Color='#9CE004',
      player6Color='#28E86F',
      player7Color='#CF7597',
      player8Color='#233867',
      player9Color='#905467',
      player10Color='#EB1796',
      player11Color='#C0A43B',
      player12Color='#881859',
      player13Color='#BD1C13',
      player14Color='#086D47',
      player15Color='#4BCD1E',
      player16Color='#CFBF1C',
      player17Color='#C96A8F',
      player18Color='#1E7D5A',
      player19Color='#7AFB2E',
      player20Color='#047520',
      canvasPlayer=document.createElement('canvas'),
      _canvasPlayerObj=new Canvas2dGraphics(canvasPlayer);

//Variables
var boxArr=[],
    x=0,
    y=(numRow-1)*boxSize,
    dir=1,
    snake1=new Image(),
    snake2=new Image(),
    snake3=new Image(),
    snake4=new Image(),
    ladder1=new Image(),
    ladder2=new Image(),
    ladder3=new Image(),
    player1=new Player(player1Color,1),
    player2=new Player(player2Color,2),
    player3=new Player(player3Color,3),
    player4=new Player(player4Color,4),
    player5=new Player(player5Color,5),
    player6=new Player(player6Color,6),
    player7=new Player(player7Color,7),
    player8=new Player(player8Color,8),
    player9=new Player(player9Color,9),
    player10=new Player(player10Color,10),
    player11=new Player(player11Color,11),
    player12=new Player(player12Color,12),
    player13=new Player(player13Color,13),
    player14=new Player(player14Color,14),
    player15=new Player(player15Color,15),
    player16=new Player(player16Color,16),
    player17=new Player(player17Color,17),
    player18=new Player(player18Color,18),
    player19=new Player(player19Color,19),
    player20=new Player(player20Color,20);

snake1.src='./img/snake1.png';
snake2.src='./img/snake2.png';
snake3.src='./img/snake3.png';
snake4.src='./img/snake1.png';
ladder1.src='./img/ladder1.png';
ladder2.src='./img/ladder1.png';
ladder3.src='./img/ladder1.png';


canvas.width=WIDTH;
canvas.height=HEIGHT;
canvasPlayer.width=300;
canvasPlayer.height=1000;
canvasPlayer.style.background='#000';
canvasPlayer.style.float='left';
document.body.appendChild(canvasPlayer);

for(let i=0;i<numCol*numRow;i++){
    boxArr.push(new Box(x, y, boxSize,i));
    x=x+boxSize*dir;
    if(x>=WIDTH || x<=-boxSize){
        dir*=-1;
        x+=boxSize*dir;
        y-=boxSize;
    }
}

function drawPlayerDetails(){
    _canvasPlayerObj.ClearCanvas(0,0,canvasPlayer.width,canvasPlayer.height);
    _canvasPlayerObj.FillText('test 1',20,30,player1Color,'25px Arial');
    _canvasPlayerObj.FillText('test 2',20,70,player2Color,'25px Arial');
    _canvasPlayerObj.FillText('test 3',20,110,player3Color,'25px Arial');
    _canvasPlayerObj.FillText('test 4',20,150,player4Color,'25px Arial');
    _canvasPlayerObj.FillText('test 5',20,190,player5Color,'25px Arial');
    _canvasPlayerObj.FillText('test 6',20,230,player6Color,'25px Arial');
    _canvasPlayerObj.FillText('test 7',20,270,player7Color,'25px Arial');
    _canvasPlayerObj.FillText('test 8',20,310,player8Color,'25px Arial');
    _canvasPlayerObj.FillText('test 9',20,350,player9Color,'25px Arial');
    _canvasPlayerObj.FillText('test 10',20,390,player10Color,'25px Arial');
    _canvasPlayerObj.FillText('test 11',20,430,player11Color,'25px Arial');
    _canvasPlayerObj.FillText('test 12',20,470,player12Color,'25px Arial');
    _canvasPlayerObj.FillText('test 13',20,510,player13Color,'25px Arial');
    _canvasPlayerObj.FillText('test 14',20,550,player14Color,'25px Arial');
    _canvasPlayerObj.FillText('test 15',20,590,player15Color,'25px Arial');
    _canvasPlayerObj.FillText('test 16',20,630,player16Color,'25px Arial');
    _canvasPlayerObj.FillText('test 17',20,670,player17Color,'25px Arial');
    _canvasPlayerObj.FillText('test 18',20,710,player18Color,'25px Arial');
    _canvasPlayerObj.FillText('test 19',20,750,player19Color,'25px Arial');
    _canvasPlayerObj.FillText('test 20',20,790,player20Color,'25px Arial');

}

//Player function
function Player(color,playerNumber){
    this.position=0;
    this.color=color;
    this.playerNumber=playerNumber;
    this.isActive=false;

   
    this.drawPlayer=function(){
        let currentPos=boxArr[this.position];
        if(this.position==59){
            _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=19;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },2000);
        }
///snake
        else if(this.position==99){
            _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=26;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },2000);
        }
        else if(this.position==75){
            _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=33;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },2000);
        }
        else if(this.position==94){
            _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=67;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },2000);
        }
///ladder
        else if(this.position==17){
            _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=56;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },2000);
        }
        else if(this.position==7){
            _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=35;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },2000);
        }
        else if(this.position==29){
            _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=88;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },2000);
        }else{
            _canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
        }        
    };
}

//function to draw image of snake and ladder
function loadSnakeAndLadder(){
    _canvasObj.DrawImageWH(snake1,boxSize*1, boxSize*4,100, 500);
    _canvasObj.DrawImageWH(snake2,boxSize*1, 0,230,800);
    _canvasObj.DrawImageWH(snake3,boxSize*5,boxSize*2,300,450);
    _canvasObj.DrawImageWH(snake4,boxSize*6,0,100,200);
    _canvasObj.Save();
    _canvasObj.Rotate(0.25);
    _canvasObj.DrawImageWH(ladder1,boxSize*5, boxSize*3, 50,425);
    _canvasObj.Restore();
    _canvasObj.Save();
    _canvasObj.Rotate(-0.15);
    _canvasObj.DrawImageWH(ladder2,boxSize*7,boxSize*2.5,30,600);
    _canvasObj.Restore();
    _canvasObj.Save();
    _canvasObj.Rotate(-0.2);
    _canvasObj.DrawImageWH(ladder3,boxSize*4, boxSize*7, 30,400);
    _canvasObj.Restore();
}


//function box
function Box(x, y, size, index){
    this.x=x;
    this.y=y;
    this.size=size;
    this.index=index;

    if(this.index % 4 ==1){
        this.color='#66ff33';        
    }else if(this.index % 4 ==2){
        this.color='#a300cc';
    }else if(this.index % 4 ==3){
        this.color='#66ff33';
    }else{
        this.color='#a300cc';
    }
}

Box.prototype.drawBox=function(){
    _canvasObj.FillRectangle(this.x, this.y, this.size, this.size,this.color);
    _canvasObj.FillText(this.index+1,this.x+this.size/1.5,this.y+this.size/4,'#fff','10px Arial');
}

function drawBoard(){
    boxArr.forEach((b)=>{
        b.drawBox();
    });
}

window.onload=function () {  
    drawBoard();
    loadSnakeAndLadder();
   
    drawPlayerDetails();
}