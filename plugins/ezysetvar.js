/* Copyright (C) 2021 Hyper sir
coded for Fidha mwol
*/

const Julie = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

    Julie.addCommand({ pattern: 'sudo ?(.*)', fromMe: true, desc: 'changes sudo numbers', usage: '.sudo *your number*' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('ɴᴇᴇᴅ ᴀ ɴᴜᴍʙᴇʀ')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['SUDO']: match[1]
            }
        });
        await message.sendMessage("ɴᴇᴡ sᴜᴅᴏ ᴜᴘᴅᴀᴛᴇᴅ")
    }));

    Julie.addCommand({ pattern: 'caption ?(.*)', fromMe: true, desc: 'changes all captions', usage: '.caption Made by FidhaMwol' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('ɴᴇᴇᴅ ᴀ ᴄᴀᴘᴛɪᴏɴ ')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['ALL_CAPTION']: match[1]
            }
        });
        await message.sendMessage("ɴᴇᴡ ᴄᴀᴘᴛɪᴏɴ ᴜᴘᴅᴀᴛᴇᴅ ")
    }));

    Julie.addCommand({ pattern: 'handlers ?(.*)', fromMe: true, desc: 'changes handlers', usage: '.handler ^[.!] ' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('ɴᴇᴇᴅ ᴀ ʜᴀɴᴅʟᴇʀ')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['ALL_CAPTION']: match[1]
            }
        });
        await message.sendMessage("ɴᴇᴡ ʜᴀɴᴅʟᴇʀ ᴜᴘᴅᴀᴛᴇᴅ ")
    }));


    Julie.addCommand({ pattern: 'botname ?(.*)', fromMe: true, desc: 'change your bot name', usage: '.botname name ' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('ᴛʏᴘᴇ ʏᴏᴜʀ ɴᴇᴡ ʙᴏᴛ ɴᴀᴍᴇ')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['BOT_NAME']: match[1]
            }
        });
        await message.sendMessage("ɴᴇᴡ ʙᴏᴛ ɴᴀᴍᴇ ᴜᴘᴅᴀᴛᴇᴅ ")
    }));

Julie.addCommand({ pattern: 'theri  ?(.*)', fromMe: true, desc: 'change your theri commands', usage: '.theri command,command' }, (async (message, match) => {
        if (match[1] == '') return await message.sendMessage('TYPE YOUR NEW BOT NAME')
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['THERI_LIST']: match[1]
            }
        });
        await message.sendMessage("ᴛʜᴇʀɪ ʟɪsᴛ ᴜᴘᴅᴀᴛᴇᴅ ")
    }));



