'use strict'

var request = require('request-promise')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

var slackBaseUrl = 'https://hooks.slack.com'

app.use(bodyParser.json())

app.get('*', function (req, res) {
  var notification = req.body.message + ` Build <a href="${req.body.link}">#${req.body.build_version}</a>. ` +
        (req.body.notes) ? `Notes: ${req.body.notes}` : ``
  return request({
    method: 'POST',
    uri: slackBaseUrl + req.path,
    body: {
      username: 'pgyer',
      text: notification
    },
    json: true
  }).then(function (body) {
    return res.status(200).send()
  }).catch(function (error) {
    return res.status(error.statusCode || 500).send(error)
  })
})

app.listen(process.env.PORT || 4242, function () {
  console.log(`Listening on port ${process.env.PORT || 4242}!`)
})
