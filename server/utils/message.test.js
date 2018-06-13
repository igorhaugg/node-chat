const expect = require('expect');
let { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Igor';
    const text = 'Message';
    const message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });
  });
});
