// Create an array of button elements by selecting elements with classes "btn-01" to "btn-11".
const buttons = [
    document.querySelector(".btn-01"),
    document.querySelector(".btn-02"),
    document.querySelector(".btn-03"),
    document.querySelector(".btn-04"),
    document.querySelector(".btn-05"),
    document.querySelector(".btn-06"),
    document.querySelector(".btn-07"),
    document.querySelector(".btn-08"),
    document.querySelector(".btn-09"),
    document.querySelector(".btn-10"),
    document.querySelector(".btn-11"),
];

// Create an array of map elements by selecting elements with classes "map-01" to "map-11".
const maps = [
    document.querySelector(".map-01"),
    document.querySelector(".map-02"),
    document.querySelector(".map-03"),
    document.querySelector(".map-04"),
    document.querySelector(".map-05"),
    document.querySelector(".map-06"),
    document.querySelector(".map-07"),
    document.querySelector(".map-08"),
    document.querySelector(".map-09"),
    document.querySelector(".map-10"),
    document.querySelector(".map-11"),
];

console.log("Buttons:", buttons);
console.log("Maps:", maps);

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
        maps[index].classList.toggle("active");
        buttons.forEach((otherButton, otherIndex) => {
            if (otherIndex !== index) {
                otherButton.classList.remove("active");
                maps[otherIndex].classList.remove("active");
            }
        });
    });
});

const buttonsAbilities = document.querySelectorAll('[class^="ability-button"]');

const abilitiesDesc = [

    document.querySelector('.ability-desc-astra-1'),
    document.querySelector('.ability-desc-astra-2'),
    document.querySelector('.ability-desc-astra-3'),
    document.querySelector('.ability-desc-astra-4'),

    document.querySelector('.ability-desc-breach-1'),
    document.querySelector('.ability-desc-breach-2'),
    document.querySelector('.ability-desc-breach-3'),
    document.querySelector('.ability-desc-breach-4'),
     // Brimstone Abilities
    document.querySelector('.ability-desc-brimstone-1'),
    document.querySelector('.ability-desc-brimstone-2'),
    document.querySelector('.ability-desc-brimstone-3'),
    document.querySelector('.ability-desc-brimstone-4'),

    document.querySelector('.ability-desc-chamber-1'),
    document.querySelector('.ability-desc-chamber-2'),
    document.querySelector('.ability-desc-chamber-3'),
    document.querySelector('.ability-desc-chamber-4'),

    document.querySelector('.ability-desc-clove-1'),
    document.querySelector('.ability-desc-clove-2'),
    document.querySelector('.ability-desc-clove-3'),
    document.querySelector('.ability-desc-clove-4'),

    document.querySelector('.ability-desc-cypher-1'),
    document.querySelector('.ability-desc-cypher-2'),
    document.querySelector('.ability-desc-cypher-3'),
    document.querySelector('.ability-desc-cypher-4'),

    document.querySelector('.ability-desc-deadlock-1'),
    document.querySelector('.ability-desc-deadlock-2'),
    document.querySelector('.ability-desc-deadlock-3'),
    document.querySelector('.ability-desc-deadlock-4'),

    document.querySelector('.ability-desc-fade-1'),
    document.querySelector('.ability-desc-fade-2'),
    document.querySelector('.ability-desc-fade-3'),
    document.querySelector('.ability-desc-fade-4'),

    document.querySelector('.ability-desc-gekko-1'),
    document.querySelector('.ability-desc-gekko-2'),
    document.querySelector('.ability-desc-gekko-3'),
    document.querySelector('.ability-desc-gekko-4'),

    document.querySelector('.ability-desc-harbor-1'),
    document.querySelector('.ability-desc-harbor-2'),
    document.querySelector('.ability-desc-harbor-3'),
    document.querySelector('.ability-desc-harbor-4'),

    document.querySelector('.ability-desc-jett-1'),
    document.querySelector('.ability-desc-jett-2'),
    document.querySelector('.ability-desc-jett-3'),
    document.querySelector('.ability-desc-jett-4'),

    document.querySelector('.ability-desc-iso-1'),
    document.querySelector('.ability-desc-iso-2'),
    document.querySelector('.ability-desc-iso-3'),
    document.querySelector('.ability-desc-iso-4'),

    document.querySelector('.ability-desc-kayo-1'),
    document.querySelector('.ability-desc-kayo-2'),
    document.querySelector('.ability-desc-kayo-3'),
    document.querySelector('.ability-desc-kayo-4'),

    document.querySelector('.ability-desc-killjoy-1'),
    document.querySelector('.ability-desc-killjoy-2'),
    document.querySelector('.ability-desc-killjoy-3'),
    document.querySelector('.ability-desc-killjoy-4'),

    document.querySelector('.ability-desc-neon-1'),
    document.querySelector('.ability-desc-neon-2'),
    document.querySelector('.ability-desc-neon-3'),
    document.querySelector('.ability-desc-neon-4'),

    document.querySelector('.ability-desc-omen-1'),
    document.querySelector('.ability-desc-omen-2'),
    document.querySelector('.ability-desc-omen-3'),
    document.querySelector('.ability-desc-omen-4'),

    document.querySelector('.ability-desc-phoenix-1'),
    document.querySelector('.ability-desc-phoenix-2'),
    document.querySelector('.ability-desc-phoenix-3'),
    document.querySelector('.ability-desc-phoenix-4'),

    document.querySelector('.ability-desc-raze-1'),
    document.querySelector('.ability-desc-raze-2'),
    document.querySelector('.ability-desc-raze-3'),
    document.querySelector('.ability-desc-raze-4'),

    document.querySelector('.ability-desc-reyna-1'),
    document.querySelector('.ability-desc-reyna-2'),
    document.querySelector('.ability-desc-reyna-3'),
    document.querySelector('.ability-desc-reyna-4'),
    
    document.querySelector('.ability-desc-sage-1'),
    document.querySelector('.ability-desc-sage-2'),
    document.querySelector('.ability-desc-sage-3'),
    document.querySelector('.ability-desc-sage-4'),

    document.querySelector('.ability-desc-skye-1'),
    document.querySelector('.ability-desc-skye-2'),
    document.querySelector('.ability-desc-skye-3'),
    document.querySelector('.ability-desc-skye-4'),

    document.querySelector('.ability-desc-sova-1'),
    document.querySelector('.ability-desc-sova-2'),
    document.querySelector('.ability-desc-sova-3'),
    document.querySelector('.ability-desc-sova-4'),

    document.querySelector('.ability-desc-viper-1'),
    document.querySelector('.ability-desc-viper-2'),
    document.querySelector('.ability-desc-viper-3'),
    document.querySelector('.ability-desc-viper-4'),

    document.querySelector('.ability-desc-vyse-1'),
    document.querySelector('.ability-desc-vyse-2'),
    document.querySelector('.ability-desc-vyse-3'),
    document.querySelector('.ability-desc-vyse-4'),
    
    document.querySelector('.ability-desc-yoru-1'),
    document.querySelector('.ability-desc-yoru-2'),
    document.querySelector('.ability-desc-yoru-3'),
    document.querySelector('.ability-desc-yoru-4'),



];

