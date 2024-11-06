let str = "Book, оceAn, travel, Journey, science, Thunder, compAss, Elephant, discovery, adventure, rkowledge, ImaginAtion"
let re = /\b[^aA\s]{6,}\b/g;


console.log("Послідовності з шести або більше символів, які не містять літер 'a' і 'A': " + str.match(re));