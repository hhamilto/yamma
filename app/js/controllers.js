'use strict';

/* Controllers */


function Milestones($scope, $timeout){
    $scope.milestones = [
        {text:"Finish the app", due_at: 1364125430, done_at: null, toggleDone: toggleDone,  buttonText:buttonText, done:done, timeLeft:timeLeft},
        {text:"Go to Bed", due_at: 1364126430, done_at: null, toggleDone: toggleDone, buttonText:buttonText, done:done, timeLeft:timeLeft}
        
    ];
    
    $scope.num_milestones = function(){
        return 5;
        
    };
    
    function toggleDone(){
        if(!this.done()){
            this.done_at = Math.round(new Date().getTime() / 1000);
        }else{
            this.done_at = null;
        }
    }
    
    function buttonText(){
        if(this.done()){
            return "Just Kidding...";
        }else{
            return "Done";
        }
    }
    
    function done(){
        return this.done_at != null;
    }
    
    function timeLeft(arg){
        console.log(arg);
        return this.due_at - $scope.time;
    }
    
    
    $timeout(function someWork(){
        $scope.time = Math.round(new Date().getTime() / 1000);
        $timeout(someWork, 1000);
    },1000);
    
    
}

function MyCtrl2() {
}
MyCtrl2.$inject = [];
