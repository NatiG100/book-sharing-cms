module.exports = {
    meilisearch: {
        enabled:true,
        config: {
            book: {
                settings: {
                    filterableAttributes: ['category','author'],
                    searchableAttributes: ['title',"description","author","tags"],
                    sortableAttributes:['view','downloads','createdAt']
                }
            }
        }
    },
}