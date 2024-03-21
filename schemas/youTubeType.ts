// ./schemaTypes/youTubeType/index.ts

import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'
import {YouTubePreview} from './YouTubePreview'

const youtube = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
  components: {
    preview: YouTubePreview,
  },
})

export default youtube