angular.module('calendarDemoApp', [])
	.directive('calendarMenu', function() { 
		return {
			restrict: 'E',
			templateUrl: 'calendar-menu.html',
			link: function(scope, element, attrs) {
				let preparedDate = CalendarRange.prepareDate(new Date());
				console.log(preparedDate.year);

				scope.months = [
					{ name: 'January', number: 1 },
					{ name: 'February', number: 2 },
					{ name: 'March', number: 3 },
					{ name: 'April', number: 4 },
					{ name: 'May', number: 5 },
					{ name: 'June', number: 6 },
					{ name: 'July', number: 7 },
					{ name: 'August', number: 8 },
					{ name: 'September', number: 9 },
					{ name: 'October', number: 10 },
					{ name: 'November', number: 11 },
					{ name: 'December', number: 12 }];
				
				scope.selectedMonth = scope.months[preparedDate.month];

				scope.years = [];
				for (let i = preparedDate.year - 20; i <= preparedDate.year + 20; i++) {
					scope.years.push(i);
				}
				scope.selectedYear = scope.years[parseInt(scope.years.length/2)];
			}
		}
	})
	.directive('calendarDisplay', function() {
		return {
			restrict: 'E',
			templateUrl: 'calendar-display.html',
			link: function(scope, element, attrs) {
				scope.today = new Date();
				scope.preparedDate = CalendarRange.prepareDate(scope.today);
				scope.monthlyRange = CalendarRange.getMonthlyRange(scope.today);
				// console.log(scope.preparedDate.month)
				// console.log(scope.monthlyRange.days[0].month);
			}
		}
	});