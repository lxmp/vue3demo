import { defineComponent, reactive } from 'vue';
import {RouterLink, RouterView} from 'vue-router';

export default defineComponent({
  name: 'index',
  setup() {
    const state = reactive({
        count: 0
    })
    const incCount = ()=>{
        state.count ++ ;
    }
    return () => (
      <>
        <button onClick={incCount}>incCOunt</button>
            <span>{state.count}</span>
      </>
    );
  }
});