/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE GATABOT-MD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE GATABOT-MD, GRACIAS 
**/

/** PLEASE BE KIND AND KINDNESS NOT TO MINIMALLY CHANGE GATABOT-MD CREDITS, 
IF YOU ARE GOING TO ADD YOUR DATA OR CREDITS, IT'S OK. BUT DO NOT REMOVE THOSE THAT ARE ALREADY FROM GATABOT-MD, THANK YOU **/
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = gataMenu
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `╭━━━━[ 🅴🆂🆃🅰🅳🅾 ]━━━━━⬣
┃👋    *Hola!* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔮 *Versión de ${gt}*
┃★ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💻 CREADOR
┃★ DURL.DEV
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃☎️ CONTACTO
┃★ *${ig}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃★ ${global.opts['self'] ? 'PRIVADO' : 'PUBLICO'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃★ *TIEMPO ACTIVO † ACTIVE TIME * 
┃» ${uptime}
┃★ *Usuario(s) | Users* 
┃» ${Object.keys(global.db.data.users).length} 
┃★ *Chat(s) Baneados(s) | Forbidden Chats*
┃» ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃★ *Usuario(s) Baneados(s) | Prohibited Urs*
┃» ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━━━━━━━━━━━━━━━━⬣`
await conn.reply(m.chat, estado, m, fakeChannel)
//await conn.sendButton(m.chat, estado, `𝔸𝕊𝕀𝕊𝕋𝔼ℕℂ𝕀𝔸\n${asistencia}\n\n` + wm, pp, [
//['𝕄𝔼ℕÚ ℂ𝕆𝕄ℙ𝕃𝔼𝕋𝕆', '.allmenu'],
//['ℙ𝕀ℕ𝔾', '/ping'],
//['𝔻𝔼 𝕍𝕌𝔼𝕃𝕋𝔸 𝔸𝕃 𝕄𝔼ℕÚ', '#menu']], null, [
//['𝘼𝙄 𝙉𝙄𝙏𝙊𝙍𝙄', `${md}`]], fakeChannel, m) // await conn.reply(m.chat, bot, m, fakeChannel)

  
  /*conn.sendHydrated(m.chat, estado, `𝔸𝕊𝕀𝕊𝕋𝔼ℕℂ𝕀𝔸\n${asistencia}\n\n` + wm, imagen1, 'https://github.com/Durl99/AI-nitori', '𝘼𝙄 𝙉𝙄𝙏𝙊𝙍𝙄', null, null, [
['𝕄𝕖𝕟ú 𝕔𝕠𝕞𝕡𝕝𝕖𝕥𝕠', '.allmenu'],
['ℙ𝕀ℕ𝔾', '/ping'],
['', '#menu']
], m,) */
/*let estado =`
╭━━━━[ *𝙀𝙎𝙏𝘼𝘿𝙊 | 𝙎𝙏𝘼𝙏𝙐𝙎* ]━━━━━⬣
┃💗 *¡Hola | Hi!* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃𓃠 *Versión de ${gt}*
┃➥ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✿ 𝗖𝗥𝗘𝗔𝗗𝗢𝗥𝗔 | 𝗖𝗥𝗘𝗔𝗧𝗢𝗥
┃ღ 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✿ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗢 | 𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃➥ *${ig}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ *Activo Durante | Active During* 
┃➥ ${uptime}
┃ღ *Usuario(s) | Users* 
┃➥ ${Object.keys(global.db.data.users).length} 
┃ღ *Chat(s) Prohibido(s) | Forbidden Chats*
┃➥ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃ღ *Usuario(s) Prohibido(s) | Prohibited Urs*
┃➥ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━━━━━━━━━━━━━━━━⬣`.trim()

conn.sendHydrated(m.chat, estado, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, picture, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪', '.allmenu'],
['𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙎𝙥𝙚𝙚𝙙', '/ping'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)}*/
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|heygata|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
