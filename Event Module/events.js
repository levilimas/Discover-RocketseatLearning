const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`I! The ${chapolin.name} colorado!`))

console.log('Oh!, And now, who can defend me ?')
chapolin.emit('help')
