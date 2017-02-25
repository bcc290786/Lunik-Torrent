;(function () {
  /**
   * Format modules.
   * @constructor
  */
  function _Format () {}

  /**
   * Format bytes to b/kb/mb/gb/tb.
   * @param {int} bytes - Bytes numbers.
   * @return {float} - Formated size.
  */
  _Format.prototype.size = function (bytes) {
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) { return '0 b' }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`
  }

  /**
   * Format speed to kb/s,mb/s.
   * @param {int} bytes - Bytes numbers.
   * @return {float} - Formated speed.
  */
  _Format.prototype.speed = function (bytes) {
    var bits = bytes * 8
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    if (bits === 0) { return '0 b' }
    var i = parseInt(Math.floor(Math.log(bits) / Math.log(1024)), 10)
    return `${Math.round(bits / Math.pow(1024, i), 2)} ${sizes[i]}/秒`
  }

  /**
   * Format Date to yyyy/mm/dd hh:mm:ss.
   * @param {Date} date - Date to format.
   * @return {string} - Formated date.
  */
  _Format.prototype.date = function (date) {
    date = new Date(date)
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}` /* + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() */
  }

  /**
   * Format seconds to 00j - 00h 00m 00s.
   * @param {int} time - Seconds.
   * @return {string} - Formated time.
  */
  _Format.prototype.time = function (time) {
    var x = time / 1000
    var seconds = Math.round(x % 60)
    x /= 60
    var minutes = Math.round(x % 60)
    x /= 60
    var hours = Math.round(x % 24)
    x /= 24
    var days = Math.round(x)

    var returnString = ''

    if (days > 0) { returnString += days + '天 - ' }
    if (hours > 0) { returnString += hours + '時 ' }
    if (minutes > 0) { returnString += minutes + '分 ' }
    if (seconds > 0) { returnString += seconds + '秒 ' }

    return returnString
  }

  /**
   * Get the extention of a file.
   * @param {object} file - File infos.
   * @return {string} - Extension.
  */
  _Format.prototype.extention = function (file) {
    if (file.isfile) {
      return file.name.split('.')[file.name.split('.').length - 1]
    } else {
      return 'dir'
    }
  }

  /**
   * Clean file name and lowercase.
   * @param {string} name - File name.
   * @return {string} - Cleaned name.
  */
  _Format.prototype.name = function (name) {
    name = name.toLowerCase()
      .replace(/\.[a-z0-9]*$/, '') // remove extension
      .replace(/\./g, ' ') // point
      .replace(/s[0-9][0-9]e[0-9][0-9]/g, '') // numero d'episode
      .replace(/ $/, '') // espace en fin de chaine

    return name
  }

  App.Format = new _Format()
})()
