// Toggle the navigation menu for small screens
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Popup functionality
function createPopup(content) {
    // Create popup elements
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '×';
    
    const container = document.createElement('div');
    container.className = 'popup-container';
    container.innerHTML = content;
    
    // Assemble popup
    popupContent.appendChild(closeButton);
    popupContent.appendChild(container);
    overlay.appendChild(popupContent);
    document.body.appendChild(overlay);
    
    // Show popup
    overlay.style.display = 'flex';
    
    // Close button functionality
    closeButton.onclick = function() {
        document.body.removeChild(overlay);
    };
    
    // Close on overlay click
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    };
}

// Add click listeners to all cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.onclick = function() {
            if (card.querySelector('h3')?.textContent === 'View 3D Model') {
                let modelSrc;
                switch (true) {
                    case index === 3: // Neil Armstrong Spacesuit
                        modelSrc = './models/neilArmstrong-2.glb';
                        const modelContent = `
                            <div class="content-wrapper">
                                <h2>3D Model Viewer</h2>
                                <div class="model-container">
                                    <model-viewer
                                        src="${modelSrc}"
                                        alt="3D Model"
                                        ar
                                        auto-rotate
                                        camera-controls
                                        frameborder="0" 
                                        style="width: 100%; height: 800px;">
                                        <button class="Hotspot" slot="hotspot-1" 
                                            data-position="0.08658714701417991m 1.672924230239829m 0.24760200751622863m" 
                                            data-normal="0.4085985159832367m -0.07410704889752338m 0.909700718940024m" 
                                            data-visibility-attribute="visible">
                                            <div class="HotspotAnnotation">A7-L Lunar Extravehicular Visor</div>
                                        </button>
                                        <button class="Hotspot" slot="hotspot-2" 
                                            data-position="0.31284370529308436m 0.8557768844141876m 0.09919598396553209m" 
                                            data-normal="0.7804167458690405m 0.05499531885184288m 0.6228364293067337m" 
                                            data-visibility-attribute="visible">
                                            <div class="HotspotAnnotation">Extra-Vehicular (EV) gloves</div>
                                        </button>
                                        <div class="progress-bar hide" slot="progress-bar">
                                            <div class="update-bar"></div>
                                        </div>
                                        <button slot="ar-button" id="ar-button">
                                            View in your space
                                        </button>
                                    </model-viewer>
                                </div>
                            </div>
                        `;
                        createPopup(modelContent);
                        break;

                    case index === 7: // Command Module
                        modelSrc = './models/apollo_exterior-150k-4096-2.glb';
                        const basicModelContent = `
                            <div class="content-wrapper">
                                <h2>3D Model Viewer</h2>
                                <div class="model-container">
                                    <model-viewer
                                        src="${modelSrc}"
                                        alt="3D Model"
                                        ar
                                        auto-rotate
                                        camera-controls
                                        frameborder="0" 
                                        style="width: 100%; height: 800px;">
                                        <div class="progress-bar hide" slot="progress-bar">
                                            <div class="update-bar"></div>
                                        </div>
                                        <button slot="ar-button" id="ar-button">
                                            View in your space
                                        </button>
                                         <button class="Hotspot" slot="hotspot-2" data-position="75.97552178466492m 3.7415839121471777m 98.88168186427447m" data-normal="0.33128231381621637m 0.6650040622274032m 0.6693441758718949m" data-visibility-attribute="visible">
                                        <div class="HotspotAnnotation">Rendezvous Window</div>
                                        </button><button class="Hotspot" slot="hotspot-4" data-position="-36.48556700356636m -83.01982955738119m 180.21533299306714m" data-normal="0.1815760820317807m 0.34753054372426007m 0.91991991369505m" data-visibility-attribute="visible">
                                            <div class="HotspotAnnotation">Pitch Engines</div>
                                        </button><button class="Hotspot" slot="hotspot-5" data-position="-155.74542904555926m -11.39351227330934m 120.63516586309686m" data-normal="-0.3069312228279584m 0.6827571424730691m 0.6630504572469155m" data-visibility-attribute="visible">
                                            <div class="HotspotAnnotation">Roll Engines</div>
                                        </button><button class="Hotspot" slot="hotspot-7" data-position="41.787983368096434m 72.37408407611784m -103.53976732238243m" data-normal="0.31417277973454866m 0.5952459090966468m -0.7395794562976811m" data-visibility-attribute="visible">
                                            <div class="HotspotAnnotation">Sextant &amp; Scanning Telescope</div>
                                        </button>
                                        <div class="progress-bar hide" slot="progress-bar">
                                            <div class="update-bar"></div>
                                        </div>
                                        <button slot="ar-button" id="ar-button">
                                            View in your space
                                        </button>
                                    </model-viewer>
                                </div>
                            </div>
                        `;
                        createPopup(basicModelContent);
                        break;

                    case index === 11: // Space Shuttle
                        modelSrc = './models/Orbiter_Space_Shuttle_OV-103_Discovery-150k-4096-2.glb';
                        const basicModelContent2 = `
                            <div class="content-wrapper">
                                <h2>3D Model Viewer</h2>
                                <div class="model-container">
                                    <model-viewer
                                        src="${modelSrc}"
                                        alt="3D Model"
                                        ar
                                        auto-rotate
                                        camera-controls
                                        frameborder="0" 
                                        style="width: 100%; height: 800px;">
                                        <button class="Hotspot" slot="hotspot-2" 
                                            data-position="3.1084061318240046m 0.35399073935946035m -11.099456790875728m" 
                                            data-normal="0.7100292381133113m 0.6948283873158697m 0.114332817704536m" 
                                            data-visibility-attribute="visible">
                                            <div class="HotspotAnnotation">Tanks</div>
                                        </button>
                                        <button class="Hotspot" slot="hotspot-3" 
                                            data-position="5.768305760552103m -5.129934744572019m -11.846071771151415m" 
                                            data-normal="-0.027216104765671364m 0.9861569939659389m -0.16356548197418433m" 
                                            data-visibility-attribute="visible">
                                            <div class="HotspotAnnotation">Elevons</div>
                                        </button>
                                        </button><button class="Hotspot" slot="hotspot-5" data-position="0.08284464688019m -1.1510969149256027m 17.19689394791167m" data-normal="0.6696175441526143m 0.7212591618499238m 0.17719358343508745m" data-visibility-attribute="visible">
                                            <div class="HotspotAnnotation">Forward Control Thrusters</div>
                                        </button>
                                        <div class="progress-bar hide" slot="progress-bar">
                                            <div class="update-bar"></div>
                                        </div>
                                        <button slot="ar-button" id="ar-button">
                                            View in your space
                                        </button>
                                    </model-viewer>
                                </div>
                            </div>
                        `;
                        createPopup(basicModelContent2);
                        break;

                    default:
                        modelSrc = './models/defaultModel.glb';
                }
            } else {
                // Create custom descriptions for each image
                let description;
                switch (index) {
                    // Spacesuit section
                    case 0:
                        description = "Neil Armstrong's A7-L spacesuit, featured the life support systems and protective outer layer that enabled survival on the lunar surface.";
                        break;
                    case 1:
                        description = "The gold visor that protected astronauts from intense solar radiation.";
                        break;
                    case 2:
                        description = "The spacesuit, displaying next to the pressure suit (left 1) worn by astronaut Alan Shepard on May 5, 1961. A concept model of a space cargo transporter is placed on the right side.";
                        break;
                    
                    // Command Module section
                    case 4:
                        description = "Exterior view of the Apollo 11 Command Module 'Columbia',landing on a dark dessert like planet";
                        break;
                    case 5:
                        description = "The Command Module features hundreds of switches and displays used to operate the spacecraft.";
                        break;
                    case 6:
                        description = "Concept of the command module landing on a Mars-like terrain.";
                        break;
                    
                    // Space Shuttle section
                    case 8:
                        description = "Concept image of the Discovery Shuttle passing the Thermosphere and entering the Exosphere.";
                        break;
                    case 9:
                        description = "Discovery Shuttle cruising at the edge of the Earth's atmosphere while flying towards the sun.";
                        break;
                    case 10:
                        description = "A concept image of the Space Shuttle Discovery demonstrating its role in space exploration and scientific research.";
                        break;
                    
                    default:
                        description = "Additional details about this item can go here.";
                }

                const content = `
                    <div class="content-wrapper">
                        <h2>${card.querySelector('img').alt}</h2>
                        <img src="${card.querySelector('img').src}" alt="${card.querySelector('img').alt}" style="max-width: 100%; height: auto;">
                        <p>${description}</p>
                    </div>
                `;
                createPopup(content);
            }
        };
    });
});
