/*:
 * @plugindesc Disable the f5 button when the game is started.
 *
 * @author FzZ
 *
 * @help
 *
 * There's nothing on this help file
 */

(function () {
  var alias = SceneManager.onKeyDown;
  SceneManager.onKeyDown = function (event) {
    if (event.keyCode !== 116) alias.call(this, event);
  };
})();
