// 全局路由文件

/*
* 创建者：石国庆     创建时间：2016.7.3
* 模块功能描述：
* 修改人：           修改时间：            修改内容
*
**/

angular.module('route', [
  'guidePage.route',
  'tab.route',
  'home.route',
  'category.route',
  'goodsList.route',
  'details.route',
  'cart.route'
])
  .config(function($stateProvider, $urlRouterProvider) {

    // 当没有匹配到合适的路由之后默然跳转的url地址，还有就是项目默认启动的url地址
    $urlRouterProvider.otherwise('/tab/home');


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    //$stateProvider
    //
    //  // Each tab has its own nav history stack:
    //
    //  .state('tab.dash', {
    //    url: '/dash',
    //    views: {
    //      'tab-dash': {
    //        templateUrl: 'templates/tab-dash.html',
    //        controller: 'DashCtrl'
    //      }
    //    }
    //  })
    //
    //  .state('tab.chats', {
    //    url: '/chats',
    //    views: {
    //      'tab-chats': {
    //        templateUrl: 'templates/tab-chats.html',
    //        controller: 'ChatsCtrl'
    //      }
    //    }
    //  })
    //  .state('tab.home', {
    //    url: '/home',
    //    views: {
    //      'tab-home': {
    //        templateUrl: 'templates/chat-detail.html',
    //        controller: 'ChatDetailCtrl'
    //      }
    //    }
    //  })

    //  .state('tab.account', {
    //    url: '/account',
    //    views: {
    //      'tab-account': {
    //        templateUrl: 'templates/tab-account.html',
    //        controller: 'AccountCtrl'
    //      }
    //    }
    //  });

    // if none of the above states are matched, use this as the fallback

  });
