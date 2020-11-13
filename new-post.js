#!/usr/bin/env node

const fs = require('fs');
const slugify = require('slug');
const dateFns = require('date-fns');

const title = process.argv[2];

if (!title) {
  throw 'A title is required!';
}
const slug = slugify(title.toLowerCase());
const date = dateFns.formatISO(new Date());
const dir = `./content/blog/${slug}`;


if (!dir) {
  throw 'This post already exists!';
}

fs.mkdirSync(dir);

fs.writeFileSync(
  `${dir}/index.md`,
  `---
title: "${title}"
date: "${date}"
---`,
  function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(`${title} was created!`)
  },
);


function writeFile(path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) return cb(err);

    fs.writeFile(path, contents, cb);
  });
}