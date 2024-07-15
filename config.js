const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923191833569";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_04_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgMixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICA4MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6ZjE3VGJyd2gvRU9kQmVUR1lMbU1JZVZUOXR5TXQzNTEzbm5kL0M5SnlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE5MTgzMzU2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTA2ODUxNjdENTlDNkZBNDk3RjYyMUMyREEzRTIzQjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDM0MjQzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJIcC16WEl6U20yV285X2JJczBPTkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGJiYWIzZjYtNDE4ZS00ZDM4LThmMjYtNjRjYjIzN2JhNmY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDEyMCxcbiAgICAgIDcsXG4gICAgICAxNTQsXG4gICAgICAxMDIsXG4gICAgICAyNTEsXG4gICAgICA4LFxuICAgICAgMTk1LFxuICAgICAgMjQxLFxuICAgICAgMTM5LFxuICAgICAgMjE4LFxuICAgICAgMzQsXG4gICAgICAxNjIsXG4gICAgICAxNTYsXG4gICAgICAxMTEsXG4gICAgICAxOTgsXG4gICAgICAyMDQsXG4gICAgICA0MCxcbiAgICAgIDQzLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgNTUsXG4gICAgICA2MyxcbiAgICAgIDE5OSxcbiAgICAgIDg3LFxuICAgICAgMTc4LFxuICAgICAgMTAxLFxuICAgICAgMTY1LFxuICAgICAgMTExLFxuICAgICAgMTkzLFxuICAgICAgNjksXG4gICAgICAxNTMsXG4gICAgICAxOTEsXG4gICAgICA4MixcbiAgICAgIDExNCxcbiAgICAgIDEyOSxcbiAgICAgIDE1LFxuICAgICAgMjQzLFxuICAgICAgMTAyLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVFMTVQxSjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5MTgzMzU2OTo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc2NDE2MTAwNDg3MTc4OjYxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmYvwnZmH8J2YvPCdmZQt8J2YvfCdmYrwnZmU8J+ltfCfkYUg8J+SplwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5Sjk0d0VFUHpMMDdRR0dBb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidVVhY0l0Ri9NRmJhekNPbmZZV3UvUW5seTgxRVdXWGNvNWhDaXhVR1RHQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuZ3hzMjBKTUtIOGtLT3dGU2gwcHJCa0tQQlZhcS9jNjFreVVWYzNFZHdZTjhNWTdPbE1sbzE0N3VUdTV5ZHdrYUw5QXR4VXhEYTF5eXhHMHhzYjRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOTU5OcXhURHZhSGVydkJNNVVpNyt3WTNjcGtHcnI1aUJHem92L3I5cytGbXlmRUNmK05Rb3Y5c0RmeFg3enFFcWJhV29IR3JQcENEMFJsbmRrcUxCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTE4MzM1Njk6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwMzQyMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNakFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1qQS5qc29uIjogIntcImtleURhdGFcIjpcIk94TzNaZTFEdkxWK3RUTGRwNEJKSW9PTW82OXZETkFPK0hueFhpZEtKM1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwMDg1ODUwOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzc0MjEyMzE1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
