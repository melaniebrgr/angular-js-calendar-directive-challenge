angular.module('calendarDemoApp', [])
	.controller('calendarDemoCtrl', function($scope) {
		let preparedDate = CalendarRange.prepareDate(new Date());

		$scope.months = [
			{ name: 'January', number: 0 },
			{ name: 'February', number: 1 },
			{ name: 'March', number: 2 },
			{ name: 'April', number: 3 },
			{ name: 'May', number: 4 },
			{ name: 'June', number: 5 },
			{ name: 'July', number: 6 },
			{ name: 'August', number: 7 },
			{ name: 'September', number: 8 },
			{ name: 'October', number: 9 },
			{ name: 'November', number: 10 },
			{ name: 'December', number: 11 }];
		$scope.years = [];
		for (let i = preparedDate.year - 20; i <= preparedDate.year + 20; i++) {
			$scope.years.push(i);
		}

		$scope.selectedMonth = $scope.months[preparedDate.month];
		$scope.selectedYear = $scope.years[parseInt($scope.years.length/2)];	
	})
	.directive('calendarMenu', function() { 
		return {
			restrict: 'E',
			templateUrl: 'calendar-menu.html',
			controller: 'calendarDemoCtrl'
		}
	})
	.directive('calendarDisplay', function() {
		return {
			restrict: 'E',
			templateUrl: 'calendar-display.html',
			controller: 'calendarDemoCtrl',
			link: function(scope, element, attrs) {
				// When month or year changes, update calendar

				scope.selectedDate = new Date(scope.selectedYear, scope.selectedMonth.number);
				scope.preparedDate = CalendarRange.prepareDate(scope.selectedDate);
				scope.monthlyRange = CalendarRange.getMonthlyRange(scope.selectedDate);
			}
		}
	});