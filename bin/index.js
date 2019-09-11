/**
 * The `AppExpress` class provide and configure Express (depending of YAML configuration).
 *
 * The modules registers: View Folders, Static Folders, CSS Engines, Template Engine and Routers.
 *
 * <br><br>See <a href="#createAppServer">createAppServer</a>.
 *
 * @Class
 * @param      {ConfigLoader}    config     Allow to get Symbiose config in this this class
 */
function AppExpress(config) {
  this.config = config
}


module.exports = AppExpress


/**
 * Create the App Server with express.
 *
 * @name       AppExpress.createAppServer
 * @function
 * @param      {eventEmitter}    eventEmitter     eventEmitter
 * @return     {Express}         Returns a new instance of Express.
 */
AppExpress.prototype.createAppServer = function(eventEmitter) {

}