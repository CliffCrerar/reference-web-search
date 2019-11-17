/**
 * Test Search list
 */

import { html, render, TemplateResult } from 'lit-html';
const searchBox = ():TemplateResult => html`
	<section id="test-search" class="right-side">
			<div class="gcse-searchbox"></div>
			<div class="gcse-searchresults"></div>
	</section>
`
export default searchBox;