const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {

    // test('Shuffle aray should return an array', () => {
    //     expect(shuffleArray([1, 2, 3, 4, 5])).toEqual([1
    // })

    test('Shuffle aray should return an array of same length as argument', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(arr.length).toBe(result.length)
    })
})
