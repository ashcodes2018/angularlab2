(function() {
  var taskForm={
  bindings:{

  },
  templateUrl:"partials/taskForm.html",
  controller:function(){
    var $ctrl=this;
    $ctrl.todoList=["apple","peaches"];
    $ctrl.addTodo=function(item){
      $ctrl.todoList.push(item)
      $ctrl.item="" ;

    }
  }
  };

  angular
    .module("app")
    .component("taskForm",taskForm);

}());
