const Canvas = require("canvas")
const Discord = require("discord.js")
const background = "https://i.imgur.com/8DKf8lX.png"
const { registerFont, createCanvas } = require('canvas')
registerFont('content/assets/fonts/gos_font.ttf', { family: 'font'})
module.exports = {
    run: async (client, member) => {


const dim = {
  height: 675,
  width: 1200,
  margin: 50
}

const av = {
  size: 256,
  x: 480,
  y: 170
}

const generateImage = async (member) => {
  let oogaBuga = member.user.tag
  let iLikekids = member.guild.memberCount
  let username = member.user.username
  let discrim = member.user.discriminator
  let avatarURL = member.user.displayAvatarURL({ format: "png", dynamic: false, size: av.size })

  const canvas = Canvas.createCanvas(dim.width, dim.height)
  const ctx = canvas.getContext("2d")

  // draw in the background
  const backimg = await Canvas.loadImage(background)
  ctx.drawImage(backimg, 0, 0)

  const avimg = await Canvas.loadImage(avatarURL)
  ctx.save()

  ctx.beginPath()
  ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.clip()

  ctx.drawImage(avimg, av.x, av.y)
  ctx.restore()

  // write in text
  ctx.fillStyle = "black"
  ctx.textAlign = "center"

  // draw in Welcome
  ctx.font = "100px font"
  ctx.fillText("Welcome", dim.width / 2, dim.margin + 70)

  // draw in the username
  ctx.font = "70px font"
  ctx.fillText(oogaBuga, dim.width / 2, dim.height - dim.margin - 125)

  // draw in to the server
  ctx.font = "50px font"
  ctx.fillText("You are the " + iLikekids + "th member", dim.width / 2, dim.height - dim.margin - 50)

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
  return attachment
}


  const img = await generateImage(member)

  // member.guild.channels.cache.get('856191026058625044').send({
  //   content: `Hey ${member}, welcome to **${member.guild.name}!**  Make sure to read the <#781592242371952701> ,  get your <#781866203336409169> ,  and read the <#915180660262580235> .  Hope you have a good time here!`,
  // files: [img]
  // })

   if (member.guild.id === "856191026058625044") {
   client.channels.cache.get("950355725509607474").send({
      content: `Hey ${member}, welcome to **${member.guild.name}!**  Make sure to read the <#781592242371952701> ,  get your <#781866203336409169> ,  and read the <#915180660262580235> .  Hope you have a good time here!`,
  files: [img]
   })
}
  }
};