

let menu = document.querySelector(".fa-bars")
if (menu) {
    let isOpen = false
    menu.addEventListener("click", () => {
        if (isOpen) {
            document.querySelector(".nav-ul").removeAttribute("style")
            isOpen = false
        }
        else {
            document.querySelector(".nav-ul").setAttribute("style", "display:block")
            isOpen = true
        }
    })
}







// for flash sale 
let totalSeconds = 3 * 24 * 60 * 60;
function updateTimer() {
    if (totalSeconds <= 0) {
        document.querySelector(".timer").innerHTML = "Flash Sale Ended!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    let getDate = document.getElementById("days")
    let getHours = document.getElementById("hours")
    let getMinutes = document.getElementById("minutes")
    let getSeconds = document.getElementById("seconds")

    if (getDate && getHours && getMinutes && getSeconds) {
        getDate.innerText = days
        getHours.innerText = hours
        getMinutes.innerText = minutes
        getSeconds.innerText = seconds

    }

    totalSeconds--; // Decrease by 1 second
}
updateTimer(); // Initial call
const timer = setInterval(updateTimer, 1000); // Repeat every 1 second
// for flash sale 


// cart length 
const whishlishtLength = () => {
    let whishlistLength = document.getElementById("whishlist-length")
    let length = !JSON.parse(localStorage.getItem("whishlistProducts")) ? 0 : JSON.parse(localStorage.getItem("whishlistProducts")).length
    !whishlistLength ? null : whishlistLength.innerHTML = length
    if (length === 0) { !whishlistLength ? null : whishlistLength.innerHTML = 0 }
}
whishlishtLength()
const cartLength = () => {
    let cartLength = document.getElementById("cart-length")
    let length = !JSON.parse(localStorage.getItem("cartProducts")) ? 0 : JSON.parse(localStorage.getItem("cartProducts")).length
    !cartLength ? null : cartLength.innerHTML = length
    if (length === 0) { !cartLength ? null : cartLength.innerHTML = 0 }
}
cartLength()



const additem = () => {
    localStorage.setItem("whishlistProducts", JSON.stringify(whishlistArray))
    renderWhishlist()
    whishlishtLength()
}
const additem1 = () => {
    localStorage.setItem("cartProducts", JSON.stringify(cartArray))
    renderCart()
    cartLength()
}


document.addEventListener('click', (e) => {
    if (e.target.className === "fa-regular fa-heart whishlist-icon") {
        let main = e.target.parentElement
        main.classList.add("fill-whishlist")
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement)
        let card = e.target.parentElement.parentElement.parentElement.parentElement
        let product_id = card.querySelector(".product_id").innerHTML
        let product_discount = card.querySelector(".discount-badge").innerHTML
        let product_name = card.querySelector(".product-title").innerHTML
        let product_src = card.querySelector(".product-image img").src
        let product_price = card.querySelector(".new-price").innerHTML
        product_price = product_price.slice(1)
        let product_original = card.querySelector(".old-price").innerHTML
        product_original = product_original.slice(1)
        let product_stars = card.querySelector(".product_stars").innerHTML
        let product_count = card.querySelector(".reviews").innerHTML
        product_count = product_count.replace("(", "")
        product_count = product_count.replace(")", "")




        let length = []
        for (let i = 0; i < JSON.parse(localStorage.getItem("whishlistProducts")).length; i++) {
            let a = JSON.parse(localStorage.getItem("whishlistProducts"));
            length.push(a[i].product.product_id)
        }
        let results = false
        length.forEach((element) => {
            if (element === product_id) { results = true }
        })
        if (!results) {
            whishlistArray.unshift({
                "product": {
                    "product_id": `${product_id}`,
                    "name": ` ${product_name}`,
                    "image": `${product_src}`,
                    "price": {
                        "current": `${product_price}`,
                        "original": `${product_original}`,
                        "discount": `${product_discount}`,
                    },
                    "rating": {
                        "stars": `${product_stars}`,
                        "count": `${product_count}`
                    }
                }
            })
            additem()
        }
        else { alert("This product is already in whishlist.") }

    }

    else if (e.target.className === "fa-solid fa-xmark") {
        card = e.target.parentElement.parentElement.parentElement.parentElement
        product_id = card.querySelector(".product_id").innerHTML
        let whishlistProducts = JSON.parse(localStorage.getItem("whishlistProducts"))
        whishlistProducts = whishlistProducts.filter((element) => {
            return product_id != element.product.product_id;
        })
        localStorage.setItem("whishlistProducts", JSON.stringify(whishlistProducts))
        document.querySelector('.whishlist').innerHTML = ""
        renderWhishlist()
        whishlishtLength()
    }
    else if (e.target.innerHTML === "Add To Card") {
        let card = e.target.parentElement.parentElement.parentElement;
        let product_id = card.querySelector(".product_id").innerHTML
        let product_discount = card.querySelector(".discount-badge").innerHTML
        let product_name = card.querySelector(".product-title").innerHTML
        let product_src = card.querySelector(".product-image img").src
        let product_price = card.querySelector(".new-price").innerHTML
        product_price = product_price.slice(1)

        let product_original = card.querySelector(".old-price").innerHTML
        product_original = product_original.slice(1)

        let product_stars = card.querySelector(".product_stars").innerHTML

        let product_count = card.querySelector(".reviews").innerHTML
        product_count = product_count.replace("(", "")
        product_count = product_count.replace(")", "")



        let length = []
        for (let i = 0; i < JSON.parse(localStorage.getItem("cartProducts")).length; i++) {
            let a = JSON.parse(localStorage.getItem("cartProducts"));
            length.push(a[i].product.product_id)
        }
        let results = false
        length.forEach((element) => {
            if (element === product_id) { results = true }
        })
        if (!results) {
            cartArray.unshift({
                "product": {
                    "product_id": `${product_id}`,
                    "name": ` ${product_name}`,
                    "image": `${product_src}`,
                    "price": {
                        "current": `${product_price}`,
                        "original": `${product_original}`,
                        "discount": `${product_discount}`,
                    },
                    "rating": {
                        "stars": `${product_stars}`,
                        "count": `${product_count}`
                    }
                }
            })
            additem1()
            card.querySelector(".addbtn").innerHTML = "Added"
        }
        else { card.querySelector(".addbtn").innerHTML = "Already Add" }

    }
})

