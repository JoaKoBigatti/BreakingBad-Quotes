import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { BreakingBadApp } from './src/breakingbad/breaking-bad-app';

document.querySelector('#app').innerHTML = `
  <div>
    <a target="_blank">
      <img src="assets/logo/breaking-bad-quotes_header.png" class="logo" alt="Vite logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">

    </div>

  </div>
`;
const element=document.querySelector('.card')

BreakingBadApp(element)