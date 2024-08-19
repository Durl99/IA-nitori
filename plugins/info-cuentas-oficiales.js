let media = 'https://qu.ax/NqZN.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `𝙲𝚄𝙴𝙽𝚃𝙰𝚂 𝙰𝙸 𝙽𝙸𝚃𝙾𝚁𝙸
𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙓 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙎𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎💫🔮
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝔸𝕀 ℕ𝕀𝕋𝕆ℝ𝕀
${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌐 *𝔾𝕀𝕋ℍ𝕌𝔹*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌐 *𝕀ℕ𝕊𝕋𝔸𝔾ℝ𝔸𝕄*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌐 *𝕐𝕆𝕌𝕋𝕌𝔹𝔼*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌐 *𝔽𝔸ℂ𝔼𝔹𝕆𝕆𝕂*
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*PARA PREGUNTAS O ASISTENCIA RÁPIDA: INSTAGRAM.*\n
*FOR QUESTIONS OR QUICK ASSISTANCE: INSTAGRAM .*`
await conn.sendButton(m.chat, str, wm, media, [
['𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒🌐', '.grupos'],
['𝐂𝐑𝐄𝐀𝐃𝐎𝐑💻', '#owner'],
['𝙳𝙴 𝚅𝚄𝙴𝙻𝚃𝙰 𝙰𝙻 𝙼𝙴𝙽Ú📱', '/menu']], null, [
['ＡＩ ＮＩＴＯＲＩ💫', md]], fkontak)}
//conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒 🌐', '.grupos'],
['𝐂𝐑𝐄𝐀𝐃𝐎𝐑 💻', '#owner'],
['𝙳𝙴 𝚅𝚄𝙴𝙻𝚃𝙰 𝙰𝙻 𝙼𝙴𝙽Ú', '/menu']
], m,)}*/
handler.command = /^cuentasoficiales|nitoriig|cuentasni|cuentani|accounts|nitoriaccounts|account|ignito|cuentasnitori|cuentasdeainitori|cuentanitori|cuentasnitori$/i
handler.exp = 35
export default handler
