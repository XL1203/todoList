import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        list: [],
        inputContent: '',
        nextId: 10,
        checked: false,
        viewParam: 'all'
    },
    getters: {
        getUndone(state) {
            return state.list.filter(item => !item.done).length
        },
        getInfoList(state) {
            if (state.viewParam === 'all') {
                return state.list
            }
            if (state.viewParam === 'active') {
                return state.list.filter(item => !item.done)
            }
            if (state.viewParam === 'complate') {
                return state.list.filter(item => item.done)
            }
            return state.list
        }
    },
    mutations: {
        initList(state, list) {
            state.list = list
        },
        handleInput(state, val) {
            state.inputContent = val
        },
        addItem(state) {
            const val = state.inputContent.trim()
            if (val) {
                const obj = {
                    id: state.nextId++,
                    content: val,
                    done: false
                }
                state.inputContent = ''
                state.list.push(obj)
            } else {
                Vue.prototype.$msg.warning('文本内容为空！')
            }

            this.commit('circle')
        },
        circle(state) {
            if (state.list.filter(item => item.done).length === state.list.length && state.list.length !== 0) {
                state.checked = true
            } else {
                state.checked = false
            }
        },
        selectAll(state) {
            state.checked = !state.checked
            state.list.forEach(item => { item.done = state.checked })
        },
        selectOne(state, id) {
            state.list.some(item => {
                if (item.id === id) {
                    item.done = !item.done
                }
            })
            this.commit('circle')
        },
        delItem(state, id) {
            const index = state.list.findIndex(item => item.id === id)
            state.list.splice(index, 1)
            this.commit('circle')
        },
        clearAllComplate(state) {
            state.list = state.list.filter(item => !item.done)
            this.commit('circle')
        },
        changeBtn(state, param) {
            state.viewParam = param
        }
    },
    actions: {
        async getList(context) {
            const { data: res } = await Vue.prototype.$http.get('/list.json')
            context.commit('initList', res)
        }
    }
})
