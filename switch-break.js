const personStates = {
    SLEEP: Symbol.for('sleep'),
    NORMAL: Symbol.for('Abbas')
}

// console.log(Symbol.keyFor(personStates.NORMAL) === 'Abbas')


// const person = {
//     state: personStates.NORMAL,

//     say(s) {
//         switch (this.state) {
//             case personStates.SLEEP:
//                 console.log('zzzzzz')
//                 break;
//             case personStates.NORMAL:
//                 console.log(s);
//                 break;
//             default:
//                 throw 'bad state'
//         }
//     }
// }
// person.say("Hello")


