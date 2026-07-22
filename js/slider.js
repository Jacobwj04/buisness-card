document.querySelectorAll('.hero__slider--track').forEach(track => {
    const originals = Array.from(track.children);

    for (let i = 0; i < 5; i++) {
        originals.forEach(slide => {
            const clone = slide.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });
    }

    requestAnimationFrame(() => {
        const scrollWidth = originals.reduce((sum, slide) => {
            return sum + slide.offsetWidth + parseFloat(getComputedStyle(slide).marginRight);
        }, 0);
        track.style.setProperty('--scroll-width', scrollWidth + 'px');
    });
});
