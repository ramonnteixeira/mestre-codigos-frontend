(function() {
    const main = document.getElementsByTagName('body')[0];
    
    const storeScroll = () => {
        let scroll = 0;
        if (calculateScrollPercent() > 38) {
            scroll = main.scrollTop;
        }
        document.documentElement.dataset.scroll = scroll;
    }
    
    main.addEventListener('scroll', storeScroll);
    storeScroll();
    
    function calculateScrollPercent() {
        if (main.scrollTop === 0) {
            return 0;
        }
        
        return (main.scrollTop / (main.scrollHeight - main.clientHeight)) * 100;
    }
})();