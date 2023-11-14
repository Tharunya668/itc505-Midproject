// script.js

let currentStage = 'start';

const storyStages = {
    'start': {
        text: '',
        choices: ['Take a flight to Flagstaff', 'Embark on a road trip'],
        consequences: ['1','2'],
        image: 'start.jpg', // Placeholder image URL
    },
    '1': {
        text: 'You board a flight and enjoy aerial views of various landscapes...',
        choices: ['Arrive in Flagstaff and explore the city', 'Experience a layover in a different city'],
        consequences: ['2','3'],
        image: 'flight.jpg', // Placeholder image URL
    },
    '2': {
        text: 'The mountain path is treacherous, with steep cliffs and narrow ledges. In the distance, a cave entrance is visible.',
        choices: ['Reach Flagstaff after a scenic journey', 'Encounter unexpected challenges and take detours'],
        consequences: ['3','4'],
        image: 'road.jpg', // Placeholder image URL
    },
    '3': {
        text: 'Alex speaks gently to the creatures, explaining the quest and seeking their aid. The creatures, touched by Alex\'s sincerity, agree to help.',
        choices: ['Visit the Grand Canyon', 'Attend a cultural festival in Flagstaff'],
        consequences: ['4','5'],
        image: 'flagstaff.jpg', // Placeholder image URL
    },
    '4': {
        text: 'Alex draws their sword and engages in a fierce battle with the creatures. Despite sustaining injuries, Alex emerges victorious.',
        choices: ['Find a job and build a life in Flagstaff', 'Continue your travels to other destinations'],
        consequences: ['5','6'],
        image: 'travel.jpg', // Placeholder image URL
    },
    '5': {
        text: 'The cave is dark and filled with mysterious echoes. As Alex ventures deeper, a magical door blocks the way.',
        choices: ['Reflect on the journey and settle in Flagstaff', 'Plan for more adventures in the future'],
        consequences: ['6','7'],
        image: 'enterCave_image.jpg', // Placeholder image URL
    },
    '6': {
        text: 'Alex continues climbing the mountain, facing challenges along the way. Eventually, a dragon appears, guarding the path.',
        choices: ['Make Flagstaff your permanent home', 'Travel and experience more cultural festivals'],
        consequences: ['7','8'],
        image: 'continueClimbing_image.jpg', // Placeholder image URL
    },
    '7': {
        text: 'Following the creatures, Alex discovers a hidden realm of magic. The Enchanted Crystal is presented as a gift.',
        choices: ['Celebrate your successful journey','Embark on a new journey to another destination'],
        consequences: ['8','9'],
        image: 'hiddenRealm_image.jpg', // Placeholder image URL
    },
    '8': {
        text: 'Expressing gratitude, Alex continues the quest alone. The journey is challenging, but determination prevails.',
        choices: ['Continue exploring the world','Reflect on your journey and plan for new goals'],
        consequences: ['9'],
        image: 'continueAlone_image.jpg', // Placeholder image URL
    },
    '9': {
        text: 'Alex tends to wounds and takes much-needed rest. Strength is regained, and the journey continues.',
        choices: ['Continue sharing your adventures with the world'],
        consequences: ['10'],
        image: 'restAndHeal_image.jpg', // Placeholder image URL
    },
    '10': {
        text: 'Despite injuries, Alex presses on, driven by the quest. Challenges increase, but the determination is unwavering.',
        choices: [],
        consequences: ['continueCave'],
        image: 'pressOn_image.jpg', // Placeholder image URL
    },
    '11': {
        text: 'Alex carefully considers the riddle and provides the correct answer. The magical door opens to reveal a shortcut to the crystal\'s chamber.',
        choices: [],
        consequences: ['endingShortcut'],
        image: 'solveRiddle_image.jpg', // Placeholder image URL
    },
    '12': {
        text: 'Ignoring the riddle, Alex tries to force the door open. A trap is triggered, but Alex narrowly escapes and continues the quest.',
        choices: [],
        consequences: ['endingRetreat'],
        image: 'forceDoorOpen_image.jpg', // Placeholder image URL
    },
    'faceDragon': {
        text: 'Alex bravely faces the dragon in an intense battle. After a fierce struggle, the dragon is defeated, and the path to the crystal is clear.',
        choices: [],
        consequences: ['endingTrial'],
        image: 'faceDragon_image.jpg', // Placeholder image URL
    },
    'fleeMountain': {
        text: 'Realizing the danger, Alex attempts to flee down the mountain. The dragon gives chase but eventually retreats. Alex continues the quest, albeit shaken.',
        choices: [],
        consequences: ['endingRetreat'],
        image: 'fleeMountain_image.jpg', // Placeholder image URL
    },
    'continueCave': {
        text: 'Pressing on through the cave, Alex faces more challenges. Eventually, the crystal chamber is reached.',
        choices: [],
        consequences: ['endingIncomplete'],
        image: 'continueCave_image.jpg', // Placeholder image URL
    },
    'endingSuccess': {
        text: 'Congratulations! Alex successfully obtains the Enchanted Crystal and returns to Eldoria. The village is saved, and Alex is hailed as a hero.',
        choices: [],
        consequences: ['endNote'],
        image: 'endingSuccess_image.jpg', // Placeholder image URL
    },
    'endingInjuries': {
        text: 'Despite injuries from the battle with creatures, Alex obtains the Enchanted Crystal. The journey was tough, but the village is saved.',
        choices: [],
        consequences: ['endNote'],
        image: 'endingSuccess_image.jpg', // Placeholder image URL
    },
    'endingShortcut': {
        text: 'Solving the riddle opens a shortcut, and Alex swiftly reaches the crystal\'s chamber. Eldoria is saved, and the villagers celebrate.',
        choices: [],
        consequences: ['endNote'],
        image: 'endingSuccess_image.jpg', // Placeholder image URL
    },
    'endingTrial': {
        text: 'By facing the dragon, Alex proves worthiness and completes a challenging trial. The Enchanted Crystal is obtained, securing the village\'s safety.',
        choices: [],
        consequences: ['endNote'],
        image: 'endingSuccess_image.jpg', // Placeholder image URL
    },
    'endingRetreat': {
        text: 'Despite the retreat down the mountain, Alex perseveres. The Enchanted Crystal is obtained, and Eldoria is saved, though with a tale of a daring escape.',
        choices: [],
        consequences: ['endNote'],
        image: 'endingSuccess_image.jpg', // Placeholder image URL
    },
    'endingFailure': {
        text: 'Tragically, Alex fails to obtain the Enchanted Crystal. Eldoria succumbs to the impending danger. The quest ends in sorrow.',
        choices: [],
        consequences: ['endNote'],
        image: 'endingSuccess_image.jpg', // Placeholder image URL
    },
    'endingIncomplete': {
        text: 'The quest remains incomplete, and the fate of Eldoria hangs in the balance. The journey continues, leaving the story open-ended.',
        choices: [],
        consequences: ['endNote'],
        image: 'endingSuccess_image.jpg', // Placeholder image URL
    },
    'gameOver': {
        text: 'Game Over',
        choices: [],
        consequences: [],
        displayGameOver: true,
        image: 'gameOver_image.jpg', // Placeholder image URL
    },
};

