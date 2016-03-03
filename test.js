setTimeout(fixptk,5000);

function fixptk(){
  renderStatusX('videoPtk', ytplayer.config.args.ptk);
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
    for (var i = 0; i < statusText.length; i++)
    {
       html += '<li>' + statusText[i] + '</li>'
    }
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
