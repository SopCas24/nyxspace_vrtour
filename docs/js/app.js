
AFRAME.registerComponent('planet', {
    schema: { info: { type: 'string' } },
    init: function () {
        const $this = this
        const planetElm = this.el
        const planetInfo = document.querySelector('#planet-info')
        const camera = document.querySelector('#camera')

        planetElm.addEventListener('mouseenter', (evt) => {
            document.querySelector('#orbit').emit('pauseOrbit', {}, false);

            const infoText = $this.data.info
            planetInfo.setAttribute('value', infoText)

            const { x, y, z } = camera.object3D.position
            planetInfo.object3D.position.set(x - 2.5, y, z)
            planetInfo.object3D.rotation.set(0, 90, 0)
            planetInfo.setAttribute('visible', true)
        });

        planetElm.addEventListener('mouseleave', (evt) => {
            document.querySelector('#orbit').emit('resumeOrbit', {}, false);
            planetInfo.setAttribute('visible', false)
        });
    }
});

