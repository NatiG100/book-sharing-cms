module.exports = {
meilisearch: {
    config: {
    books: {
        settings: {
        filterableAttributes: ['categories'],
        searchableAttributes: ['title',"description","author","tags"]
        }
    }
    }
},
}