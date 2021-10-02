const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'admin', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/dCrPuyu.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `🎀 ʜᴇʀᴏᴋᴜ ᴄᴏᴍᴍᴀɴᴅs🎀
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🎀 ʀᴇsᴛᴀʀᴛ
┣𝕾⃝🎀 sʜᴜᴛᴅᴏᴡɴ
┣𝕾⃝🎀 sᴇᴛᴠᴀʀ
┣𝕾⃝🎀 ɢᴇᴛᴠᴀʀ
┣𝕾⃝🎀 ᴀʟʟᴠᴀʀ
┣𝕾⃝🎀 ᴜᴘᴅᴀᴛᴇ
┣𝕾⃝🎀 ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
🌹ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs🌹
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🌹 ᴀᴅᴅ
┣𝕾⃝🌹 ᴋɪᴄᴋ
┣𝕾⃝🌹 ᴍᴜᴛᴇ
┣𝕾⃝🌹 ᴜɴᴍᴜᴛᴇ
┣𝕾⃝🌹 ᴘʀᴏᴍᴏᴛᴇ
┣𝕾⃝🌹 ᴅᴇᴍᴏᴛᴇ
┣𝕾⃝🌹 ɪɴᴠɪᴛᴇ
┣𝕾⃝🌹 ʀᴇᴠᴏᴋᴇ
┣𝕾⃝🌹 ᴡᴇʟᴄᴏᴍᴇ
┣𝕾⃝🌹 ɢᴏᴏᴅʙʏᴇ
┣𝕾⃝🌹 ʟᴇᴀᴠᴇ
┣𝕾⃝🌹 ᴛᴀɢ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}) 

})); 
