const games = {
    action: [
        "Grand Theft Auto V",
        "Call of Duty: Warzone",
        "Doom Eternal"
    ],
    adventure: [
        "The Legend of Zelda: Breath of the Wild",
        "Red Dead Redemption 2",
        "Uncharted 4: A Thief's End"
    ],
    rpg: [
        "The Witcher 3: Wild Hunt",
        "Final Fantasy VII Remake",
        "Skyrim"
    ],
    strategy: [
        "Civilization VI",
        "StarCraft II",
        "XCOM 2"
    ]
};

function populateGameLists() {
    for (const [category, gameList] of Object.entries(games)) {
        const ul = document.querySelector(`#${category} .game-list`);
        gameList.forEach(game => {
            const li = document.createElement('li');
            li.textContent = game;
            ul.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', populateGameLists);
