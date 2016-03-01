'use strict'

var request = require('request')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

var slackBaseUrl = 'https://hooks.slack.com'

app.use(bodyParser.json())

app.get('*', function (req, res) {
  var notification = req.body.Message + ` Build <a href="${req.body.Link}">#${req.body.Build_version}</a>. ` +
        (req.body.Notes) ? `Notes: ${req.body.Notes}` : ``
  return request({
    method: 'POST',
    uri: slackBaseUrl + req.path,
    body: {
      username: 'pgyer',
      text: notification
    },
    json: true
  }).then(function (body) {
    return res.status(200).send(body)
  }).catch(function (error) {
    return res.status(500).send(error)
  })
})

app.listen(4242, function () {
  console.log('Example app listening on port 3000!')
})
