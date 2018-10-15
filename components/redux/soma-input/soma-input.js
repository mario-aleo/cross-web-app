(() => {
	class SomaInput {
		constructor() {
			this.templateUrl = "/components/redux/soma-input/soma-input.html";
			this.bindings = {};
		}

		controller($scope, $ngRedux) {
			const stateConnection = $ngRedux.connect(state => {
				return {
					valor1: state.somaState.valor1,
					valor2: state.somaState.valor2
				};
			})(this);

			$scope.$on("$destroy", () => stateConnection);
			
			this.executarSoma = () => $ngRedux.dispatch({
				type: "SOMA_VALORES",
				data: {
					valor1: this.valor1,
					valor2: this.valor2
				}
			});
		}
	}

	angular.module("ngApp").component("somaInput", new SomaInput());
})();