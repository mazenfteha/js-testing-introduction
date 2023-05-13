const { generateText, checkAndGenerate } = require('./util');

//unit test
test('should output name and age' , () => {
    const text = generateText('Mazen', 20);
    expect(text).toBe('Mazen (20 years old)');
})

//integration test
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Mazen', 20);
    expect(text).toBe('Mazen (20 years old)');
})