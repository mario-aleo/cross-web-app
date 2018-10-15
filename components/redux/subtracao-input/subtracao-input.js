(() => {
	class SubtracaoInput {
		constructor() {
			this.templateUrl = "/components/redux/subtracao-input/subtracao-input.html";
			this.bindings = {};
		}

		controller($scope, $ngRedux) {
			const stateConnection = $ngRedux.connect(state => {
				return {
					valor1: state.subtracaoState.valor1,
					valor2: state.subtracaoState.valor2
				};
			})(this);

			$scope.$on("$destroy", () => stateConnection);
			
			this.executarSubtracao = () => $ngRedux.dispatch({
				type: "SUBTRAIR_VALORES",
				data: {
					valor1: this.valor1,
					valor2: this.valor2
				}
			});
		}
	}

	angular.module("ngApp").component("subtracaoInput", new SubtracaoInput());
})();