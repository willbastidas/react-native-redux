import {combineReducers} from 'redux';
import superHeros from '../superheros.json';
 
export default combineReducers({
    superheroes: superHeros
 })