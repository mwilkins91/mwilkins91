const {MAIN_COLOUR, BASE_WIDTH, t, pad, template} = require('./util')

const php_skills = [
  {
    logo: 'wordpress',
    color: MAIN_COLOUR,
    msg: 'Wordpress',
    width: BASE_WIDTH
  },
  {
    logo: 'laravel',
    color: MAIN_COLOUR,
    msg: 'Laravel',
    width: BASE_WIDTH
  },
  {
    logo: 'cakePHP',
    color: MAIN_COLOUR,
    msg: 'Cake',
    width: BASE_WIDTH
  }

]

const php_learning = [
]

const php_section = pad(`
### PHP

While I am familiar with PHP, it's not my favorite language. Often my use of it is related to environmental constraints (ex. hosting a site on a PHP enabled cPanel/apache type service), ease of use, or legacy code. 
${t({
  logo: 'php',
  color: '0b9444',
  msg: 'PHP',
  width: 50
})}
---
#### Skills:
${php_skills.map(t).join(' ')}
#### Learning:
${php_learning.length > 0 ? php_learning.map(t).join(' '): 'Nothing right now 🙃'}

`)

exports.php_skills = php_skills
exports.php_learning = php_learning
exports.php_section = php_section
