AFRAME.registerComponent('boost', {
    init: function () {
        console.log(this.el.object3D.position.y);
    },
    tick: function (time, deltaTime) {
        this.el.object3D.position.y += 0.03;
    }
})