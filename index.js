// credit: https://github.com/sole/test_cases/

window.addEventListener('load', function() {

    var request = new XMLHttpRequest();
    request.open('get', 'tests.json', true);
    request.responseType = 'json';
    request.addEventListener('load', onTestsLoaded);
    request.addEventListener('error', onTestsLoadError);
    request.send();

    function tr(test) {
        var title = test[0],
            desc = test[1];
        var row = document.createElement('tr');
        var link = document.createElement('a');
        link.href = title;
        link.textContent = title;

        var linkTD = document.createElement('td');
        linkTD.appendChild(link);

        var descTD = document.createElement('td');
        descTD.textContent = desc;

        row.appendChild(linkTD);
        row.appendChild(descTD);
        return row;
    }

    function appendTr(tr) {
        document.getElementById('tBody').appendChild(tr);
    }

    function onTestsLoaded(e) {
        var response = this.response;
        console.log(response);
        if(!response || !(response.tests)) {
            onTestsLoadError(new Error('No tests found'));
            return;
        }

        var list = document.createElement('dl');
        document.body.appendChild(list);
        response.tests.map(tr).forEach(appendTr);
                
    }

    function onTestsLoadError(e) {
    }

});