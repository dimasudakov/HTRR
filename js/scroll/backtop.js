const backTop = document.getElementById('backtop');


if (backTop) {
    backTop.addEventListener('click', function () {
        const parallax = document.getElementById('group1');

        parallax.scrollIntoView({behavior: 'smooth'});
    });
}

document.getElementById('parallax').addEventListener('scroll', function() {
    const group2 = document.getElementById('group2')
    const offsetTop = group2.offsetTop
    
    if (!backTop) return;
    
    if(this.scrollTop < offsetTop) {
        backTop.style.display = 'none'
    } else {
        backTop.style.display = 'block'
        if(this.scrollTop < offsetTop + 400) {
            backTop.style.opacity = (this.scrollTop - offsetTop) / 400 + ''
        } else {
            backTop.style.opacity = '1'
        }
    }
    
})
