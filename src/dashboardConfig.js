export default {
  widgets: [
    { name: 'structure-menu' },
    { name: 'deploy-github', layout: { height: 'auto', width: 'medium' } },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent Articles',
        order: '_createdAt desc',
        types: ['howToArticle', 'featureArticle', 'galleryArticle']
      },
      layout: { width: 'medium' }
    }
  ]
}
