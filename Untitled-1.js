
<!DOCTYPE html>

<html>

<head>

  <title>Print Numbers from 1 to 100</title>

  <script>

    function printNumbers() {

      var output = "";


      for (var i = 1; i <= 100; i++) {

        output += i + "<br>";

      }


      document.getElementById("result").innerHTML = output;

    }

  </script>

</head>

<body>

  <h1>Print Numbers from 1 to 100</h1>

  <button onclick="printNumbers()">Print Numbers</button>

  <p id="result"></p>

</body>

</html>