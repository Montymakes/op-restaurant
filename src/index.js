import "./reset.css";
import "./styles.css";
import {createHomePage} from './homepage';
import { createMenuPage } from "./menu";

const content = document.getElementById('content');

const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', function(){
    content.innerHTML = '';
    content.appendChild(createHomePage());
});

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function(){
    content.innerHTML = '';
    content.appendChild(createMenuPage());
});

content.appendChild(createHomePage());
