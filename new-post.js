#!/usr/bin/env node

const fs = require('fs')
const slugify = require('slug')
const dateFns = require('date-fns')

const title = process.argv[2]

if (!title) {
  throw 'A title is required!'
}
const dir = `./content/blog/${slugify(title.toLowerCase())}`

if (!dir) {
  throw 'This post already exists!'
}

fs.mkdirSync(dir)

let path = `${dir}/index.md`
let content = `---
  title: "${title}"
  date: "${dateFns.formatISO(new Date())}"
---`

fs.writeFileSync(path, content, function (err) {
  if (err) {
    return console.log(err)
  }
})
