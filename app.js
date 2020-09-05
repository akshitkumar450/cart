let cartbtn = document.querySelector('.fa-cart-plus')
let addcart = document.querySelector('#addcart')
let closebtn= document.querySelector('#close-icon')

cartbtn.addEventListener('click', () => {
    addcart.style.transform = 'translateX(0px)';
    document.body.style.background='rgba(255, 166, 0, 0.418)';
})

closebtn.addEventListener('click',()=>{
    addcart.style.transform='translate(400px)'
})