window.onload = ()=>{
    let btnPre= document.querySelector('.prev');
    let btnNext=document.querySelector('.next')
    let images = document.querySelectorAll('.bannerr1')
    
    let imagesActive=0
    // console.log('hello');
// btnPre.onclick = () => {
//     carosel(-1);
// }
btnNext.onclick = () => {
    carosel(1);
}
let carosel = (huong)=>{
    imagesActive =imagesActive + huong 
    if(imagesActive>=images.length) imagesActive =0
    if(imagesActive<0) imagesActive = images.length -1
    for(let i = 0; i<images.length ; i++){
        images[i].style.display='none' 
    }
    images[imagesActive].style.display='block'
    }


    let tg = setInterval(()=>{

        carosel(-1);
    },2000);
 
// btnNext.onclick = () => {
//     carosel(1);
//     clearInterval(tg);
//     tg = setInterval(()=>{},2000);
// }
// btnPre.onclick = () => {
//     carosel(-1);
//     clearInterval(tg);
//     tg = setInterval(()=>{},2000);
// }


// setInterval(()=> {

//     carosel(1);

// }, 2000);


// let time = setInterval(carosel, 1000);
// function carosel11() {
//     time = setInterval(carosel, 1000)
    
// }




}



