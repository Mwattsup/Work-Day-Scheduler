$(document).ready(function () {
    var now = moment().format('dddd, MMMM Do');
    $("#currentDay").text(now);
    console.log(now);

    var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

    function renderRows() {
        for (var i = 0; i < times.length; i++) {
            $("#timeTable").append(`
            <tr>
                <td>${times[i]}</td>
                <td><textarea 'class=info' 'type=text' 'id=${times[i]}'></textarea></td>
                <td><button 'id=${times[i]}btn'></td>
            </tr>
            `);
        }
    }

    renderRows();

    function saveInfo() {
        var inputInfo = $("9AM").val();
        localStorage.setItem('info', inputInfo);
        console.log(inputInfo);
    }

    $('#9AMbtn').on('click', saveInfo);
    // $('#10AMbtn').on('click', saveInfo2);
    // $('#11AMbtn').on('click', saveInfo3);
    // $('#12PMbtn').on('click', saveInfo4);
    // $('#1PMbtn').on('click', saveInfo5);
    // $('#2PMbtn').on('click', saveInfo6);
    // $('#3PMbtn').on('click', saveInfo7);
    // $('#4PMbtn').on('click', saveInfo8);
    // $('#5PMbtn').on('click', saveInfo9);
});


