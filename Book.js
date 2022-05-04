window.onload = function() {
    showLabel(divId, element);
  };


function showLabel(divId, element)
{
    document.getElementById(divId).style.display = element.value !== 0 ? 'block' : 'none';
}


