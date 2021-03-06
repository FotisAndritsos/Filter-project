let products = [
    {
        id:1,
        desc:"Nike Air max",
        img:"./images/2.jpg",
        category:"T-shirt",
        price:170,
    },
    {
        id:2,
        desc:"Nike Air max super",
        img :"./images/6.jpg",
        category:"T-shirt",
        price:122,
    },
    {
        id:3,
        desc:"Logo nik T-rt",
        img:"./images/1.jpg",
        category:"Shoes",
        price:17,
    },
    {
        id:4,
        desc:"Jordn nik T-rt",
        img:"./images/5.jpg",
        category:"Shoes",
        price:27,
    },
    {
        id:5,
        desc:"Caual shirt",
        img:"./images/4.jpg",
        category:"Shirt",
        price:47,
    },
    {
        id:6,
        desc:"Shirt on and go",
        img:"./images/3.jpg",
        category:"Shirt",
        price:67,
    }
    
]
const productContainer = document.querySelector('.product-container');
const btnContainer = document.querySelector('.btn-container');


window.addEventListener('DOMContentLoaded', () => {
    displayProductItems(products);
    displayProductBtns();
    
});

const displayProductItems = (productItems) =>{
    let yo = productItems.map(productItem => {
        return`<div class="product">
                    <div class="img-container">
                    <img src="${productItem.img}" alt="">
                    </div>
                    <div class="main-body">
                        <h3>${productItem.desc}</h3>
                        <p>Price<span> ${productItem.price}&#8364</span></p>
                    </div>
                </div>
             `;
});
        yo = yo.join("");
        productContainer.innerHTML = yo;
}

const displayProductBtns = () =>{
    const categories = products.reduce((values,item)=>{
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['All']);
    const categoryBtns = categories.map(category =>{
        return `<button class="btn" data-id=${category}>${category}</button> `;
    })
    .join("");
    btnContainer.innerHTML = categoryBtns;
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click',(e)=>{
            let category = e.currentTarget.dataset.id;
            let productCategory = products.filter(productItem =>{
                if (productItem.category === category){
                    return productItem;
                }
            })
            if(category === "All"){
                displayProductItems(products);
            }else {
                displayProductItems(productCategory);
            }
        })
    });
}
