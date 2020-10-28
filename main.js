let products = [
    {
        id:1,
        desc:"Nike Air max",
        img:"/images/revolt-164_6wVEHfI-unsplash.jpg",
        price:170
    },
    {
        id:2,
        desc:"Nike Air max super",
        img :"/images/revolt-164_6wVEHfI-unsplash.jpg",
        price:122
    },
    {
        id:3,
        desc:"Logo nik T-shirt",
        img:"/images/revolt-164_6wVEHfI-unsplash.jpg",
        price:17
    },
    {
        id:4,
        desc:"Jordn nik T-shirt",
        img:"/images/revolt-164_6wVEHfI-unsplash.jpg",
        price:27
    },
    {
        id:5,
        desc:"Caual shirt",
        img:"/images/revolt-164_6wVEHfI-unsplash.jpg",
        price:47
    },
    {
        id:6,
        desc:"Shirt on and go";
        img:"/images/revolt-164_6wVEHfI-unsplash.jpg",
        price:67
    }
    
]
const productContainer = document.querySelector('.product-container');

window.addEventListener('DOMContentLoaded', () => {
    let yo = products.map(item => {
        return '<div class="product"> <div class="img-container"><img src = ${product.img} alt=""></div><div class="main-body"><h3>${product.desc}</h3><p>Price<span>${product.price}&#8364</span></p></div></div>'
    
    });
        // console.log(yo);
        yo = yo.join("");
        productContainer.innerHTML = yo;
});
