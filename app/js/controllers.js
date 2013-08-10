'use strict';

/* Controllers */


angular.module('yamma.controllers', ['yamma.services']).
    controller('Milestones', ["$scope","MilestoneService", function(scope, MilestoneService) {
        scope.MilestoneService = MilestoneService;
    }]);






