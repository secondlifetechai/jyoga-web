import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Service Price',
            type: 'number',
        }),
        defineField({
            name: "description",
            type: "blockContent",
        }),
        defineField({
            name: 'duration',
            type: 'string',
        }),
        defineField({
            title: 'Service Type',
            name: 'serviceType',
            type: 'string',
            initialValue: 'Onsite',
            options: {
                list: [
                    { title: 'Online', value: 'Online' },
                    { title: 'Onsite', value: 'Onsite' },
                ]
            }
        }),
        defineField({
            title: 'Event Type',
            name: 'eventType',
            type: 'string',
            initialValue: 'Yoga Group Event',
            options: {
                list: [
                    { title: 'Yoga Group Event', value: 'Yoga Group Event' },
                    { title: 'Individual Session', value: 'Individual Session' },
                ]
            }
        }),
    ]
})