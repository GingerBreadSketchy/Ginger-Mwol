const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'misc', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/dCrPuyu.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `🌺 ᴍɪsᴄ ᴄᴏᴍᴍᴀɴᴅs🌺
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🌺 ᴍᴘ3
┣𝕾⃝🌺 sᴛɪᴄᴋᴇʀ
┣𝕾⃝🌺 ᴘʜᴏᴛᴏ
┣𝕾⃝🌺 ʀᴇᴠᴇʀᴄᴇ
┣𝕾⃝🌺 ʙᴀss
┣𝕾⃝🌺 ᴘɪᴛᴄʜ
┣𝕾⃝🌺 ʟᴏᴡ
┣𝕾⃝🌺 ᴛᴛs
┣𝕾⃝🌺 ᴜɴᴠᴏɪᴄᴇ
┣𝕾⃝🌺 ʀᴇᴍᴏᴠᴇʙɢ
┣𝕾⃝🌺 ᴀᴛᴛᴘ
┣𝕾⃝🌺 ᴇᴍᴏ
┣𝕾⃝🌺 ᴛʀᴛ
┣𝕾⃝🌺 ᴘʟᴜɢɪɴ
┣𝕾⃝🌺 ᴘʟᴜɢɪɴ ʟɪsᴛ
┣𝕾⃝🌺 ʀᴇᴍᴏᴠᴇ
┣𝕾⃝🌺 ғɪʟᴛᴇʀ
┣𝕾⃝🌺 ᴊɪᴅ
┣𝕾⃝🌺 ʙʟᴏᴄᴋ
┣𝕾⃝🌺 ᴜɴʙʟᴏᴄᴋ
┣𝕾⃝🌺 ᴡʜᴏɪs
┣𝕾⃝🌺 ᴘɪɴɢ
┣𝕾⃝🌺 ᴍᴇɴᴜ
┣𝕾⃝🌺 ʜᴇʟᴘ
┣𝕾⃝🌺 ɪɴғᴏ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}) 

})); 
