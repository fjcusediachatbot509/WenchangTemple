const hideImage = document.getElementById("hideImage")
const imageContainer = document.getElementById("imageContainer")

const img_door = document.getElementById('img_door')
const img_worshippers  = document.getElementById('img_worshippers')
const img_money = document.getElementById('img_money')
const img_pen = document.getElementById('img_pen')
const img_pray = document.getElementById('img_pray')
const img_sick = document.getElementById('img_sick')
const img_theWall = document.getElementById('img_theWall')
const images = [img_door, img_worshippers ,  img_money, img_pen, img_pray, img_sick, img_theWall]

hideImage.addEventListener('click', e=>{

    images.forEach(item => {    
        hideImage.style.display = 'none'
        imageContainer.style.display = 'none'
        item.style.display = 'none'
    })

})


AFRAME.registerComponent('clickhandler', {
    schema: {
        txt: {default:'default'}
    },        
    init: function () {
        var data = this.data;
        var el = this.el;        
        el.addEventListener('click', function () {         
            hideImage.style.display = 'block'
            imageContainer.style.display = 'block'
            images.forEach(item => {
                // console.log(item)
                item.style.display = 'none'
            })   
            console.log("img_"+data.txt);
            let currentImg = document.getElementById("img_"+data.txt)
            currentImg.style.display = 'block'
        });        
    }
});   

AFRAME.registerComponent('scenechange', {
    schema: {
        txt: {default:'default'}
    },        
    init: function () {
        var data = this.data;
        var el = this.el;        
        el.addEventListener('click', function () {         
            window.location.href = 'door.html';
        });        
    }
});   