// ...............................
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    cart = cart.filter(item => item.product.product_id !== id);
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    document.querySelector('.cart').innerHTML = ""
    renderCart()
    cartLength()
    totalItemsRate1()
}

// ...............................


const renderCard1 = () => {
    let productCardContainer = document.querySelector('.product-card-container')
    let numCard = 0
    !products ? null : products.forEach((element) => {
        if (numCard < 14) {
            !productCardContainer ? null : productCardContainer.innerHTML += `
            <div class="product-card">
            <p style="display:none" class="product_id">${element.product.product_id}</p>
            <div class="product-image">
            <span class="discount-badge">${element.product.price.discount}</span>
            <img src="${element.product.image}" alt="${element.product.name}" />
            <button class="addbtn">Add To Card</button>
            <div class="icons">
            <button class="icon-btn"><i class="fa-regular fa-heart whishlist-icon"></i></button>
            </div>
            </div>
            <div class="product-info">
            <h3 class="product-title">${element.product.name}</h3>
            <div class="price">
            <span class="new-price">$${element.product.price.current}</span>
            <span class="old-price">$${element.product.price.original}</span>
            </div>
            <div class="rating">
            <span class="stars">
            <p style="display:none" class="product_stars">${element.product.rating.stars}</p>
            ${element.product.rating.stars >= 5 ? `<i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i>`: element.product.rating.stars >= 4 ? `<i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i>`: element.product.rating.stars >= 3 ? `<i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i>`: element.product.rating.stars >= 2 ? `<i class="fa-solid fa-star">
                </i><i class="fa-solid fa-star">
                </i>`: element.product.rating.stars >= 1 ? `<i class="fa-solid fa-star"></i>` : "No stars"}
                </span>
                <span class="reviews">(${element.product.rating.count})</span>
                </div>
                </div>
                </div>`}
        numCard++
    });
}
renderCard1()


