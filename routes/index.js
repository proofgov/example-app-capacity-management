const { Router } = require('express')
const AvailabilityController = require(APP_ROOT + '/controllers/availability-controller')

const routes = Router()

routes.get('/', (request, response) =>
  response.send(
    "<h1>Welcome to PROOF's ECCC On Site Access API</h1>" +
      '<p>To read how to make an app like this, visit <a href="https://github.com/proofgov/example-form-query-api">Proof\'s github form query api example page.</a>'
  )
)

// building name, floor, request date and request time as parameters.
routes.get('/is-time-available', AvailabilityController.getAvailability)

module.exports = routes
