'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('yamma.services', [])
.value('version', '0.1')
.factory('MilestoneService', ['$rootScope', '$http', "$timeout", function(rootScope, http, timeout) {
    var milestones = [
            {id: "059b10af-7933-4b46-9741-990157de836b", description:"Finish the app", timeDebtEstimate: 900, timePaid: 90, timeCost: null, done: false},
            {id: "9da1327b-359c-41af-b0e1-4a93939fe00f", description:"Go to Bed",  timeDebtEstimate: 900, timePaid: 0, timeCost: null, done: false}
        ];
    
    function uuidgen(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
    
    timeout(function someWork(){
        MilestoneService.time = Math.round(new Date().getTime() / 1000);
        if(MilestoneService.working){
            for(var i = 0; i< milestones.length; i++){
                if(milestones[i].done===false){
                    milestones[i].timePaid++;
                    break;
                }
            }
        }
        timeout(someWork, 1000);
    },1000);
    /*
    http({method: 'GET', url: 'navigator_tree'}).
    success(function(data, status, headers, config) {
        MilestoneService.tree = data;
    }).
    error(function(data, status, headers, config) {
        alert('error retieving category info');
    });*/
    
    
    var MilestoneService = {
        milestones:milestones,
        working:true,
        time:0,
        length: function(){
            milestones.length;
        },
        
        toggleDone: function(milestone){
            milestone.done=!milestone.done;
        },
        
        addMilestone: function(description, timeDebtEstimate){
            milestones.push({
                id: uuidgen(),
                description: description,
                timeDebtEstimate: timeDebtEstimate,
                timePaid:0,
                timeCost: null,
                done:false
            });
        },
        timeText:function(milestone){
            var index = milestones.indexOf(milestone);
            // if its the first one, then treat it spectial
            if(index === 0){
                return milestone.timeDebtEstimate - milestone.timePaid+ ' s';
            }else if( index > 0){
                return milestone.timeDebtEstimate - milestone.timePaid+ ' s';
            }else{
                console.log("ERROR: pass a milestone in.");
            }
            alert(milestone);
        }
    };
    return MilestoneService;
}]);
