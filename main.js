console.log("Oh what a beautiful Day")


const createPet = (object1, object2) => ({
    name: object1,
    breed: object2
})

let bowWowKennels = []

bowWowKennels.push(createPet("Nala", "Labrador"))
bowWowKennels.push(createPet("Sherpa", "Samoyed"))
bowWowKennels.push(createPet("Gareth", "domestic medium hair"))

console.log(bowWowKennels)