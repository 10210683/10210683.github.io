$(function () {
    $('.pause').on('click', function () {
        $('.box').toggleClass('active');
    })
})

document.addEventListener('mousemove', function (e) {
    const cursor = document.getElementById('myCursor');
    cursor.style.left = e.clientX - cursor.offsetWidth / 2 + 'px';
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + 'px';
});

