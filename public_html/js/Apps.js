/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var fs = "https://nonton-tv-net-project.googlecode.com/git/public_html/";
    
    var urlDelimiter = '?c=';
    function URLSplitUtama(a){
        var url = location.href;
        var Split = url.split(urlDelimiter);
        return Split[a];
    };
    
    function UrlSplitSecond(url,a){
        var Sp = url.split('/');
        return Sp[a];
    };
    
    function VIDEOJS2(file,image,title,id,sv){
        $('#player-area').empty().append('<div id="'+id+'-'+sv+'"></div>');
        jwplayer(id+'-'+sv).setup({
            file : file,
            image: image,
            title: title,
            width: '100%',
            aspectratio: '16:9',
            autostart: 'true',
            repeat: 'true',
            stretching: "exactfit",
            abouttext:"",
            aboutlink: "",
            primary: 'flash'
        });
    };
    
    function VIDEOJS(file,image,title,id,sv){
        $('#player-area').empty().append('<div id="'+id+'-'+sv+'"></div>');
        jwplayer(id+'-'+sv).setup({
            title       : title,
            width       : "100%",
            autostart   : true,
            aspectratio : '16:9',
            stretching  : "exactfit",
            repeat      : 'true',
            modes       :   [
                                { 
                                    type    : 'flash', 
                                    src     : fs+'swf/player.swf', 
                                    config  : { provider: 'swf/HLSProvider5.swf', file: file } 
                                },
                                { 
                                    type    : 'html5', 
                                    config  : { file: file } 
                                }
                            ]
        });
    };

    function CLICKCHNELLIST(id,url,logo,name,i,ct,o,sv){
        $.ajax({
            success: function(){
                $('.clb-'+ct+'-'+i+'-'+sv).click(function(){
                    window.history.pushState({ foo: "bar" },"", '//'+document.domain+urlDelimiter+ct+'/'+i+'/'+sv);
                    $('#'+id+'-'+sv).html(VIDEOJS(url,logo,name,id,sv));
                    $('.channel-list-box').removeClass('on');
                    $('.clb-'+ct+'-'+i).addClass('on');
                    $('.sv').removeClass('on');
                    $('.clb-'+ct+'-'+i+'-'+sv).addClass('on');
                });
            }
        });
    };

    var cIND =          
    [   
        {   
            "id"   : "net",
            "name" : "NET",        
            "url"  : ["http://61.91.12.34:1935/live/smil:tv5adaptive.smil/playlist.m3u8","rtmp://win.stream.netmedia.co.id/live/nettv_mid"],
            "logo" : fs+"image/Net-TV-dan-KPI-1-480x300.png"
        },
        {   
            "id"   : "tvonejkt",
            "name" : "TV One",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
            "logo" : fs+"image/TvOne_Logo28201129.png"
        },
        {   
            "id"   : "rcti",
            "name" : "RCTI",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/rcti2"],
            "logo" : fs+"image/rcti.png"
        },
        {   
            "id"   : "mnc",
            "name" : "MNC TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/mnctv2"],
            "logo" : fs+"image/MNCTV_MNC-Group.png"
        },        
        {   
            "id"   : "transtv",
            "name" : "Trans TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/transtv2_240p"],
            "logo" : fs+"image/Logo_Trans_TV.png"
        },
        {   
            "id"   : "trans7",
            "name" : "Trans 7",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/trans72"],
            "logo" : fs+"image/Logo_Trans7.png"
        },
        {   
            "id"   : "sctv",
            "name" : "SCTV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/sctv2","rtmp://cdnjkt.mivo.tv:1935/mivotvjkt/sctv2_240p"],
            "logo" : fs+"image/20110218143118!SCTV_Logo.png"
        },
        {   
            "id"   : "metrotv",
            "name" : "Metro TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/metrotv2_240p"],
            "logo" : fs+"image/metrotv.png"
        },
        {   
            "id"   : "globaltv",
            "name" : "Global TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/globaltv2"],
            "logo" : fs+"image/Logo_Global_TV_2012.png"
        },
        {   
            "id"   : "indosiar",
            "name" : "INDOSIAR",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/indosiar2_240p"],
            "logo" : fs+"image/INDOSIAR_Logo.png"
        },
        {   
            "id"   : "antv",
            "name" : "ANTV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/antv2_240p"],
            "logo" : fs+"image/antv.png"
        },
        {   
            "id"   : "rtv",
            "name" : "Rajawali TV",        
            "url"  : ["rtmp://203.153.97.35/live/livestream"],
            "logo" : fs+"image/rajawalitv.png"
        },
        {   
            "id"   : "beritasatu",
            "name" : "Berita Satu",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/beritasatu_240p"],
            "logo" : fs+"image/beritasatu.jpg"
        },
        {   
            "id"   : "kompastv",
            "name" : "Kompas TV",        
            "url"  : ["rtmp://202.137.11.52/jakarta/offair.sdp"],
            "logo" : fs+"image/kompastv.jpg"
        },
        {   
            "id"   : "sindotv",
            "name" : "Sindo TV",        
            "url"  : ["rtmp://edge.okeinfo.net/live/mncoke4_512.stream"],
            "logo" : fs+"image/sindotv.jpg"
        },
        {   
            "id"   : "tvri",
            "name" : "TVRI",        
            "url"  : ["rtmp://118.97.50.102:1935/live/stream1.sdp","rtmp://118.97.50.102/digital"],
            "logo" : fs+"image/LogoLPP-TVRI.png"
        }
    ];
    
    var cMALAY =
    [
        {
            "id"   : "astroawani",
            "name" : "Astro Awani",        
            "url"  : ["rtmp://cp160334.live.edgefcs.net:1935/live?ovpfv=1.1/AstroAwani24x7_1@74937","rtmp://cp160334.live.edgefcs.net:1935/live?ovpfv=1.1/AstroAwani24x7_2@74937","rtmp://cp160334.live.edgefcs.net:1935/live?ovpfv=1.1/AstroAwani24x7_3@74937"],
            "logo" : fs+"image/astroawani.jpg"
        },
        {
            "id"   : "1hijautv",
            "name" : "1Hijau TV",        
            "url"  : ["rtmpt://119.110.96.71/live/1htv"],
            "logo" : fs+"image/1hijautv.png"
        },
        {
            "id"   : "selangortv",
            "name" : "Selangor TV",        
            "url"  : ["rtmp://livemaster.selangorku.com/selangormaster/channel1"],
            "logo" : fs+"image/tvselangor.png"
        },
        {
            "id"   : "mobtv",
            "name" : "Mob TV",        
            "url"  : ["rtmp://fl1.sz.xlcdn.com/live/sz=IMN=mobtv2012"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "Muzikaktiftv",
            "name" : "Muzik Aktif TV",        
            "url"  : ["rtmp://BKJ-STR-1.se.rtm-fms.cdn.jaring.my:1935/livepkgr/rtmmuzik2"],
            "logo" : fs+"image/muzikaktiftv.png"
        },
        {
            "id"   : "malaytv1",
            "name" : "TV1",        
            "url"  : ["rtmp://BYB-STR-1.se.rtm-fms.cdn.jaring.my:1935/livepkgr/rtm12"],
            "logo" : fs+"image/tv1malay.png"
        },
        {
            "id"   : "malaytv2",
            "name" : "TV2",        
            "url"  : ["rtmp://BYB-STR-1.se.rtm-fms.cdn.jaring.my:1935/livepkgr/rtm22"],
            "logo" : fs+"image/tv2malay.png"
        },
        {
            "id"   : "malaytvi",
            "name" : "TVi",        
            "url"  : ["rtmp://BYB-STR-1.se.rtm-fms.cdn.jaring.my:1935/livepkgr/rtmi2"],
            "logo" : fs+"image/tvimalay.png"
        }
    ];
    
    var cKOREA =
    [
        {
            "id"   : "gtvhd",
            "name" : "G TV HD",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd44"],
            "logo" : fs+"image/korea.png"
        },
        {
            "id"   : "outdoortv",
            "name" : "Korea Outdoor TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd613"],
            "logo" : fs+"image/korea.png"
        },
        {
            "id"   : "playytv",
            "name" : "PLAYY I TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd767"],
            "logo" : fs+"image/korea.png"
        },
        {
            "id"   : "chingmtv",
            "name" : "CHING m TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd783"],
            "logo" : fs+"image/korea.png"
        },
        {
            "id"   : "playy2tv",
            "name" : "PLAYY II TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd743"],
            "logo" : fs+"image/korea.png"
        },
        {
            "id"   : "playy3tv",
            "name" : "PLAYY III TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd770"],
            "logo" : fs+"image/korea.png"
        },
        {
            "id"   : "ohidztv",
            "name" : "OHidz TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd505"],
            "logo" : fs+"image/korea.png"
        },
        {
            "id"   : "cartoonkoreatv",
            "name" : "Cartoon Korea TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd507"],
            "logo" : fs+"image/korea.png"
        },
        {
            "id"   : "movkoreatv",
            "name" : "MOV Korea TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd513"],
            "logo" : fs+"image/korea.png"
        }    
    ];
    
    var cSPORT =
    [
        {
            "id"   : "cctv5",
            "name" : "CCTV 5",        
            "url"  : ["rtmp://202.117.80.19/live/live4"],
            "logo" : fs+"image/cctv5.png"
        }
    ];
    
    var cKID =
    [
        {   
            "id"   : "spacetoon",
            "name" : "Spacetoon",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt//spacetoon2"],
            "logo" : fs+"image/spacetoon.png"
        }
    ];
    
    var cADULT =
    [
        {
            "id"   : "adult1",
            "name" : "Jav TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd1003"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult2",
            "name" : "Korea Plus TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd992"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adultjasmintv",
            "name" : "JASMIN TV",        
            "url"  : ["rtmp://109.71.162.112:1935/live/sd.jasminchannel.stream"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult3",
            "name" : "Xing Ying 星颖 STAR TV",        
            "url"  : ["rtmp://rtmp.touhao1995.com:1935/tv/ttv11","rtmp://rtmp.touhao1995.com:1935/tv/ttv12"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult4",
            "name" : "Ohdeok 오덕구사이 942 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd993"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult5",
            "name" : "Visit X",        
            "url"  : ["rtmp://194.116.150.47/live/visitx.stream2"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult6",
            "name" : "Paradise TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd1008"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult7",
            "name" : "ASK TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd1005"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult8",
            "name" : "Movie N Joy TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd509"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult10",
            "name" : "Hot Movie TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd511"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult11",
            "name" : "Sakura TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd61"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult12",
            "name" : "Play 19+ TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd769"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult13",
            "name" : "Pink TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd62"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "adult14",
            "name" : "Liveting TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd64"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "vikitv",
            "name" : "VIKI TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd765"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "midnight19tv",
            "name" : "Midnight TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd766"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "thelo",
            "name" : "The Lo TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd771"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "thebutgotv",
            "name" : "The But Go TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd772"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "penthousehdtv",
            "name" : "PENTHOUSE HD TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd927"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "honeyhdtv",
            "name" : "Honey HD TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd928"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "playboytv",
            "name" : "PLAYBOY TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd497"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "truelovetv",
            "name" : "True LOVE TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd499"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "girlstv",
            "name" : "Girls TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd501"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "fethiswomantv",
            "name" : "Fethis Woman TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd968"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "c16",
            "name" : "C16 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd59"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "c17",
            "name" : "C17 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd60"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "c20",
            "name" : "C20 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd63"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "c29",
            "name" : "C29 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd991"],
            "logo" : fs+"image/iconcopy400.png"
        },
        {
            "id"   : "livething2tv",
            "name" : "LiveTing II TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd1006"],
            "logo" : fs+"image/iconcopy400.png"
        }       
    ];
    
    var cSOCCER =   
    [   
        {   
            "id"   : "soccer1",
            "name" : "MCFC vs Chelsea",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
            "logo" : fs+"image/soccerpng.png"
        }
    ];
    
    var cOTHER =   
    [   
        {   
            "id"   : "other",
            "name" : "Other TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
            "logo" : fs+"image/iconcopy400.png"
        }
    ];
    
    function CNLL(o,ct){
        var CHANNELL = '';
        
        for (var i=0; i<o.length; i++)
        { 
            if (o[i]["id"]==='net') var on = 'on'; else var on = '';
            var SVR = '';
            var svurl = o[i]["url"];
            
            for (var svi=0; svi<svurl.length; svi++){
                if (o[i]["id"]==='net' && svi == 0) var on = 'on'; else var on = '';
                
                SVR += '<span class="sv '+on+' clb-'+ct+'-'+i+'-'+svi+'">Server '+(svi+1)+'</span> ';
                
                CLICKCHNELLIST(o[i]["id"],svurl[svi],o[i]["logo"],o[i]["name"],i,ct,o,svi);
                
                if (URLSplitUtama(1) !== undefined){
                    var h = UrlSplitSecond(URLSplitUtama(1),0);
                    var ii = UrlSplitSecond(URLSplitUtama(1),1);
                    var j = UrlSplitSecond(URLSplitUtama(1),2);
                    if (ii == i && ct === h){
                        VIDEOJS(svurl[j],o[i]["logo"],o[i]["name"],o[i]["id"],j);
                    }
                }
            }
                
            CHANNELL += '<div class="channel-list-box '+on+' clb-'+ct+'-'+i+'">'+
                            '<div class="logo-img clb-'+ct+'-'+i+'-0"><img src="'+o[i]["logo"]+'" /></div>'+
                            '<div class="channel-list-desc">'+
                                '<span class="nm clb-'+ct+'-'+i+'-0">'+o[i]["name"]+'</span><br>'+
                                SVR+
                            '</div>'+
                            '<div class="click-area clb-'+ct+'-'+i+'-0"></div>'+
                        '</div>';
                
        }
        $('.cl-'+ct).empty().append(CHANNELL);
        
        if (URLSplitUtama(1) === undefined){
            VIDEOJS(cIND[0]["url"][0],cIND[0]["logo"],cIND[0]["name"],cIND[0]["id"],0);
        } else {
            
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
    
    CNLL(cIND,'ind');
    CNLL(cMALAY,'malay');
    CNLL(cKOREA,'korea');
    CNLL(cSPORT,'sport');
    CNLL(cKID,'kid');
    CNLL(cADULT,'adult');
    CNLL(cSOCCER,'soccer');
    CNLL(cOTHER,'other');
    
    
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
            if ($('.live-traffic').css('left')==='-1600px')
                $('.live-traffic').css('left','0');
            else
                $('.live-traffic').css('left','-1600px');
        });
    $('.btn-close-traffic')
        .click(function(){
            $('.live-traffic').css('left','-1600px');
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
             
});
