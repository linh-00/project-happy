const map = L.map('mapid').setView([2.8306062,-60.6776183], 15)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


const icon = L.icon({
    iconUrl: "/images/map_marker.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {

    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
        
    }).setContent(`${name} <a href="/orphanage?id=${id}">  <img src="/images/arrow_white.png"> </a>`)
    
    
    L.marker([lat, lng], {icon}).addTo(map)
        .bindPopup(popup)
      
    
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => { 
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng

    }

    addMarker(orphanage)
})

  