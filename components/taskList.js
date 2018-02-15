(function() {
  var taskList={
    bindings:{
      todoList:"<"
    },
    templateUrl:"partials/taskList.html",
    controller:function(){
      var $ctrl=this;
      $ctrl.removeTodo=function($index){
      $ctrl.todoList.splice($index,1);
      }
    }
  }
  angular
    .module("app")
    .component("taskList",taskList);
}());
