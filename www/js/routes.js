angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })
        
      
    
      
        
    .state('tabsController.dashbord', {
      url: '/dashbord',
      views: {
        'tab5': {
          templateUrl: 'templates/dashbord.html'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.ukeplan', {
      url: '/ukeplan',
      views: {
        'tab12': {
          templateUrl: 'templates/ukeplan.html'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.lekseplan', {
      url: '/lekseplan',
      views: {
        'tab13': {
          templateUrl: 'templates/lekseplan.html'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/tabscontrol',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('fravR', {
      url: '/sykmelding',
      templateUrl: 'templates/fravR.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/login');
  

  

});