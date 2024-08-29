const { log, error } = console
module.exports = {
  debug: (message) => log(`[DEBUG] ${message}`),
  error: (message) => error(`[ERROR] ${message}`),
}
