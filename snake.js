
function snake(){

    
    this.x = 0;
    this.y = 0;
    this.xVelocity = boxScale;
    this.yVelocity = 0;
    this.score=0;
    this.tail = [];

    //Vẽ Con rắn có kích thước boxScale 20 * 20
    this.drawSnake = function(){
        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, boxScale, boxScale);
        }
        ctx.drawImage(img1, this.x, this.y,);
    }
    // Vẽ đường con rắn di chuyển 
    this.move = function() {
        for(let i=0;i<this.tail.length-1;i++){
            this.tail[i]=this.tail[i+1];
        }

        this.tail[this.score+1] = {x:this.x, y:this.y};

        this.x += this.xVelocity ;
        this.y += this.yVelocity ;

        //Nếu rắn vượt qua giới hạn trục x
        if(this.x >=columns * boxScale )
            this.x=0;
        else if(this.x < 0 )
            this.x=(columns-1) * boxScale;

        //y Nếu rắn vượt qua giới hạn trục y
        if(this.y >= rows * boxScale)
            this.y=0;
        else if(this.y < 0 )
            this.y=(rows-1) * boxScale;
    }
    // Hướng di chuyển trái, phải, trên dưới
    this.changeDirection = function(dir) {
        switch(dir) {
            case 'ArrowRight': 
                this.xVelocity = boxScale;
                this.yVelocity = 0;
                break;

            case 'ArrowLeft': 
                this.xVelocity = -1*boxScale;
                this.yVelocity = 0;
                break;

            case 'ArrowUp': 
                this.xVelocity = 0;
                this.yVelocity = -1*boxScale;
                break;

            case 'ArrowDown': 
                this.xVelocity = 0;
                this.yVelocity = boxScale;
        }
    }
    // Hàm ăn mồi
    this.eat = function(fruit) {
        if(this.x == fruit.x && this.y == fruit.y){
            this.score++;
            
            eatSound.play();
            return true;
            
        }
        return false;
    }
    // Hàm Va Chạm 
    this.collision = function() {
        for(let i=0;i<this.tail.length;i++)
        {
            if(this.x == this.tail[i].x && this.y == this.tail[i].y)
            {
                this.score=0;
                this.tail=[];
                hitSound.play();
                 return true;
                
            } 
            
        }
    }
}



    


