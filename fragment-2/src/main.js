import Vue from 'vue'
import App from './App.vue'
import { IframeMessageProxy } from 'iframe-message-proxy';

// Start to listen messages from parent application
IframeMessageProxy.listen();
IframeMessageProxy.config({
    prefix: 'fragmentEvent:',
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