buttonsAbilities.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.classList.toggle("active");
        abilitiesDesc[index].classList.toggle("active");
        buttonsAbilities.forEach((otherButton, otherIndex) => {
            if(otherIndex !== index){
                otherButton.classList.remove("active");
                abilitiesDesc[otherIndex].classList.remove("active");
            }
        });
    });
});


const buttonsAgents = document.querySelectorAll('[class^="agent-button"]');

/*const buttonsAgents = [
    document.querySelector(".agent-button-01"),
    document.querySelector(".agent-button-02"),
    document.querySelector(".agent-button-03"),
    document.querySelector(".agent-button-04"),
    document.querySelector(".agent-button-05"),
    document.querySelector(".agent-button-06"),
    document.querySelector(".agent-button-07"),
]*/

const aboutAgents = [
    document.querySelector(".agent-01"), // Jett
    document.querySelector(".agent-02"), // Sova
    document.querySelector(".agent-03"), // Phoenix
    document.querySelector(".agent-04"), // Brimstone
    document.querySelector(".agent-05"), // Atra
    document.querySelector(".agent-06"), // Sage
    document.querySelector(".agent-07"), 
    document.querySelector(".agent-08"),
    document.querySelector(".agent-09"),
    document.querySelector(".agent-10"),
    document.querySelector(".agent-11"),
    document.querySelector(".agent-12"),
    document.querySelector(".agent-13"),
    document.querySelector(".agent-14"),
    document.querySelector(".agent-15"),
    document.querySelector(".agent-16"),
    document.querySelector(".agent-17"),
    document.querySelector(".agent-18"),
    document.querySelector(".agent-19"),
    document.querySelector(".agent-20"),
    document.querySelector(".agent-21"),
    document.querySelector(".agent-22"),
    document.querySelector(".agent-23"),
    document.querySelector(".agent-24"),
    document.querySelector(".agent-25"),
]

buttonsAgents.forEach((button, index) => {
    button.addEventListener("click", () =>{
        button.classList.toggle("active");
        aboutAgents[index].classList.toggle("active");
        buttonsAgents.forEach((otherButton, otherIndex) => {
            if(otherIndex !== index){
                otherButton.classList.remove("active");
                aboutAgents[otherIndex].classList.remove("active");
            }
        })
        
    });
});

/*
const roleButton = document.querySelector(".role-button");
const duelistButton = document.querySelector(".duelist"); 

roleButton.addEventListener("click", () => {
    roleButton.classList.toggle("active");
    duelistButton.toggle("active")

}) */