const { generateText } = require('./util');

test('should output name and age' , () => {
    const text = generateText('Mazen', 20);
    expect(text).toBe('Mazen (20 years old)');
})