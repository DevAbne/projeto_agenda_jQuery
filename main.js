$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        let taskText = $('#tarefa').val();
        if(taskText) {
            $('#taskList').append('<li>' + taskText + '</li>');
            $('#tarefa').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});