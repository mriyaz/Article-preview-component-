document.addEventListener('DOMContentLoaded', () => {

    //Get references to .footer,.share-footer and .share classes
    const footer = document.querySelector('.footer');
    const shareFooter = document.querySelector('.share-footer');
    const shares = document.querySelectorAll('.share');

    //for all shares
    shares.forEach(share => {
        ////Add an onclick .share button area, 
        share.addEventListener('click', (event) => {
            //////flip the displays of .footer and .share-footer classes
            if (footer.style.display === 'none' && shareFooter.style.display === 'flex') {
                footer.style.display = 'flex';
                shareFooter.style.display = 'none';
            } else {
                footer.style.display = 'none';
                shareFooter.style.display = 'flex';
            }
        })
    })

})