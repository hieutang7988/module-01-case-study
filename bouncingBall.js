let Ball = function ( x, y, radius,  xBoundery ,yBoundery) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.yBoundery = yBoundery;
    this.xBoundery = xBoundery;
    this.Xdirection = 1;
    this.Ydirection = 1;
    this.move = function (bar) {
        this.x += 3 * this.Xdirection;
        this.y += 2 * this.Ydirection;
        if (this.y >= this.yBoundery || this.y - this.radius <= 0) {
            this.Ydirection = -this.Ydirection;
        }
        if (this.x >= this.xBoundery || this.x - this.radius <= 0) {
            this.Xdirection = -this.Xdirection;
        }
        if (this.x - this.radius >= bar.x && this.x +this.radius <= bar.x + bar.width && this.y >= bar.y - this.radius ) {
            this.Xdirection = -this.Xdirection;
            this.Ydirection = -this.Ydirection;
        }
        if( this.y == yBoundery) {
            alert("GAME OVER")
        }
    }
}

let Bar = function (x , y , width,height, xBoundery) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.xBoundery = xBoundery;
    this.moveLeft = function () {
        if (this.x >= 5)
            this.x -= 5;
    }
    this.moveRight = function () {
        if (this.x <= xBoundery)
            this.x += 5;

    }
}
    let ball;
    function createBall() {
        let canvas = document.getElementById("myCanvas");
        ball = new Ball(100, 100, 10, canvas.width - 10, canvas.height - 10)
    }

    let bar;
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    function createBar() {
        bar = new Bar(300, 280, 120, 10, canvas.width - 120)
    }


    function drawBall() {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.fillStyle = " red";
        ctx.stroke();

    }

    function drawnBar() {
        ctx.beginPath();
        ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
        ctx.fillStyle = " blue";
    }

    createBall();
    drawBall();
    createBar();
    setInterval(moveAll, 50);
    window.addEventListener('keydown', moveSelection);


    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
                bar.moveLeft();
                break;
            case 39:
                bar.moveRight();
                break;

        }
    }

    function moveAll() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bar.moveLeft();
        bar.moveRight();
        ball.move(bar);
        drawBall();
        drawnBar();
    }






