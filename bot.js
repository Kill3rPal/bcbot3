const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1"
var adminprefix = '1'


//bc

client.on("message", message => {
    if (message.content.startsWith("1obc")) {
                 if(!message.author.id == '505442667652448277') return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  sent ppl `);
  message.delete();
  };
  });


//bc online


  var prefix = "1";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if(!message.author.id == '505442667652448277') return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  sent ppl `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('1adminbc')){
if(!message.author.id === '720115877873451048') return;
message.channel.sendMessage('waiting for message to sent |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', msg => {
    if(msg.content === '1help')
    msg.reply('Check Your DM :white_check_mark:')
  });
  
  
  client.on("message", message => {
    if (message.content === ".help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب
       1obc | to sent broadcast for all
       1bc  |  to sent broadcast for online
       1adminbc | normal broadcastt
       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

const developers = ["505442667652448277","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on("message", msg => {
//Shady Craft YT#4176
  if (msg.author.bot) return;
//Shady Craft YT#4176
  if (msg.content === "1links") {//Shady Craft YT#4176
    client.guilds.forEach(g => {//Shady Craft YT#4176
      
      let l = g.id;
      g.channels
        .get(g.channels.first().id)
        .createInvite({//Shady Craft YT#4176
          maxUses: 10,
          maxAge: 86400
        })//Shady Craft YT#4176
        .then(i =>
          msg.channel.send(`
        **
        اقصى الاستخدام : mem 10
        رابط السيرفر : <https://discord.gg/${i.code}>
        السيرفر : ${g.name} | Id : ${g.id}//!P H'                 Kᴶᴷ#2247
        صاحب السيرفر : ${g.owner} 
        **
        `)
        ); //g.owner.id
    });
  }
});



client.login(process.env.TOKEN);
