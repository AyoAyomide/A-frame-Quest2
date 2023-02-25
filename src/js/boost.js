AFRAME.registerComponent('boost', {
    init: function () {
        console.log(startGame);
    },
    tick: function (time, deltaTime) {
        if (startGame) {
            this.el.object3D.position.y += 0.03;
        }
    }
})