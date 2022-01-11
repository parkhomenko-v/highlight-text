import highlight from '../highlight-text';

const fixture = 'Adaptive and Operative Beauty';

describe('highlight', () => {
    test('extract highlighted text from string', () => {
        expect(highlight(fixture, 'adaptive')).toEqual(['', 'Adaptive', ' and Operative Beauty']);
        expect(highlight(fixture, 'operative')).toEqual(['Adaptive and ', 'Operative', ' Beauty']);
        expect(highlight(fixture, fixture)).toEqual(['', fixture, '']);
    });

    test('no matched text', () => {
        expect(highlight(fixture, '')).toEqual(['', '', fixture]);
        expect(highlight(fixture, 'Not matched text')).toEqual([fixture, undefined, undefined]);
    });
});
