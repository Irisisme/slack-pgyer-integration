[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Pgyer build notifications for Slack

> A tiny Node.js app that receives webhooks from [Pgyer](https://pgyer.com) and re-posts them as Slack formatted hooks.  

## Usage

There is a running version of this code on Heroku that you are welcome to use:  
[http://slack-pgyer-integration.herokuapp.com](http://slack-pgyer-integration.herokuapp.com)  
Alternatively you could deploy the code yourself using the Heroku button above.

## How-To

1. Generate an incoming webhook in the Slack integration settings e.g. `https://hooks.slack.com/services/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`
2. Switch the domain from `hooks.slack.com` to `slack-pgyer-integration.herokuapp.com`
3. Create a new **Version updated** webhook on Pgyer pointing to this url. e.g. `http://slack-pgyer-integration.herokuapp.com/services/T024XLT1F/B031BS1D0/C4YkI21H6jPQ59PHLQLD3S21`

## Result

![Pgyer Slack Bot](http://s12.postimg.org/cq4oezu3f/devops_Melotic_Slack.png)
