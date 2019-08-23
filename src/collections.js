module.exports = (eleventy) => {
  eleventy.addCollection("categories", (collection) => {
    const categories = new Map();

    const addAll = (tag) => {
      categories.set(tag, (categories.get(tag) || 0) + 1) // Increment the score
    };

    collection.getFilteredByTag("project").forEach((item) => {
      if( "tags" in item.data ) {
        item.data.tags.forEach(addAll);
      }
    });
  
    categories.delete('all');
    categories.delete('project');
    categories.delete('page');
  
    // returning an array in addCollection works in Eleventy 0.5.3
    return [...categories.keys()].sort((a, b) => {
      return categories.get(b) - categories.get(a);
    });
  });

  eleventy.addCollection("projects", (collection) => {
    return collection.getFilteredByTag("project").sort((a, b) => {
      return (b.data.score || 1) - (a.data.score || 1)
    });
  });
}