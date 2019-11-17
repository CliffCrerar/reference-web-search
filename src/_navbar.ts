/**
 * NAVBAR
 */
import { html } from 'lit-html';

function clickHandler(ev:MouseEvent){
	console.log('ev: ',ev);
	ev.preventDefault();
	const eventTarget :HTMLAnchorElement = <HTMLAnchorElement>ev.srcElement;
	
	console.log('ev.toElemeent: ', eventTarget);
	document.querySelectorAll('a.nav-link').forEach(el=>{
		const anchorEl: HTMLAnchorElement = <HTMLAnchorElement>el;
		console.log('anchorEl: ', anchorEl.pathname);
	});
	return eventTarget.pathname;	
}

export default (appSection) => {
	console.log('appSection: ', appSection);
	function clickHandler(ev:MouseEvent){
		console.log('ev: ',ev);
		ev.preventDefault();
		const eventTarget :HTMLAnchorElement = <HTMLAnchorElement>ev.srcElement;
		
		console.log('ev.toElemeent: ', eventTarget);
		document.querySelectorAll('a.nav-link').forEach(el=>{
			const anchorEl: HTMLAnchorElement = <HTMLAnchorElement>el;
			console.log('anchorEl: ', anchorEl.pathname);
		});
		appSection.section(eventTarget.pathname);
	return eventTarget.pathname;	
	}

	return html`
		<nav>
			<ul class="nav nav-tabs" @click=${clickHandler}>
				<li class="nav-item">
					<a class="nav-link" href="search">Search</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="genref">Generate Reference</a>
				</li>
				<!-- <li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
				</li> -->
			</ul>
		</nav>
	`
};