'use strict';

/* Controllers */


function Milestones($scope, $timeout){
    // the 70s
    var time = 0;
    $scope.working = true;
    
    $scope.milestones = [
        {milestoneText:"Finish the app", timeDebt: 900, timePaid: 90, timeCost: null, done: false},
        {milestoneText:"Go to Bed",  timeDebt: 900, timePaid: 0, timeCost: null, done: false}
    ];
    
    
    $scope.num_milestones = function(){
        $scope.milestones.length;
    };
    
    $timeout(function someWork(){
        time = Math.round(new Date().getTime() / 1000);
        if($scope.working){
            $scope.milestones[0].timePaid++;
        }
        $timeout(someWork, 1000);
    },1000);
    
    $scope.addMilestone = function(arg){
        alert(arg);
    };
    
    $scope.timeText = function(milestone){
        var index = $scope.milestones.indexOf(milestone);
        // if its the first one, then treat it spectial
        if(index === 0){
            return milestone.timeDebt - milestone.timePaid+ ' s';
        }else if( index > 0){
            return milestone.timeDebt - milestone.timePaid+ ' s';
        }else{
            console.log("ERROR: pass a mile stone in.");
        }
        alert(milestone);
    };
    
    $scope.icon = function(milestone){
        if(milestone.done){
            return 'icon-arrow-left';
        }else{
            return 'icon-ok';
        }
    };
    
    $scope.toggleDone = function(milestone){
        milestone.done = !milestone.done;
    };
    
    $scope.buttonText = function(milestone){
        if(milestone.done){
            return 'JK';
        }else{
            return 'DONE';
        }
    };
    
}

function MyCtrl2() {
}
MyCtrl2.$inject = [];
