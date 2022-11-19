const {Developer} = require('../models')

class DeveloperController {
  async addDeveloper(req, res) {
    const {name} = req.body;
    const developer = await Developer.create({name});
    return res.json(developer);
  };

  async getDeveloper(req, res) {
    const {id} = req.params;
    const dev = await Developer.findOne({where: {id}});
    if (!dev) {
      return res.status(400).json({
        message: 'Developer ID is invalid',
      });
    }
    return res.json(dev);
  };

  async getAllDevelopers(req, res) {
    const devs = await Developer.findAll();
    return res.json(devs);
  };
}

module.exports = new DeveloperController();