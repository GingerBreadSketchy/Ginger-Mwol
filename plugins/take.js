Asena.addCommand(
  { pattern: "take ?(.*)", fromMe: true, desc: Lang.TAKE_DESC },
  async (message, match) => {
    if (!message.reply_message.sticker || !message.reply_message) return await message.sendMessage(Lang.TAKE_NEED_REPLY)
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "take"
    );
    let buffer = await addExif(location, match);
    return await message.sendMessage(
      buffer,
      { mimetype: Mimetype.webp, isAnimated: message.reply_message.animated, quoted: message.quoted },
      MessageType.sticker
    );
  }
);
