1
Including via rel. Path gives HMR: 
import FancyComponent from '../../component/src/FancyComponent'
This does not consider SSR/Node yet, only vite dev server. Could be sufficient? Not sure

2
Adding Dependency in packagejson and importing
import FancyComponent from 'my-component/src/FancyComponent';
Also gives HMR 

