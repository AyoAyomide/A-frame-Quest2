AFRAME.registerComponent('boost', {
    init: function () {
        this.maxSpeed = 0.9;
        this.acceleration = 0.01;
        this.speed = 0.01;

        this.move = (data) => {
            if (this.speed < this.maxSpeed) {
                this.speed += (this.acceleration / 100);
                return this.speed;
            } else {
                return this.speed;
            }
        }
    },
    tick: function (time, deltaTime) {
        if (startGame) {
            this.el.object3D.position.y += this.move();
        }
        if (restartGame) {
            this.speed = 0.01;
            this.el.object3D.position.y = 0;
        }
    }
})