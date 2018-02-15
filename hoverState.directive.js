(function() {
    // Thid directive will take any element and sprinkle "Woot!!!"s around it when clicked.
    function hoverState() {
        return {
            link: function($scope, $element, $attrs) {
                $element.on("mouseover", function() {
                  $element.css('border', '1px solid black')
                });
                $element.on("mouseout",function(){
                  $element.css('border','none')
                 });
          }
        }
    }

    angular
        .module("app")
        .directive("hoverState", hoverState);
})();
