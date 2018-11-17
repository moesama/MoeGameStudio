import Vue from 'vue'
import Vuex from 'vuex'
import app, { State as AppState } from './modules/app'

Vue.use(Vuex)

export interface State {
    app: AppState
}

export default new Vuex.Store({
    modules: {
        app,
    },
})
