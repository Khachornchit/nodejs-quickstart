const EventEmitter = require('events');
const emitter = new EventEmitter();

// emit is to make a noise or produce something

// register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });

// raise: logging (data: message)
