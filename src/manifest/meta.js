const {version} = require('../../package.json')
const icon_sizes = [16, 32, 48, 64, 128]
const icons = {}

icon_sizes.forEach(size => icons[size] = `icons/${size}.png`)

module.exports = {
  manifest_version: 2,
  version: version,
  version_name: `${version} Alpha (${getDate()})`,

  name: "__MSG_extName__",
  short_name: "NeatMarks",
  description: "__MSG_extDescription__",

  default_locale: "en",
  icons,
  offline_enabled: true,

  author: "shestakovsemen@gmail.com",
}


function getDate() {
  return new Date().toISOString().substr(0, 10)
}
