const options = {
    dragging: false,
    touchZonn: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const map = L.map('mapid', options).setView([2.8306062,-60.6776183], 15)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


const icon = L.icon({
    iconUrl: "/images/map_marker.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



L.marker([2.8306062,-60.6776183], {icon}).addTo(map)

function selectImage(event) {
    const button = event.currentTarget

    const buttons =  document.querySelectorAll(".images button")
    buttons.forEach(removeActicveClass)

    function removeActicveClass(button){
        button.classList.remove("active")
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src

    button.classList.add('active')



}
   