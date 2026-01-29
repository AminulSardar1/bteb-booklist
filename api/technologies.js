const { booklists } = require('./data');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  const technologyList = Object.entries(booklists).map(([slug, data]) => ({
    slug,
    code: data.code,
    name: data.name,
    regulation: data.regulation,
    category: data.category
  }));
  
  res.status(200).json({ technologies: technologyList });
};
