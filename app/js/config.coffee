class Routes extends Config
  constructor: ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise '/'

    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'views/home/index.html'
      .state 'team',
        url: '/team'
        templateUrl: 'views/team/index.html'
      .state 'robot',
        url: '/robot'
        templateUrl: 'views/robot/index.html'
      .state 'first',
        url: '/about_first'
        templateUrl: 'views/about_first/index.html'
      .state 'ressources',
        url: '/about'
        templateUrl: 'views/ressources/index.html'
      .state 'blog',
        url: '/blog'
        templateUrl: 'views/blog/index.html'
