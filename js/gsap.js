
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// const gsaptl = gsap.timeline()

gsap.from("header", {
  y: -10,
  opacity: 0,
  duration: 1
})
gsap.from("nav h1", {
  x: -50,
  opacity: 0,
  duration: 1,

})
gsap.from("nav ul li", {
  y: 15,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2
})
gsap.from("nav .icons a", {
  x: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2
})
gsap.from(".carousel1", {
  y: 80,
  opacity: 1,
  duration: 0.8,
})


gsap.from(".carousel2 .product-card", {
  y: 20,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".carousel2 .product-card",
    scroller: "body",
    start: "top 100%",
  }
})
gsap.from(".categories .categories-box", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".categories .categories-box",
    scroller: "body",
    start: "top 90%",
  }
})
gsap.from(".best-sell-product .product-card", {
  y: 80,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".best-sell-product .product-card",
    scroller: "body",
    start: "top 80%",
  }
})

gsap.from(".advertise .advertise-left h3", {
  y: 15,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".advertise",
    scroller: "body",
    start: "top 60%",
  }
})
gsap.from(".advertise .advertise-left h1", {
  x: 15,
  opacity: 0,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".advertise",
    scroller: "body",
    start: "top 60%",
  }
})
gsap.from(".advertise .advertise-left .advertise-left-social div", {
  y: 15,
  opacity: 0,
  delay: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".advertise",
    scroller: "body",
    start: "top 60%",
  }
})
gsap.from(".advertise .advertise-left a button", {
  scale: 0,
  opacity: 0,
  delay: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".advertise",
    scroller: "body",
    start: "top 60%",
  }
})
gsap.from(".advertise .advertise-right img", {
  scale: 0,
  opacity: 0,
  duration: 1,
  // stagger:0.2,
  scrollTrigger: {
    trigger: ".advertise",
    scroller: "body",
    start: "top 60%",
  }
})

gsap.from(".ourproduct .product-card", {
  y: 80,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".ourproduct",
    scroller: "body",
    start: "top 70%",
  }
})


gsap.from(".large-card", {
  x: -80,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".large-card",
    scroller: "body",
    start: "top 70%",
  }
})
gsap.from(".small-cards .card", {
  x: 150,
  delay: 0.4,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".small-cards",
    scroller: "body",
    start: "top 70%",
  }
})

gsap.from(".features .feature", {
  y: 80,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".features",
    scroller: "body",
    start: "top 70%",
  }
})
gsap.from(".footer-container div", {
  x: -80,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".footer-container",
    scroller: "body",
    start: "top 90%",

  }
})

gsap.from(".product-page .product-card", {
  y: 80,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".product-page",
    scroller: "body",
    start: "top 70%",

  }
})


gsap.from(".contact-info .info-box", {
  y: 80,
  opacity: 0,
  stagger: 0.3,
})
gsap.from(".contact-form .form-row input", {
  x: 25,
  opacity: 0,
  stagger: 0.2,
})
gsap.from(".contact-form textarea", {
  x: 25,
  opacity: 0,
})
gsap.from(".contact-form button", {
  y: 40,
  scale: 0,
  opacity: 0,
})
gsap.from(".about-post .post-content", {
  x: -80,
  opacity: 0,
  duration:1
})
gsap.from(".about-post .post-img", {
  x: 80,
  opacity: 0,
  duration:1
})
gsap.from(".rates .container .div1", {
  y: 80,
  opacity: 0,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:".rates .container .div1",
    scroller:"body",
    start:"top 85%"
  }
})
gsap.from(".profile .container .profile-card", {
  x: -80,
  opacity: 0,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:".profile",
    scroller:"body",
    start:"top 85%"
  }
})
gsap.from(".signup-container .form form", {
  y: -50,
  opacity: 0,
  duration:1,
  
})
gsap.from(".whishlist-product .product-card", {
  y: 80,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".product-page",
    scroller: "body",
    start: "top 70%",

  }
})
gsap.from(".cart .cart-item", {
  x: -100,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".product-page",
    scroller: "body",
    start: "top 70%",

  }
})


gsap.from("footer .footer-bottom", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer-container",
    scroller: "body",
    start: "top 90%"
  }
})