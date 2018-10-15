(() => {
	class NgFoo {
		constructor() {
			this.templateUrl = "/ngfoo/ng-foo.html";
			this.bindings = {
				primeiroValor: "=?",
				segundoValor: "=?"
			};
		}

		controller($scope) {
			console.log("Carrego !");
			this.resultSoma = () => {
				console.log(this);
				return this.primeiroValor + this.segundoValor;
			};
		}
	}

	angular.module("ngApp").component("ngFoo", new NgFoo());
})();
