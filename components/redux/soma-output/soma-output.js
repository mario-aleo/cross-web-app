(() => {
	class SomaOutput {
		constructor() {
			this.templateUrl = "/components/redux/soma-output/soma-output.html";
			this.bindings = {};
		}

		controller($scope, $ngRedux) {
			const reduxConnection = $ngRedux.connect(state => {
				return {
					valor1: state.somaState.valor1,
					valor2: state.somaState.valor2,
					resultado: state.somaState.resultado
				};
			})(this);

			$scope.$on("$destroy", () => reduxConnection);

			this.limparDados = () => $ngRedux.dispatch({ type: "LIMPAR_VALORES" });
		}
	}

	angular.module("ngApp").component("somaOutput", new SomaOutput());
})();