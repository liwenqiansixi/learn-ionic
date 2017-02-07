angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl', function($scope,$state) {

    //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination',// 分页器配置属性
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex+1;
        if(index==2||index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });


    // 跳转到首页方法
    $scope.func_goHome=function(){
      $state.go('tab.home');
    }

  })
