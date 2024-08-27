/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require('express')
const PORT = 5000

const fs = require('fs')
const path = require('path')

const app = express()

app.get('/hw1/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params
  const dirPath = path.join(__dirname, dir)

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).send(err.message)
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${ext}`
    )

    res.json(filteredFiles)
  })
})

app.get('/hw2/api/parsetime', (req, res) => {
  const iso = req.query.iso
  const date = new Date(iso)

  const response = {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  }
  res.json(response)
})

app.get('/hw2/api/unixtime', (req, res) => {
  const iso = req.query.iso
  const date = new Date(iso)

  const response = {
    unixtime: date.getTime(),
  }
  res.json(response)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
