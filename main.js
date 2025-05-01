const profileSection = document.getElementById ('profile_section');
const overlaySection = document.getElementById ( 'share-Overlay')

const shareButton =document.getElementById('share-Button');
const shareOverlay = document.getElementById('share-Button-overlay');

function isMobileView (){
    return window.innerWidth <=375;
}

shareButton.addEventListener('click',()=>{
    if(isMobileView()){
        overlaySection.style.display = overlaySection.style.display === 'none' ? '' : "none";
        profileSection.style.display = overlaySection.style.display === 'none' ? '' : 'none';
    }else{
        overlaySection.style.display = overlaySection.style.display === 'none' ? '' : 'none';
        profileSection.style.display = '';
    }
});
shareOverlay.addEventListener('click',()=>{
    overlaySection.style.display = 'none';
    profileSection.style.display = '';
});