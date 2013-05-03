exports = module.exports = function(req, res, next){
  if(req.protocol == 'http' && !/^(localhost\:(\d+))|localhost$/.test(req.header('Host'))){
    res.redirect('https://' + req.header('Host') + req.url)
    next()
  }
}
