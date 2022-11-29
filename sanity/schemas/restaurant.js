export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (rule) =>   rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (rule) =>   rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
      validation: (rule) =>   rule.required(),
    },
    {
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating (between 1 and 5)',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5).error('Please enter a value between 1 amd 5')
    },
    
  ],

}
