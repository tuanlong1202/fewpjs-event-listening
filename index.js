function addingEventListener() {
    let input =document.getElementById('input');
    input.addEventListener('click',function(ev) {
        alert('I was clicked!');
    })
}

addingEventListener();