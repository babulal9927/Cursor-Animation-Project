let mousemovement = document.querySelector('.cursor');
let navbar = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e){
    mousemovement.style.top = e.pageY + 'px';
    mousemovement.style.left = e.pageX + 'px';
}

navbar.forEach((link)=>{
    link.addEventListener('mouseover', () =>{
        mousemovement.classList.add('link-animate');
        link.classList.add('link-hovering');
    });

    link.addEventListener('mouseleave', ()=>{
        mousemovement.classList.remove('link-animate');
        link.classList.remove('link-hovering')
    });
})