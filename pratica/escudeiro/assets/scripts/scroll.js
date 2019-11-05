const main = document.getElementById('content');

const storeScroll = () => {
    let scroll = 0;
    console.log(main.scrollTop);
    if (main.scrollTop > 30) {
        scroll = main.scrollTop;
    }
    document.documentElement.dataset.scroll = scroll;
}

main.addEventListener('scroll', storeScroll);
storeScroll();