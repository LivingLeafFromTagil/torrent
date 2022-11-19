const {Game} = require('../models');

class GameController {
  async addGame(req, res) {
    try {
      const {name, info, developerId, yearId, categoryId, ref} = req.body;
      const game = await Game.create({
        name, 
        info, 
        developerId, 
        yearId, 
        categoryId, 
        ref
      });
      return res.json(game);
    } catch(e) {
      return res.status(400).json({
        message: 'Try to create object again',
      });
    }
  }

  async getGames(req, res) {
    let games;
    games = await Game.findAll();
    return res.json(games);
  }

  async getGame(req, res) {
    const {id} = req.params;
    const game = await Game.findOne({where: {id}});
    if (!game) {
      return res.status(400).json({
        message: 'Invalid ID',
      });
    }
    return res.json(game);
  }

  async deleteGame(req, res) {
    const {id} = req.params;
    const game = await Game.findOne({where: {id}});
    if (!game) {
      return res.status(400).json({
        message: 'Invalid ID',
      });
    }
    await Game.destroy({where:{id}});
    return res.json({message: `${game.name} was deleted`});
  }
}

module.exports = new GameController();