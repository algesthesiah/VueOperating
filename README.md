# vue-operating

> A vue component contains an action group, an edit delete button, and a mini confirmation box

## Usage

``` html

<template>
  <div>
    <div class="container">
      <h2>hover 查看效果</h2>
      <ul class="main">
        <li v-for="(it, i) in tags" :key="i" class="li">
          <div class="it">
            <span class="text">{{ it.name }}</span>
          </div>
          <VueOperating
            :name="it.name"
            @edit="edit(it.name)"
            @submit="submit(it.name)"
          ></VueOperating>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      tags: [
        { name: 'webpack' },
        { name: 'vue' },
        { name: 'react' },
        { name: 'nodejs' },
        { name: 'javascript' },
      ],
    }
  },
  methods: {
    edit(e) {
      alert(e)
    },
    submit(e) {
      alert(e)
    },
  },
}
</script>
```

### DEMO
- [在线网址](https://coding.algesthesiahunter.top/VueOperating)
- [Online site](<https://algesthesiahunter.github.io/VueOperating>)
### NPM

``` bash
# use npm
npm i vue-operating -S

# use yarn
yarn add vue-operating
```

### Import Plugins

``` js
import VueOperating from 'vue-operating'
Vue.use(VueOperating)

```