document.addEventListener('DOMContentLoaded', startGame);

function startGame() {
    currentStage = 'start';
    updatePage();
}

function updatePage() {
    const stage = storyStages[currentStage];
    document.getElementById('story').innerText = stage.text;

    // Update the image source
    const imageElement = document.getElementById('story-image');
    imageElement.src = stage.image;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    if (stage.choices.length > 0) {
        stage.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.innerText = choice;
            button.addEventListener('click', () => makeChoice(index));
            choicesContainer.appendChild(button);
        });
    } else {
        // If there are no choices, directly call makeChoice with index 0
        makeChoice(0);
    }
}

function makeChoice(choiceIndex) {
    const stage = storyStages[currentStage];
    const nextStageKey = stage.consequences[choiceIndex];

    if (storyStages[nextStageKey]) {
        currentStage = nextStageKey;
        updatePage();
    } else {
        endGame();
    }
}

function endGame() {
    const stage = storyStages[currentStage];

    // Create a paragraph element for the specific ending text
    const endingMessage = document.createElement('p');
    endingMessage.innerText = stage.text;

    // Create a paragraph element for the 'endNote' message
    const endNoteMessage = document.createElement('p');
    endNoteMessage.innerText = 'Thank you for playing! Your choices shaped the story. Feel free to replay and explore different paths to discover alternate endings.';

    // Display the ending text and 'endNote' message in the 'story' element
    const storyElement = document.getElementById('story');
    storyElement.innerHTML = ''; // Clear previous content
    storyElement.appendChild(endingMessage);

    // Check if the current stage is not 'endNote' before appending it
    if (currentStage !== 'endNote') {
        storyElement.appendChild(endNoteMessage);
    }

    document.getElementById('choices').innerHTML = '';

    if (stage.displayGameOver) {
        const gameOverMessage = document.createElement('p');
        gameOverMessage.innerText = 'Game Over';
        storyElement.appendChild(gameOverMessage);
    }
}
