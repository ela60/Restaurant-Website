document.addEventListener('DOMContentLoaded', () => {

    const contactButton = document.querySelector('.contact-button');
    const orderNowButton = document.querySelector('.order-now-button');
    const storyButton = document.querySelector('.story-button');
    const facebookIcon = document.querySelector('.icon-container i');
    const twitterIcon = document.querySelector('.other-social .fa-twitter');
    const youtubeIcon = document.querySelector('.other-social .fa-youtube');
    const instagramIcon = document.querySelector('.other-social .fa-instagram');
    const playButton = document.querySelector('.icon-style');

    if (contactButton) {
        contactButton.addEventListener('click', () => {
            alert('Contact button clicked!');
            console.log('Contact button clicked at:', new Date().toLocaleTimeString());
        });
    }

    if (orderNowButton) {
        orderNowButton.addEventListener('click', () => {
            alert('Order Now button clicked!');
            console.log('Order Now button clicked at:', new Date().toLocaleTimeString());
        });
    }

    if (storyButton) {
        storyButton.addEventListener('click', () => {
            alert('Explore button clicked!');
            console.log('Explore button clicked at:', new Date().toLocaleTimeString());
        });
    }

    if (facebookIcon) {
        facebookIcon.addEventListener('click', () => {
            window.open('https://www.facebook.com/', '_blank');
        });
    }

    if (twitterIcon) {
        twitterIcon.addEventListener('click', () => {
            window.open('https://twitter.com/', '_blank');
            alert('twitterIcon icon clicked!');
        });
    }

    if (youtubeIcon) {
        youtubeIcon.addEventListener('click', () => {
            window.open('https://youtuve.com/', '_blank');
            alert('YouTube icon clicked!');
        });
    }

    if (instagramIcon) {
        instagramIcon.addEventListener('click', () => {
            window.open('https://instagram.com/', '_blank');
            alert('Instagram icon clicked!');
        });
    }

    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Play button clicked!');
        });
    }
    if (phoneNumber) {
        phoneNumber.addEventListener('click', () => {
            alert('You clicked on the phone number!');
        });
    }
   
    if (emailAddress) {
        emailAddress.addEventListener('click', () => {
            alert('You clicked on the email address!');
        });
    }
    const mobileMenu = document.querySelector('.hamburger-menu-mobile');
    if (mobileMenu) {
        const mobileButton = mobileMenu.querySelector('.hamburger-icon');
        mobileButton.addEventListener('click', () => {

            mobileMenu.classList.toggle('active');
        });
    }


    const mediumMenu = document.querySelector('.hamburger-menu-medium');
    if (mediumMenu) {
        const mediumButton = mediumMenu.querySelector('.hamburger-icon');
        mediumButton.addEventListener('click', () => {

            mediumMenu.classList.toggle('active');
        });
    }
});
