<template>
  <div class="avatar" :style="avatarStyle">
    <img :src="avatar" alt="users avatar" />
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://picsum.photos/300/300'
    },
    size: {
      type: String,
      default: 's'
    }
  },
  setup (props) {
    const style = {
      xs: {
        width: '37px',
        height: '37px'
      },
      s: {
        width: '44px',
        height: '44px'
      },
      m: {
        width: '72px',
        height: '72px'
      },
      l: {
        width: '90px',
        height: '90px'
      }
    }
    const avatarStyle = style[props.size]

    return { avatarStyle }
  }
}
</script>

<style lang="scss" src="./avatar.scss" scoped>

</style>
