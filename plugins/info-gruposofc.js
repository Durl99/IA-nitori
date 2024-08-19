let handler = async (m, { conn, command }) => {
let media = gataVidMenu
let str = `*🔮Bienvenidx a los grupos oficiales de AI Nitori*

🔮Welcome to the official AI NITORI groups
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Unete a esta gran comunidad.* 💫 Te invitamos a interactuar con nosotros 🔮

*Join this great community.* 💫 *We invite you to interact with us* 🔮
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🔮 *AI NITORI VERSION ${gt}*
» ${vs}
____________________
✅ GRUPO OFICIAL ${gt}
____________________
💫 *ACTUALIZACIONES*
🔮 *${canal1}*\n
____________________
🔮 *${canal2}*\n
____________________

🔮 ATENCIÓN AL CLIENTE
*${soporteGB}*\n
____________________
💫 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟏
*${grupo1}*\n
____________________
💫 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟐
*${grupo2}*\n
____________________
💫 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟑
*${grupo3}*\n
____________________
✅ *COLABORACIÓN CON* ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
🔮 AI NITORI x NEXUS HOST
*${grupo_collab1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*`
await conn.sendButton(m.chat, str, ` - ASISTENCIA NITORI\n${asistencia}\n\n` + wm, media, [
['CUENTAS✅', '.cuentasni'],
['DONAR🎁', '.donar'],
['DEVUELTA AL MENÚ', '/menu']], null, [
['AI NITORI', `${md}`]], fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposnitori|nitorigrupos|gruposdenitori|groupofc|gruposni|gruponi|groupni$/i
handler.exp = 33

export default handler
