import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: "aboutUs",
        type: "blockContent",
    }),
    defineField({
        name: 'aboutPhoto',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    defineField({
        name: "yogaMeaning",
        type: "blockContent",
    }),
    defineField({
        name: 'yogaPhoto',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    defineField({
        name: 'slug',
        type: 'slug',
    }),
  ],
})
