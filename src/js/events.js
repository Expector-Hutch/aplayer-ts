const playerEvents = [
    'destroy',
    'listshow', 'listhide', 'listadd', 'listremove', 'listswitch', 'listclear',
    'noticeshow', 'noticehide',
    'lrcshow', 'lrchide',
];

export const audioEvents = [
    'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error',
    'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play',
    'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend',
    'timeupdate', 'volumechange', 'waiting'
];

class Events {
    constructor() {
        this.events = {};
    }

    on(name, callback) {
        if (this.type(name) && typeof callback === 'function') {
            if (!this.events[name]) {
                this.events[name] = [];
            }
            this.events[name].push(callback);
        }
    }

    trigger(name, data) {
        if (this.events[name] && this.events[name].length) {
            for (let i = 0; i < this.events[name].length; i++) {
                this.events[name][i](data);
            }
        }
    }

    type(name) {
        if (playerEvents.indexOf(name) !== -1) {
            return 'player';
        }
        else if (audioEvents.indexOf(name) !== -1) {
            return 'audio';
        }

        console.error(`Unknown event name: ${name}`);
        return null;
    }
}

export default Events;
