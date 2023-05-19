// Refactor Create Instructor
const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    };
};

let favoriteNumber = 42;

const instructor = {
    firstName: 'Caleb',
    [favoriteNumber]: "That is my favorite!",
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + " says bye!"
    }
};

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
};

const d = createAnimal("dog", "bark", "Woooof!");

const s = createAnimal("sheep", "bleet", "BAAAaaa");

