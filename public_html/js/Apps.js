/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var fs = "https://nonton-tv-net-project.googlecode.com/git/public_html/";
    //var fs = "http://localhost/nontontvnetgithub/public_html/";
    
    var urlDelimiter = '?c=';
    function URLSplitUtama(a){
        var url = location.href;
        var Split = url.split(urlDelimiter);
        return Split[a];
    };
    
    function utf8_to_b64( str ) {  //encode
        return window.btoa(unescape(encodeURIComponent( str )));
    };

    function b64_to_utf8( str ) { //decode
        return decodeURIComponent(escape(window.atob( str )));
    };
    
    function UrlSplitSecond(url,a){
        var Sp = b64_to_utf8(url).split('/');
        return Sp[a];
    };
    
    function UrlFileSplit(url,a){
        var Sp = url.split(' ');
        return Sp[a];
    };
    
    function VIDEOJS(file,image,title,id,sv,ds,st){
        if (id === '' || sv === '' || file === undefined){
            $('#player-area').empty().append('<span>Sorry, URL not valid.</span>');
        }else if (UrlFileSplit(file,0) === 'embed'){
            var em = '<embed id="embedTV" src='+UrlFileSplit(file,1)+' >';
            $('#player-area').empty().append(em);
        } else {
            $('#player-area').empty().append('<div id="'+id+'-'+sv+'"></div>');
            jwplayer(id+'-'+sv).setup({
                file : file,
                image: fs+image,
                title: title,
                androidhls:true,
                width: '100%',
                height: '100%',
                autostart: 'true',
                repeat: 'true',
                stretching: "exactfit",
                abouttext:"",
                aboutlink: ""
            });
        }
        if (st != 0)
            $('title').html(function(){$(this).empty().append(title+' - Nonton Tv Net');});
        $('#tdesc h3 .tit').html(function(){$(this).empty().append(title);});
        $('#cdesc').html(function(){$(this).empty().append(ds);});
    };

    function CLICKCHNELLIST(id,url,logo,name,i,ct,o,sv,ds){
        $.ajax({
            success: function(){
                $('.clb-'+ct+'-'+i+'-'+sv).click(function(){
                    window.history.pushState({ foo: "bar" },"", '//'+document.domain+urlDelimiter+utf8_to_b64(ct+'/'+i+'/'+sv));
                    $('#'+id+'-'+sv).html(VIDEOJS(url,logo,name,id,sv,ds,1));
                    $('.channel-list-box').removeClass('on');
                    $('.clb-'+ct+'-'+i).addClass('on');
                    $('.sv').removeClass('on');
                    $('.clb-'+ct+'-'+i+'-'+sv).addClass('on');
                });
            }
        });
    };

    function GETCJSON(){
    var c =
    { 
    "ind" : 
        [
            {   
                "id"   : "net",
                "name" : "NET",        
                "url"  : ["rtmp://win.stream.netmedia.co.id/live/nettv_mid"],
                "logo" : "image/Net-TV-dan-KPI-1-480x300.png",
                "desc" : "NET. (singkatan dari News and Entertainment Television) adalah sebuah stasiun televisi berjaringan di Indonesia yang resmi diluncurkan pada 26 Mei 2013. NET. menggantikan siaran terestrial Spacetoon Indonesia yang sebagian sahamnya telah diambil alih oleh Indika Group. Berbeda dengan Spacetoon yang acaranya ditujukan untuk anak-anak, program-program NET. ditujukan kepada keluarga dan pemirsa muda.\nSelain melalui jaringan terestrial, NET. juga menyiarkan kontennya melalui saluran komunikasi lain seperti jejaring sosial dan YouTube.\nProgram Grand Launching NET. ditayangkan secara langsung pada tanggal 26 Mei 2013 pukul 19.00 WIB dan disiarkan secara streaming melalui Youtube dan website resmi NET., dan acara Grand Launching ini menampilkan penyanyi internasional seperti Carly Rae Jepsen, Taio Cruz dan juga didukung oleh beberapa artis dalam negeri seperti Agnes Monica, Maudy Ayunda, Cherrybelle, Sm*sh, Noah, Raisa, Kahitna, Dewa 19, Andien, Ungu, Reza Rahardian, Andi Rianto dan banyak lagi\nPada tanggal 18 Mei 2014 NET. merayakan ulang tahun pertamanya yang bertajuk NET. ONE (Indonesian Choice Awards 2014)."
            },
            {   
                "id"   : "tvonejkt",
                "name" : "TV One",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
                "logo" : "image/TvOne_Logo28201129.png",
                "desc" : "tvOne (sebelumnya bernama Lativi) adalah sebuah stasiun televisi swasta Indonesia. Berawal dari penggunaan nama Lativi, stasiun televisi ini didirikan pada tanggal 30 Juli 2002 oleh Abdul Latief dan dimiliki oleh ALatief Corporation. Pada saat itu, konsep penyusunan acaranya adalah banyak menonjolkan masalah yang berbau klenik, erotisme, berita kriminalitas dan beberapa hiburan ringan lainnya. Sejak tahun 2006, sebagian sahamnya juga dimiliki oleh Grup Bakrie yang juga memiliki stasiun televisi antv. Pada tanggal 14 Februari 2008, Lativi secara resmi berganti nama menjadi tvOne, dengan komposisi 70 persen berita, sisanya gabungan program olahraga dan hiburan. Abdul Latief tidak lagi berada dalam kepemilikan saham tvOne. Komposisi kepemilikan saham tvOne terdiri dari PT Visi Media Asia Tbk sebesar 49%, PT Redal Semesta 31%, Good Response Ltd 10%, dan Promise Result Ltd 10%. Direktur Utama tvOne saat ini adalah Ardiansyah Bakrie.[1]"
            },
            {   
                "id"   : "rcti",
                "name" : "RCTI",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/rcti2"],
                "logo" : "image/rcti.png",
                "desc" : "RCTI adalah stasiun televisi swasta Indonesia pertama. RCTI pertama mengudara pada 13 November 1988 dan diresmikan 24 Agustus 1989 dan pada waktu itu, siaran RCTI hanya dapat ditangkap oleh pelanggan yang memiliki dekoder dan membayar iuran setiap bulannya. RCTI melepas dekodernya pada akhir 1989. Pemerintah mengizinkan RCTI melakukan siaran bebas secara nasional sejak tahun 1990 tapi baru terwujud pada akhir 1991 setelah membuat RCTI Bandung pada 1 Mei 1991. Pada 2004 RCTI termasuk stasiun televisi yang besar di Indonesia. Sejak Oktober 2003, RCTI dimiliki oleh Media Nusantara Citra, kelompok perusahaan media yang juga memiliki Global TV dan MNCTV. RCTI telah memiliki hak siar atas ajang sepak bola bergengsi Eropa, Euro 2008 bersama Global TV dan MNCTV.\nPada tahun 2011, RCTI memiliki hak siar dalam ajang sepak bola Liga Prima Indonesia, bersama MNCTV dan Global TV."
            },
            {   
                "id"   : "mnc",
                "name" : "MNC TV",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/mnctv2"],
                "logo" : "image/MNCTV_MNC-Group.png",
                "desc" : "MNCTV (sebelumnya bernama TPI) adalah stasiun televisi swasta Indonesia yang mengudara secara terestrial dari Jakarta. Namanya yang sekarang dipergunakan sejak 20 Oktober 2010.\nMNCTV merupakan stasiun televisi swasta ketiga di Indonesia setelah RCTI dan SCTV. MNCTV didirikan oleh Mbak Tutut dan dulu sebagian besar sahamnya dimiliki oleh PT Cipta Lamtoro Gung Persada.\nPada tahun 2009 sampai dengan tahun 2010, MNCTV tidak menyiarkan acara olahraga. Tetapi, mulai tahun 2010 hingga 2013, MNCTV kembali menyiarkan acara olahraga yaitu Liga Utama Inggris.\nPada tahun 2011, MNCTV juga memiliki hak siar dalam ajang sepak bola Liga Prima Indonesia, bersama RCTI dan Global TV."
            },        
            {   
                "id"   : "transtv",
                "name" : "Trans TV",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/transtv2_240p"],
                "logo" : "image/Logo_Trans_TV.png",
                "desc" : "Trans TV adalah sebuah stasiun televisi swasta di Indonesia mulai secara terrestrial area di Jakarta, yang dimiliki oleh konglomerat Chairul Tanjung. Dengan moto \"Milik Kita Bersama\", konsep tayang stasiun ini tidak banyak berbeda dengan stasiun swasta lainnya. Trans TV adalah anak perusahaan PT Trans Corporation. Kantor Pusat stasiun ini berada di Gedung Trans TV, Jalan Kapten Pierre Tendean, Jakarta Selatan. Direktur Utama Trans TV saat ini adalah Atiek Nur Wahyuni yang juga merupakan Direktur Utama Trans7."
            },
            {   
                "id"   : "trans7",
                "name" : "Trans 7",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/trans72"],
                "logo" : "image/Logo_Trans7.png",
                "desc" : "Trans7 (sebelumnya bernama TV7) adalah sebuah stasiun televisi swasta nasional di Indonesia. Trans7 yang pada awalnya menggunakan nama TV7, melakukan siaran perdananya secara terestrial di Jakarta pada 25 November 2001 dan pada saat itulah mayoritas sahamnya dimiliki oleh Kompas Gramedia. Pada tanggal 4 Agustus 2006, PT Trans Corporation mengakuisisi mayoritas saham TV7. Meski sejak itulah TV7 dan Trans TV resmi bergabung, namun ternyata TV7 masih dimiliki oleh Kompas Gramedia, sampai TV7 akhirnya melakukan re-launch (peluncuran ulang) pada 15 Desember 2006 dan menggunakan nama baru, yaitu Trans7."
            },
            {   
                "id"   : "sctv",
                "name" : "SCTV",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/sctv2","rtmp://cdnjkt.mivo.tv:1935/mivotvjkt/sctv2_240p"],
                "logo" : "image/20110218143118!SCTV_Logo.png",
                "desc" : "SCTV (singkatan dari Surya Citra Televisi) adalah sebuah stasiun televisi swasta nasional di Indonesia. SCTV merupakan stasiun televisi swasta kedua di Indonesia setelah RCTI. SCTV lahir pada tanggal 24 Agustus 1990 sebagai stasiun televisi lokal di Surabaya yang berpusat di Jl. Darmo Permai, Surabaya, Jawa Timur, di mana SCTV pada awalnya didirikan untuk menayangkan acara-acara RCTI untuk wilayah Surabaya. Meski tanggal itu ditetapkan sebagai tanggal lahir SCTV, namun baru tanggal 1 Januari 1993, SCTV mendapatkan izin sebagai stasiun televisi nasional di Jakarta. Kantor operasional SCTV pun secara bertahap dipindahkan dari Surabaya ke Jakarta, namun studio SCTV tetap berada di Surabaya. Awalnya, mayoritas saham SCTV dimiliki oleh PT Bimantara Citra, Tbk, melalui anak usahanya, PT Sindo Citra Media (kini menjadi PT Surya Citra Media).\nMeski berkali-kali berpindah kantor, SCTV selalu mengudara setiap hari. Pada tahun 1993 misalnya, SCTV berpindah kantor ke Wisma AKR, Jakarta Barat yang letaknya berdekatan dengan kantor RCTI. Lalu pada tahun 1996, SCTV berpindah kantor lagi ke Wisma Indovision. Menginjak usia ke-11, pada tahun 2001, SCTV kemudian memusatkan kegiatan operasionalnya di Gedung Graha SCTV, Jalan Gatot Subroto, Jakarta Selatan. Dan pada tahun 2007, kegiatan operasional SCTV berpusat di Senayan City. Namun, stasiun pemancar dan studio tetap dipusatkan di Kebon Jeruk.\nSejak tahun 1999, mayoritas saham SCTV diakuisisi oleh PT Surya Citra Media, Tbk. Pada awal Mei 2013, SCTV dan Indosiar resmi bergabung."
            },
            {   
                "id"   : "metrotv",
                "name" : "Metro TV",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/metrotv2_240p"],
                "logo" : "image/metrotv.png",
                "desc" : "MetroTV adalah sebuah stasiun televisi swasta berita yang berkedudukan di Indonesia. MetroTV didirikan oleh PT Media Televisi Indonesia, resmi mengudara sejak 25 November 2000 di Jakarta. Metro TV dimiliki Media Group pimpinan Surya Paloh yang juga memiliki harian Media Indonesia dan Lampung Post."
            },
            {   
                "id"   : "globaltv",
                "name" : "Global TV",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/globaltv2"],
                "logo" : "image/Logo_Global_TV_2012.png",
                "desc" : "Global TV adalah salah satu stasiun televisi swasta nasional di Indonesia yang mengudara secara terestrial dari Jakarta. Berawal dari sebuah stasiun televisi swasta lokal di Jakarta, Global TV belakangan meluaskan siaran ke 5 kota besar lainnya. Global TV memiliki hak siar atas liga balap paling bergengsi di dunia, Formula 1 setelah sebelumnya hak siar Formula 1 dikuasai MNCTV, dan kejuaraan dunia balap antar negara, A1. Kedua ajang ini disiarkan Global TV sendirian. Global TV juga memiliki hak siar dalam ajang sepak bola Euro 2008, bersama RCTI dan MNCTV. Direktur Utama Global TV saat ini adalah David Fernando Audy yang menggantikan Daniel Tatang Hartono. Global TV juga pernah menayangkan Piala Dunia 2010 dan untuk tahun ini, Global TV dan MNCTV menayangkan Liga Utama Inggris. Pada tahun 2011, Global TV juga memiliki hak siar dalam ajang sepak bola Liga Prima Indonesia, bersama RCTI dan MNCTV."
            },
            {   
                "id"   : "indosiar",
                "name" : "INDOSIAR",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/indosiar2_240p"],
                "logo" : "image/INDOSIAR_Logo.png",
                "desc" : "Indosiar adalah salah satu stasiun televisi swasta nasional di Indonesia. Stasiun televisi ini beroperasi dari Daan Mogot, Jakarta Barat. Indosiar awalnya didirikan dan dikuasai oleh Salim Group. Pada tahun 2004, Indosiar merupakan bagian dari PT. Indosiar Karya Media Tbk. (sebelumnya PT. Indovisual Citra Persada) yang tercatat di Bursa Efek Indonesia (dahulu Bursa Efek Jakarta). Pada 13 Mei 2011, mayoritas saham PT. Indosiar Karya Media Tbk. dibeli oleh PT. Elang Mahkota Teknologi Tbk., pemilik SCTV (melalui SCM sebelum bergabung dengan IDKM) dan O Channel, menjadikan ketiga stasiun televisi berada dalam satu pengendalian. Kini, stasiun televisi ini resmi dikuasai oleh SCM pasca bergabung dengan IDKM dan \"bersaudara\" dengan SCTV."
            },
            {   
                "id"   : "antv",
                "name" : "ANTV",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/antv2_240p"],
                "logo" : "image/antv.png",
                "desc" : "antv (singkatan dari Andalas Televisi) adalah sebuah stasiun televisi swasta nasional Indonesia. Stasiun televisi ini awalnya disiarkan pada 1 Januari 1993 di kota Lampung dan sekitarnya. Bermula dari sebuah izin siaran lokal di Lampung, antv mengudara selama 5 jam sehari. Satu tahun kemudian, tepatnya tanggal 1 Maret 1994, antv secara resmi disiarkan ke seluruh Indonesia dari Jakarta.\nantv dimiliki oleh konglomerat muda Anindya Bakrie dan sekarang dikelola oleh yaitu Erick Thohir, yang menjadi Presiden Direktur dari stasiun televisi ini sekaligus Wakil Komisaris Utama VIVA. Konglomerat media asal Amerika Serikat, Rupert Murdoch, membeli sekitar 20% saham antv pada 30 April 2006 melalui perusahaannya di Hong Kong, STAR TV. Pangsa pasar antv saat ini adalah sekitar 5% dari 180 juta penonton. antv telah memiliki hak siar atas ajang sepak bola bergengsi Dunia, Piala Dunia FIFA 2014 bersama tvOne."
            },
            {   
                "id"   : "rtv",
                "name" : "Rajawali TV",        
                "url"  : ["rtmp://203.153.97.35/live/livestream"],
                "logo" : "image/rajawalitv.png",
                "desc" : "Rajawali Televisi (disingkat RTV, sebelumnya bernama B-Channel) adalah sebuah stasiun televisi swasta terestrial nasional asal Jakarta, Indonesia yang dimilik perusahaan oleh Rajawali Corpora. RTV resmi mengudara pada tanggal 1 November 2009 di Jakarta dengan nama B-Channel. Saat ini, program RTV sendiri lebih difokuskan pada acara hiburan, soft news dan variety show untuk keluarga. Pada tanggal 3 Mei 2014, B-Channel berganti nama menjadi \"RTV (Rajawali Televisi)\" pada saat acara Grand Launching Langit Rajawali."
            },
            {   
                "id"   : "brtstNews",
                "name" : "Berita Satu News",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/beritasatu_240p"],
                "logo" : "image/beritasatu.jpg",
                "desc" : "BeritaSatu (sebelumnya bernama QTV dan Q Channel) adalah saluran televisi berita yang mengudara sejak tahun 1996. Saluran ini juga berguna sebagai saluran khusus untuk mengenai soal-soal keuangan dan informasi. Saluran ini hanya bisa disaksikan melalui satelit dan kabel dan juga siaran digital terestrial DVB-T2 yang bisa disaksikan via Set Top Box DVB-T2 atau Nexmedia. Target pemirsanya adalah kalangan menengah ke atas. Pemilik dan pendirinya adalah Peter F. Gontha."
            },
            {   
                "id"   : "kompastv",
                "name" : "Kompas TV",        
                "url"  : ["rtmp://202.137.11.52/jakarta/offair.sdp"],
                "logo" : "image/kompastv.png",
                "desc" : "Kompas TV merupakan stasiun televisi swasta terestrial berjaringan di Indonesia. Kompas TV dimiliki oleh Kompas Gramedia. Stasiun televisi ini hadir menggantikan stasiun televisi yang pernah dimiliki oleh Kompas Gramedia, yaitu TV7. Sejak saham TV7 dibeli oleh pihak Trans Corp yang berdiri di bawah kepemimpinan Chairul Tanjung pada tahun 2006 dan nama TV7 diganti menjadi Trans7, maka saham Kompas Gramedia terhadap Trans7 menurun menjadi hampir setengah dari Trans Corp. Pada tanggal 11 September 2011, Kompas TV mengubah logonya yaitu dengan menghilangkan tulisan TV pada logo tersebut, dan tulisan TV tersebut kembali digunakan mulai 5 Oktober 2012 hingga sekarang."
            },
            {   
                "id"   : "sindotv",
                "name" : "Sindo TV",        
                "url"  : ["embed http://embednontontvnet.blogspot.com/2015/03/sindotv.html","rtmp://edge.okeinfo.net/live/mncoke4_512.stream"],
                "logo" : "image/sindotv.jpg",
                "desc" : "SINDOtv (sebelumnya bernama SUN TV) adalah stasiun televisi swasta berjaringan di Indonesia. SINDOtv didirikan oleh kelompok perusahaan Media Nusantara Citra."
            },
            {   
                "id"   : "tvri",
                "name" : "TVRI",        
                "url"  : ["rtmp://118.97.50.102:1935/live/stream1.sdp","rtmp://118.97.50.102/digital"],
                "logo" : "image/LogoLPP-TVRI.png",
                "desc" : "Televisi Republik Indonesia (TVRI) adalah stasiun televisi pertama di Indonesia yang mengudara pada tanggal 24 Agustus 1962. Siaran perdananya menayangkan Upacara Peringatan Hari Kemerdekaan Republik Indonesia ke-17 dari Istana Negara Jakarta. Siarannya ini masih berupa hitam putih. TVRI kemudian meliput Asian Games yang diselenggarakan di Jakarta.\nDahulu TVRI pernah menayangkan iklan dalam satu tayangan khusus yang dengan judul acara Mana Suka Siaran Niaga (sehari dua kali). Sejak April tahun 1981 hingga akhir 90-an TVRI tidak diperbolehkan menayangkan iklan, dan akhirnya TVRI kembali menayangkan iklan. Status TVRI saat ini adalah Lembaga Penyiaran Publik. Sebagian biaya operasional TVRI masih ditanggung oleh negara.\nTVRI memonopoli siaran televisi di Indonesia sebelum tahun 1989 ketika didirikan televisi swasta pertama RCTI di Jakarta, dan SCTV pada tahun 1990 di Surabaya."
            }
        ],

    "malay" :
        [
            {
                "id"   : "astroawani",
                "name" : "Astro Awani",        
                "url"  : ["rtmp://cp160334.live.edgefcs.net:1935/live?ovpfv=1.1/AstroAwani24x7_1@74937","rtmp://cp160334.live.edgefcs.net:1935/live?ovpfv=1.1/AstroAwani24x7_2@74937","rtmp://cp160334.live.edgefcs.net:1935/live?ovpfv=1.1/AstroAwani24x7_3@74937"],
                "logo" : "image/astroawani.jpg",
                "desc" : "Astro Awani is the in-house rolling television news and current affairs channel providing 24-hour news coverage including news in Malay. With its slogan and motto tagline names Our Gateway to The World (Malaysian language: Gerbang Dunia Kita), Astro Awani presents news and informative programs including current affairs, lifestyle, documentaries, interview programs and a local and international magazine. Astro Awani started broadcasting on 6 September 2007 as part of the revamp of Astro's news division. The station is targeted at Malaysia, Brunei and Indonesia. Currently, the channel has numerous bases each with their own correspondents, and can also call upon a wide range of resources and global bureaux provided by the Malaysian government such as reporters from Bernama. It will be available on mio TV Service from SingTel soon."
            },
            {
                "id"   : "malaytv1",
                "name" : "TV1",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=tv1&width=718&height=399&q=p"],
                "logo" : "image/tv1malay.png",
                "desc" : "TV1 is a Malaysian public television channel owned and operated by Radio Televisyen Malaysia. Launched on 28 December 1963, TV1 is the first and oldest TV station in Malaysia. Currently, TV1 broadcasts 24 hours a day from 21 August 2012 onwards.\nBetween 1972 and 1994, TV1 shared time with TV Pendidikan (Education TV) in the daytime on weekdays, this was cancelled after TV1 introduced daytime transmissions in 1994. TV2 continued the TV Pendidikan until 1999.\nTV1 broadcasts on VHF channel 5 and UHF channel 46 in Kuala Lumpur, but only the UHF signal could receive in the suburbs."
            },
            {
                "id"   : "malaytv2",
                "name" : "TV2",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=tv2&width=718&height=399&q=p"],
                "logo" : "image/tv2malay.png",
                "desc" : "TV2 is a television station in Malaysia owned and operated by the Radio Television Malaysia, a division of the Malaysian Government. TV2 is now broadcasting 24 hours a day since 3 April 2006."
            },
            {
                "id"   : "malaytv3",
                "name" : "TV3",        
                "url"  : ["embed http://embednontontvnet.blogspot.com/2015/02/tv3malayinternational.html","embed http://embednontontvnet.blogspot.com/2015/02/tv3malay2.html"],
                "logo" : "image/tv3malay.png",
                "desc" : "TV3 is a Malaysian private television station owned and operated by the Media Prima Berhad, a Malaysian conglomerate. It began broadcasting on 1 June 1984. Now it broadcasts 24 hours a day, though, in September 2014, this channel broadcasts between 6:30 a.m. until 2:30 a.m. due to low audience ratings outside this time.\nIn 2013, TV3 remained the most watched television station in Malaysia, despite the declining viewership of free-to-air television, due to the high penetration of Pay TV and the further roll-out of free-to-air digital television.\nSimilar to most television stations in Southeast Asia, TV3 is known for its soap operas."
            },
            {
                "id"   : "malaytvi",
                "name" : "TVi",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=tvi&width=718&height=399&q=p"],
                "logo" : "image/tvimalay.png",
                "desc" : "RTM TVi, also known as TVi is a digital television station in Malaysia owned and operated by the Radio Television Malaysia, a division of the Malaysian Government. It is part of the RTM Digital Television services, along with Muzik Aktif, Pelangi, Sinergi and Panggung.\nTVi broadcasts for 24 hours a day since its re-launch in April 2011. TVi, specifically meant for Sabah and Sarawak, is an initiative by the Federal Government and the governments of the two states to bring about a deeper understanding of the people in them. This would also help further promote the 1Malaysia concept among Malaysians, especially in the peninsular.\nTVi focusing programmes that highlight life in Sabah and Sarawak, culture and songs of the various ethnic groups in them, documentaries, history and plans in store for these two states. The channel is currently available on Astro\u2019s Channel 180, which previously broadcast RTM Muzik Aktif."
            },
            {
                "id"   : "tv7malay",
                "name" : "NTV 7",        
                "url"  : ["embed http://embednontontvnet.blogspot.com/2015/02/tv7malay1.html","embed http://embednontontvnet.blogspot.com/2015/02/tv7malay2.html"],
                "logo" : "image/tv7malay.png",
                "desc" : "Natseven TV Sdn Bhd, better known as ntv7, is a terrestrial television channel in Malaysia based in Petaling Jaya, Selangor. It began broadcasting nationwide on 7 April 1998. Its mission is to promote a happier and more enlightened Malaysia. Believing strongly in the provision of wholesome entertainment, good family and community values, good corporate citizenship, and the promotion of national integration, the station works on an appointment-based programming concept reflecting its philosophy of being \"Saluran Ceria Anda\"."
            },
            {
                "id"   : "tv8malay",
                "name" : "8TV",        
                "url"  : ["embed http://embednontontvnet.blogspot.com/2015/02/tv8malay1_26.html"],
                "logo" : "image/tv8malay.png",
                "desc" : "8TV (Chinese: \u516b\u5ea6\u7a7a\u95f4; pinyin: B\u0101d\u00f9 K\u014dngji\u0101n; literal: 8th dimension) is a free-to-air private television station in Malaysia. The television channel targets urban youth and Chinese audiences with high quality foreign programmes and unique local content in mainly English and Chinese language. 8TV's line up consists of dramas, sitcoms, and reality shows, most of which are produced in Malaysia or imported from other countries. 8TV broadcasts with the concept of \"one station, two channels\" in two languages shifts as in English being called as 8TV and in Chinese being called as \u516b\u5ea6\u7a7a\u95f4 (pinyin: B\u0101d\u00f9 K\u014dngji\u0101n) or 8TV Chinese.\n8TV are also available on Astro channel 708, but through channel 108 on ABNXcess and HyppTV."
            },
            {
                "id"   : "tv9malay",
                "name" : "TV 9",        
                "url"  : ["embed http://embednontontvnet.blogspot.com/2015/02/tv9malay2.html","embed http://embednontontvnet.blogspot.com/2015/02/tv9malay1.html"],
                "logo" : "image/tv9malay.png",
                "desc" : "TV9 is a free-to-air private television station in Malaysia. TV9 began broadcasting on 22 April 2006, as a subsidiary of Media Prima Berhad. It formerly existed as Channel 9, which began airing on 9 September 2003 and ceased transmission on 1 February 2005 due to financial difficulties faced by the operator.\nTV9 broadcasts programmes that are marketed mostly to Muslim Malays in Malaysia. Its program line-up are religious shows, Indonesian dramas and Nickelodeon cartoon shows."
            },
            {
                "id"   : "selangortv",
                "name" : "Selangor TV",        
                "url"  : ["rtmp://livemaster.selangorku.com/selangormaster/channel1"],
                "logo" : "image/tvselangor.png",
                "desc" : "TVSelangor is a TV Channel owned by the State Government of Selangor, Malaysia. It began operation in 2008. TVSelangor was formed by the State Government because the Federal Government would not allow them to use Federal Government TV channels to deliver information or news about the state government of Selangor to the people.\nBecause the channel does not have a license from the Federal government to broadcast terrestrial or satellite TV, TVSelangor is currently only available via the internet at Selangorku website. The main broadcast language is Bahasa Melayu and the channel features a variety of programme's including talkshows, short dramas, news, and documentaries. It is viewable 24 hours a day.\nOfficial Facebook for TVselangor is TVSelangor2009 & Official Twitter is TVSNews."
            },
            {
                "id"   : "Muzikaktiftv",
                "name" : "Muzik Aktif TV",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=muzikaktif&width=718&height=399&q=p"],
                "logo" : "image/muzikaktiftv.png",
                "desc" : "RTM Muzik Aktif (Malay: Active Music) is a music channel in Malaysia. It is the first Malaysian music channel, and one of the first Malaysian digital channels. It launched on the Astro platform in 16 March 2009. It is now a satellite channel, following the reportedly deferral and abandonment of the digital terrestrial television project by RTM.\nOn 10 April 2011, Muzik Aktif is replaced with the new RTM channel focusing on East Malaysian viewers, TVi, but it still broadcasts via internet and DVB-T to those in Klang Valley."
            },
            {
                "id"   : "maratv",
                "name" : "Mara TV",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=maratv&width=718&height=399&q=p"],
                "logo" : "image/maratv.png",
                "desc" : "The Majlis Amanah Rakyat (Malay for Indigenous People's Trust Council, commonly abbreviated as MARA), is a Malaysian government agency. It was formed to aid, train, and guide Bumiputra (Malays and other indigenous Malaysians) in the areas of business and industry. MARA was formed on March 1, 1966 under the Rural and National Development Ministry."
            },
            {
                "id"   : "1hijautv",
                "name" : "1Hijau TV",        
                "url"  : ["rtmpt://119.110.96.71/live/1htv"],
                "logo" : "image/1hijautv.png",
                "desc" : "Mixing the right formula has never been more important in today's ever changing climate. Fusing high end broadband technology and the passion for environmental protection in the country, 1 Hijau.TV was an instinctive progress to merge technology and environment to send an urgent message across to all Malaysians - the need to start a green movement to protect the very soil that gave life to all 26 million of us here. 1Hijau.TV aims to set precedence on the creation of a well-exposed society to all environmental issues - whether locally or globally. Featuring a plethora of local and international green programmes, 1Hijau.TV aspires to be the country's first green reference internet television site. Whether you are a student, a concerned housewife, a professional corporate player or an academic, 1Hijau.TV is the country's one-stop channel for everything green."
            },
            {
                "id"   : "bernamatv",
                "name" : "BERNAMA",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=bernama2&width=718&height=399&q=p"],
                "logo" : "image/bernamatv.png",
                "desc" : "Bernama TV is a 24-hour international news and current affairs television network in Malaysia. It is owned by Bernama, a government news agency. This channel airs news programmes that are related to local and international business, lifestyle, sports and entertainment. It is broadcast on the Astro satellite television platform via Channel 502, HyppTV via Channel 410 (previously channel 120, prior to April 2013) and the Fine TV IPTV-based network via Channel 12. Bernama TV's slogan is Baru & Benar (Malay for \"Right & Now\").\nBernama's news bulletins were initially aired on Astro Ria, Astro Prima, Astro AEC, Astro Wah Lai Toi and Astro Vaanavil, but they have since been integrated to this network. The news content on this channel is primarily broadcast in Malay, which is the official language of Malaysia. However, there are news programmes in English, Mandarin, Cantonese, Teochew and Tamil as well, in line with the News@Bernama, Xin Wen@Bernama, Sen Men@Bernama and Seithigal@Bernama segments respectively. Other shows that are broadcast on Bernama TV include STAR TV Biz@The Star, Sports@The Star and \"Helo Malaysia\" is a talk show hosted by Sherkawi Jirim."
            },
            {
                "id"   : "rtmparlimen",
                "name" : "RTM Parlimen",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=parlimen&width=718&height=399&q=p"],
                "logo" : "image/rtmparlimen.png",
                "desc" : "RTM started broadcasting radio on 1 April 1946, and television on 28 December 1963. The first two radio stations are Radio Malaya (in Malay) and The Blue Network (in English). The transmitters were located first in Singapore and later in Kuala Lumpur (opened in 1950). With the independence of Malaya on 31 August 1957 Radio Malaya was split into two separate stations; the original studios in Singapore was taken over by a new station called Radio Singapura and Radio Malaya moved to Kuala Lumpur going on air from the new location on 1 January 1959. It would be later renamed Radio Malaysia on 16 September 1963 with the transmissions beginning with its trademark words Inilah Radio Malaysia (This is Radio Malaysia) on the day the Malaysia of today was born. Television services under the name Malaysia Televisyen or Malaysia Television (Malaysia TV) started on 28 December 1963 in time for the national New Year celebrations in Kuala Lumpur and regional telecasts in the Klang Valley in Selangor state, with its first studios being located in Jalan Ampang. The then 10-month-old Television Singapura (launched on 16 February 1963) became part of Malaysia Televisyen as its state station for Singapore viewers, a role served until 1965, when Singapore became independent. Radio and TV operations merged in 1968 as the new Angkasapuri headquarters was inaugurated. Thus Radio Malaysia and Televisyen Malaysia's identities merged to become Radio Televisyen Malaysia (Radio Television Malaysia, RTM) in 1969. A second TV station opened also in the same year as its rebranding, and in 1971 Radio Malaysia became the first radio station to broadcast 24 hours a day, nationwide, thus becoming Rangkaian Nasional (National Network) in the process. RTM began broadcasting in color since 1978 in Peninsular Malaysia and 1980 in Sabah and Sarawak. Between 1972 and 1999, RTM shared time with TV Pendidikan, the national education channel, in the daytime. TV1 introduced daytime transmissions in 1994 thus resulting to TV Pendidikan ceased broadcasting on TV1, while TV2 introduced daytime transmissions in 2000. TV1 broadcast overnight many times since the early 1990s, but daily 24-hour transmissions did not come until 2003, which was later cancelled. Permanent 24-hour broadcasting was introduced in 2006 on TV2, and 2012 on TV1."
            },
            {
                "id"   : "majlisbeliamalay",
                "name" : "Majlis Belia Malaysia",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=mbm&width=718&height=399&q=p"],
                "logo" : "image/majlisbeliatv.png",
                "desc" : "Majlis Belia Malaysia (MBM) merupakan badan induk yang menyelaras pertubuhan belia dan pelajar di Malaysia. Ia ditubuhkan pada 23 Julai 1948 di Victoria Institution (VI), Kuala Lumpur dengan nama Majlis Belia Malaya. Pada 23 Julai 1948, pertemuan seramai 75 orang wakil-wakil pertubuhan di Victoria Institution telah membuka laluan kepada penubuhan Majlis Belia Malaya. Ekoran dari penubuhan Jawatankuasa Khas Sementara Belia ini, Abdul Razak Hussein (Tun) dan Tengku Jaafar telah mewakili Tanah Melayu di Persidangan Perhimpunan Belia Sedunia (WAY) di Brunei. Bermula dari itulah WAY telah mengiktiraf MBM (sementara) sebagai Jawatankuasa Kebangsaan baginya di Tanah Melayu. Perwakilan belia yang bersidang pada Julai 1948 telah membincang dan berusaha menubuhkan Majlis Belia Negeri dan Petempatan. Majlis Belia Negeri Pulau Pinang dan Province Wellesly telah ditubuhkan pada 17 November 1948 dan merupakan Majlis Belia Negeri yang pertama di Tanah Melayu. Majlis Belia Malaya telah diiktiraf secara rasmi pada 9 September 1950 di Pulau Pinang setelah perlembangaannya diterimapakai. Mesyuarat Agung pertama telah diadakan dengan kehadiran badan-badan gabungan iaitu Majlis Belia Negeri. Pada tahun 1951, Kerajaan telah mengiktiraf Majlis Belia Malaya sebagai Majlis Belia Kebangsaan bagi pertubuhan belia di negara ini."
            },
            {
                "id"   : "putratv",
                "name" : "Putra TV",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=putratv&width=718&height=399&q=p"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "rcomalay",
                "name" : "RCO TV",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=acotv&width=718&height=399&q=p"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "angkasatv",
                "name" : "Angkasa TV",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=angkasa&width=718&height=399&q=p"],
                "logo" : "image/iconcopy400.png",
                "desc" : "Welcome to ANGKASA.TV Live Stream Channel, This channel is all about Angkatan Koperasi Kebangsaan Malaysia Bhd. We hope you enjoy and get some info about ANGKASA services. Thank You For Watching."
            },
            {
                "id"   : "booktvmalay",
                "name" : "Book TV",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=booktv&width=718&height=399&q=p"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "kctvmalay",
                "name" : "KC TV",        
                "url"  : ["embed http://www.1malaysiatv.com.my/embed/player.php?ch=kctv&width=718&height=399&q=p"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            }
        ],

    "korea" :
        [
            {
                "id"   : "gtvhd",
                "name" : "G TV HD",        
                "url"  : ["rtmp://edge1.everyon.tv/etv1/pld44","rtmp://edge1.everyon.tv/etv1/phd44"],
                "logo" : "image/korea.png",
                "desc" : "Gala Television Corporation (Chinese: 八大電視股份有限公司) is a nationwide cable TV network in Taiwan that is operated by the Gala Television Corporation, established on June 13, 1997."
            },
            {
                "id"   : "outdoortv",
                "name" : "Korea Outdoor TV",        
                "url"  : ["rtmp://edge1.everyon.tv/etv1/pld613","rtmp://edge1.everyon.tv/etv1/phd613"],
                "logo" : "image/korea.png",
                "desc" : "Outdoor Channel is an American speciality channel focused on the outdoors, offering programming that includes hunting, fishing, Western lifestyle, off-road motorsports and adventure. The network can be viewed on multiple platforms including high definition, video-on-demand, as well as on a broadband web site. In 2013, Outdoor Channel was acquired by Kroenke Sports Enterprises.[1] As of August 2013, Outdoor Channel is available to approximately 39,175,000 pay television households (34.3% of households with television) in the United States.[2] In December, 2013, the Outdoor Channel was planned to relocate to Colorado from its current location of Temecula, CA, supported by Colorado Economic Development Commission.[3]"
            },
            {
                "id"   : "playytv",
                "name" : "PLAYY I TV",        
                "url"  : ["rtmp://edge1.everyon.tv/etv1/pld767","rtmp://edge1.everyon.tv/etv1/phd767"],
                "logo" : "image/korea.png",
                "desc" : ""
            },
            {
                "id"   : "chingmtv",
                "name" : "CHING m TV",        
                "url"  : ["rtmp://edge1.everyon.tv/etv1/pld783","rtmp://edge1.everyon.tv/etv1/phd783"],
                "logo" : "image/korea.png",
                "desc" : ""
            },
            {
                "id"   : "playy2tv",
                "name" : "PLAYY II TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld743","rtmp://edge2.everyon.tv/etv2/phd743"],
                "logo" : "image/korea.png",
                "desc" : ""
            },
            {
                "id"   : "playy3tv",
                "name" : "PLAYY III TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld770","rtmp://edge2.everyon.tv/etv2/phd770"],
                "logo" : "image/korea.png",
                "desc" : ""
            },
            {
                "id"   : "ohidztv",
                "name" : "OHidz TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld505","rtmp://edge2.everyon.tv/etv2/phd505"],
                "logo" : "image/korea.png",
                "desc" : ""
            },
            {
                "id"   : "cartoonkoreatv",
                "name" : "Cartoon Korea TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld507","rtmp://edge2.everyon.tv/etv2/phd507"],
                "logo" : "image/korea.png",
                "desc" : ""
            },
            {
                "id"   : "movkoreatv",
                "name" : "MOV Korea TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/phd513","rtmp://edge2.everyon.tv/etv2/phd513"],
                "logo" : "image/korea.png",
                "desc" : ""
            }    
        ],

    "sport" :
        [
            {
                "id"   : "cctv5",
                "name" : "CCTV 5",        
                "url"  : ["rtmp://202.117.80.19/live/live4"],
                "logo" : "image/cctv5.png",
                "desc" : ""
            }
        ],

    "kid"   :
        [
            {   
                "id"   : "spacetoon",
                "name" : "Spacetoon",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt//spacetoon2"],
                "logo" : "image/spacetoon.png",
                "desc" : ""
            }
        ],

    "adult" :
        [
            {
                "id"   : "adult1",
                "name" : "Jav TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld1003","rtmp://edge2.everyon.tv/etv2/phd1003"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adultjasmintv",
                "name" : "JASMIN TV",        
                "url"  : ["rtmp://109.71.162.112:1935/live/sd.jasminchannel.stream"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult3",
                "name" : "Xing Ying 星颖 STAR TV",        
                "url"  : ["rtmp://rtmp.touhao1995.com:1935/tv/ttv11","rtmp://rtmp.touhao1995.com:1935/tv/ttv12"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult4",
                "name" : "Ohdeok 오덕구사이 942 TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld993","rtmp://edge2.everyon.tv/etv2/phd993"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult5",
                "name" : "Visit X",        
                "url"  : ["rtmp://194.116.150.47/live/visitx.stream2"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult6",
                "name" : "Paradise TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld1008","rtmp://edge2.everyon.tv/etv2/phd1008"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult7",
                "name" : "ASK TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld1005","rtmp://edge2.everyon.tv/etv2/phd1005"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult8",
                "name" : "Movie N Joy TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld509","rtmp://edge2.everyon.tv/etv2/phd509"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult10",
                "name" : "Hot Movie TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld511","rtmp://edge2.everyon.tv/etv2/phd511"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult11",
                "name" : "Sakura TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld61","rtmp://edge2.everyon.tv/etv2/phd61"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult12",
                "name" : "Play 19+ TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld769","rtmp://edge2.everyon.tv/etv2/phd769"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult13",
                "name" : "Pink TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld62","rtmp://edge2.everyon.tv/etv2/phd62"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult14",
                "name" : "Liveting TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld64","rtmp://edge2.everyon.tv/etv2/phd64"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "vikitv",
                "name" : "VIKI TV",        
                "url"  : ["rtmp://edge1.everyon.tv/etv1/pld765","rtmp://edge1.everyon.tv/etv1/phd765"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "midnight19tv",
                "name" : "Midnight TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld766","rtmp://edge2.everyon.tv/etv2/phd766"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "thelo",
                "name" : "The Lo TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld771","rtmp://edge2.everyon.tv/etv2/phd771"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "thebutgotv",
                "name" : "The But Go TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld772","rtmp://edge2.everyon.tv/etv2/phd772"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "penthousehdtv",
                "name" : "PENTHOUSE HD TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld927","rtmp://edge2.everyon.tv/etv2/phd927"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "honeyhdtv",
                "name" : "Honey HD TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld928","rtmp://edge2.everyon.tv/etv2/phd928"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "playboytv",
                "name" : "PLAYBOY TV",        
                "url"  : ["rtmp://edge1.everyon.tv/etv1/pld497","rtmp://edge1.everyon.tv/etv1/phd497"],
                "logo" : "image/iconcopy400.png",
                "desc" : "Playboy TV (originally The Playboy Channel) is an American pornography premium cable and satellite television network that is owned by the Manwin Group. Its programming focuses mainly on softcore and some hardcore adult erotica, including motion pictures, first-run television series and specials. The channel is available internationally in countries such as Sweden, Brazil, Canada, Japan, Latin America, New Zealand, Portugal, Greece, Spain and Norway. The channel launched on November 1, 1982 as The Playboy Channel. It was originally owned by Playboy Enterprises in partnership with Cablevision Systems Corporation, which eventually sold its interest in the channel back to Playboy in 1986. The original programming and style of the Playboy Channel was developed by Hugh Hefner and Michael Trikilis.[1] Playboy hired its own sales and marketing staff and launched the channel on several major multiple system operators. At the time of its launch, programming featured on the channel consisted only of R-rated films. The channel re-launched as Playboy TV and adopted its current name on November 1, 1989, and originally broadcast for only ten hours each day, from 8 p.m. to 6 a.m. ET, during its first eleven years of existence. The network expanded its programming with the adoption of a 24-hour schedule in 1994.[2] The staff, lead by Lahoucine \"Al\" Reddad, included Mbarek \"Mark\" Hassounya. Reddad launched Playboy in the hotel markets as a pay-per-view service. Playboy TV has become a leading entertainment channel for adult entertainment. In 2011, Playboy Enterprises sold the channel to the Manwin Group,[3] the Playboy name remains in use by the channel under a brand licensing agreement."
            },
            {
                "id"   : "truelovetv",
                "name" : "True LOVE TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld499","rtmp://edge2.everyon.tv/etv2/phd499"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "girlstv",
                "name" : "Girls TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld501","rtmp://edge2.everyon.tv/etv2/phd501"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "fethiswomantv",
                "name" : "Fethis Woman TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld968","rtmp://edge2.everyon.tv/etv2/phd968"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "c16",
                "name" : "C16 TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld59","rtmp://edge2.everyon.tv/etv2/phd59"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "c17",
                "name" : "C17 TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld60","rtmp://edge2.everyon.tv/etv2/phd60"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "c20",
                "name" : "C20 TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld63","rtmp://edge2.everyon.tv/etv2/phd63"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "c29",
                "name" : "C29 TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld991","rtmp://edge2.everyon.tv/etv2/phd991"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "livething2tv",
                "name" : "LiveTing II TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld1006","rtmp://edge2.everyon.tv/etv2/phd1006"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            },
            {
                "id"   : "adult2",
                "name" : "Korea Plus TV",        
                "url"  : ["rtmp://edge2.everyon.tv/etv2/pld992","rtmp://edge2.everyon.tv/etv2/phd992"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            }       
        ],

    "soccer" :
        [   
            {   
                "id"   : "soccer1",
                "name" : "MCFC vs Chelsea",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
                "logo" : "image/soccerpng.png",
                "desc" : ""
            }
        ],

    "other" :
        [   
            {   
                "id"   : "other",
                "name" : "Other TV",        
                "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
                "logo" : "image/iconcopy400.png",
                "desc" : ""
            }
        ]
    };

    return c;        
    };
/*
    function GETCJSON(){
       var r = $.ajax({
                      type: "GET",
                      url: fs+"json/c.json",
                      data : "",
                      dataType: "json",
                      async: true
                  });
        var o = JSON.parse(r.responseText);
        return o;
    };
 */   
    var cALL = GETCJSON();
    for (var z in cALL){
        CNLL(cALL[z],z);
    }
    
    function CNLL(o,ct){
        var CHANNELL = '';
        
        for (var i=0; i<o.length; i++)
        { 
            if (o[i]["id"]==='net') var on = 'on'; else var on = '';
            var SVR = '';
            var svurl = o[i]["url"];
            
            for (var svi=0; svi<svurl.length; svi++){
                if (o[i]["id"]==='net' && svi == 0) var on = 'on'; else var on = '';
                
                if (o[i]["desc"]!=='') var des = o[i]["desc"]; else var des = o[i]["name"]+' is a TV channel broadcast entertainment. It is the place to watch live streaming '+o[i]["name"]+' online smoothly and without buffering. You can access it without any interuption with various problems of Internet bandwidth. Furthermore, you can watch the event live accordance the schedule of broadcast programs. This is one of the easiest way to watch TV online via Internet, especially for computer users which is can be accessible anywhere. All you need is stable and high speed internet connection, because it will be very helpful in Streaming TV  that you are going to watch.';
                
                SVR += '<span class="sv '+on+' clb-'+ct+'-'+i+'-'+svi+'">Server '+(svi+1)+'</span> ';
                
                CLICKCHNELLIST(o[i]["id"],svurl[svi],o[i]["logo"],o[i]["name"],i,ct,o,svi,des);
                
                if (URLSplitUtama(1) !== undefined){
                    var h = UrlSplitSecond(URLSplitUtama(1),0);
                    var ii = UrlSplitSecond(URLSplitUtama(1),1);
                    var j = UrlSplitSecond(URLSplitUtama(1),2);
                    if (ii == i && ct === h){
                        VIDEOJS(svurl[j],o[i]["logo"],o[i]["name"],o[i]["id"],j,des,1);
                    }
                }
            }
                
            CHANNELL += '<div class="channel-list-box '+on+' clb-'+ct+'-'+i+'">'+
                            '<div class="logo-img clb-'+ct+'-'+i+'-0"><img src="'+fs+o[i]["logo"]+'" /></div>'+
                            '<div class="channel-list-desc">'+
                                '<span class="nm clb-'+ct+'-'+i+'-0">'+o[i]["name"]+'</span><br>'+
                                SVR+
                            '</div>'+
                            '<div class="click-area clb-'+ct+'-'+i+'-0"></div>'+
                        '</div>';
                
        }
        $('.cl-'+ct).empty().append(CHANNELL);
        
        if (URLSplitUtama(1) === undefined){
            //VIDEOJS(cALL["ind"][0]["url"][0],cALL["ind"][0]["logo"],cALL["ind"][0]["name"],cALL["ind"][0]["id"],0,cALL["ind"][0]["desc"],0);
            $('.homepage').addClass('on');
        } else {
            $('.contentpage').addClass('on');
            $('.channel-list-box').removeClass('on');
            $('.clb-'+h+'-'+ii).addClass('on');
            $('.sv').removeClass('on');
            $('.clb-'+h+'-'+ii+'-'+j).addClass('on');
            $('#myTab li').removeClass('active');
            $('.'+h+'tv').addClass('active');
            $('#myTabContentChannel .tab-pane').removeClass('active');
            $('#myTabContentChannel #'+h+'tv').addClass('active');
        }
    };
    
    $('.adulttv').click(function(){ 
        if ($('.adulttv').data('xyz') === 0){ $(this).data('xyz','1'); $('#myModal18').modal('show'); }  
    });
    
/* FIXED SCROLLBAR */

    window.onscroll = changePosOnScroll;     
    
    function changePosOnScroll() { //footer
        if (window.pageYOffset > 50) {
            $('.footer').addClass('footer-relative');
        } else {
            $('.footer').removeClass('footer-relative');
        };
    };

/* LIVE TRAFFIC FEED */

    $('.traffic')
        .click(function(){
            if ($('.live-traffic').css('left')==='-1900px')
                $('.live-traffic').css('left','0');
            else
                $('.live-traffic').css('left','-1900px');
        });
    $('.btn-close-traffic')
        .click(function(){
            $('.live-traffic').css('left','-1900px');
        });
        
/* SEND FEEDBACK */
        
    $('.feedback')
        .click(function(){
            $('#myModalFeedback').modal('show');
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
        });
        
/* GOOGLE SEARCH */     

  (function() {
    var cx = '011850954543618672960:rnntlfzv3pc';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
  
/* WEB SEARCH */
    
    $('.wb-src-sl')
        .change(function(){
            $('.wb-src').removeClass('on');
            $('.'+$('.wb-src-sl option:selected').val()).addClass('on');
        });
        
/* ABOUT */
    
    $('.about')
        .click(function(){
            $('#myModalAbout').modal('show');
        });
        
/* Ntvnet SEARCH */

    function NTVNETSEARCH(o,ct,q){
        var qu  = q.toUpperCase();
        var qs = qu.split(' ');  
        for (var i=0; i<o.length; i++)
        { 
            var id  = o[i]["id"].toUpperCase();
            var nm  = o[i]["name"].toUpperCase();
            var dc  = o[i]["desc"].toUpperCase();
            
            for (var iq=0; iq<qs.length; iq++)
                {
                    if (id.indexOf(qu) >= 0 || nm.indexOf(qu) >= 0 || dc.indexOf(qu) >= 0 || id.indexOf(qs[iq]) >= 0 || nm.indexOf(qs[iq]) >= 0 || dc.indexOf(qs[iq]) >= 0){
                        var u = '//'+document.domain+urlDelimiter+utf8_to_b64(ct+'/'+i+'/'+'0');
                        var r = '<div class="box-src-rs">'+
                                    '<h4><a class="tit-rs-'+i+'-'+iq+'" href="'+u+'" onclick="window.open(this.href);return false;">'+o[i]["name"]+'</a></h4>'+
                                    '<span class="lnk-rs">'+u+'</span>'+
                                    '<p>'+o[i]["desc"]+'</p>'+
                                '</div>';
                        $('#ntvnetSrcResult').append(r);
                    }
                    console.log('test loop');
                }    
        }
    };
   
    $('.ntvnet-search')
        .keydown(function (event) {
            var keypressed = event.keyCode || event.which;
            if (keypressed == 13 && !event.shiftKey) {
                $('#myModalNtvnetSearch').modal('show');
                $('#ntvnetSrcResult').empty().append('');
                var q = $(this).val();
                for (var z in cALL)
                {
                    NTVNETSEARCH(cALL[z],z,q);
                };
                $(this).val('');
            }
        });
        
/* CLOCK */
    
    function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('clock').innerHTML = h+":"+m+":"+s;
        var t = setTimeout(function(){startTime();},500);
    }

    function checkTime(i) {
        if (i<10) {i = "0" + i;};  // add zero in front of numbers < 10
        return i;
    }
    
    startTime();
    
/* PRIVACY */

    $('.privacy')
        .click(function(){
            $('#myModalPrivacy').modal('show');
        });
        
/* POLICY & SAFETY */

    $('.policysafety')
        .click(function(){
            $('#myModalPolicySafety').modal('show');
        });
        
/* GOOGLE ANALYTICS */  
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-60504479-1', 'auto');
    ga('send', 'pageview');
    
/* HOME PAGE */

    $('.homepage')
        .html(function(){
            var s = '';
            for (var z in cALL){
                if (z !== 'adult'){
                    s +=    '<div class="hp-cnl-list-box hp-cnl-list-box-'+z+'">'+
                                '<div class="clb-cat-nm"><h5>'+z+'</h5><a class="sw-all sw-all-'+z+'">Show more</a></div>'+
                                CNLITEMHM(cALL[z],z)+
                            '</div>';
                }
            }
            $('.hp-cnl-list').empty().append(s);
        });
        
    function SHOWALLCNLHM(z,o){
        $.ajax({
            success: function(){
                if (o < 5)
                    $('.sw-all-'+z).empty().append('');
                $('.sw-all-'+z)
                    .click(function(){
                        if ($('.hp-cnl-list-box-'+z).css('max-height') === '10000px'){
                            $(this).empty().append('Show more');
                            $('.hp-cnl-list-box-'+z).removeClass('open');
                        } else {
                            $('.hp-cnl-list-box-'+z).addClass('open');
                            $(this).empty().append('Show less');
                        }
                    });
            }
        });
    };    
    
    function CNLITEMHM(o,ct){
        var t = '';
        for (var j=0; j<o.length; j++){
            var u = '//'+document.domain+urlDelimiter+utf8_to_b64(ct+'/'+j+'/'+'0');
            t   +=  '<div class="cnl-list-cnt">'+
                        '<div class="clc-img" data-hr="'+u+'" onclick="window.location.href = \''+u+'\'; return false;">'+
                            '<img src="'+fs+o[j]['logo']+'"/>'+
                        '</div>'+
                        '<a class="clc-nm" href="'+u+'">'+o[j]['name']+'</a>'+
                    '</div>';
        }
        SHOWALLCNLHM(ct,o.length);
        return t;
        
    };  

    

});
