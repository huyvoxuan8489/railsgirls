angular.module('AngularApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
      templateUrl: '/assets/templates/login.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    }).when('/employees', {
      templateUrl: '/assets/employees.html',
      controller: 'EmployeesController',
      controllerAs: 'employeesCtrl'
    }).when('/employees/new', {
      templateUrl: '/assets/employee-create.html',
      controller: 'CreateEmployeeController',
      controllerAs: 'createEmployeeCtrl'
    }).when('/employees/:id/edit', {
      templateUrl: '/assets/employee-edit.html',
      controller: 'EditEmployeeController',
      controllerAs: 'editEmployeeCtrl'
    }).otherwise({
      redirectTo: '/login'
    });
    return $locationProvider.html5Mode(true);
  }
]);
