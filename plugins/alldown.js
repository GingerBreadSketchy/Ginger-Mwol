const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'download', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();



  r_text[0] = "https://i.imgur.com/dCrPuyu.jpeg";


    var i = Math.floor(1*Math.random())


    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.text, caption: `🎥 ᴅᴏᴡɴʟᴏᴅ ᴄᴏᴍᴍᴀɴᴅs🎥
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🎥ᴠɪᴅᴇᴏ
┣𝕾⃝🎥 sᴏɴɢ
┣𝕾⃝🎥 ᴠɪᴅᴇᴏ
┣𝕾⃝🎥 ɪɴsᴛᴀ
┣𝕾⃝🎥 sᴛᴏʀʏ
┣𝕾⃝🎥 ғʙ
┣𝕾⃝🎥 ɪᴍɢ
┣𝕾⃝🎥 ᴡɪᴋɪ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}) 

})); 
