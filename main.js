const events = require('events')
const util = require('util')

const Cars = function(model){
    this.model = model
}

util.inherits(Cars, events.EventEmitter)

const bmw = new Cars('BMW')
const audi = new Cars('AUDI')
const mers = new Cars('MERS')
const opel = new Cars('OPEL')

const cars = [bmw, audi, mers, opel]
cars.forEach( car => {
    car.on('speed', text => {console.log(car.model + ' speed is ' + text)})
})

bmw.emit('speed', '170')
audi.emit('speed', '180')
mers.emit('speed', '190')
opel.emit('speed', '1700')