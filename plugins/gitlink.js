const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*•━━━━╼᚜┃𝗚𝗶𝗻𝗴𝗲𝗿𝗠𝗮𝗳𝗶𝗮𝗕𝗼𝘁┃᚛╾━━━•*
 

       👿 *ɢɪᴛʜᴜʙ ʟɪɴᴋ        _https://github.com/GingerBreadSketchy/Ginger-Mwol_*
 

      👿  *ʙᴏᴛ ᴍᴀᴋɪɴɢ ᴠɪᴅᴇᴏ    _https://youtu.be/WGfDEHJyV1I_*
 
 
      👿 *ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ        _https://Wa.me/+254792893310_*
  
  
     👿 *ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟᴇ ʟɪɴᴋ _https://github.com/GingerBreadSketchy_*
`}) 

})); 
