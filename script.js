const aboutUs = document.querySelector('.about-us');
let aboutUsToggle = document.querySelector('.about-us-toggle')

aboutUs.addEventListener('mouseover', function(){
        aboutUsToggle.textContent = 'I love javascript';
        aboutUsToggle.style.color = 'red';
        aboutUsToggle.style.display = 'block';
        aboutUsToggle.style.height =  '30px';
        aboutUsToggle.style.width = '50%';
        aboutUsToggle.style.backgroundColor = 'white'
});

aboutUs.addEventListener('mouseout', function(){
    aboutUsToggle.style.display = 'none';
});

