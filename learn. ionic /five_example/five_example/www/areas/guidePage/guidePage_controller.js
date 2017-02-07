angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl', function($scope) {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 2000,//可选选项，自动滑动
      direction : 'vertical',
    })
  })
