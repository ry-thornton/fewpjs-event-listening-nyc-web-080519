function addingEventListener() {
    const input = document.querySelector('input#input');
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });
}
