/**
 * App title
 */
import { html,render } from 'lit-html';

const appTitle = (section) => html`
	
		<h1>App Title</h1>
		<h2>${section.section}</h2>
	
`

export default appTitle;