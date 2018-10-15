function createHead () {
	let head = "<tr>";
	for (let i = 0; i < 50; i++) {
		head = `${ head } <th>${ i }</th>`;
	}
	head = `${ head } </tr>`;
	return head;
}

function createBody () {
	let body = "";
	for (let row = 0; row < 100; row++) {
		body = `${ body } <tr>`;
		for (let cell = 0; cell < 50; cell++) {
			body = `${ body } <td>${ row } - ${ cell }</td>`;
		}
		body = `${ body } </tr>`;
	}
	return body;
}

onmessage = evt => {
	switch (evt.data) {
		case "requestHead":
			postMessage(createHead());
			break;
		case "requestBody":
			postMessage(createBody());
			break;
		default:
			postMessage("");
			break;
	}
};