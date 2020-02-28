<!--
 * @Description:popconfirm组件的自定义内容
 * @author: <https://github.com/algesthesiahunter>
 -->
<template>
  <div
    id="_operating-popover"
    class="_operating-popover"
    :style="{ left: x + 'px', top: y + 'px' }"
  >
    <div class="popover-arrow"></div>
    <div class="popover-inner" @click.stop="() => {}">
      <div class="inner-main">
        <div class="message">
          <svg
            t="1577753141021"
            class="icon"
            viewBox="0 0 1024 1024"
            p-id="1601"
            width="14"
            height="14"
          >
            <path
              d="M455.408941 794.925176h84.87153v-84.871529h-84.87153v84.871529z m130.168471-265.938823c-42.465882 28.310588-62.253176 62.223059-62.253177 99.026823v25.449412H455.378824v-31.111529c-2.831059-50.928941 22.648471-96.195765 67.915294-130.168471 50.898824-36.743529 76.378353-73.547294 70.716235-107.52-5.662118-50.898824-33.942588-79.209412-87.702588-82.04047-62.253176-2.831059-101.857882 33.972706-115.983059 110.351058l-76.408471-19.817411c22.648471-113.152 93.364706-166.912 206.546824-164.080941 99.026824 5.662118 149.955765 53.76 161.249882 147.124705 2.861176 56.591059-28.280471 107.52-96.165647 152.786824zM512 59.301647C263.017412 59.331765 59.331765 263.017412 59.331765 512c0 249.012706 203.685647 452.728471 452.668235 452.728471S964.668235 760.982588 964.668235 512 761.012706 59.331765 512 59.331765z m0 961.957647C231.905882 1021.289412 2.710588 792.094118 2.710588 512 2.710588 231.905882 231.905882 2.710588 512 2.710588S1021.289412 231.905882 1021.289412 512 792.094118 1021.289412 512 1021.289412z"
              fill="#ff5722"
              p-id="1602"
            />
          </svg>
          <span class="title">{{ title }}</span>
        </div>
        <div class="btns">
          <span class="btn cancel" @click="$emit('cancel')">取消</span>
          <button
            class="btn sub-btn"
            style="margin-left:8px"
            type="primary"
            @click="$emit('submit')"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  props: {
    title: {
      type: String,
      default: '我是标题',
    },
    x: {
      required: true,
    },
    y: {
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
._operating-popover {
  z-index: 2022;
  transform: translate(-50%, -100%);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  position: absolute;
  text-align: left;
  padding-bottom: 10px;
  .popover-arrow {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    bottom: 5.2px;
    border-top-color: transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    border-left-color: transparent;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    position: absolute;
    display: block;
    width: 8.48528137px;
    height: 8.48528137px;
    background: transparent;
    border-style: solid;
    border-width: 4.24264069px;
  }
  .popover-inner {
    font-size: 0;
    min-width: 150px;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    .inner-main {
      padding: 12px 16px;
      .message {
        display: flex;
        white-space: nowrap;
        align-items: center;
        padding: 4px 0 12px;
        font-size: 14px;
        line-height: 20px;
        .icon {
          margin-right: 8px;
        }
      }
      .sub-btn {
        background-color: #0088f5;
        color: white;
        border-color: #0088f5;
        border-radius: 2px;
        cursor: pointer;
      }
      .btns {
        text-align: right;
        .cancel {
          color: #0088f5;
          cursor: pointer;
        }
        .btn {
          height: 24px;
          padding: 0 7px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
