let cSharpValue = 0;
let pythonValue = 0;
let cPlusPlusValue = 0;
let tracker = ("000");

function sorter(w, x, y, z) {
  if (z === ("1")){
    w += 1;
  }
  else if (z === ("2")){
    x += 1;
  }
  else {
    y += 1;
  }
  console.log(w)
  return ("" + w + x + y);
}

function winner (a, b, c)
{
  if (a > b && a > c){
    return ("C#");
  }
  else if (b > a && b > c){
    return ("Python");
  }
  else if (c > a && c > b){
    return ("C++");
  }
  else{
    return ("Javascript. NOT JAVA.");
  }
  
}

$(document).ready(function() {

  $("#form1").submit(function(event) {
      event.preventDefault();
      let result1 = $("input:radio[name=question1]:checked").val();
      let result2 = $("input:radio[name=question2]:checked").val();
      let result3 = $("input:radio[name=question3]:checked").val();
      let result4 = $("input:radio[name=question4]:checked").val();
      let result5 = $("input:radio[name=question5]:checked").val();
      tracker = (sorter(cSharpValue, pythonValue, cPlusPlusValue, result1));
      console.log(tracker);
      cSharpValue = parseInt(tracker.charAt(0));
      pythonValue = parseInt(tracker.charAt(1));
      cPlusPlusValue = parseInt(tracker.charAt(2));
      tracker = (sorter(cSharpValue, pythonValue, cPlusPlusValue, result2));
      console.log(tracker);
      cSharpValue = parseInt(tracker.charAt(0));
      pythonValue = parseInt(tracker.charAt(1));
      cPlusPlusValue = parseInt(tracker.charAt(2));
      tracker = (sorter(cSharpValue, pythonValue, cPlusPlusValue, result3));
      console.log(tracker);
      cSharpValue = parseInt(tracker.charAt(0));
      pythonValue = parseInt(tracker.charAt(1));
      cPlusPlusValue = parseInt(tracker.charAt(2));
      tracker = (sorter(cSharpValue, pythonValue, cPlusPlusValue, result4));
      console.log(tracker);
      cSharpValue = parseInt(tracker.charAt(0));
      pythonValue = parseInt(tracker.charAt(1));
      cPlusPlusValue = parseInt(tracker.charAt(2));
      tracker = (sorter(cSharpValue, pythonValue, cPlusPlusValue, result5));
      console.log(tracker);
      cSharpValue = parseInt(tracker.charAt(0));
      pythonValue = parseInt(tracker.charAt(1));
      cPlusPlusValue = parseInt(tracker.charAt(2));
      $(".final").text(winner (cSharpValue, pythonValue, cPlusPlusValue));
      $("#output").show();
  });
});