(() => {
	class todoList {
		constructor() {
			this.templateUrl = "/components/redux/todo-list.html";
			this.bindings = {};
			this.controller = function ($scope, $ngRedux) {
				/* Variaveis */
				this.todoList = [];

				this.lala = () => "lala";

				/* Redux Connection */
				const unsubscribe = $ngRedux.connect(state => {
					return { todoList: state.list };
				})(this);

				$scope.$on("$destroy", unsubscribe);
			};
		}
	}

	angular.module("ngApp").component("todoList", new todoList());
})();
