const {MAIN_COLOUR, BASE_WIDTH, t, pad, template} = require('./util')

const python_skills = [
  {
    logo: 'flask',
    color: MAIN_COLOUR,
    msg: 'Flask',
    width: BASE_WIDTH
  },
  {
    logo: 'jupyter',
    color: MAIN_COLOUR,
    msg: 'Jupyter',
    width: BASE_WIDTH
  },
  {
    logo: 'pandas',
    color: MAIN_COLOUR,
    msg: 'Pandas',
    width: BASE_WIDTH
  },
  {
    logo: 'pypi',
    color: MAIN_COLOUR,
    msg: 'PyPi',
    width: BASE_WIDTH
  },
  {
    logo: 'pycharm',
    color: MAIN_COLOUR,
    msg: 'PyCharm',
    width: BASE_WIDTH
  },

]

const python_learning = [
  {
    logo: 'tensorflow',
    color: MAIN_COLOUR,
    msg: 'TensorFlow',
    width: BASE_WIDTH
  },
  {
    logo: 'keras',
    color: MAIN_COLOUR,
    msg: 'Keras',
    width: BASE_WIDTH
  },
  {
    logo: 'django',
    color: MAIN_COLOUR,
    msg: 'Django',
    width: BASE_WIDTH
  }

]

const python_section = pad(`
### Python

Python has quickly become one of my favorite languages. Its versatility and ease of use cannot be overstated.

${t({
  logo: 'python',
  color: '0b9444',
  msg: 'Python',
  width: 50
})}
---
#### Skills:
${python_skills.map(t).join(' ')}
#### Learning:
${python_learning.map(t).join(' ')}

`)

exports.python_skills = python_skills
exports.python_learning = python_learning
exports.python_section = python_section
