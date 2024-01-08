function openURL(url) {
    window.open(url, '_blank');
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function downloadResume() {
    var link = document.createElement('a');
    link.href = './assets/CV-UrsanCristian.pdf'; 
    link.download = 'CV-UrsanCristian.pdf'; 

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }