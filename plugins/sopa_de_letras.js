//CREADO POR @gata_dios
// EL CÓDIGO ESTARÁ OFUSCADO HASTA QUE SE COMPRUEBE QUE NO EXISTA ERRORES

// SOPA DE LETRAS (BETA)
function _0x54d7(_0x51d6a1,_0x5a5286){const _0x4a7601=_0x4a76();return _0x54d7=function(_0x54d7b1,_0x5ad91e){_0x54d7b1=_0x54d7b1-0x1de;let _0x1aca35=_0x4a7601[_0x54d7b1];return _0x1aca35;},_0x54d7(_0x51d6a1,_0x5a5286);}const _0x4b934a=_0x54d7;(function(_0x2b6e1c,_0x408589){const _0xcfd341=_0x54d7,_0x1da05a=_0x2b6e1c();while(!![]){try{const _0x257415=parseInt(_0xcfd341(0x215))/0x1*(-parseInt(_0xcfd341(0x201))/0x2)+-parseInt(_0xcfd341(0x1f4))/0x3+parseInt(_0xcfd341(0x1e2))/0x4+-parseInt(_0xcfd341(0x1df))/0x5*(-parseInt(_0xcfd341(0x1e6))/0x6)+-parseInt(_0xcfd341(0x200))/0x7*(parseInt(_0xcfd341(0x21b))/0x8)+-parseInt(_0xcfd341(0x20c))/0x9*(parseInt(_0xcfd341(0x206))/0xa)+parseInt(_0xcfd341(0x1ef))/0xb*(parseInt(_0xcfd341(0x213))/0xc);if(_0x257415===_0x408589)break;else _0x1da05a['push'](_0x1da05a['shift']());}catch(_0x4d1af4){_0x1da05a['push'](_0x1da05a['shift']());}}}(_0x4a76,0x88b1f));let fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x3,handler=async(_0x2e6604,{conn:_0x5716a8,text:_0x4727e1,usedPrefix:_0x23e8ab,command:_0x53d7d8})=>{const _0x5c62fe=_0x54d7;userSP===null&&(userSP=_0x2e6604[_0x5c62fe(0x1f5)][_0x5c62fe(0x1e0)]('@')[0x0],await _0x2e6604[_0x5c62fe(0x1e1)]('*USUARIO\x20REGISTRADO\x20EN\x20EL\x20JUEGO*'));async function _0xc4cf32(){const _0x32b33b=_0x5c62fe,_0x5306d9=0xa;let _0xb096a1=new Array(_0x5306d9);for(let _0x4835a7=0x0;_0x4835a7<_0x5306d9;_0x4835a7++){_0xb096a1[_0x4835a7]=new Array(_0x5306d9);}const _0x59fc50=['CASA','GATABOT',_0x32b33b(0x1f7),_0x32b33b(0x1e9),_0x32b33b(0x1f6),'PIZZAS',_0x32b33b(0x21c),_0x32b33b(0x1f2),_0x32b33b(0x217),_0x32b33b(0x1fd),_0x32b33b(0x1fa),_0x32b33b(0x1e8),'LAPIZ',_0x32b33b(0x1fb),'MUEBLES'],_0x28cffe=_0x59fc50[Math['floor'](Math['random']()*_0x59fc50[_0x32b33b(0x205)])];let _0x2584b9=Math[_0x32b33b(0x21a)](Math['random']()*_0x5306d9),_0x1ef50a=Math['floor'](Math['random']()*_0x5306d9);const _0x37bc41=[_0x32b33b(0x1f0),_0x32b33b(0x214),_0x32b33b(0x1e4),'diagonalIzquierda'],_0x175517=_0x37bc41[Math['floor'](Math[_0x32b33b(0x20a)]()*_0x37bc41[_0x32b33b(0x205)])];while(_0x2584b9+_0x28cffe[_0x32b33b(0x205)]>_0x5306d9&&_0x175517==='vertical'||_0x1ef50a+_0x28cffe[_0x32b33b(0x205)]>_0x5306d9&&_0x175517===_0x32b33b(0x1f0)||_0x2584b9+_0x28cffe['length']>_0x5306d9||_0x1ef50a+_0x28cffe['length']>_0x5306d9){_0x2584b9=Math['floor'](Math[_0x32b33b(0x20a)]()*_0x5306d9),_0x1ef50a=Math['floor'](Math[_0x32b33b(0x20a)]()*_0x5306d9);}for(let _0x16cd54=0x0;_0x16cd54<_0x28cffe[_0x32b33b(0x205)];_0x16cd54++){if(_0x175517===_0x32b33b(0x1f0))_0xb096a1[_0x2584b9][_0x1ef50a+_0x16cd54]=_0x28cffe[_0x32b33b(0x1ff)](_0x16cd54);else{if(_0x175517===_0x32b33b(0x214))_0xb096a1[_0x2584b9+_0x16cd54][_0x1ef50a]=_0x28cffe['charAt'](_0x16cd54);else _0x175517===_0x32b33b(0x1e4)?_0xb096a1[_0x2584b9+_0x16cd54][_0x1ef50a+_0x16cd54]=_0x28cffe[_0x32b33b(0x1ff)](_0x16cd54):_0xb096a1[_0x2584b9+_0x16cd54][_0x1ef50a-_0x16cd54]=_0x28cffe[_0x32b33b(0x1ff)](_0x16cd54);}}const _0x7ba4e8=_0x32b33b(0x207);let _0x22e45f='';_0x22e45f+=_0x32b33b(0x1fc)+[...Array(_0x5306d9)['keys']()][_0x32b33b(0x202)](_0x32b33b(0x1ea))+'\x0a',_0x22e45f+=_0x32b33b(0x1e7)+'┄'[_0x32b33b(0x211)](_0x5306d9)+'┄┄'+_0x32b33b(0x212);for(let _0x38ddc7=0x0;_0x38ddc7<_0x5306d9;_0x38ddc7++){let _0x156275=_0x38ddc7+_0x32b33b(0x1ee);for(let _0xd9ac83=0x0;_0xd9ac83<_0x5306d9;_0xd9ac83++){if(_0xb096a1[_0x38ddc7][_0xd9ac83])_0x156275+=_0xb096a1[_0x38ddc7][_0xd9ac83]+'\x20';else{let _0x590178=_0x7ba4e8[_0x32b33b(0x1ff)](Math[_0x32b33b(0x21a)](Math[_0x32b33b(0x20a)]()*_0x7ba4e8['length']));_0x156275+=_0x590178+'\x20';}}_0x156275+='\x20|',_0x22e45f+=_0x156275+'\x0a';}_0x22e45f+=_0x32b33b(0x216)+'┄'[_0x32b33b(0x211)](_0x5306d9)+'┄┄'+'╯*',_0x22e45f=_0x22e45f[_0x32b33b(0x1e3)](/[a-zA-Z]/g,_0x415765=>_0x7ba4e8[_0x415765[_0x32b33b(0x218)]()-0x41]||_0x415765),await _0x2e6604[_0x32b33b(0x1e1)](_0x32b33b(0x208)+_0x28cffe+_0x32b33b(0x1ec)+intentos+'_\x20INTENTOS!!*\x0a\x0a*ESCRIBA\x20EL\x20NÚMERO\x20DE\x20FILA\x20Y\x20COLUMNA\x20DEL\x20COMIENZO\x20DE\x20LA\x20PRIMERA\x20LETRA\x20_\x22'+_0x28cffe[_0x32b33b(0x1ff)](0x0)+_0x32b33b(0x1fe)+_0x28cffe+_0x32b33b(0x203)+(_0x23e8ab+_0x53d7d8)+'\x2028```\x0a➡️\x20```FILA\x202```\x0a⬇️\x20```COLUMNA\x208```\x0a\x0a*_\x22'+_0x28cffe+_0x32b33b(0x1e5)+_0x2584b9+_0x32b33b(0x210)+_0x1ef50a+'*\x0a'+_0x22e45f),fila=_0x2584b9,columna=_0x1ef50a,sopaNube=_0x22e45f,sopaPalabra=_0x28cffe,sopaDir=_0x175517;}if(userSP!=_0x2e6604[_0x5c62fe(0x1f5)][_0x5c62fe(0x1e0)]('@')[0x0]){await _0x2e6604[_0x5c62fe(0x1e1)](_0x5c62fe(0x204));return;}if(!fila||!columna||!sopaNube||!sopaPalabra||!sopaDir)return intentos=0x3,_0xc4cf32();let _0xc94f7d=sopaDir;_0xc94f7d=_0xc94f7d[_0x5c62fe(0x1e3)](/([A-Z])/g,'\x20$1')[_0x5c62fe(0x1de)]()['replace'](/^./,_0xabe6f0=>_0xabe6f0[_0x5c62fe(0x20e)]());if(intentos===0x0){_0xc4cf32();return;}else{if(''+fila+columna==_0x4727e1)await _0x2e6604['reply'](_0x5c62fe(0x1eb)+sopaPalabra+_0x5c62fe(0x1f8)+_0xc94f7d+_0x5c62fe(0x219)+fila+_0x5c62fe(0x1ed)+columna+'_*'),(fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null);else{if(intentos===0x1){fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,await _0x2e6604[_0x5c62fe(0x1e1)](_0x5c62fe(0x1f9)+sopaPalabra+_0x5c62fe(0x1f8)+_0xc94f7d+'_\x20DE\x20LA\x20FILA\x20_'+fila+'_\x20Y\x20COLUMNA\x20_'+columna+'_*');return;}else intentos-=0x1,await _0x2e6604[_0x5c62fe(0x1e1)](_0x5c62fe(0x20b)+intentos+'_\x20INTENTOS!!*'+(intentos===0x1?'':_0x5c62fe(0x20d)+sopaPalabra+_0x5c62fe(0x1f1))+'\x0a\x0a'+(intentos===0x1?_0x5c62fe(0x209)+sopaPalabra+'_\x20SE\x20ENCUENTRA\x20EN\x20LA\x20DIRECCIÓN\x20_\x22'+_0xc94f7d+_0x5c62fe(0x20f):'')+sopaNube);}}};handler[_0x4b934a(0x1f3)]=/^(sopa)$/i;export default handler;function _0x4a76(){const _0x93e891=['\x20\x20*╰','MOTOS','charCodeAt','_\x20DE\x20LA\x20FILA\x20_','floor','8QvzonB','VIRUS','toLowerCase','25ATZBor','split','reply','833100nhUyDW','replace','diagonalDerecha','\x22_\x20ESTA\x20EN\x20LA\x20FILA\x20','284052ewPJjc','\x20\x20*╭','COMPUTER','GITHUB','\x20\x20\x20','*CORRECTO!!\x20LA\x20PALABRA\x20_\x22','\x22_\x20EN\x20LA\x20SOPA\x20DE\x20LETRAS,\x20TIENE\x20_','_\x20Y\x20COLUMNA\x20_','\x20|\x20','8073318sfsgxL','horizontal','```','CARRO','command','2399568KzMEXr','sender','COLORES','WHATSAPP','\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_','*AGOTASTE\x20LOS\x20INTENTOS!!\x20LA\x20PALABRA\x20_\x22','CELULAR','MARCADORES','\x20\x20\x20\x20\x20','ROBOT','\x22_\x20DE\x20LA\x20PALABRA\x20_\x22','charAt','1255359aJveSK','689428QQsQMK','join','\x22_*\x0a\x0a*EJEMPLO:*\x0a❇️\x20```','*HAY\x20UN\x20USUARIO\x20EN\x20EL\x20JUEGO,\x20ESPERE\x20HASTA\x20QUE\x20TERMINE\x20DE\x20JUGARLO*','length','10EXbDmZ','ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ','🔠\x20*SOPA\x20DE\x20LETRAS*\x20🔠\x0a*ENCUENTRE\x20LA\x20PALABRA\x20_\x22','```💡\x20PISTA!!```\x0a*LA\x20PALABRA\x20_','random','*INCORRECTO.\x20TE\x20QUEDAN\x20_','662049PaWVCg','\x0a*PALABRA\x20A\x20ENCONTRAR:*\x20```','toUpperCase','\x22_*\x0a\x0a',',\x20COLUMNA\x20','repeat','╮*\x0a','36fTmASk','vertical','3YMbDoV'];_0x4a76=function(){return _0x93e891;};return _0x4a76();}
