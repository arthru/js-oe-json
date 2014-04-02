/*global $*/

function do_fetch(oe) {

    var partner = new oe.web.Model('res.partner');
    partner.query(['name', 'city']).all().then(function (data) {
        var str = "<ul>";
        var o;
        for (o in data) {
            str += "<li>" + data[o].name + " - " + data[o].city + "</li>";
        }
        str += "</ul>";
        $('#fetch').html(str);
    }).fail(function (error) {
        $('#fetch').html("<b>" + error.message + "</b>" + "\n\n<pre>" + error.data.debug + "</pre>");
        $('#fetch').addClass("Error");
    });
}
