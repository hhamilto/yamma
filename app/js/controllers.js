'use strict';

/* Controllers */


function Milestones($scope, $timeout){
    $scope.milestones = [
        {milestoneText:"Finish the app", timeDebt: 900, timePaid: 90, timeCost: null, done: false},
        {milestoneText:"Go to Bed",  timeDebt: 900, timePaid: 0, timeCost: null, done: false}
    ];
    
    $scope.working = true;
    
    $scope.num_milestones = function(){
        $scope.milestones.length();
    };
    
    function toggleDone(milestone){
        milestone.done = !milestone.done;
    }
    
    function buttonText(milestone){
        if(milestone.done){
            return 'JK';
        }else{
            return 'DONE';
        }
    }
    
    $timeout(function someWork(){
        $scope.time = Math.round(new Date().getTime() / 1000);
        for(var i = 0; i < $scope.milestones.length() &&  $scope.working; i++){
            $scope.milestones[i].timePaid++;
        }
        $timeout(someWork, 1000);
    },1000);
    
    $scope.addMilestone = function(arg){
        alert(arg);
    };
}

function MyCtrl2() {
}
MyCtrl2.$inject = [];
