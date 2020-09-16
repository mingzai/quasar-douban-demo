<template>
  <q-page class="">
    <q-header>
        <q-toolbar class="bg-white text-dark" style="text-align:center">
          <q-toolbar-title>
              豆瓣电影
          </q-toolbar-title>
        </q-toolbar>
    </q-header>
    <q-separator/>

    <q-list>
        <q-item clickable v-ripple class="q-pa-none">
          <q-item-section style="font-size:18px;margin-left:16px;">影院热映</q-item-section>
          <q-item-section side style="font-size:18px;padding-left:0px;margin-right:5px;" class="text-green-6">
            更多&nbsp;&nbsp;>
          </q-item-section>
        </q-item>
    </q-list>

    <q-list>
        <q-item clickable v-ripple class="q-pa-none">
          <q-item-section style="font-size:18px;margin-left:16px;">即将上映</q-item-section>
          <q-item-section side style="font-size:18px;padding-left:0px;margin-right:5px;" class="text-green-6">
            更多&nbsp;&nbsp;>
          </q-item-section>
        </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageBook'
}
</script>
