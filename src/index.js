import './styles/main.scss'
import '@photo-sphere-viewer/core/index.scss'
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin'
import '@photo-sphere-viewer/markers-plugin/index.scss'


import panorama from './assets/panorama.jpg'
console.log('oi', panorama)

import { Viewer } from '@photo-sphere-viewer/core';

const svgStyle = {
    fill: 'rgba(200, 0, 0, 0.2)',
    stroke: 'rgba(200, 0, 50, 0.8)',
    strokeWidth: '2px'
}

const viewer = new Viewer({
    container: document.querySelector('#viewer'),
    panorama: panorama,
    plugins:[
        [MarkersPlugin, {
            markers:[{
                 // circle marker
                 id: 'door1',
                 circle: 20,
                 svgStyle,
                 position: { textureX: 2760, textureY: 2112 },
                 tooltip: 'Left door',
            },
            {
                // circle marker
                id: 'door2',
                circle: 20,
                svgStyle,
                position: { textureX: 3390, textureY: 2052 },
                tooltip: 'Right door',
           },
           {
            // circle marker
            id: 'jens',
            circle: 20,
            svgStyle,
            position: { textureX: 4982, textureY: 2457 },
            tooltip: 'Jens\'s place',
       }]
        }]
    ]
});