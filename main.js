let products = [
    {
        id:1,
        desc:"Nike Air max",
        img:"/images/sharon-mccutcheon-wx3JOq0Xbh4-unsplash.jpg",
        category:"Tshirt",
        price:170,
    },
    {
        id:2,
        desc:"Nike Air max super",
        img :"/images/marcel-j-uWrCdB5sM-unsplash.jpg",
        category:"Tshirt",
        price:122,
    },
    {
        id:3,
        desc:"Logo nik T-shirt",
        img:"/images/revolt-164_6wVEHfI-unsplash.jpg",
        category:"Shoes",
        price:17,
    },
    {
        id:4,
        desc:"Jordn nik T-shirt",
        img:"/images/jeremy-alford-EfLwt5Xz5Ek-unsplash.jpg",
        category:"Shoes",
        price:27,
    },
    {
        id:5,
        desc:"Caual shirt",
        img:"/images/revolt-164_6wVEHfI-unsplash.jpg",
        category:"Shirt",
        price:47,
    },
    {
        id:6,
        desc:"Shirt on and go",
        img:"/images/revolt-164_6wVEHfI-unsplash.jpg",
        category:"Shirt",
        price:67,
    }
    
]
const productContainer = document.querySelector('.product-container');
const btns = document.querySelectorAll('button');

window.addEventListener('DOMContentLoaded', () => {
    let yo = products.map(product => {
        return`<div class="product">
                    <div class="img-container">
                    <img src="${product.img}" alt="">
                    </div>
                    <div class="main-body">
                        <h3>${product.desc}</h3>
                        <p>Price<span> ${product.price}&#8364</span></p>
                    </div>
                </div>
             `;
});
        // console.log(yo);
        yo = yo.join("");
        productContainer.innerHTML = yo;
});
btns.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        let targItem = e.target.dataset.id;
        
    })
});