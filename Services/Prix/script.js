var whenMobile = screen.width;
if(whenMobile < 1190){
    let icons = document.querySelectorAll(".socialIcon");
    icons.forEach(element => {
        let color = window.getComputedStyle(element).borderColor;
        element.querySelector('a').querySelector('i').style.color=color;
        element.style.border="none";
        element.removeAttribute('onmouseover');
        element.removeAttribute('onmouseout'); 
    });
}
else{
    function show(element){
        let color = window.getComputedStyle(element).borderColor;
        element.style.border="none";
        element.style.borderTop="4px solid " + color;
        element.style.paddingTop="13px"; 
        element.querySelector('a').querySelector('i').style.color=color;
    }
    function unShow(element){
        let color = window.getComputedStyle(element).borderColor;
        element.style.border="none";
        element.style.borderBottom="4px solid " + color;
        element.querySelector('a').querySelector('i').style.color="lightgrey";
    }
    function showUnchained(element){
        let color = "#b50181";
        element.style.border="none";
        element.style.borderTop="4px solid " + color;
        element.style.paddingTop="13px";
    }
    function unShowUnchained(element){
        let color = "#b50181";
        console.log(color)
        element.style.border="none";
        element.style.borderBottom="4px solid " + color;
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}