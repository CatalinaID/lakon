<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Lakon</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
   
    <!--alchemy -->
    <link rel="stylesheet" href="http://cdn.graphalchemist.com/alchemy.0.4.1.min.css">

    <!-- Google Font -->
    <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400italic,300italic,300,700,700italic' rel='stylesheet' type='text/css'>

    <!-- Custom CSS -->
    <style>
    body {
        padding-top: 70px;
        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */
    }
    </style>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <!-- Page Content -->
    <div class="content">
        <div class="row">
            <img src="assets/mask.png" class="img-responsive" id="LakonIconSmall">                        
        </div>
        <hr>
        <div class="row">
            <div class="col-md-6 judul" id="JudulResult">
                <h2 class="lobster">Hasil pencarian lilili</h2>
            </div>
        </div>

        <div>
            <div class="content-graf" id="graf">
                <div class="alchemy" id="alchemy">
                </div>
            </div> <!--graf nya disini -->
            <h2 class="keterangan"> Keterangan </h2>
            <div id="temp"></div>
            <ul class="list-group">
                <li class="list-group-item"><b>Relasi 1</b> Teman SMA </li>
                <li class="list-group-item"><b>Relasi 2</b> Teman Kuliah </li>
                <li class="list-group-item"><b>Relasi 3</b> Mantan Pacar </li>
            </ul>

        </div>

    </div>
    <!-- /.container -->

    <!-- jQuery Version 1.11.1 -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <script src="js/lakon.js"></script>

    <script type="text/javascript" src="http://cdn.graphalchemist.com/alchemy.0.4.1.min.js"></script>

    <script type="text/javascript">
        var some_data = {
            "nodes": [
              {
                "id": 1
              },
              {
                "id": 2
              },
              {
                "id": 3
              }
            ],
            "edges": [
              {
                "source": 1,
                "target": 2
              },
              {
                "source": 1,
                "target": 3,
              }
            ]
        };
        var config = {
            dataSource : some_data,
        };
        alchemy = new Alchemy(config);
    </script>

</body>

</html>
