const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {

    test('Shuffle array should return an array', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(arr).toEqual([1,2,3,4,5])
    })

    test('Shuffle aray should return an array of same length as argument', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(arr.length).toBe(result.length)
    })
})
