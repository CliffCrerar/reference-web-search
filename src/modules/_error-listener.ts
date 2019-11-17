import { html, render, TemplateResult } from 'lit-html';

export default ((cb?: Function):any => {
	
	window.onerror = function(message, source, lineno, colno, err) { 
		console.log('message: ', message);
		console.log('source: ', source);
		console.log('lineno: ', lineno);
		console.log('colno: ', colno);
		console.log('err: ', err);
		cb(html`<div>Error</div>`);
	 }
})()

