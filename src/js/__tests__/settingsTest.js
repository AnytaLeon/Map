import Settings from '../settings';

test('setUserPref', () => {
    const settings = new Settings;
    settings.setUserPref('theme', 'gray');
    expect(settings.user.get('theme')).toEqual('gray');
});

test('getUserSettings', () => {
    const settings = new Settings;
    settings.setUserPref('theme', 'gray');
    const map = new Map([
        [
            'theme', 'gray'
        ],
        [
            'music', 'trance'
        ],
        [
            'difficulty', 'easy'
        ]
    ]);
    expect(settings.getUserSettings()).toEqual(map);
});