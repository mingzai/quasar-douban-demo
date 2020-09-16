<template>
  <q-page class="">
    <q-header elevated>
        <q-toolbar class="bg-green-5 text-white">
          <q-toolbar-title>
            <q-input dark dense standout input-class="text-left" class="q-ml-md">
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
              <template v-slot:append>
                <q-icon name="crop_free" class="cursor-pointer"/>
              </template>
            </q-input>
          </q-toolbar-title>
          <q-btn flat round dense icon="forum" />
        </q-toolbar>
    </q-header>

    <q-carousel
      height="150px"
      swipeable
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      ref="carousel"
      transition-prev="slide-right"
      transition-next="slide-left"
      @transition="transition"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[10, 10]"
          class="q-gutter-xs"
        >
          <q-btn  class="q-pa-xs q-ma-xs" id="btn1"
            push round dense style="width:20px;height:20px;background-color:#eee"
            @click="goTo(1, $event)"
          />
          <q-btn  class="q-pa-xs q-ma-xs" id="btn2"
            push round dense style="width:20px;height:20px;background-color:grey"
            @click="goTo(2, $event)"
          />
          <q-btn  class="q-pa-xs q-ma-xs" id="btn3"
            push round dense style="width:20px;height:20px;background-color:grey"
            @click="goTo(3, $event)"
          />
          <q-btn  class="q-pa-xs q-ma-xs" id="btn4"
            push round dense style="width:20px;height:20px;background-color:grey"
            @click="goTo(4, $event)"
          />
        </q-carousel-control>
      </template>
    </q-carousel>

    <div class="q-pa-none">
      <q-list>
        <q-item clickable v-ripple class="q-pa-none">
          <q-item-section avatar class="q-pa-none" style="margin-left:16px;min-width:30px;">
            <q-icon color="green" name="add_alert" />
          </q-item-section>
          <q-item-section style="font-size:18px;">提醒</q-item-section>
          <q-item-section side style="margin-right:16px;">
            <q-icon color="grey" name="arrow_right" />
          </q-item-section>
        </q-item>
        <q-separator inset/>

        <q-item clickable v-ripple class="q-pa-none">
          <q-item-section style="font-size:18px; margin-left:16px;">设置</q-item-section>
        </q-item>
        <q-separator inset/>

        <q-item clickable v-ripple class="q-pa-none">
          <q-separator vertical inset color="orange" style="width:5px;"/>
          <q-item-section style="font-size:18px; margin-left:11px;">热门</q-item-section>
        </q-item>
        <q-separator inset/>
      </q-list>
    </div>

    <div class="q-pa-md">
      <q-list v-for="item in hotData"
          :key="item.id">
        <q-item>
          <q-item-section>
            <q-item-label style="font-weight:bold;font-size:18px;margin-bottom:10px;">{{item.title}}</q-item-label>
            <q-item-label caption lines="2" style="margin-bottom:10px;">{{item.target.desc}}</q-item-label>
            <q-item-label caption>作者：{{item.target.author.name}}</q-item-label>
          </q-item-section>

          <q-item-section thumbnail top side>
            <img :src="item.target.cover_url">
          </q-item-section>
        </q-item>

        <q-separator spaced inset />
      </q-list>
    </div>
  </q-page>
</template>

<script>
// var btn1
var changeSlide = function (topElement) {
  var siblings = topElement.parentNode.children
  for (var i = 0; i < siblings.length; i++) {
    siblings[i].style.backgroundColor = 'grey'
  }
  topElement.style.backgroundColor = '#eee'
}

export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      autoplay: true,
      recommendData: [],
      hotData: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    goTo: function (index, e) {
      if (e.target.classList.contains('q-btn__content')) {
        this.$refs.carousel.goTo(index)
        var topElement = e.target.parentNode.parentNode
        changeSlide(topElement)
      }
    },
    transition: function (slideIndex) {
      changeSlide(document.getElementById('btn' + slideIndex))
    },
    fetchData () {
      this.$axios.get('/api/homeData').then((response) => {
        const data = response.data.data.recommend_feeds
        const recommend = []
        const hot = []
        for (var i in data) {
          if (data[i].card && data[i].card.name === '为你推荐') {
            recommend.push(data[i])
          } else {
            hot.push(data[i])
          }
        }
        this.recommendData = recommend
        this.hotData = hot
      })
    }
  }
}
</script>
