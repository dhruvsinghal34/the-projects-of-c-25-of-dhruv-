const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var box31,box32,box33,box34,box35,box36,box37,box38,box39,box40;
var box41,box42,box43,box44,box45,box46,box47,box48,box49,box50;
var box51,box52,box53,box54,box55,box56,box57,box58,box59,box60;
var box61,box62,box63,box64,box65,box66,box67,box68,box69,box70;
function setup(){
    var canvas = createCanvas(90,90);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(10,0,5,20);
    box2=new Box(10,40,5,20);
    box3=new Box (10,80,5,20);
    box4=new Box(10,120,5,20);
    box5=new Box (10,160,5,20);
    box6=new Box(10,200,5,20);
    box7=new Box(10,240,5,20);
    box8=new Box (10,280,5,20);
    box9=new Box (10,320,5,20);
    box10=new Box (10,360,5,20);
    box11=new Box (20,0,5,20);
    box12=new Box (20,40,5,20);
    box13=new Box (20,80,5,20);
    box14=new Box (20,120,5,20);
    box15=new Box (20,160,5,20);
    box16=new Box (20,200,5,20);
    box17=new Box (20,240,5,20);
    box18=new Box (20,280,5,20);
    box19=new Box (20,320,5,20);
    box20=new Box (20,360,5,20);
    box21=new Box (30,0,5,20);
    box22=new Box (30,40,5,20);
    box23=new Box (30,80,5,20);
    box24=new Box (30,120,5,20);
    box25=new Box (30,160,5,20);
    box26=new Box (30,200,5,20);
    box27=new Box (30,240,5,20);
    box28=new Box (30,280,5,20);
    box29=new Box (30,320,5,20);
    box30=new Box (30,360,5,20);
    box31=new Box (40,0,5,20);
    box32=new Box (40,40,5,20);
    box33=new Box (40,80,5,20);
    box34=new Box (40,120,5,20);
    box35=new Box (40,160,5,20);
    box36=new Box (40,200,5,20);
    box37=new Box (40,240,5,20);
    box38=new Box (40,280,5,20);
    box39=new Box (40,320,5,20);
    box40=new Box (40,360,5,20);
    box41=new Box (50,0,5,20);
    box42=new Box (50,40,5,20);
    box43=new Box (50,80,5,20);
    box44=new Box (50,120,5,20);
    box45=new Box (50,160,5,20);
    box46=new Box (50,200,5,20);
    box47=new Box (50,240,5,20);
    box48=new Box (50,280,5,20);
    box49=new Box (50,320,5,20);
    box50=new Box (50,360,5,20);
    box51=new Box (60,0,5,20);
    box52=new Box (60,40,5,20);
    box53=new Box (60,80,5,20);
    box54=new Box (60,120,5,20);
    box55=new Box (60,160,5,20);
    box56=new Box (60,200,5,20);
    box57=new Box (60,240,5,20);
    box58=new Box (60,280,5,20);
    box59=new Box (60,320,5,20);
    box60=new Box (60,360,5,20);
    box61=new Box (70,0,5,20);
    box62=new Box (70,40,5,20);
    box63=new Box (70,80,5,20);
    box64=new Box (70,120,5,20);
    box65=new Box (70,160,5,20);
    box66=new Box (70,200,5,20);
    box67=new Box (70,240,5,20);
    box68=new Box (70,280,5,20);
    box69=new Box (70,320,5,20);
    box70=new Box (70,360,5,20);
   
}
function draw(){
    background("grey");
    Engine.update(engine);
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();
     box22.display();
     box23.display();
     box24.display();
     box25.display();
     box26.display();
     box27.display();
     box28.display();
     box29.display();
     box30.display();
     box31.display();
     box32.display();
     box33.display();
     box34.display();
     box35.display();
     box36.display();
     box37.display();
     box38.display();
     box39.display();
     box40.display();
     box41.display();
     box41.display();
     box42.display();
     box43.display();
     box44.display();
     box45.display();
     box46.display();
     box47.display();
     box48.display();
     box49.display();
     box50.display();
     box51.display(); 
     box52.display();
     box53.display();
     box54.display();
     box55.display();
     box56.display();
     box57.display();
     box58.display();
     box59.display();
     box60.display();
     box61.display();
     box62.display();
     box63.display();
     box64.display();
     box65.display();
     box66.display();
     box67.display();
     box68.display();
     box69.display();
     box70.display();
     
    
    
} 