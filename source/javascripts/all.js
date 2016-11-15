'use strict'

function ajax(url, done) {
  var httpRequest = new XMLHttpRequest()
  httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        done(httpRequest.responseText)
      } else {
        alert('There was a problem with the request.')
      }
    }
  }
  httpRequest.open('GET', url);
  httpRequest.send();
}

document.onclick = function(e){
  var el = e.target
  if(el.tagName === 'A'){
    if(window.location.host === el.host){
      ajax(el.href, function(responseText){
        var wrapper = document.createElement('html')
        wrapper.innerHTML = responseText
        var body = wrapper.getElementsByTagName('body')[0]
        document.body.innerHTML = body.innerHTML
      })
      return false
    }
  }
}
