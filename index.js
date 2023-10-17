const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yaml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

