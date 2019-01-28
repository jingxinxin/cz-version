const exec    = require('child_process').exec
const command = 'git log --pretty=format:"%s"'
const colors  = require('colors')

// var lib        = require('./lib/lib.js')
// module.exports = lib //暴露模块

// 获取目标git log 列表
const getTypeLogList = (arr = [], type) => arr.filter(item => {
  const regex = new RegExp(`${type}.*`)
  if (regex.test(item)) {
    return item !== undefined
  }
})

const getCommitizenVersion = (options = {}) => {
  exec(command, 'utf8', (err, logStr, stderr) => {
    if (err) {
      console.log('err:', err)
      console.log('stderr:', stderr)
    } else {
      const types = [ 'feat' ]

      let logList = logStr.split('\n')
      let sum     = logList.length
      let typeLogList

      types.forEach(type => {
        typeLogList = getTypeLogList(logList, type)
        if (options.detail) {
          console.log(logList)
          console.log(typeLogList)
        }
        console.log('Current Project Version By Git Logs:', `v0.${typeLogList.length}.${sum - typeLogList.length}`.red)
      })
    }
  })
}

module.exports = {
  getCommitizenVersion
}
