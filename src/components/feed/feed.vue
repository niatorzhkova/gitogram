<template>
  <div class="feed-user">
    <user :src="src" :name="username" />
  </div>
  <repoCard>
    <template #repoCard>
      <h2 class="repo-title">{{ title }}</h2>
      <div class="repo-info">
        <p v-if="description">{{ description }}</p>
      </div>
      <div class="repo-controls">
        <controls :stars="stars" :forks="forks" />
      </div>
    </template>
  </repoCard>
  <div class="issues">
    <issues :issues="issues.data" @loadIssues="$emit('fetchIssues')" :loading="issues.loading" />
    <!-- <pre>{{issues.data}}</pre> -->
  </div>
  <div class="date">{{ getFormattedDate }}</div>
</template>

<script>

import { issues } from '../issues'
import { repoCard } from '../repo-card'
import { user } from '../user'
import { controls } from '../controls'
import { months } from '../../helpers/months'

export default {
  components: {
    user,
    issues,
    controls,
    repoCard
    // placeholder
    // toggler,
    // comment,
  },
  data () {
    return {
      // shown: false
      // // posts: []
      // loading: false
    }
  },
  emits: ['fetchIssues'],
  // methods: {
  //   toggle (isOpened) {
  //     this.shown = isOpened
  //     if (isOpened && this.issues.length === 0) {
  //       this.$emit('loadIssues')
  //     }
  //   }
  // },
  props: {
    username: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    issues: {
      type: Object,
      required: true
    },
    // loading: {
    //   type: Boolean
    // },
    repoDate: {
      type: String,
      required: true
    }
  },
  computed: {
    getFormattedDate () {
      const date = this.repoDate.split(/-|T/).splice(0, 3).reverse()
      const getFormattedDate = `${date[0].replace(/^0+/, '')} ${months[date[1] - 1]}`
      return getFormattedDate
    }
  }
  //   created () {
  //     this.posts = data
  //   }
  // }
}
</script>

<style src="./feed.scss" lang="scss" scoped></style>
