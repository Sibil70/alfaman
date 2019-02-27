
const btns = document.querySelectorAll('.post__btn'),
        comments = document.querySelectorAll('.post__text-wrap'),
        commentHeight = document.querySelectorAll('.post__text-container');

console.log(btns)
console.log(comments)

for(const btn of btns) {
    btn.addEventListener('click', (e)=>{
        let activeComment = document.querySelector('.js-show-comment'),
            currentComment = e.target.previousElementSibling;
        
        if(activeComment) {
            currentComment.style.height = '';
        } else {
            currentComment.style.height = currentComment.scrollHeight + "px"
        }
          
        btn.previousElementSibling.classList.toggle('js-show-comment');

    })
}
