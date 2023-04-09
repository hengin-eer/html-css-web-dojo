const setImage = () => {
    const heroImageArea = document.getElementById('heroImage')
    const heroImages = ["beach-wave1.jpg", "beach-wave2.jpg", "beach-wave3.jpg"]

    const imageNomber = Math.floor(Math.random() * heroImages.length)
    heroImageArea.src = `image/${heroImages[imageNomber]}`
}
window.onload = () => {
    setImage()
    console.log('success!')
}