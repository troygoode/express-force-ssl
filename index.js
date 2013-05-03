module.exports = function(req, res, next){
  if(req.protocol === 'http' && !/^(localhost\:(\d+))|localhost$/.test(req.header('Host'))){
    if(req.method === 'GET'){
      res.redirect('https://' + req.header('Host') + req.url);
    }else{
      res.send(403, 'SSL Required'); //OWASP recommends dropping connection instead: https://www.owasp.org/index.php/SSL_Best_Practices
    }
  }else{
    next();
  }
};
