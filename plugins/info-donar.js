let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `POR SI DESEAS APOYAR EL PROYECTO ;)
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
ℙ𝔸𝕐ℙ𝔸𝕃
*https://paypal.me/OficialGD*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendButton(m.chat, str, `𝔸𝕊𝕀𝕊𝕋𝔼ℕℂ𝕀𝔸\n${asistencia}\n\n` + wm, media, [
['🌐𝔾ℝ𝕌ℙ𝕆𝕊', '.grupos'],
['💻ℂℝ𝔼𝔸𝔻𝕆ℝ', '#owner'],
['📱𝔻𝔼 𝕍𝕌𝔼𝕃𝕋𝔸 𝔸𝕃 𝕄𝔼ℕÚ', '/menu']], null, [
['💸𝔻𝕆ℕ𝔸ℝ', `https://paypal.me/DurlDios`]], fkontak)}
/*conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": ``, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}}}, { quoted: fkontak })}*/
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['🌐𝔾ℝ𝕌ℙ𝕆𝕊', '.grupos'],
['💻ℂℝ𝔼𝔸𝔻𝕆ℝ', '#owner'],
['📱𝔻𝔼 𝕍𝕌𝔼𝕃𝕋𝔸 𝔸𝕃 𝕄𝔼ℕÚ', '/menu']
], m,)}*/
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
