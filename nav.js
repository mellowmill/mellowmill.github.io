(function () {
    const ul = document.querySelector('.navbar ul');
    if (!ul) return;

    const indicator = document.createElement('span');
    indicator.className = 'nav-indicator';
    ul.appendChild(indicator);

    const items = ul.querySelectorAll('li a');
    const ulRect = () => ul.getBoundingClientRect();

    function moveTo(el) {
        const r = el.getBoundingClientRect();
        const parent = ulRect();
        const textWidth = Math.min(r.width, el.offsetWidth - 16);
        indicator.style.left = (r.left - parent.left) + 'px';
        indicator.style.width = textWidth + 'px';
        indicator.style.opacity = '1';
    }

    function hide() {
        indicator.style.opacity = '0';
    }

    items.forEach(a => {
        a.addEventListener('mouseenter', () => moveTo(a));
        a.addEventListener('focus', () => moveTo(a));
    });
    ul.addEventListener('mouseleave', hide);
})();
