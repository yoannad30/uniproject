let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("slideshow")
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

let newsIndex = 1
showNews(newsIndex)

function plusNews(b) {
    showNews(newsIndex += b)
}
function currentNews(b) {
    showNews(newsIndex = b)
}

function showNews(b) {
    let k
    let news = document.getElementsByClassName("slideshow-hidden")
    if (b > news.length) { newsIndex = 1 }
    if (b < 1) { newsIndex = news.length }
    for (k = 0; k < news.length; k++) {
        news[k].style.display = "none"
    }
    news[newsIndex - 1].style.display = "block"
}
