/* eslint-disable no-restricted-globals */
let intervalId = null;

self.onmessage = function (e) {
    if (e.data.command === 'start') {
        if (intervalId) clearInterval(intervalId);
        const fps = e.data.fps || 30;
        const interval = 1000 / fps;

        intervalId = setInterval(() => {
            self.postMessage('tick');
        }, interval);
    } else if (e.data.command === 'stop') {
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
    }
};
