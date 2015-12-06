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

    <!-- Google Font -->
    <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>

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
	<div class="content">
		<div class="row">
            <a href="index.php"><img src="assets/mask.png" class="img-responsive" id="LakonIconAbout"></a>                        
        </div>
        <hr>
		<div class="row">
			<div class="col-md-12">
				<h2 class="lobster">Tentang Aplikasi Ini</h2>
				<p class="roboto">Sistem yang menerima masukan berita dari sumber yang cukup dipercaya, kemudian mengeluarkan keterhubungan antar entitas, baik tokoh maupun organisasi, dalam bidang pemerintahan, politik, dan bisnis. Keterhubungan dapat berupa grafik pada UI dan response pada API.</p>	
				<p class="roboto">Sistem ini akan membantu masyarakat dalam memahami hubungan antara politisi, pebisnis, dan orang-orang berkuasa di Indonesia. Sistem ini juga dapat membantu kerja jurnalis dan bahkan KPK untuk melakukan investigasi kasus korupsi.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h2 class="lobster">Cara Menggunakan Aplikasi Ini</h2>
				<p class="roboto">Aplikasi ini dapat menampilkan relasi yang dimiliki seseorang dengan entitas-entitas lain maupun relasi spesifik antara 2 entitas. 
				Saat pengguna memasukkan satu nama entitas pada form tab pertama, aplikasi ini akan menampilkan graf yang menggambarkan semua relasi entitas tersebut (sampai batas tertentu) dengan entitas-entitas lain.
				Saat pengguna memasukkan dua nama entitas pada form tab kedua, aplikasi akan menampilkan semua relasi antara kedua entitas tersebut.</p>
				<p class="robot">Berikut adalah penjelasan mengenai graf yang ditampilkan pada hasil pencarian:</p>
				<ul>
					<li>Titik Merah : menggambarkan entitas utama yang namanya dimasukkan pada form pencarian</li>
					<li>Titik Kuning</li>
					<li>Titik Biru</li>
					<li>Garis Hijau</li>
					<li>Garis Merah</li>
					<li>Garis Biru</li>
					
					
				</ul>	
			</div>
		</div>
	</div>
	
	<!-- jQuery Version 1.11.1 -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
</body>
<footer>
	<p align="center" style="font-size: 10px;">Hak Cipta 2015 oleh Catalina. <a href="about.php">Bantuan</a>.<br>Didukung oleh:</p> 
    <div class="row">
        <img src="assets/logos.png" class="img-responsive" id="logos">
    </div>
</footer>
</html>