const renderBestSellproduct = () => {
    let bestSellproduct = document.querySelector('.best-sell-product')
    let bsproduct;
    bsproduct = products.filter((e) => {
        return e.product.rating.stars >= 5
    })
    let numCard = 0
    bsproduct.forEach((element) => {
        if (numCard < 4) {
            !bestSellproduct ? null : bestSellproduct.innerHTML += `
                    <div class="product-card-outer">
                    <div class="product-card">
                    <p style="display:none" class="product_id">${element.product.product_id}</p>
                    <div class="product-image">
                    <span class="discount-badge">${element.product.price.discount}</span>
                    <img src="${element.product.image}" alt="${element.product.name}" />
                    <button class="addbtn">Add To Card</button>
                    <div class="icons">
                    <button class="icon-btn"><i class="fa-regular fa-heart whishlist-icon"></i></button>
                    </div>
                    </div>
                    <div class="product-info">
                    <h3 class="product-title">${element.product.name}</h3>
                    <div class="price">
                    <span class="new-price">$${element.product.price.current}</span>
                    <span class="old-price">$${element.product.price.original}</span>
                    </div>
                    <div class="rating">
                    <span class="stars">
                    <p style="display:none" class="product_stars">${element.product.rating.stars}</p>
                    ${element.product.rating.stars >= 5 ? `<i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i>`: element.product.rating.stars >= 4 ? `<i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i>`: element.product.rating.stars >= 3 ? `<i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i>`: element.product.rating.stars >= 2 ? `<i class="fa-solid fa-star">
                        </i><i class="fa-solid fa-star">
                        </i>`: element.product.rating.stars >= 1 ? `<i class="fa-solid fa-star"></i>` : "No stars"}
                        </span>
                        <span class="reviews">(${element.product.rating.count})</span>
                        </div>
                        </div>
                        </div>
                        </div>`

        }

        numCard++
    });

}
renderBestSellproduct()


const renderOurproduct = () => {
    let ourProduct = document.querySelector('.ourproduct')
    let numCard = 0
    products.forEach((element) => {
        if (numCard < 8) {
            !ourProduct ? null : ourProduct.innerHTML += `
                        
                        <div class="product-card-outer">
                        <div class="product-card">
                        <p style="display:none" class="product_id">${element.product.product_id}</p>
                        <div class="product-image">
                        <span class="discount-badge">${element.product.price.discount}</span>
                        <img src="${element.product.image}" alt="${element.product.name}" />
                        <button class="addbtn">Add To Card</button>
                        <div class="icons">
                        <button class="icon-btn"><i class="fa-regular fa-heart whishlist-icon"></i></button>
                        </div>
                        </div>
                        <div class="product-info">
                        <h3 class="product-title">${element.product.name}</h3>
                        <div class="price">
                        <span class="new-price">$${element.product.price.current}</span>
                        <span class="old-price">$${element.product.price.original}</span>
                        </div>
                        <div class="rating">
                        <span class="stars">
                        <p style="display:none" class="product_stars">${element.product.rating.stars}</p>
                        ${element.product.rating.stars >= 5 ? `<i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i>`: element.product.rating.stars >= 4 ? `<i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i>`: element.product.rating.stars >= 3 ? `<i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i>`: element.product.rating.stars >= 2 ? `<i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i>`: element.product.rating.stars >= 1 ? `<i class="fa-solid fa-star"></i>` : "No stars"}
                            </span>
                            <span class="reviews">(${element.product.rating.count})</span>
                            </div>
                            </div>
                            </div>
                            </div>`
        }
        numCard++
    });

}
renderOurproduct()




const renderProductPage = () => {
    let productPage = document.querySelector('.product-page')
    products.forEach((element) => {
        !productPage ? null : productPage.innerHTML += `
                        
                        <div class="product-card-outer">
                        <div class="product-card">
                        <p style="display:none" class="product_id">${element.product.product_id}</p>
                        <div class="product-image">
                        <span class="discount-badge">${element.product.price.discount}</span>
                        <img src="${element.product.image}" alt="${element.product.name}" />
                        <button class="addbtn">Add To Card</button>
                        <div class="icons">
                        <button class="icon-btn"><i class="fa-regular fa-heart whishlist-icon"></i></button>
                        </div>
                        </div>
                        <div class="product-info">
                        <h3 class="product-title">${element.product.name}</h3>
                        <div class="price">
                        <span class="new-price">$${element.product.price.current}</span>
                        <span class="old-price">$${element.product.price.original}</span>
                        </div>
                        <div class="rating">
                        <span class="stars">
                        <p style="display:none" class="product_stars">${element.product.rating.stars}</p>
                        ${element.product.rating.stars >= 5 ? `<i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i>`: element.product.rating.stars >= 4 ? `<i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i>`: element.product.rating.stars >= 3 ? `<i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i>`: element.product.rating.stars >= 2 ? `<i class="fa-solid fa-star">
                            </i><i class="fa-solid fa-star">
                            </i>`: element.product.rating.stars >= 1 ? `<i class="fa-solid fa-star"></i>` : "No stars"}
                            </span>
                            <span class="reviews">(${element.product.rating.count})</span>
                            </div>
                            </div>
                            </div>
                            </div>`
    });
}
renderProductPage()




