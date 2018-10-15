(() => {
	class SubtracaoOutput {
		constructor() {
			this.templateUrl = "/components/redux/subtracao-output/subtracao-output.html";
			this.bindings = {};
		}

		controller($scope, $ngRedux) {
			debugger;
			const reduxConnection = $ngRedux.connect(state => {
				return {
					valor1: state.subtracaoState.valor1,
					valor2: state.subtracaoState.valor2,
					resultado: state.subtracaoState.resultado
				};
			})(this);

			$scope.$on("$destroy", () => reduxConnection);

			this.limparDados = () => $ngRedux.dispatch({ type: "LIMPAR_VALORES" });
		}
	}

	angular.module("ngApp").component("subtracaoOutput", new SubtracaoOutput());
})();