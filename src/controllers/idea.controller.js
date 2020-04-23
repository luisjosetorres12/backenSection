let _ideaService = null
class IdeaController {
  constructor({IdeaService}){
    _ideaService = IdeaService
  }

  async get(req,res){
    const {ideaId} = req.params
    const idea = await _ideaService.get(ideaId)
    res.send(idea)
  }

  async getAll(req,res){
    const ideas = await _ideaService.getAll()
    return res.send(ideas)
  }

  async create(req,res){
    const {body} = req
    const createdIdea = await _ideaService.create(body)
    return res.status(201).send(createdIdea)
  }

  async update(req,res){
    const {body} = req
    const {ideaId} = req.params
    const updatedIdea = await _ideaService.updte(ideaId,body)
    return res.send(updatedIdea)
  }

  async delete(req,res){
    const {ideaId} = req.params
    const deletedIdea = await _ideaService.delete(ideaId)
    return res.send(deletedIdea)
  }

  async getUserIdeas(req,res){
    const {userId} = req.params
    const ideas = await _ideaService.getUserIdeas(userId)
    return res.send(ideas)
  }

  async upVoteIdea(req,res){
    const {ideaId} = req.params
    const idea = await _ideaService.upVoteIdea(ideaId)
    return res.send(idea)
  }

  async douwnVoteIdea(req,res){
    const {ideaId} = req.params
    const idea = await _ideaService.upVoteIdea(ideaId)
    return res.send(idea)
  }
}

module.exports = IdeaController