const renderWhishlist = () => {
    let whishlistProducts = JSON.parse(localStorage.getItem("whishlistProducts")) || []
    let whishlist = document.querySelector('.whishlist')
    whishlistProducts.forEach((element) => {
        !whishlist ? null : whishlist.innerHTML += `
                            <div class="product-card-outer">
                            <div class="product-card">
                            <p style="display:none" class="product_id">${element.product.product_id}</p>
                            <div class="product-image">
                            <span class="discount-badge">${element.product.price.discount}</span>
                            <img src="${element.product.image}" alt="${element.product.name}" />
                        <button class="addbtn">Add To Card</button>
                        <div class="icons">
                            <button class="icon-btn"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${element.product.name}</h3>
                        <div class="price">
                            <span class="new-price">$${element.product.price.current}</span>
                            <span class="old-price">$${element.product.price.original}</span>
                        </div>
                        <div class="rating">
                            <span class="stars">
                            <p style="display:none" class="product_stars">${element.product.rating.stars}</p>
                            ${element.product.rating.stars >= 5 ? `<i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i>`: element.product.rating.stars >= 4 ? `<i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i>`: element.product.rating.stars >= 3 ? `<i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i>`: element.product.rating.stars >= 2 ? `<i class="fa-solid fa-star">
                                </i><i class="fa-solid fa-star">
                                </i>`: element.product.rating.stars >= 1 ? `<i class="fa-solid fa-star"></i>` : "No stars"}
                            </span>
                            <span class="reviews">(${element.product.rating.count})</span>
                        </div>
                    </div>
                </div>
            </div>`
    });

}
renderWhishlist()


/////cart
const renderCart = () => {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || []
    let myCart = document.querySelector('.cart')
    cartProducts.forEach((element) => {
        !myCart ? null : myCart.innerHTML += `<div class="cart-item">
        <p style="display:none" class="product_id">${element.product.product_id}</p>
        <div class="product-info div">
        <div class="product-img-wrapper">
        <img src="${element.product.image}">
        </div>
        <h3>${element.product.name}</h3>
        </div>
        <div id="product_price" class="div">Price :- $${element.product.price.current}</div>
        <div class="div">Quantity:- <input type="number" value="1" min="1" max="20" id="quantityinp"></div>
        <div id="subtotal" class="div">Sub Total:- $${element.product.price.current} </div>
        <button onclick="removeFromCart('${element.product.product_id}')"  class="remove-btn"><i class="fa-solid fa-trash btn"></i></button>    
            </div>`
    });
}
renderCart()
document.querySelector(".cart") ? document.querySelector(".cart").addEventListener("change", (e) => {
    card = e.target.parentElement.parentElement
    quantity = card.querySelector("#quantityinp").value
    // console.log(quantity);

    let product_price = card.querySelector("#product_price").innerHTML.slice(10)
    
    card.querySelector("#subtotal").innerHTML = `Sub Total:- $${quantity * product_price}`
    totalItemsRate(e)
    totalItemsRate1()
}) : null


const totalItemsRate = (e) => {
    cart = e.target.parentElement.parentElement.parentElement
    subtotalList = [...cart.querySelectorAll("#subtotal")]
    totalAmount = []

    subtotalList.forEach((element) => {
        totalAmount.push(Number(element.innerHTML.slice(13)))

    })
    
    totalAmount = totalAmount.reduce((prev, curr) => {
        return prev + curr
    })
    // console.log(document.getElementById("item-price"));

    document.getElementById("item-price").innerHTML = `$${totalAmount}`
}
const totalItemsRate1 = () => {
    card = document.querySelector(".cart")
    // console.log(card);
    if (!card) return
    subtotals = [...card.querySelectorAll("#subtotal")]
    
    totalAmount = []
    subtotals.forEach((element) => {
        // console.log(element);
        
        totalAmount.push(Number(element.innerHTML.slice(13)))
        // console.log(element.innerHTML.slice(13));
        

    })
    // console.log(totalAmount);
    totalAmount = totalAmount.reduce((prev, curr) => {
        return prev + curr
    }, 0)
    // console.log(totalAmount);
    document.querySelector("#item-price").innerHTML = `$${totalAmount}`

    document.querySelector("#orderTotal").innerHTML = `$${totalAmount + (totalAmount === 0 ? 0 : Number(document.querySelector("#shipping-charge").innerHTML.slice(1)))}`
}
totalItemsRate1()

