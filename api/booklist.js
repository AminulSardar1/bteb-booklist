const { booklists } = require('./data');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  const { technology } = req.query;
  
  if (!technology) {
    const technologyList = Object.entries(booklists).map(([slug, data]) => ({
      slug,
      code: data.code,
      name: data.name
    }));
    
    return res.status(200).json({
      message: "Please provide technology name",
      available: technologyList,
      usage: "/api/booklist?technology=computer-science-technology"
    });
  }
  
  const normalizedTech = technology.toLowerCase().replace(/\s+/g, '-');
  const booklist = booklists[normalizedTech];
  
  if (booklist) {
    res.status(200).json(booklist);
  } else {
    res.status(404).json({
      error: "Technology not found",
      available: Object.keys(booklists)
    });
  }
};
