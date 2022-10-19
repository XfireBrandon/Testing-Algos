const {
    sum,
    mult,
    vowelCount
} = require('./test-algo')



test('Sould add 1 + 3 to equal 4', () => {
    expect(sum(1,3)).toBe(4)
})

test("Should multiply 5 times 5 to equal 25", () => {
    expect(mult(5,5)).toBe(25)
})

test("Should count the words that end in a vowels", () => {
    expect(vowelCount('I want to code now')).toBe(3)
})