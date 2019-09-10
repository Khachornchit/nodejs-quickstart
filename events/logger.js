const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    constructor() {
        super();
        this.on('messageLogged', (arg) => {
            console.log('Listener called', arg);
        });
    }

    log(message) {
        console.log(message);
        this.emit('messageLogged', { id: 1, url: 'http://' });
    };
}

module.exports = Logger;