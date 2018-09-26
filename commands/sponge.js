// spongebob-ify text
exports.run = (client, message, args) => {
  console.log(`**********Executing sponge on ${message.guild.name}**********`);

  let str = message.content
    .toLowerCase()
    .replace('!sponge ', '', -1)
    .replace(/-/g, '', -1);

  let strArr = str.toLowerCase().split('');

  let outputArr = [];

  for (let i = 0; i < strArr.length; i++) {
    const letter = strArr[i];
    if (i % 2 === 0) {
      outputArr.push(letter);
    } else {
      outputArr.push(letter.toUpperCase());
    }
  }
  const ayy = client.emojis.find('name', 'spongebobmock');

  outputArr.push(` ${ayy}`);

  message.channel.send(outputArr.join('')).catch(console.error);
};
