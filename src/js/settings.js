export default class Settings {
    constructor() {
        this.default = new Map([
            [
                'theme', 'dark'
            ],
            [
                'music', 'trance'
            ],
            [
                'difficulty', 'easy'
            ]
        ]);
        this.user = new Map();
        this.theme = new Set([
            'dark','light', 'gray'
        ]);
        this.music = new Set([
            'trance','pop', 'rock', 'chillout', 'off'
        ]);
        this.difficulty = new Set([
            'easy','normal', 'hard', 'nightmare'
        ]);
    }

    setUserPref(pref, value) {
        if(this.default.has(pref) && this[pref].has(value)) {
            this.user.set(pref, value);
        }
    }

    getUserSettings(){
        const settings = this.user;
        [ ...this.default.keys() ].forEach((pref) => {
            if(!this.user.has(pref)) {
                settings.set(pref, this.default.get(pref));
            }
        });

        return settings;
    }
};
