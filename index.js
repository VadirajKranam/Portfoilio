const btn=document.getElementsByClassName('hum')
console.log(btn)
let clicked=false
btn[0].addEventListener('click',()=>{
    if(clicked==false){
    document.getElementsByClassName('head_right_forPhone')[0].style.hieght='10rem'
    document.getElementsByClassName('uls')[0].style.display='block'
    document.getElementsByTagName('nav')[0].style.height='12rem'
    document.getElementsByClassName('head_left')[0].style.marginTop='-4.5rem'
    clicked=true
    }
    else{
        document.getElementsByClassName('head_right_forPhone')[0].style.hieght='0rem'
        document.getElementsByClassName('uls')[0].style.display='none'
        document.getElementsByTagName('nav')[0].style.height='6rem'
        document.getElementsByClassName('head_left')[0].style.marginTop='1.5rem'
        clicked=false
    }
})