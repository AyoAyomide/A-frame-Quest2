
const time = new THREE.Clock();

AFRAME.registerComponent('thumbstick-logging', {

  init: function () {
    let text1 = document.querySelector('#text1');
    let sampleBox = document.querySelector('#sampleBox');
    this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    this.el.addEventListener('abuttonchanged', () => { moveBox('UP') });
    this.el.addEventListener('bbuttonchanged', () => { moveBox('DOWN') });

    moveBox = (value) => {
      let speed = 0.1;
      let calc = {
        BACKWARD: () => { sampleBox.object3D.position.z += speed; },
        FORWARD: () => { sampleBox.object3D.position.z -= speed },
        LEFT: () => { sampleBox.object3D.position.x -= speed },
        RIGHT: () => { sampleBox.object3D.position.x += speed },
        UP: () => { sampleBox.object3D.position.y += speed },
        DOWN: () => { sampleBox.object3D.position.y -= speed }
      };
      calc[value]();
    }
  },
  logThumbstick: function (evt) {
    if (evt.detail.y > 0.95) { text1.setAttribute('value', 'DOWN'); moveBox('BACKWARD'); }
    if (evt.detail.y < -0.95) { text1.setAttribute('value', 'UP'); moveBox('FORWARD'); }
    if (evt.detail.x < -0.95) { text1.setAttribute('value', 'LEFT'); moveBox('LEFT'); }
    if (evt.detail.x > 0.95) { text1.setAttribute('value', 'RIGHT'); moveBox('RIGHT') }
  }
});

AFRAME.registerComponent('button-logging', {
  init: function () {
    this.el.addEventListener('triggerdown', this.logButton);
    this.el.addEventListener('gripdown', this.logButton);
  },
  logButton: function (evt) {
    let text = document.querySelector('#text1');
    text.setAttribute('value', JSON.stringify(evt));
  }
});

AFRAME.registerComponent('camera-reader', {
  init: function () {
    let text2 = document.querySelector('#text2');
    let text3 = document.querySelector('#text3');
    this.el.object3D.position.z = 2;
  }
})
