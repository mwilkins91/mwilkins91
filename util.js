const template = (props) => `https://img.shields.io/static/v1?logo=${encodeURIComponent(props.logo)}&logoColor=fff&label=&message=${encodeURIComponent(props.msg)}&labelColor=151515&color=${encodeURIComponent(props.color)}&style=for-the-badge&logoWidth=${encodeURIComponent(props.width)}`
const t = (p) => `![${p.msg}](${template(p)})`
const prnt = (args) => console.log(template(args))

const MAIN_COLOUR = '0b9444'

const pad = (str) => str.split('\n').map(l => '   ' + l).join('\n')

const BASE_WIDTH = 30


exports.template = template
exports.t = t
exports.prnt = prnt
exports.MAIN_COLOUR = MAIN_COLOUR
exports.pad = pad
exports.BASE_WIDTH = BASE_WIDTH
