mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzZGFuZ29sZCIsImEiOiJjanViY2NvYWIwYjNqM3lxcTFyOGZhbWwxIn0.xnllpm5TiXOYco78GzJSlw';

const locationCoords = [-0.158552, 51.523771];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/itsdangold/cjubfmmae0fg71fl63t6oxki6',
    center: locationCoords,
    zoom: 9.0,
    interactive: false
});

var marker = new mapboxgl.Marker();
 
marker.setLngLat(locationCoords);

marker.addTo(map);
 

var mapScenes = {
    'mapScene1': {
        bearing: 27,
        zoom: 10.0,
        pitch: 25
    },
    'mapScene2': {
        zoom: 12.0,
        pitch: 35
    },
    'mapScene3': {
        zoom: 14.0,
        pitch: 35
    },
    'mapScene4': {
        bearing: 60,
        zoom: 16.0,
        pitch: 35
    }
};

// Animate Map on scroll

window.onscroll = function() {
    var mapSceneNames = Object.keys(mapScenes);

    for (var i = 0; i < mapSceneNames.length; i++) {
        var sceneName = mapSceneNames[i];

        if (isElementOnScreen(sceneName)) {
        setActiveScene(sceneName);
        break;
        }
    }
};

var activeSceneName = 'mapScene1';

function setActiveScene(sceneName) {
    if (sceneName === activeSceneName) return;

    map.flyTo(mapScenes[sceneName]);
    
    activeSceneName = sceneName;
}
    
function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
 