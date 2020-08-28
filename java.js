const {MAIN_COLOUR, BASE_WIDTH, t, pad, template} = require('./util')

const java_skills = [
  {
    logo: 'spring',
    color: MAIN_COLOUR,
    msg: 'Spring',
    width: BASE_WIDTH
  }
]

const java_learning = [
  {
    logo: 'android',
    color: MAIN_COLOUR,
    msg: 'Android',
    width: BASE_WIDTH
  },
  {
    logo: 'android studio',
    color: MAIN_COLOUR,
    msg: 'Android Stuido',
    width: BASE_WIDTH
  }
]

const java_section = pad(`
### Java

My work with Java thus far has been for testnig and API development. I've begun learnnig mobile development recently. 

${t({
  logo: 'java',
  color: '0b9444',
  msg: 'Java',
  width: 50
})}
---
#### Skills:
${java_skills.map(t).join(' ')}
#### Learning:
${java_learning.length > 0 ? java_learning.map(t).join(' '): 'Nothing right now 🙃'}

`)

exports.java_skills = java_skills
exports.java_learning = java_learning
exports.java_section = java_section
