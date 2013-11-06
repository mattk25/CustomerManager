/**
 * Created by matt on 11/3/13.
 */
services.factory('userService', [function() {
    var sdo = {
        isLoggedIn: false,
        username: ''
    };

    return sdo;
}]);
