//create a moving object
var movingObject = {
    x: 0,
    y: 0,
    speed: 1,
    direction: "right",
    move: function () {
        if (this.direction === "right") {
            this.x += this.speed;
        } else if (this.direction === "left") {
            this.x -= this.speed;
        } else if (this.direction === "up") {
            this.y -= this.speed;
        } else if (this.direction === "down") {
            this.y += this.speed;
        }
    }
}
//create a second moving object
var movingObject2 = {
    x: 0,
    y: 0,
    speed: 1,
    direction: "right",
    move: function () {
        if (this.direction === "right") {
            this.x += this.speed;
        } else if (this.direction === "left") {
            this.x -= this.speed;
        } else if (this.direction === "up") {
            this.y -= this.speed;
        } else if (this.direction === "down") {
            this.y += this.speed;
        }
    }
}















