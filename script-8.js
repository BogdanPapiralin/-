
 var wins=new Array(0,0,0,0,0,0,0,0,0); 
 var c=0;
 var c1=3;
 var b=5;

 var imgs=new Array('a (1).jpg','a (2).jpg','a (3).jpg','a (4).jpg','a (5).jpg'); 

 function timme(){ 
   
    
       
    
    for (let index = 0; index < 3; index++) 
    {
        let ran1=Math.floor(Math.random()* (b - 0) + 0);
        let ran2=Math.floor(Math.random()* (b - 0) + 0);
        while(ran2==ran1){ran2=Math.floor(Math.random()* (b - 0) + 0);}
        let ran3=Math.floor(Math.random()* (b - 0) + 0);
        while(ran2==ran3||ran1==ran3){ran3=Math.floor(Math.random()* (b - 0) + 0);}  
        if(index==0){
        var image1=document.getElementById("image11");
        image1.src=imgs[Number(ran1)];  
        wins[1]=ran1;
        var image1=document.getElementById("image12");
        image1.src=imgs[Number(ran2)];  
        wins[4]=ran2;
        var image1=document.getElementById("image13");
        image1.src=imgs[Number(ran3)];  
        wins[7]=ran3;  
        }
        if(index==1){
            var image1=document.getElementById("image21");
            image1.src=imgs[Number(ran1)];  
            wins[2]=ran1;
            var image1=document.getElementById("image22");
            image1.src=imgs[Number(ran2)];  
            wins[5]=ran2;
            var image1=document.getElementById("image23");
            image1.src=imgs[Number(ran3)];  
            wins[8]=ran3;  
            }
            if(index==2){
                var image1=document.getElementById("image31");
                image1.src=imgs[Number(ran1)];  
                wins[3]=ran1;
                var image1=document.getElementById("image32");
                image1.src=imgs[Number(ran2)]; 
                wins[6]=ran2; 
                var image1=document.getElementById("image33");
                image1.src=imgs[Number(ran3)]; 
                wins[9]=ran3;  
                }
            
    }
    
   
  
    
  if(wins[1]==wins[2]&&wins[2]==wins[3]||wins[4]==wins[5]&&wins[5]==wins[6]||wins[7]==wins[8]&&wins[8]==wins[9])
  {
      c=1;
  }

 let o= document.getElementById('aa');
    c1--;
    if(c1!=0){
    o.classList.remove('mard')
    document.getElementById('aaa').innerHTML= "Залишилося спроб:";  
    document.getElementById('aa').innerHTML= c1; 
    }else{
        wins=new Array(0,0,0,0,0,0,0,0,0); 
    if(c==1){
           
            o.classList.add('mard');
            document.getElementById('aa').innerHTML= "You Win";  
            document.getElementById('aaa').innerHTML= "";  
        }else{
            
            o.classList.add('mard');
            document.getElementById('aa').innerHTML= "You lose";  
            document.getElementById('aaa').innerHTML= "";  
        }
        c1=3;
        c=0
    }
}

 


