var btn = document.querySelector('button');

    btn.addEventListener('click',changeColor);

    function changeColor(){
        
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        var getBody = document.querySelector('body');
        getBody.style.backgroundColor = `rgb(${r} ${g} ${b})`;
    }