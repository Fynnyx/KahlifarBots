const client = require("../index.js")
const statusList = require(`${process.cwd()}/status.json`)
const data = require(`${process.cwd()}/properties.json`)
const logger = require("../handlers/logger")



exports.startStatus = async () => {
    statusInterval = setInterval(() => {
        try {
            const statues = statusList
            let currentStatus = statues.indexOf(client.user.presence.activities[0].name);
            let index = Math.floor(Math.random() * (statues.length))
            while (currentStatus == index) {
                index = Math.floor(Math.random() * (statues.length))
            }
            let status = statues[index]
            client.user.setActivity({ name: status.value, type: status.type })
        } catch (e) {
            logger.error(e)
        }
    }, data.commands.status.time * 1000)
}


exports.stopStatus = async () => {
    clearInterval(statusInterval)
    client.user.setActivity(data.commands.status.default)
}


exports.setStatus = async (message) => {
    clearInterval(statusInterval)
    client.user.setActivity(message)
}