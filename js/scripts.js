var stepsButton = document.getElementById('bM_toggle');
var locationButton = document.getElementById('sL_toggle');

stepsButton.onclick = function() {
    var div = document.getElementById('bM_expand');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
        stepsButton.innerHTML = "Show Steps";
    }
    else {
        div.style.display = 'block';
        stepsButton.innerHTML = "Hide Steps";
    }
};
locationButton.onclick = function() {
    var div = document.getElementById('sL_expand');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
        locationButton.innerHTML = "Show Location Information";
    }
    else {
        div.style.display = 'block';
        locationButton.innerHTML = "Hide Location Information";
    }
};