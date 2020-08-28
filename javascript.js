const {MAIN_COLOUR, BASE_WIDTH, t, pad, template} = require('./util')

const javascript_skills = [
  {
    logo: 'typescript',
    color: MAIN_COLOUR,
    msg: 'Typescript',
    width: BASE_WIDTH
  },
  {
    logo: 'react',
    color: MAIN_COLOUR,
    msg: 'React',
    width: BASE_WIDTH
  },
  {
    logo: 'react-router',
    color: MAIN_COLOUR,
    msg: 'React-Router',
    width: BASE_WIDTH
  },
  {
    logo: 'node.js',
    color: MAIN_COLOUR,
    msg: 'Node.js',
    width: BASE_WIDTH
  },
  {
    logo: 'webpack',
    color: MAIN_COLOUR,
    msg: 'Webpack',
    width: BASE_WIDTH
  },
  {
    logo: 'styled-components',
    color: MAIN_COLOUR,
    msg: 'Styled Components',
    width: BASE_WIDTH
  },
  {
    logo: 'jest',
    color: MAIN_COLOUR,
    msg: 'Jest',
    width: BASE_WIDTH
  },
  {
    logo: 'redux',
    color: MAIN_COLOUR,
    msg: 'Redux',
    width: BASE_WIDTH
  },
  {
    logo: 'material-ui',
    color: MAIN_COLOUR,
    msg: 'Material-Ui',
    width: BASE_WIDTH
  },
  {
    logo: 'polymer project',
    color: MAIN_COLOUR,
    msg: 'Polymer',
    width: BASE_WIDTH
  },
  {
    logo: 'vue.js',
    color: MAIN_COLOUR,
    msg: 'Vue.js',
    width: BASE_WIDTH
  },
  {
    logo: 'nuxt.js',
    color: MAIN_COLOUR,
    msg: 'Nuxt.js',
    width: BASE_WIDTH
  },
  {
    logo: 'next.js',
    color: MAIN_COLOUR,
    msg: 'Next.js',
    width: BASE_WIDTH
  },
  {
    logo: 'mocha',
    color: MAIN_COLOUR,
    msg: 'Mocha',
    width: BASE_WIDTH
  },
  {
    logo: 'jquery',
    color: MAIN_COLOUR,
    msg: 'Jquery',
    width: BASE_WIDTH
  },
  {
    logo: 'd3.js',
    color: MAIN_COLOUR,
    msg: 'D3.js',
    width: BASE_WIDTH
  },
  {
    logo: 'gulp',
    color: MAIN_COLOUR,
    msg: 'Gulp',
    width: BASE_WIDTH
  },
  {
    logo: 'babel',
    color: MAIN_COLOUR,
    msg: 'Babel',
    width: BASE_WIDTH
  },
  {
    logo: 'npm',
    color: MAIN_COLOUR,
    msg: 'NPM',
    width: BASE_WIDTH
  },
  {
    logo: 'yarn',
    color: MAIN_COLOUR,
    msg: 'Yarn',
    width: BASE_WIDTH
  },

]

const javascript_learning = [
  {
    logo: 'angular',
    color: MAIN_COLOUR,
    msg: 'Angular',
    width: BASE_WIDTH
  },
]

const javascript_section = pad(`
### Javascript

Javascript was the first programming language I truly felt like I mastered, and as such I have a deep love for the language (and its cousin, Typescript). 
I'm familiar with almost all popular frameworks and libraries to some extent, with the notable exception of Angular (but I'm working on that!). Below some of my preferred 
tech is listed. 

${t({
  logo: 'javascript',
  color: '0b9444',
  msg: 'Javascript',
  width: 50
})}
---
#### Skills:
${javascript_skills.map(t).join(' ')}
#### Learning:
${javascript_learning.map(t).join(' ')}
`)

exports.javascript_skills = javascript_skills
exports.javascript_learning = javascript_learning
exports.javascript_section = javascript_section
