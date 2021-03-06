<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>LAKON</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

    <!-- Google Font -->
    <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>

    <link rel="icon" type="image/png" href="assets/mask.png">
    <!-- Custom CSS -->
    <style>
    body {
        padding-top: 70px;
        /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */
    }
    </style>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/mask.png">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <!-- Page Content -->
    <div class="container" id="ContainLanding">
        <div class="row">
            <a href ="index.php"><img src="assets/mask.png" class="img-responsive" id="LakonIcon"/></a>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center judul" style="font-family: 'Lobster', cursive;">
                <p id="JudulLanding">LAKON</p>
            </div>
        </div>

        <div id="tabs" class="c-tabs no-js">
            <div class="c-tabs-nav">
                <a href="#" class="c-tabs-nav__link is-active">
                    <i class="fa fa-user"></i>
                </a>
                <a href="#" class="c-tabs-nav__link">
                    <i class="fa fa-user"></i>
                    <i class="fa fa-user"></i>
                </a>
            </div>
            <div class="c-tab is-active">
                <div class="c-tab__content">
                    <form class="search-form" id="formOne">
                        <div class="input-group input-group-lg">
                            <input type="text" class="form-control" placeholder="Masukkan nama satu orang yang ingin dicari relasinya" id="namaSatu">
                            <span class="input-group-btn">
                                <button class="btn btn-danger" type="submit" id="buttonOne">
                                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div class="c-tab">
                <div class="c-tab__content">
                    <form class="search-form" id="formTwo">
                        <div class="col-md-5 form-group">
                            <input type="text" class="form-control input-lg" placeholder="Masukkan nama orang pertama" id="namaPertama">
                        </div>
                        <div class="col-md-5 form-group">
                            <input type="text" class="form-control input-lg" placeholder="Masukkan nama orang kedua" id="namaKedua">
                        </div>
                        <button class="btn btn-danger btn-lg" type="submit" id="buttonTwo">
                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /.container -->

    <!-- jQuery Version 1.11.1 -->
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <script src="js/lakon.js"></script>

    <script>
      var myTabs = tabs({
        el: '#tabs',
        tabNavigationLinks: '.c-tabs-nav__link',
        tabContentContainers: '.c-tab'
      });
      myTabs.init();
    </script>

    <script>
        $("#formOne").submit(function(e) {
            e.preventDefault();
            if (id!=null && type!=null) {
                location = "result.php?x=1&id="+id+"&type="+type+"&nama="+nama;
            } else {
                alert("Harap pilih nama dari daftar yang ditampilkan");    
            }
        });
        $("#formTwo").submit(function(e) {
            e.preventDefault();
            if (id1!=null && id2!=null) {
                location = "result.php?x=2&id1="+id1+"&type1="+type1+"&id2="+id2+"&type2="+type2+"&nama1="+nam1+"&nama2="+nama2;
            } else {
                alert("Harap pilih dua nama dari daftar yang ditampilkan");
            }
        });
    </script>
</body>

<footer>
    <p align="center" style="font-size: 10px;">Hak Cipta 2015 oleh Catalina. <a href="about.php">Bantuan</a>.<br>Didukung oleh:</p> 
    <div class="row">
        <img src="assets/logos.png" class="img-responsive" id="logos">
    </div>
</footer>

</html>
