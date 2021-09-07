MyPnky.addCommand({pattern: 'number', fromMe: false, desc: Lang.NUMBER}, (async (message, match) => {

            const p_lk = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + Pinky.OA_NAME + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Fidha Mwol owner hyper sir;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Pinky.PHONE + ':' + Pinky.PHONE + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "PINKY", vcard: p_lk}, MessageType.contact);

  }));    
