const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'torrent') {
    	message.reply('Úristen kalózkodós poor kid vagy,vedd meg inkább a játékot ne töltsd le torrentel!')
  	}
    if (message.content === 'csaló') {
    	message.reply('Nyomorék csaló elrontod mások játékélményét!')
        }
    if (message.content === 'windows') {
    	message.reply('Majd én tudom milyen windows-t használok jó?')
        }
     if (message.content === 'macfag') {
    	message.reply('azért mert szeretem a macet?')
        }
      if (message.content === 'keh') {
    	message.reply('kehünk bele')
        }
     if (message.content === 'béke') {
    	message.reply('nem.')
        }
      if (message.content === 'helló') {
    	message.reply('Csá.')
        }
    if (message.content === 'pentium') {
    	message.reply(':angry:')
        }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
