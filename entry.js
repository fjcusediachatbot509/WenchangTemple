// const hideImage = document.getElementById("hideImage")
// const imageContainer = document.getElementById("imageContainer")

// const img_door = document.getElementById('img_door')
// const img_worshippers  = document.getElementById('img_worshippers')
// const img_money = document.getElementById('img_money')
// const img_pen = document.getElementById('img_pen')
// const img_pray = document.getElementById('img_pray')
// const img_sick = document.getElementById('img_sick')
// const img_theWall = document.getElementById('img_theWall')
// const images = [img_door, img_worshippers ,  img_money, img_pen, img_pray, img_sick, img_theWall]
// const text_plaque = document.getElementById('text_plaque')

// hideImage.addEventListener('click', e=>{

//     images.forEach(item => {    
//         hideImage.style.display = 'none'
//         imageContainer.style.display = 'none'
//         item.style.display = 'none'
//     })

// })


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

// AFRAME.registerComponent('dangerhandler', {
//     schema: {
//         txt: {default:'default'}
//     },        
//     init: function () {
//         var data = this.data;
//         var el = this.el;        
//         el.addEventListener('click', function () {
//             // let currentImg = document.getElementById(data.txt)
//             // currentImg.style.display = 'block'
//             text_plaque.textContent = "你保護了A級文物 - 清 道光年間 的匾額"
//         });        
//     }
// });   

AFRAME.registerComponent('scenechange', {
    schema: {
        txt: {default:'default'}
    },        
    init: function () {
        var data = this.data;
        var el = this.el;        
        el.addEventListener('click', function () {         
            window.location.href = 'index.html';
        });        
    }
});   


window.addEventListener("load", (event) => {
    //// 先用灰色布幕蓋著
    let background = document.getElementById('background')
    console.log("page is fully loaded");
    
    let sec = 0
    let sec_end = 20
    let timerId;
    let opacity = 1
    //// 逐漸降低透明度直到一段時間後 (認為載入時間大約是3.5秒以上)
    timerId = setInterval(function(){   
        if(sec >= sec_end) {
        clearInterval(timerId);
        background.style.display = 'none'
        background.style.opacity = '1'
        }
        if(sec >= sec_end - 10) {
        opacity -= 0.1
        background.style.opacity = opacity+""
        }
        console.log(sec, opacity)
        sec++;
    }, 100);



    // setTimeout(function(){
    //     danger_happen()
    // }, 60000)

    // function danger_happen(){

    //     let sec_red = 0
    //     timer_red = setInterval(function(){   
    //         if(sec_red % 2 == 0) {
    //             document.getElementById("sky").setAttribute('color', 'red')
    //             // background.style.display = 'none'
    //             // background.style.opacity = '1'
    //         } else {
    //             document.getElementById("sky").setAttribute('color', 'white')    
    //         }
    
    //         if(sec_red >= 10) {
    //             document.getElementById("sky").setAttribute('color', 'white')      
    //             clearInterval(timer_red);

    //             text_plaque.style.display = 'block'
    //             text_plaque.innerText = "緊急情況發生，只來得及保護一個文物，請選擇"

    //         }
    //         // console.log(sec, opacity)
    //         sec_red++;
    //     }, 500);
    
    // }


});


