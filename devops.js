const {MAIN_COLOUR, BASE_WIDTH, t, pad, template} = require('./util')

const devops_skills = [
  {
    logo: 'Docker',
    color: MAIN_COLOUR,
    msg: 'Docker',
    width: BASE_WIDTH
  },
  {
    logo: 'GNU Bash',
    color: MAIN_COLOUR,
    msg: 'Bash Scripting',
    width: BASE_WIDTH
  },
  {
    logo: 'Linux',
    color: MAIN_COLOUR,
    msg: 'Unix/Linux',
    width: BASE_WIDTH
  },
  {
    logo: 'Amazon AWS',
    color: MAIN_COLOUR,
    msg: 'AWS',
    width: BASE_WIDTH
  },
  {
    logo: 'PostgreSQL',
    color: MAIN_COLOUR,
    msg: 'PostgreSQL',
    width: BASE_WIDTH
  },
  {
    logo: 'mongoDB',
    color: MAIN_COLOUR,
    msg: 'MongoDB',
    width: BASE_WIDTH
  },
  {
    logo: 'MySQL',
    color: MAIN_COLOUR,
    msg: 'MySQL',
    width: BASE_WIDTH
  },
  {
    logo: 'DigitalOcean',
    color: MAIN_COLOUR,
    msg: 'Digital Ocean',
    width: BASE_WIDTH
  },
  {
    logo: 'Heroku',
    color: MAIN_COLOUR,
    msg: 'Heroku',
    width: BASE_WIDTH
  },
  {
    logo: 'Terraform',
    color: MAIN_COLOUR,
    msg: 'Terraform',
    width: BASE_WIDTH
  },
  {
    logo: 'CircleCI',
    color: MAIN_COLOUR,
    msg: 'Circle CI',
    width: BASE_WIDTH
  },
  {
    logo: 'Github Actions',
    color: MAIN_COLOUR,
    msg: 'Github Actions',
    width: BASE_WIDTH
  },
  {
    logo: 'Travis CI',
    color: MAIN_COLOUR,
    msg: 'Travis CI',
    width: BASE_WIDTH
  }
]

const devops_learning = [
  {
    logo: 'microsoft azure',
    color: MAIN_COLOUR,
    msg: 'Azure',
    width: BASE_WIDTH
  }
]

const devops_section = pad(`
### DevOps, Scripting, Infrastructure

I have worked with a variety of tools to host/run web applications, services, etc. These are some of my favorites. 

${t({
  logo: 'Amazon AWS',
  color: '0b9444',
  msg: 'DevOps',
  width: 50
})}
---
#### Skills:
${devops_skills.map(t).join(' ')}
#### Learning:
${devops_learning.length > 0 ? devops_learning.map(t).join(' '): 'Nothing right now 🙃'}

`)

exports.devops_skills = devops_skills
exports.devops_learning = devops_learning
exports.devops_section = devops_section
