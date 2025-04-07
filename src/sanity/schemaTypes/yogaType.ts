import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const yogaType = defineType({
  name: 'yogaTypes',
  title: 'Yoga Types',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
    defineField({
        name: 'photo',
        type: 'image',
    }),
  ],
})
