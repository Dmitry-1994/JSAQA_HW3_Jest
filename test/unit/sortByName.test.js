const sorting = require('../../app');

describe('Books names test suit', () => {
    it('Books names should be sorted in ascending order', () => {
        const inputValue = [
            'Гарри Поттер',
            'Властелин Колец',
            'Волшебник изумрудного города'
        ];

        const expectedValue = [
            'Властелин Колец',
            'Волшебник изумрудного города',
            'Гарри Поттер'
        ];

        const actualValue = sorting.sortByName(inputValue);

        expect(expectedValue).toEqual(actualValue);
    });

    it('Book names should not be sorted', () => {
        const inputValue = [
            'Властелин Колец',
            'Властелин Колец',
            'Властелин Колец'
        ];

        const actualValue = sorting.sortByName(inputValue);

        expect(inputValue).toEqual(actualValue);
    });
});
