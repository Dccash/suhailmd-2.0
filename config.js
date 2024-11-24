const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349032022131";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_23_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgMTAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MixcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk0LFxuICAgICAgICA2MyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICA4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODksXG4gICAgICAgIDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoYm5zS0dNRmRUcnBCVENadEpMUnpVQW1DYW1ZUlBPbUxidlYzeVZ2ZDJrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoNzZvdGFjZlFLZWJ4S1pDakphbjNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiYzM1NTgyLTNiOWYtNGY2ZS04YTBhLTgyZTdmMjUwN2Q4NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICA3MSxcbiAgICAgIDgyLFxuICAgICAgMTAzLFxuICAgICAgMTA0LFxuICAgICAgMjMyLFxuICAgICAgMTgzLFxuICAgICAgMTQ4LFxuICAgICAgOTIsXG4gICAgICA5OSxcbiAgICAgIDIyNSxcbiAgICAgIDgzLFxuICAgICAgMTc3LFxuICAgICAgMjM0LFxuICAgICAgMTMyLFxuICAgICAgMjQzLFxuICAgICAgODIsXG4gICAgICAxNDAsXG4gICAgICAzMCxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjYsXG4gICAgICAyNDQsXG4gICAgICAxMjUsXG4gICAgICAzMCxcbiAgICAgIDIyNixcbiAgICAgIDk3LFxuICAgICAgMTIyLFxuICAgICAgMTczLFxuICAgICAgMTk1LFxuICAgICAgODEsXG4gICAgICAxOTMsXG4gICAgICAyMTksXG4gICAgICA5MSxcbiAgICAgIDEzOSxcbiAgICAgIDE3NSxcbiAgICAgIDY3LFxuICAgICAgMTIsXG4gICAgICAxMTcsXG4gICAgICAyMzUsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYNlpUM0pGS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjAyMjEzMTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzcwOTg4MDc2OTM0MDU6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQQ0t1WmNDRU82cDQ3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk02bzR0bHF2bEpSQmNSRDZKeCtYNkV1MEhZbUl1Zk5rZUZpWlZEM2ljVjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTm5reDZHbkl1Ni9tNS9zc0JkOVRKQUd1K3UyOUU4NTQvVElhR2lxM3hmUDFyRE1odzVLZ0FadlpYMWgrZU4zMVIra013QzdXT3AwV0ZRWUNxNWpxREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK2JYenlzWE5qUzc2WWRjbk5oWjRkOVNDcjc3UjdST2JFd3dzUmlkdURvRVZOZVd1ZnVYQytyZDJkTVlneExuNHd1dTR1cHNRRkxJWktUbHF6L3MxaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMjAyMjEzMTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3Nzc3NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHRy9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdHLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DC Cash",
  ownername:process.env.OWNER_NAME|| "DC Cash",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
