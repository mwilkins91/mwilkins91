const { javascript_section } = require('./javascript')
const { php_section } = require('./php')
const { java_section } = require('./java')
const { devops_section } = require('./devops')
const python_section = require('./python').python_section


const skills = `
- ${javascript_section.trimStart()}
- ${python_section.trimStart()}
- ${devops_section.trimStart()}
- ${php_section.trimStart()}
- ${java_section.trimStart()}
`


console.log(`
# 👋 Welcome!

## Who?
My name is Mark Wilkins, a software developer from Toronto Canada. 
I love animals, tech, food, games, helping people, and travel. Many of my projects focus on one (or more!) of these things!


## What?
I work at [TWG](https://twg.io/) and [The Toronto Humane Society](https://www.torontohumanesociety.com/).

I love to hack away on things. If you would like to colaborate, please drop me a line! You'll find some of my skills/interests below.


## Tech-Interests
- [Raspberry Pi](https://www.raspberrypi.org/) (or similar) projects
- [Screeps](https://screeps.com/)
- Machine Learning
- Learning new languages! (next up... Rust?)
- Video Game Development




Ps. Big thanks to [@BeckyPollard](https://github.com/BeckyPollard) for the readme design insporation!

${skills}
`)
