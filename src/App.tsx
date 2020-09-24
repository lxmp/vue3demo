import { defineComponent, reactive, KeepAlive } from 'vue';
import {RouterLink, RouterView} from 'vue-router';

export default defineComponent({
  setup() {
    return () => (
      <>
       <div>
           dadfafa
            <RouterView/>
        </div>
      </>
    );
  }
});