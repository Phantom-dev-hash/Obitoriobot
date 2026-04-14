import { watchFile } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import chalk from 'chalk'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

/*⭑⭒━━━✦❘༒ 𝑂𝑏𝑖𝑡𝑜𝑟𝑖𝑜 𓆉︎ 𝐵𝑜𝑡 ༒❘✦━━━⭒⭑*/

global.prefisso = '.'
global.phantom = ['1(450)257-9028',]
global.owner = [
  ['1(450)257-9028', '𝕻𝖍𝖆𝖓𝖙𝖔𝖒ᵃⁿᵗⁱᵗʳᵒⁱᵉ', true],
  ['393533329322', 'leon/soldato di dio', true],

]
global.mods = ['1(450)257-9028', '393533329322']
global.prems = ['1(450)257-9028', '393533329322',]

/*⭑⭒━━━✦❘🌌༒ INFO BOT ༒⭐❘✦━━━⭒⭑*/

global.nomepack = '𝑂𝑏𝑖𝑡𝑜𝑟𝑖𝑜 𓆉︎ 𝐵𝑜𝑡'
global.nomebot = '✞˚🪦 𝑂𝑏𝑖𝑡𝑜𝑟𝑖𝑜 𝐵𝑜𝑡 💀˚✞'
global.wm = '𝑂𝑏𝑖𝑡𝑜𝑟𝑖𝑜 𓆉︎ 𝐵𝑜𝑡'
global.autore = '𝕻𝖍𝖆𝖓𝖙𝖔𝖒ᵃⁿᵗⁱᵗʳᵒⁱᵉ'
global.dev = '𝕻𝖍𝖆𝖓𝖙𝖔𝖒ᵃⁿᵗⁱᵗʳᵒⁱᵉ'
global.testobot = `༻𝑂𝑏𝑖𝑡𝑜𝑟𝑖𝑜 𝐵𝑜𝑡༺`
global.versione = pkg.version
global.errore = '⚠️ *Errore inatteso!* Usa il comando `.segnala <errore>` per avvisare lo sviluppatore.'

/*⭑⭒━━━✦❘༻📃 LINK 🌐༺❘✦━━━⭒⭑*/

global.repobot = 'https://github.com/realvare/varebot'
global.gruppo = 'https://chat.whatsapp.com/bysamakavare'
global.canale = 'https://whatsapp.com/channel/0029VbB41Sa1Hsq1JhsC1Z1z'
global.insta = 'https://www.instagram.com/samakavare'

/*⭑⭒━━━✦❘🗝️ API KEYS 🔒༺❘✦━━━⭒⭑*/

// Le keys con scritto "varebot" vanno cambiate con keys valide
// Nel README.md ci sono i vari link per ottenere le keys

global.APIKeys = {
    spotifyclientid: 'varebot',
    spotifysecret: 'varebot',
    browserless: 'varebot',
    tmdb: 'varebot',
    ocrspace: 'jjjsheu',
    assemblyai: 'varebot',
    google: 'varebot',
    googleCX: 'varebot',
    genius: 'varebot',
    removebg: 'varebot',
    openrouter: 'varebot',
    sightengine_user: 'varebot',
    sightengine_secret: 'varebot',
    lastfm: 'varebot',
}

/*⭑⭒━━━✦❘༻🪷 SISTEMA XP/EURO 💸༺❘✦━━━⭒⭑*/

global.multiplier = 1

/*⭑⭒━━━✦❘༻📦 RELOAD 📦༺❘✦━━━⭒⭑*/

let filePath = fileURLToPath(import.meta.url)
let fileUrl = pathToFileURL(filePath).href

const reloadConfig = async () => {
  console.log(chalk.bgHex('#3b0d95')(chalk.white.bold("File: 'config.js' Aggiornato")))
  try {
    await import(`${fileUrl}?update=${Date.now()}`)
  } catch (e) {
    console.error('[ERRORE] Errore nel reload di config.js:', e)
  }
}

watchFile(filePath, reloadConfig)