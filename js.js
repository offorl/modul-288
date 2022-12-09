var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 650,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 650,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#password').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -336,
            easing: 'easeOutQuart',
            duration: 650,

        },
        strokeDasharray: {
            easing: 'easeOutQuart'
            value: '240 1386',
            duration: 650,

        }
    });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -730,
            easing: 'easeOutQuart',
            duration: 700,

        },
        strokeDasharray: {
            easing: 'easeOutQuart'
            value: '530 1386',
            duration: 700,

        }
    });
});