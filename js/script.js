<script>
  var elem = document.getElementById("test");
  var addDiv = function() {
    var containerDiv = document.createElement("DIV");
    containerDiv.className = "container paddint-top";

    var rowDiv = document.createElement("DIV");
    rowDiv.className = "row padding-top";
    rowDiv.setAttribute("align", "center");

    var labelComponent = document.createElement("LABEL");
    labelCoponent.htmlFor = "inputType";
    labelComponent.className = "col-sm-8 col-sm-offset-2 control-label padding-top";

    var userText = document.createElement("FONT");
    userText.setAttribute("size", "6");
    userText.appendChild(document.createTextNode("Hi " + document.getElementById('name').value) + "! Where are you located?");

    labelCommponent.appendChild(userText);

    rowDiv.appendChild(labelComponent);

    var formDiv = document.createElement("DIV");
    formDiv.className = "col-sm-4 col-sm-offset-4 padding-top";
    formDiv.setAttribute("align", "center");

    var inputDiv = document.createElement("DIV");
    inputDiv.className = "input-group";

    var inputComponent = document.createElement("DIV");

    inputComponent.setAttribute("type", "text");
    inputComponent.className = "form-control input-lg";
    inputComponent.setAttribute("name", "x");
    inputComponent.setAttribute("placeholder", "Ex. Santa Monica")

    inputDiv.appendChild(inputComponent);
    formDiv.appendChild(inputDiv);
    rowDiv.appendChild(formDiv);

    containerDiv.appendChild(rowDiv);

    document.getElementsByTagName('body')[0].appendChild(containerDiv);
  };

  elem.onkeyup = function(e) {
    if (e.keyCode == 13) {
      addDiv();
    };
  };

</script>

<script type="text/javascript" src="assets/js/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="dist/bootstrap-clockpicker.min.js"></script>

<script type="text/javascript">
$('.clockpicker').clockpicker({donetext: 'Done'})
    .find('input').change(function(){
        // TODO: time changed
        console.log(this.value);
    });
$('#demo-input').clockpicker({
    autoclose: true
});

if (something) {
    // Manual operations (after clockpicker is initialized).
    $('#demo-input').clockpicker('show') // Or hide, remove ...
            .clockpicker('toggleView', 'minutes');
}
</script>
