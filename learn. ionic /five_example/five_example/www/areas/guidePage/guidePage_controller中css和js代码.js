angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl', function($scope,$ionicSlideBoxDelegate,$ionicModal,$ionicActionSheet) {

    //actionsheet
    $scope.show = function() {
      // 显示操作表
      $ionicActionSheet.show({
        buttons: [
          { text: '添加' },
          { text: '修改' },
        ],
        //destructiveText: '删除',
        titleText: '文件操作',
        cancelText: '取消',
        buttonClicked: function(index) {
          switch(index){
            case 0:console.log("添加");break;
            case 1:console.log("修改");break;
          }
          return true;
        }
      });

    };



    // 模态窗
    $ionicModal.fromTemplateUrl('modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //当我们用到模型时，清除它！
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // 当隐藏的模型时执行动作
    $scope.$on('modal.hide', function() {
      // 执行动作
    });
    // 当移动模型时执行动作
    $scope.$on('modal.removed', function() {
      // 执行动作
    });



    // 轮播图方法
    setInterval(function(){
      $ionicSlideBoxDelegate.next();
    },2000)



    // 单选按钮和多选按钮
    $scope.choice={
      choice:'css3'
    }

    $scope.radioList=[
      {
        name:"html5",
        value:"html5"
      },
      {
        name:"js",
        value:"js"
      },
      {
        name:"css3",
        value:"css3"
      }
    ]
  })
