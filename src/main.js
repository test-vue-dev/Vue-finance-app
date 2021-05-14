import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '../node_modules/materialize-css/dist/js/materialize'
import messagePlugin from './utils/message.plugin'
import titlePlugin from './utils/title.plugin'
import localize  from './filters/localize.filter'
import dateFilter from './filters/date.filter'
import Loader from './components/app/Loader.vue'
import tolltipe from  './directives/tooltipe.directive'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'





import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// import 'firebase/analytics'

Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)



Vue.filter('date', dateFilter)
Vue.filter('localize', localize)

Vue.directive('tooltipe', tolltipe)

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)

const firebaseConfig={
  apiKey: "AIzaSyA05hx8na55GOgWUaXNgVxYqff90RtN5qQ",
  authDomain: "vue-crm-new-c5287.firebaseapp.com",
  projectId: "vue-crm-new-c5287",
  storageBucket: "vue-crm-new-c5287.appspot.com",
  messagingSenderId: "259552646227",
  appId: "1:259552646227:web:daa1ceec1d5952eae4a2a6"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

Vue.config.productionTip=false

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

