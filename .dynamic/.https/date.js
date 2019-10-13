module.exports = (request, response) => {
  const now = new Date().toString()
  response
    .type('html')
    .end(now)
}
