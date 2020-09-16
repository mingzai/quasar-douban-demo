<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
       <q-tabs
        dense
        indicator-color="transparent"
        class="bg-white text-grey-7 shadow-2"
      >
        <q-route-tab name="index" icon="house" label="首页" to="/" exact active-class="text-green-5"/>
        <q-route-tab name="book" icon="book" label="书影音" to="/book" active-class="text-green-5"/>
        <q-route-tab name="radio" icon="radio" label="广播" to="/radio" active-class="text-green-5"/>
        <q-route-tab name="group" icon="group" label="小组" to="/group"  active-class="text-green-5"/>
        <q-route-tab name="mine" icon="account_box" label="我的" to="/mine"  active-class="text-green-5"/>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
    }
  }
}
</script>
