const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'info', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/dCrPuyu.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `▢ *ᴍʏ ɴᴀᴍᴇ ɪs ғɪᴅʜᴀ ᴍᴡᴏʟ*

▢ *ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴋɴᴏᴡ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ᴊᴜsᴛ ᴍᴇssᴀɢᴇ ,help*

▢ *ғɪᴅʜᴀ ᴠ1* 

▢ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ꪶɪᴛs-ᴍᴇ ͢ʜʏᷤᴘͥᴇᷢʀ⁨ꫂ⁩*

▢ *ɢɪᴛʜᴜʙ ʟɪɴᴋ:* http://github.com/Hypersir/Fidha-Mwol

▢ *ʙᴏᴛ ᴄʀᴇᴀᴛɪɴɢ ᴠɪᴅᴇᴏ:* https://youtu.be/0pU8N611-Oc
`}) 

}));
