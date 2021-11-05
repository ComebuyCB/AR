function guiSet(){
    // var sceneEl = document.querySelector('a-scene')
    var entity = document.querySelector('#entity')

    var obj = {
        scale: 1,
        position: {
            x: 0,
            y: 0,
            z: 0,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        model_bottle: function(){
            $(entity).attr('gltf-model','https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/ComebuyCB/AR/master/obj/BottleOnly.gltf')
        },
        model_origin: function(){
            entity.setAttribute('gltf-model', 'https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/ComebuyCB/AR/master/obj/paper-size-o/PaperSize.gltf')
        }
    }

    obj.scale = entity.getAttribute('scale').x
    obj.position = entity.getAttribute('position')
    obj.rotation = entity.getAttribute('rotation')

    var gui = new dat.GUI()
    var obj_scale = gui.addFolder('scale')
        obj_scale.add( obj, 'scale', 1, 1000).onChange((value)=>{
            entity.setAttribute('scale', { x: value, y: value, z: value })
        })

    var obj_position = gui.addFolder('position')
        obj_position.add( obj.position, 'x', -500, 500).onChange((value)=>{
            entity.setAttribute('position', { x: value, y: obj.position.y, z: obj.position.z })
        })
        obj_position.add( obj.position, 'y', -500, 500).onChange((value)=>{
            entity.setAttribute('position', { x: obj.position.x, y: value, z: obj.position.z })
        })
        obj_position.add( obj.position, 'z', -500, 500).onChange((value)=>{
            entity.setAttribute('position', { x: obj.position.x, y: obj.position.y, z: value })
        })

    var obj_rotation = gui.addFolder('rotation')
        obj_rotation.add( obj.rotation, 'x', -180, 180).onChange((value)=>{
            entity.setAttribute('rotation', { x: value, y: obj.rotation.y, z: obj.rotation.z })
        })
        obj_rotation.add( obj.rotation, 'y', -180, 180).onChange((value)=>{
            entity.setAttribute('rotation', { x: obj.rotation.x, y: value, z: obj.rotation.z })
        })
        obj_rotation.add( obj.rotation, 'z', -180, 180).onChange((value)=>{
            entity.setAttribute('rotation', { x: obj.rotation.x, y: obj.rotation.y, z: value })
        })

    var obj_model = gui.addFolder('model')
        obj_model.add( obj,'model_bottle')
        obj_model.add( obj,'model_origin')
}

$(function(){
    guiSet()
})