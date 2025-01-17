function sumObjectValues(object) {
    const values = Object.values(object);
    const filtered = values.filter((el) => typeof el === "number").sort((a,b) => b - a)
    return filtered
}

console.log(sumObjectValues({name: 'Vasya', friends: 5, likes: 19, projects: 7}));