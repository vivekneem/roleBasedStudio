import { MdPerson } from 'react-icons/md'

export default {
  name: 'author',
  type: 'document',
  icon: MdPerson,
  title: 'Author',
  initialValue: {
    name: 'vivekTest',
    parentPage: {
      _type: 'reference',
      to: {
        _type: 'landingPage',
        name: 'Authors'
      }
    }
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'authorBioPortableText',
      title: 'Biography'
    },
    {
      name: 'parentPage',
      title: 'Parent Page',
      description: 'Author will be categorised under the parent authors page',
      type: 'reference',
      to: {
        type: 'landingPage'
      }
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule =>
        Rule.required().error(
          'Please generate slug by clicking on generate button or adding it manually'
        )
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
