  var script = document.createElement('script');
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

setInterval(fixptk,700);

currentUrl = window.location.href;
lastUrl = currentUrl;

function fixptk(){
  currentUrl = window.location.href;
  if (currentUrl !== lastUrl) { showStats() }
  renderStatusX('videoTitle', ytplayer.config.args.title);
  renderStatusX('videoPtk', ytplayer.config.args.ptk);
  renderStatusX('oid', ytplayer.config.args.oid);
  renderStatusX('channel_id', ytplayer.config.args.ucid);
  renderStatusX('keywords', ytplayer.config.args.keywords);
  renderStatusX('family_fiendly', "");
  renderStatusX('content_warning', "");
  renderStatusX('show_pyv', ytplayer.config.args.show_pyv_in_related);

}
function showStats(){
  jQuery("#action-panel-overflow-button").click();
  jQuery("button[data-trigger-for='action-panel-stats']").click();
  jQuery('.watch-action-panels').css('display','block');
  jQuery('.watch-action-panels').height(393);  
}


function showHideElementsByTag(tag, style) {
  var eles = document.getElementsByTagName(tag);
  for (i = 0; i < eles.length; i++){
    eles[i].style.display = style;
  }
}

function renderStatusX(id, statusText) {
  if (id !== 'error'){
    showHideElementsByTag('hr', 'block');
    showHideElementsByTag('h2', 'block');
  }
  if (id == "videoPtk"){
      if (statusText != null && statusText.length > 26 ){
        var html = '<p><strong>PTK:&nbsp;</strong></p>' + '<br>' + statusText;
        document.getElementById(id).style.margin = '16px';
      }
      else {
        var html = '<p><strong>PTK:&nbsp;</strong></p>' + statusText;
        document.getElementById(id).style.margin= '16px';
      }
      document.getElementById(id).style.marginTop = '16px';
      document.getElementById(id).innerHTML = html;
      document.getElementById(id).getElementsByTagName('p')[0].style.display = 'inline';
  }
  else if (id == "oid"){
    if (statusText != null && statusText.length > 26 ){
      var html = '<p><strong>OID:&nbsp;</strong></p>' + '<br>' + statusText;
      document.getElementById(id).style.margin = '16px';
    }
    else {
      var html = '<p><strong>OID:&nbsp;</strong></p>' + statusText;
      document.getElementById(id).style.margin= '16px';
    }
    document.getElementById(id).innerHTML = html;
    document.getElementById(id).getElementsByTagName('p')[0].style.display = 'inline';
  }
  else if (id == "channel_id"){
    var html = '<p><strong>Channel ID:&nbsp;</strong></p>' + '<br>' + statusText;
    document.getElementById(id).style.margin = '16px';
    document.getElementById(id).innerHTML = html;
    document.getElementById(id).getElementsByTagName('p')[0].style.display = 'inline';
  }
  else if (id == "keywords"){
    var html = '<p><strong>Keywords: </strong></p><ul style="list-style-type: disc; list-style-position: inside;margin-left: 15px; margin: 16px;">';

       html += '<li>' + statusText + '</li>'
    html += '</ul>';
    document.getElementById(id).innerHTML = html;
    setMarginWithinIdByTag(id, 'p', '16px');
  }
  else if (id == "family_fiendly"){
    var html = '<p><strong>Is Family Friendly:&nbsp;</strong>' + statusText + '</p>';
    document.getElementById(id).innerHTML = html;
    setMarginWithinIdByTag(id, 'p', '16px');
  }
  else if (id == "content_warning"){
    if (statusText == null) {
      statusText = 'No';
    }
    var html = '<p><strong>Age Gated:&nbsp;</strong>' + statusText + '</p>';
    document.getElementById(id).innerHTML = html;
    setMarginWithinIdByTag(id, 'p', '16px');
  }
  else if (id == "show_pyv"){
    if (statusText === null){
      statusText = 'Null'
    }else if (statusText === 'true'){
      statusText = 'True'
    }
    var html = '<p><strong>Show PYV:&nbsp;</strong>' + statusText + '</p>';
    document.getElementById(id).innerHTML = html;
    setMarginWithinIdByTag(id, 'p', '16px');
  }
  else if (id == "error"){
    var html = '<p><strong>Status:&nbsp;</strong>' + statusText + '</p>';
    document.getElementById(id).innerHTML = html;
  }
}
function setMarginWithinIdByTag(id, tag, styleArg){
  var eles = document.getElementById(id).getElementsByTagName(tag);
  for (i = 0; i < eles.length; i++){
    eles[i].style.margin = styleArg;
  }
}

