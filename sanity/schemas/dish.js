export default {
  name: 'dish',
  title: 'Dish of Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (rule) => rule.max(200)
    },
    {
      name: 'price',
      title: 'Price of the dish',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
