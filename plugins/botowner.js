const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/dCrPuyu.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `▢ *ᴏᴡɴᴇʀ: ꪶɪᴛs-ᴍᴇ ͢ʜʏᷤᴘͥᴇᷢʀ⁨ꫂ⁩*

▢ *ɴᴜᴍʙᴇʀ: Wa.me/+917025967090*

▢ *ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟᴇ: http://github.com/Hypersir*

*ʙᴏᴛ ʜᴇʟᴘʟɪɴᴇ: https://chat.whatsapp.com/ECPIf8gi8DaITTeTppAj2q*
`}) 

}));
