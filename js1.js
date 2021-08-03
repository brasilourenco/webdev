window.onload = function() {
    populateCustomers();
};

function populateCustomers() {
    var customerData;
    var ajax;

    if (window.XMLHttpRequest) {
        // Mozilla, Safari, IE7+ ...
        ajax = new XMLHttpRequest();
        
    } else if (window.ActiveXObject) {
        // IE 6 and older
        ajax = new ActiveXObject('Microsoft.XMLHTTP');
    }

        // run this when the ajax request completes
        ajax.onreadystatechange = function() {
        if (ajax.readyState === 4 && ajax.status === 200) {
           // alert(ajax.responseText);
            customerData = JSON.parse(ajax.responseText);
            var elementStr;
       
        var customersTable = document.getElementById("customer-table");
    
        var row;
       
        customerData.forEach(function(element) {
    
            elementStr =
                "<td>" +
                element.firstName +
            "</td>" +

            "<td>" +
            element.lastName +
            "</td>" +

            "<td>" +
            element.email +
            "</td>" +

            "<td>" +
            element.phone +
            "</td>" +

            '<td><button type="button" id="edit-btn-' +
            element.id +
            '" class="edit-btn btn btn-success">edit</button></td>' +
            '<td><button type="button" id="remove-btn-' +
            element.id +
            '" class="remove-btn btn btn-danger">delete</button></td>';

        row = customersTable.insertRow(-1);
        row.innerHTML = elementStr;

        row.setAttribute("id", "custumer-" + element.id);
        row.setAttribute("class", "customer-data");
    });
        }
        };

        // start the AJAX request
        ajax.open('GET', 'http://localhost:8080/api/customer', true);
        ajax.setRequestHeader('Content-type', 'application/json');
        ajax.send();
      
       
}