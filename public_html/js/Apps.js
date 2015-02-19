/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var urlDelimiter = '#c=';
    function URLSplitUtama(a){
        var url = location.href;
        var Split = url.split(urlDelimiter);
        return Split[a];
    };
    
    function UrlSplitSecond(url,a){
        var Sp = url.split('/');
        return Sp[a];
    };
    
    function VIDEOJS(file,image,title,id,sv){
        $('#player-area').empty().append('<div id="'+id+'-'+sv+'"></div>');
        jwplayer(id+'-'+sv).setup({
            file : file,
            image: image,
            title: title,
            width: '100%',
            aspectratio: '16:9',
            autostart: 'true',
            repeat: 'true'
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
            "url"  : ["rtmp://win.stream.netmedia.co.id/live/nettv_mid"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/Net-TV-dan-KPI-1-480x300.png"
        },
        {   
            "id"   : "tvonejkt",
            "name" : "TV One",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/TvOne_Logo28201129.png"
        },
        {   
            "id"   : "rcti",
            "name" : "RCTI",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/rcti2"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/rcti.png"
        },
        {   
            "id"   : "mnc",
            "name" : "MNC TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/mnctv2"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/MNCTV_MNC-Group.png"
        },        
        {   
            "id"   : "transtv",
            "name" : "Trans TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/transtv2_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/Logo_Trans_TV.png"
        },
        {   
            "id"   : "trans7",
            "name" : "Trans 7",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/trans72"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/Logo_Trans7.png"
        },
        {   
            "id"   : "sctv",
            "name" : "SCTV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/sctv2","rtmp://cdnjkt.mivo.tv:1935/mivotvjkt/sctv2_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/20110218143118!SCTV_Logo.png"
        },
        {   
            "id"   : "metrotv",
            "name" : "Metro TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/metrotv2_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/metrotv.png"
        },
        {   
            "id"   : "globaltv",
            "name" : "Global TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/globaltv2"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/Logo_Global_TV_2012.png"
        },
        {   
            "id"   : "indosiar",
            "name" : "INDOSIAR",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/indosiar2_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/INDOSIAR_Logo.png"
        },
        {   
            "id"   : "antv",
            "name" : "ANTV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/antv2_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/antv.png"
        },
        {   
            "id"   : "rtv",
            "name" : "Rajawali TV",        
            "url"  : ["rtmp://203.153.97.35/live/livestream"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/rajawalitv.png"
        },
        {   
            "id"   : "beritasatu",
            "name" : "Berita Satu",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/beritasatu_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/beritasatu.jpg"
        },
        {   
            "id"   : "sindotv",
            "name" : "Sindo TV",        
            "url"  : ["rtmp://edge.okeinfo.net/live/mncoke4_512.stream"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/sindotv.jpg"
        },
        {   
            "id"   : "tvri",
            "name" : "TVRI",        
            "url"  : ["rtmp://118.97.50.102/digital"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/LogoLPP-TVRI.png"
        }
    ];
    
    var cKOREA =
    [
        {
            "id"   : "gtvhd",
            "name" : "G TV HD",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd44"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        },
        {
            "id"   : "outdoortv",
            "name" : "Korea Outdoor TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd613"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        },
        {
            "id"   : "playytv",
            "name" : "PLAYY I TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd767"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        },
        {
            "id"   : "chingmtv",
            "name" : "CHING m TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd783"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        },
        {
            "id"   : "playy2tv",
            "name" : "PLAYY II TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd743"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        },
        {
            "id"   : "playy3tv",
            "name" : "PLAYY III TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd770"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        },
        {
            "id"   : "ohidztv",
            "name" : "OHidz TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd505"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        },
        {
            "id"   : "cartoonkoreatv",
            "name" : "Cartoon Korea TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd507"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        },
        {
            "id"   : "movkoreatv",
            "name" : "MOV Korea TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd513"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/korea.png"
        }    
    ];
    
    var cSPORT =
    [
        {
            "id"   : "cctv5",
            "name" : "CCTV 5",        
            "url"  : ["rtmp://202.117.80.19/live/live4"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/cctv5.png"
        }
    ];
    
    var cKID =
    [
        {   
            "id"   : "spacetoon",
            "name" : "Spacetoon",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt//spacetoon2"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/spacetoon.png"
        }
    ];
    
    var cADULT =
    [
        {
            "id"   : "adult1",
            "name" : "Jav TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd1003"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult2",
            "name" : "Korea Plus TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd992"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult3",
            "name" : "Xing Ying 星颖 STAR TV",        
            "url"  : ["rtmp://rtmp.touhao1995.com:1935/tv/ttv12"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult4",
            "name" : "Ohdeok 오덕구사이 942 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd993"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult5",
            "name" : "Visit X",        
            "url"  : ["rtmp://194.116.150.47/live/visitx.stream2"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult6",
            "name" : "Paradise TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd1008"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult7",
            "name" : "ASK TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd1005"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult8",
            "name" : "Movie N Joy TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd509"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult10",
            "name" : "Hot Movie TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd511"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult11",
            "name" : "Sakura TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd61"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult12",
            "name" : "Play 19+ TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd769"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult13",
            "name" : "Pink TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd62"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "adult14",
            "name" : "Liveting TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd64"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "vikitv",
            "name" : "VIKI TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd765"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "midnight19tv",
            "name" : "Midnight TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd766"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "thelo",
            "name" : "The Lo TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd771"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "thebutgotv",
            "name" : "The But Go TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd772"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "penthousehdtv",
            "name" : "PENTHOUSE HD TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd927"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "honeyhdtv",
            "name" : "Honey HD TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd928"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "playboytv",
            "name" : "PLAYBOY TV",        
            "url"  : ["rtmp://edge1.everyon.tv/etv1/phd497"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "truelovetv",
            "name" : "True LOVE TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd499"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "girlstv",
            "name" : "Girls TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd501"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "fethiswomantv",
            "name" : "Fethis Woman TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd968"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "c16",
            "name" : "C16 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd59"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "c17",
            "name" : "C17 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd60"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "c20",
            "name" : "C20 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd63"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "c29",
            "name" : "C29 TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd991"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        },
        {
            "id"   : "livething2tv",
            "name" : "LiveTing II TV",        
            "url"  : ["rtmp://edge2.everyon.tv/etv2/phd1006"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
        }       
    ];
    
    var cSOCCER =   
    [   
        {   
            "id"   : "soccer1",
            "name" : "MCFC vs Chelsea",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/soccerpng.png"
        }
    ];
    
    var cOTHER =   
    [   
        {   
            "id"   : "other",
            "name" : "Other TV",        
            "url"  : ["rtmp://cdnjkt.mivo.tv/mivotvjkt/tvone2_240p"],
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/iconcopy400.png"
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
    
});

