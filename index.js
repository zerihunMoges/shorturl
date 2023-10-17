const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yaml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

const templateHTML = fs.readFileSync(path.join(__dirname,'template.html'), 'utf-8')


for (let [slug, url] of Object.entries(redirects)){
    const html = templateHTML.replaceAll('https://example.com', url)
    const folderPath = path.join(__dirname, 'out', slug)
    fs.mkdirSync(folderPath, {recursive: true})
    fs.writeFileSync(path.join(folderPath, 'index.html'), html)
}