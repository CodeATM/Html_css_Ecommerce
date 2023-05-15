var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function scrollHeader(){
    const header = document.getElementById('header')
      if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader) 




  var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlide: true,
    slidesPerView:'auto',
    loop: 'true',
  }); 



  const cart= document.getElementById('cart'),
        cartShop = document.getElementById('cart-shop'),
        cartClose = document.getElementById('cart-close')



if(cartShop){
  cartShop.addEventListener("click", () =>{
    cart.classList.add('show-cart')
  })
} 

if(cartClose){
  cartClose.addEventListener("click", () =>{
    cart.classList.remove('show-cart')
  })
}


const login= document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close')



if(loginButton){
  loginButton.addEventListener("click", () =>{
    login.classList.add('show-login')
  })
}

if(loginClose){
  loginClose.addEventListener("click", () =>{
    login.classList.remove('show-login')
  })
}

function scrollup() {
  const scrollup = document.getElementById('scroll-up');
  if(this.scrollY >= 350) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')


}
window.addEventListener('scroll', scrollup)





const accordionItem = document.querySelectorAll('.questions_item')

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector('.questions_header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem !==item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions_content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }
  
  else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

class CartItem{
     constructor(name, img , price){
       this.name = name
       this.img = img
       this.price = price
       this.quantity = 1
     }
}

class LocalCart{
    static key = 'cartItems' 
 
    static getLocalCCartItems(){ 
      let cartMap = new Map()
      const cart =localStorage.getItem(key)
      if(cart===null || cart.length===0)  
      //[[2, obj], [3, obj]]
       return new Map(Object.entries(JSON.parse(cart)))
    }
    static addItemToLocalCart(id, item){
      let cart = LocalCart.getLocalCartItems()
      if(cart.has(id)){
        let mapItem = cart.get(id) 
        mapItem.quantity +=1
        cart.set(id, mapItem)
      }
      else
      cart.set(id, item)
      localStorage.setItem(key, JSON.stringify(Object.fromEntries(cart)))
       updateCartUI()

    }
    static removeItemFromCart(id){}
}

