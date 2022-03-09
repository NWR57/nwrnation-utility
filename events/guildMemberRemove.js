const Discord = require("discord.js")
const moment =require("moment")
module.exports = {
    run: async (client, member) => {

const leaveEmb = new Discord.MessageEmbed()
.setTitle(`${member.user.tag} left the server!`)
.setDescription(`Here is a descriptive information about the user :`)
.setThumbnail(member.user.displayAvatarURL({ format: "png", dynamic: false}))
.addFields({
  name : `__Member Count :__`,
  value : `${member.guild.memberCount} members`,
  inline : true
},{
  name : `__User and Id :__`,
  value :`**User Id :** ${member.id}
**User :** <@${member.id}>`,
  inline : true
},{
  name : `__Server Member Since :__`,
  value : `${moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(member.joinedAt).startOf('day').fromNow()}`,
  inline : true
},{
  name : `__Discord User Since :__`,
  value : `${moment(member.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(member.createdAt).startOf('day').fromNow()}`,
  inline : true
},{
  name : `__Roles :__`,
  value : `${member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`,
      inline:false
}
  
)
 if (member.guild.id === "856191026058625044") {
   client.channels.cache.get("950435360339546132").send({ embeds: [leaveEmb] })
}
      
  }
};