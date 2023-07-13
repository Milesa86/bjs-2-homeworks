class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.intervalId = null
    }

    addClock(time, callback) {
        if (!time || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.some(elem => elem === this.time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({
            time, callback, canCall: true
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(
            elem => elem.time !== time
            )
    }

    getCurrentFormattedTime() {
        const currentTime = new Date();
    let formattedTime = [currentTime.getHours(), currentTime.getMinutes()].map( function (x) {
        return x < 10 ? "0" + x : x 
    }).join(':')
        return formattedTime;
    }

    start() {
        if(this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(
            () => {
                this.alarmCollection.forEach((elem) => {
                    if (elem.time === this.getCurrentFormattedTime() && elem.canCall === true) {
                        elem.canCall = false;
                        elem.callback();
                    }
                })
            }, 1000
        );
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((elem) => {
            elem.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}