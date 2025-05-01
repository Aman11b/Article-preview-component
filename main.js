const profileSection = document.getElementById ('profile_section');
const overlaySection = document.getElementById ( 'share-Overlay')

const shareButton =document.getElementById('share-Button');
const shareOverlay = document.getElementById('share-Button-overlay');
shareButton.addEventListener('click',()=>{
    if(overlaySection.style.display === 'none'){
        overlaySection.style.display = '';
        profileSection.style.display = 'none';
    }
});
shareOverlay.addEventListener ('click',()=>{
    if(profileSection.style.display === 'none')
        {
            overlaySection.style.display = 'none';
            profileSection.style.display = '';
        }
});
