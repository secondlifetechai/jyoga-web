import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const homeSettingsType = defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: 'lightLogo',
        type: 'image',
    }),
    defineField({
        name: 'darkLogo',
        type: 'image',
    }),
    defineField({
      name: 'heroTitle',
      type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {
          source: 'heroTitle',
        },
    }),
    defineField({
        name: 'heroSubTitle',
        type: 'text',
    }),
    defineField({
        name: 'heroButton',
        type: 'string',
    }),
    defineField({
        name: 'heroBackgroundPhoto',
        type: 'image',
    }),
    defineField({
        name: 'contactPhoneNumber',
        type: 'string',
    }),
    defineField({
        name: 'contactEmail',
        type: 'string',
    }),
    defineField({
        name: 'address',
        type: 'string',
    }),
    defineField({
        name: 'insatagramLink',
        type: 'string',
    }),
    defineField({
        name: 'facebookLink',
        type: 'string',
    }),
    defineField({
        name: 'linkedInLink',
        type: 'string',
    }),
    defineField({
        name: 'twitterLink',
        type: 'string',
    }),
  ],
})
