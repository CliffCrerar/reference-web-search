import { html, render } from 'lit-html';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap';
import './style.css';
import errorListener from './modules/_error-listener';
import title from './_title'
import navBar from './_navbar'
import searchBox from './_search-box';

const AppSection = function(){
	this.section = 'start';
	this.update = function(value:string):void{
		this.section = value;
	}
};
const appSection = new AppSection();

try{
const bodyInner = ()=> html`
	<header class="mt-3">
		<div>
		${title(appSection)}
	</div>
	<div>
		${navBar(appSection)}
	</div>
	</header>
	<nav>

	</nav>
	<main class="d-flex flex-row flex-wrap">
		<section class="flex-fill">

		</section>
		<section class="flex-fill">
			${searchBox()}
			</section>
	</main>
`
render(bodyInner(),document.body);
} catch(err){

}


