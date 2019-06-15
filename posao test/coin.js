
var request = new XMLHttpRequest()


request.open('GET', 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion', true)

request.onload = function () {
  // Begin accessing JSON data here
  }
}

// Send request
request.send()