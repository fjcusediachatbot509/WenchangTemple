const hideImage = document.getElementById("hideImage")
const imageContainer = document.getElementById("imageContainer")

// const img_door = document.getElementById('img_door')
const _plaque  = document.getElementById('_plaque')

const img_worshippers  = document.getElementById('img_worshippers')
const img_money = document.getElementById('img_money')
const img_car = document.getElementById('img_car')
const img_pen = document.getElementById('img_pen')
const img_moonOldMan = document.getElementById('img_moonOldMan')
const img_donate = document.getElementById('img_donate')
const img_pray = document.getElementById('img_pray')
const img_sick = document.getElementById('img_sick')
const img_theWall = document.getElementById('img_theWall')
const images = [ img_worshippers ,  img_money, img_car, img_pen, img_moonOldMan, img_pray, img_sick, img_theWall]
const text_plaque = document.getElementById('text_plaque')

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
            console.log("img_"+data.txt);
    
            hideImage.style.display = 'block'
            imageContainer.style.display = 'block'

            //// 隱藏 所有文物圖片
            images.forEach(item => {
                // console.log(item)
                item.style.display = 'none'
            })   
            //// 打開 user clicked 的文物圖片
            let currentImg = document.getElementById("img_"+data.txt)
            currentImg.style.display = 'block'

            //// 顯示文字
            document.getElementById('textContrainer').style.display = 'block'
            document.getElementById('text_desc').textContent = desc_texts["img_"+data.txt]

            if(dangerGameStart){
                document.getElementById('textContrainer').style.display = 'none'
                if(dangerGameCorrect){
                    text_plaque.textContent = "謝謝你保護A級文物-清道光年間的匾額。\n但其實這是複製品，真品已被廟方安置收藏"
                } else {
                    text_plaque.textContent = "感謝你保護它。\n但，有更重要的文化資產失傳了TAT"
                }

            }
        });        
    }
});   

let dangerGameStart = false
let dangerGameCorrect = false
AFRAME.registerComponent('dangerhandler', {
    schema: {
        txt: {default:'default'}
    },        
    init: function () {
        var data = this.data;
        var el = this.el;        
        el.addEventListener('click', function () {
            // let currentImg = document.getElementById(data.txt)
            // currentImg.style.display = 'block'
            text_plaque.textContent = "謝謝你保護A級文物-清道光年間的匾額。\n但其實這是複製品，真品已被廟方安置收藏"
            dangerGameCorrect = true
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
            window.location.href = 'entry.html';
        });        
    }
});   


window.addEventListener("load", (event) => {
    //// 先用灰色布幕蓋著
    let background = document.getElementById('background')
    console.log("page is fully loaded");
    
    // _plaque.setAttribute('visible', false)

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



    setTimeout(function(){
        danger_happen()
    }, 30000)

    function danger_happen(){

        _plaque.setAttribute('visible', true)

        let sec_red = 0
        timer_red = setInterval(function(){   
            if(sec_red % 2 == 0) {
                document.getElementById("sky").setAttribute('color', 'red')
                // background.style.display = 'none'
                // background.style.opacity = '1'
            } else {
                document.getElementById("sky").setAttribute('color', 'white')    
            }
    
            if(sec_red >= 10) {
                document.getElementById("sky").setAttribute('color', 'white')      
                clearInterval(timer_red);

                text_plaque.style.display = 'block'
                text_plaque.innerText = "緊急情況發生，只來得及保護一個文物，請選擇"
                dangerGameStart = true
            }
            // console.log(sec, opacity)
            sec_red++;
        }, 500);
    
    }


});



// const desc_texts = [ img_worshippers ,  img_money, img_pen, img_pray, img_sick, img_theWall]
const desc_texts = {
    img_worshippers: "幾乎各宮廟之神明都會參與遶境，唯獨文昌祠不會參與，此傳統與「子不語怪力亂神」有關。「文昌帝君聖誕禮斗法會」每年農曆二月初二~初四舉行，道士為文昌帝君祝壽，信眾帶供品安置於祭壇。信眾亦可報名參加禮鬥法會，報名者可領取文昌帝君的壽麵與壽桃 \n「聯考功名祈福法會」配合學測指考等全國性考試舉辦，會在考試前一天舉行，參加者需要帶蔥、芹菜、菜頭與圓形水果前來祭拜，親自讓法師進行「祭解」（返家後須將參加祭解的衣物放在枕頭下，將領到的功名米與家中的米混合後煮來吃，祭拜用的蔥、芹菜、菜頭也要吃下[還要在返家後與考試當天早上喝三口符水，剩下的符水則用來擦臉、胸、手腳，之後穿著祭解過的衣物、帶著祭解過的文具應試" ,  
    img_money: "可以點光明燈\n\n每年前來登記點光明燈的信眾相當踴躍，一萬多盞的光明燈常常很快被登記額滿。因應信眾對求財的渴望，更名為財神殿。 財神殿的功名燈有金碧輝煌之感，供奉著魁斗星君，每逢考季或是各種就業、升等等考試前幾天，考生可將准考證影印本放置此殿神桌上，財神殿中成堆的准考證代表著每位考生的希望，希望典試官朱筆批卷時，能讓考生金榜題名。", 
    img_car: "可以拿到行車平安符",
    img_moonOldMan: "可以拿到月老保祐你結良緣的的令牌",
    img_pen: "可以拿到文昌筆\n\n隨時都能來領2B鉛筆和黑筆，來參拜後可以自取，想要還願只要買新的筆送來即可。很適合各級學校帶學生來參拜", 
    img_donate: "似乎是建廟時，當時捐獻的鄉民能夠有一個紀念的浮雕，具有歷史文化價值，但易毀損，易被忽略，不易保存", 
    img_pray: "img_pray", 
    img_sick: "可以拿到健康平安符\n\n相傳文昌帝君有七十二化身，瘟祖神是化身之一，保佑人畜興旺、五穀豐登，收瘟攝毒，驅瘟止疫，除去人間瘟疫，瘟祖神能「收瘟攝毒、掃蕩污穢」\n在2003年SARS期間，為了掃除瘟疫，於是文昌祠增建了瘟祖殿，以祈求國人身體健康、國泰民安", 
    img_theWall: "img_theWall"
}