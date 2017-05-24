import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './commeents';

const rootReducer = combineReducers({ posts, comments, router: routerReducer });

export default rootReducer;