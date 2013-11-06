
(function() {
        var referenceService = function ($http, $q) {
            var serviceBase = '/api/dataservice/',
                reference = null,
                referenceFactory = {};

            referenceFactory.getReferences = function (pageIndex, pageSize) {
                return getPagedResource('reference', pageIndex,pagesize);
            };

            referenceFactory.addReference = function (reference) {
                return $http.post(serviceBase + 'Reference', reference).then(function(results) {
                    reference.id = results.data.id;
                    return results.data;
                })
            };

            function getPagedResource(baseResource, pageIndex, pageSize) {
                var resource = baseResource;
                resource += (arguments.length == 3) ? buildPagingUri(pageIndex, pageSize) : '';
                return $http.get(serviceBase + resource).then(function (response) {
                    var refs = response.data;

                    return {
                        totalRecords: parseInt(response.headers('X-InlineCount')),
                        results: refs
                    };
                });
            }

            return referenceFactory;
        };

        customersManager.customersApp.factory('referenceService', ['$http', '$q', referenceService]);
}());