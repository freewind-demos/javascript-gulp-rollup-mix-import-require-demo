import { toLower } from './toLower';

function hello() {
    const { capitalize } = require("./capitalize");
    console.log(`Hello, ${capitalize(toLower('gulp'))}`)
}

hello();