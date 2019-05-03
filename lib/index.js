"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.short = (time) => {
    if (time >= 0 && time < 1000) {
        return `${time} ms`;
    }
    if (time < 1000 * 60) {
        const s = Math.floor(time / 1000);
        if (s === 1)
            return `${s} second`;
        return `${s} seconds`;
    }
    if (time < 1000 * 60 * 60) {
        const s = Math.floor(time / (1000 * 60));
        if (s === 1)
            return `${s} minute`;
        return `${s} minutes`;
    }
    if (time < 1000 * 60 * 60 * 24) {
        const s = Math.floor(time / (1000 * 60 * 60));
        if (s === 1)
            return `${s} hour`;
        return `${s} hours`;
    }
    if (time < 1000 * 60 * 60 * 24 * 7) {
        const s = Math.floor(time / (1000 * 60 * 60 * 24));
        if (s === 1)
            return `${s} day`;
        return `${s} days`;
    }
    if (time < 1000 * 60 * 60 * 24 * 7 * 52 / 12) {
        const s = Math.floor(time / (1000 * 60 * 60 * 24 * 7));
        if (s === 1)
            return `${s} week`;
        return `${s} weeks`;
    }
    if (time < 1000 * 60 * 60 * 24 * 7 * 52) {
        const s = Math.floor(time / (1000 * 60 * 60 * 24 * 7 * 52 / 12));
        if (s === 1)
            return `${s} month`;
        return `${s} months`;
    }
    const s = Math.floor(time / (1000 * 60 * 60 * 24 * 365));
    if (s === 1)
        return `${s} year`;
    return `${s} years`;
};
//# sourceMappingURL=index.js.map