import "./reset.css";
import "./styles.css";
import {createHomePage} from './homepage';
import { createMenuPage } from "./menu";

const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', createHomePage);

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', createMenuPage);

createHomePage();
