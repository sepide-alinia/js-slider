

let left = document.getElementById('left')
let right = document.getElementById('right')
let img = document.getElementById('img')

let imges = ['./imgs/1.jpg','./imgs/2.jpg','./imgs/3.jpg']

let currentImg = imges[0]




left.addEventListener('click',goLeft)
right.addEventListener('click',goRight)


function goLeft(){


    if(currentImg == imges[0]){

        currentImg=imges[2]
        img.setAttribute('src',currentImg)
    }
    else if(currentImg == imges[1]){
        currentImg=imges[0]
        img.setAttribute('src',currentImg)
    } 
    else if(currentImg == imges[2]){
        currentImg=imges[1]
        img.setAttribute('src',currentImg)
    }
     
}

function goRight(){
    

    if(currentImg == imges[0]){

        currentImg=imges[1]
        img.setAttribute('src',currentImg)
    }
    else if(currentImg == imges[1]){
        currentImg=imges[2]
        img.setAttribute('src',currentImg)
    } 
    else if(currentImg == imges[2]){
        currentImg=imges[0]
        img.setAttribute('src',currentImg)
    }
}