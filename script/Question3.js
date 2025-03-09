$( document ).ready(function() {
    // Create a DataTable
    var table = new DataTable('#employee', {
        ajax: 'json/Mock_Data.json',
        columns: [
            { data: 'id' },
            { data: 'first_name' },
            { data: 'last_name' },
            { data: 'email' },
            { data: 'department' },
            { data: 'salary' }
        ]
    });
})