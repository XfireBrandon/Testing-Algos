const {
    sum
} = require('./test-algo')



test('Sould add 1 + 3 to equal 4', () => {
    expect(sum(1,3)).toBe(4)
})