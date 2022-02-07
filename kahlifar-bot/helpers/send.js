const { MessageEmbed } = require("discord.js");
const { client } = require("../index.js")
const { sleep } = require(`${process.cwd()}/helpers/sleep.js`)
const data = require(`${process.cwd()}/properties.json`)

exports.sendError = async (message, content, doDelete) => {
    var msg =  {}
    let errorEmbed = new MessageEmbed()
        .setColor(data.helpers.send.colors.error)
        .setTitle(data.helpers.send.prefixTitle.error)
        .setDescription(content)
    if (message.type == "APPLICATION_COMMAND") {
        msg = await message.reply({ embeds: [errorEmbed], fetchReply: true })
    } else {
        msg = await message.channel.send({ embeds: [errorEmbed], fetchReply: true })
    }
    if (doDelete) {
        await sleep(data.deleteTime)
        msg.delete()
        message.delete()
    }
}


exports.sendInfo = async (message, content, doDelete) => {
    var msg = {}
    let infoEmbed = new MessageEmbed()
        .setColor(data.helpers.send.colors.info)
        .setTitle(data.helpers.send.prefixTitle.info)
        .setDescription(content)
    if (message.type == "APPLICATION_COMMAND") {
        msg = await message.reply({ embeds: [infoEmbed], fetchReply: true })
    } else {
        msg = await message.channel.send({ embeds: [infoEmbed], fetchReply: true })
    }
    if (doDelete) {
        await sleep(data.deleteTime)
        msg.delete()
    }
}


exports.sendWarn = async (message, content, doDelete) => {
    var msg =  {}
    let errorEmbed = new MessageEmbed()
        .setColor(data.helpers.send.colors.warning)
        .setTitle(data.helpers.send.prefixTitle.warning)
        .setDescription(content)
    if (message.type == "APPLICATION_COMMAND") {
        msg = await message.reply({ embeds: [errorEmbed], fetchReply: true })
    } else {
        msg = await message.channel.send({ embeds: [errorEmbed], fetchReply: true })
    }
    if (doDelete) {
        await sleep(data.deleteTime)
        msg.delete()
        message.delete()
    }
}


exports.sendSuccess = async (message, content, doDelete) => {
    var msg =  {}
    let errorEmbed = new MessageEmbed()
        .setColor(data.helpers.send.colors.success)
        .setTitle(data.helpers.send.prefixTitle.success)
        .setDescription(content)
    if (message.type == "APPLICATION_COMMAND") {
        msg = await message.reply({ embeds: [errorEmbed], fetchReply: true })
    } else {
        msg = await message.channel.send({ embeds: [errorEmbed], fetchReply: true })
    }
    if (doDelete) {
        await sleep(data.deleteTime)
        msg.delete()
        message.delete()
    }
}