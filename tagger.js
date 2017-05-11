function QueryString () 
{
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        //capture the first argument of query
    if (typeof query_string[pair[0]] === "tag") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    }
  } 
  //pass it over to another function for processing
  ReturnFinal(pair[1]);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ReturnFinal(str)
{
  var newStr = str.replace(/(\[.*?\])/g, '');
  newStr = newStr.replace(/%20/g, " ");
  newStr = newStr.trim();
  newStr = capitalize(newStr);
  console.log(newStr[2]);
  document.write(newStr);
}

$(document).ready(function ()
{
  QueryString();
});