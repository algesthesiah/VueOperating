<!--
 * @Description:精致的操作组编辑删除
 * @author: <https://github.com/algesthesiahunter>
 -->
<template>
  <div class="_operating-box" @click.stop="() => {}">
    <div class="_operating" v-if="visible">
      <span>
        <svg
          t="1577783612385"
          @click="$emit('edit')"
          class="icon _operating-edit"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="18189"
          width="16"
          height="16"
        >
          <path
            d="M358.165868 554.624796c-0.533143 0.680499-1.066285 1.391696-1.303692 2.251274l-41.104163 150.700257c-2.400676 8.772804 0.059352 18.226107 6.550183 24.892947 4.860704 4.742001 11.261485 7.350408 18.077727 7.350408 2.252297 0 4.504594-0.267083 6.727215-0.860601l149.630902-40.808428c0.23843 0 0.357134 0.207731 0.534166 0.207731 1.718131 0 3.408633-0.62217 4.683672-1.927909l400.113747-400.054395c11.883655-11.897981 18.404162-28.109198 18.404162-45.74281 0-19.989263-8.476045-39.963177-23.324218-54.767348l-37.786605-37.844933c-14.81645-14.848173-34.822087-23.338544-54.797024-23.338544-17.631566 0-33.842783 6.520507-45.75816 18.388812L358.758362 553.232077C358.344946 553.615816 358.462626 554.179658 358.165868 554.624796M862.924953 257.19778l-39.742143 39.71349-64.428382-65.451688 39.180348-39.179324c6.193049-6.222725 18.194384-5.318122 25.308409 1.822508l37.813211 37.845956c3.943822 3.941775 6.195096 9.18622 6.195096 14.372336C867.223862 250.574942 865.710392 254.42769 862.924953 257.19778M429.322487 560.907896l288.712541-288.728914 64.459081 65.49569L494.314711 625.838721 429.322487 560.907896zM376.718409 677.970032l20.863167-76.580143 55.656601 55.657624L376.718409 677.970032z"
            p-id="18190"
          />
          <path
            d="M888.265084 415.735539c-15.144932 0-27.562752 12.313443-27.620058 27.665083l0 372.98283c0 19.559475-15.885805 35.444257-35.475979 35.444257L194.220958 851.827709c-19.559475 0-35.504632-15.883759-35.504632-35.444257L158.716326 207.602222c0-19.575848 15.945157-35.474956 35.504632-35.474956l406.367171 0c15.231913 0 27.592428-12.371772 27.592428-27.606755 0-15.202237-12.360516-27.590382-27.592428-27.590382L190.013123 116.930129c-47.684022 0-86.49291 38.779212-86.49291 86.49291L103.520213 820.59231c0 47.713698 38.808888 86.47756 86.49291 86.47756l639.334083 0c47.715745 0 86.509283-38.763862 86.509283-86.47756L915.856489 443.222567C915.794068 428.048983 903.408993 415.735539 888.265084 415.735539"
            p-id="18191"
          />
        </svg>
      </span>
      <span>
        <svg
          @click="deleteChange"
          t="1577783629828"
          class="icon _operating-delete"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="18310"
          width="16"
          height="16"
        >
          <path
            d="M907.618072 232.742353 744.713682 232.742353 744.713682 116.382952c0-12.852708-10.419786-23.272495-23.272495-23.272495L302.556765 93.110457c-12.852708 0-23.272495 10.418762-23.272495 23.272495l0 116.360425L116.380904 232.743377c-12.852708 0-23.272495 10.419786-23.272495 23.272495s10.418762 23.272495 23.272495 23.272495l791.237168 0c12.852708 0 23.272495-10.419786 23.272495-23.272495S920.469756 232.742353 907.618072 232.742353zM325.829259 139.654423l372.340458 0 0 93.08793L325.829259 232.742353 325.829259 139.654423z"
            p-id="18311"
          />
          <path
            d="M791.257647 372.362985c-12.852708 0-23.272495 10.418762-23.272495 23.272495l0 488.712146L256.012799 884.347625 256.012799 395.635479c0-12.852708-10.418762-23.272495-23.272495-23.272495s-23.272495 10.418762-23.272495 23.272495l0 511.983617c0 12.852708 10.418762 23.272495 23.272495 23.272495l558.516318 0c12.852708 0 23.272495-10.419786 23.272495-23.272495L814.529118 395.635479C814.529118 382.782771 804.110355 372.362985 791.257647 372.362985z"
            p-id="18312"
          />
          <path
            d="M442.189684 767.987201l0-372.351721c0-12.852708-10.418762-23.272495-23.272495-23.272495s-23.272495 10.418762-23.272495 23.272495l0 372.351721c0 12.852708 10.418762 23.272495 23.272495 23.272495S442.189684 780.839909 442.189684 767.987201z"
            p-id="18313"
          />
          <path
            d="M628.353257 767.987201l0-372.351721c0-12.852708-10.419786-23.272495-23.272495-23.272495s-23.272495 10.418762-23.272495 23.272495l0 372.351721c0 12.852708 10.419786 23.272495 23.272495 23.272495S628.353257 780.839909 628.353257 767.987201z"
            p-id="18314"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import popover from './popover'
export default {
  name: 'VueOperating',
  props: {
    visible: {
      default: true,
    },
    name: {},
  },
  methods: {
    deleteChange(e) {
      const popoverMain = document.getElementById('popover-main')
      popoverMain.style.display = 'block'
      const bodyEl = document.body
      bodyEl.style.position = 'fixed' // 定格body
      bodyEl.style.width = '100vw'
      popoverMain.innerHTML = `<div id="_popover-son"></div>`
      new Vue({
        render: (h) =>
          h(popover, {
            props: {
              title: `确定删除 ${this.name} ？`,
              x: e.x,
              y: e.y,
            },
            on: {
              cancel: this.cancel,
              submit: () => this.$emit('submit'),
            },
          }),
      }).$mount('#_popover-son')
    },
    cancel() {
      const popoverMain = document.getElementById('popover-main')
      popoverMain.style.display = 'none'
      const bodyEl = document.body
      bodyEl.style.position = 'static'
      bodyEl.style.width = 'auto'
    },
  },
  mounted() {
    this.$el.parentNode.classList.add('_operating-container')
    this.$el.parentNode.parentNode.classList.add('_operating-father')
    let popoverMain = document.getElementById('popover-main')
    if (!popoverMain) {
      const div = document.createElement('div')
      div.setAttribute('id', 'popover-main')
      div.setAttribute(
        'style',
        'position: fixed;top: 0px;left: 0px;height:100vh;width:100vw;display:none;z-index:2019;background:#00000080'
      )
      div.innerHTML = `<div id="_popover-son"></div>`
      document.body.appendChild(div)
      popoverMain = document.getElementById('popover-main')
      popoverMain.onclick = this.cancel
    }
  },
}
</script>
<style lang="scss">
._operating-container {
  position: relative;
  z-index: 1000;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  &:hover {
    ._operating {
      visibility: visible;
      opacity: 1;
    }
  }
  ._operating {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    right: 10px;
    top: -7px;
  }
  ._operating-box {
    ._operating {
      display: flex;
      align-items: center;
      font-size: 16px;
      cursor: pointer;
      span {
        padding: 5px 2px;
      }
      ._operating-edit {
        &:hover {
          color: #0088f5;
        }
      }
      ._operating-delete {
        &:hover {
          color: #ff5722;
        }
      }
    }
  }
}
</style>
