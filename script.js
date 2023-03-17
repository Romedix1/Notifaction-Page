const articles = document.querySelectorAll(".notification-box")
const news = document.querySelectorAll(".new") 
const markAll = document.querySelector("#mark-all")
const counter = document.querySelector("#nav-notifications-counter")
let counting =1 ;


counter.innerHTML = news.length;

articles.forEach(function(article)
{

    article.addEventListener('click',()=>{
        if(article.classList.contains('new'))
        {
            article.classList.remove('new')
            updateCounter(news.length - counting);
            counting++;
        }
        
    })

})

markAll.addEventListener('click',(post)=>{
    articles.forEach(function(article)
    {
        if(article.classList.contains('new'))
        {
            article.classList.remove('new')
            
        }
        updateCounter(0)
        
    })

})

function updateCounter(number)
{
    counter.innerHTML = number
}