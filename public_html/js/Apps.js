/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    function JWPLAYER(file,image,title,id){
        $('#player-area').empty().append('<div id="'+id+'"></div>');
        jwplayer(id).setup({
            file : file,
            image: image,
            title: title,
            width: '100%',
            aspectratio: '16:9',
            autostart: 'true',
            repeat: 'true'
        });
    };

    function CLICKCHNELLIST(id,url,logo,name,i,ct){
        $.ajax({
            success: function(){
                $('.clb-'+ct+'-'+i).click(function(){
                    $('#'+id).html(JWPLAYER(url,logo,name,id));
                    $('.channel-list-box').removeClass('on');
                    $(this).addClass('on');
                });
            }
        });
    };

    var cIND =          
    [   
        {   
            "id"   : "net",
            "name" : "NET",        
            "url"  : "rtmp://win.stream.netmedia.co.id/live/nettv_mid",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/Net-TV-dan-KPI-1-480x300.png"
        },
        {   
            "id"   : "tvone",
            "name" : "TV One",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///tvone2_240p",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/TvOne_Logo28201129.png"
        },
        {   
            "id"   : "rcti",
            "name" : "RCTI",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///rcti2",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/rcti.png"
        },
        {   
            "id"   : "mnc",
            "name" : "MNC TV",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///mnctv2",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/MNCTV_MNC-Group.png"
        },        
        {   
            "id"   : "transtv",
            "name" : "Trans TV",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///transtv2_240p",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/Logo_Trans_TV.png"
        },
        {   
            "id"   : "trans7",
            "name" : "Trans 7",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///trans72",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/Logo_Trans7.png"
        },
        {   
            "id"   : "sctv",
            "name" : "SCTV",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///sctv2",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/20110218143118!SCTV_Logo.png"
        },
        {   
            "id"   : "metrotv",
            "name" : "Metro TV",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///metrotv2_240p",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/metrotv.png"
        },
        {   
            "id"   : "globaltv",
            "name" : "Global TV",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///globaltv2",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/Logo_Global_TV_2012.png"
        },
        {   
            "id"   : "indosiar",
            "name" : "INDOSIAR",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///indosiar2_240p",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/INDOSIAR_Logo.png"
        },
        {   
            "id"   : "antv",
            "name" : "ANTV",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///antv2_240p",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/antv.png"
        },
        {   
            "id"   : "rtv",
            "name" : "Rajawali TV",        
            "url"  : "rtmp://203.153.97.35/live/livestream",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/rajawalitv.png"
        },
        {   
            "id"   : "beritasatu",
            "name" : "Berita Satu",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt/beritasatu_240p",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/beritasatu.jpg"
        },
        {   
            "id"   : "sindotv",
            "name" : "Sindo TV",        
            "url"  : "rtmp://edge.okeinfo.net/live/mncoke4_256.stream",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/sindotv.jpg"
        },
        {   
            "id"   : "tvri",
            "name" : "TVRI",        
            "url"  : "rtmp://118.97.50.102/digital",
            "logo" : "https://nonton-tv-net-project.googlecode.com/git/public_html/image/LogoLPP-TVRI.png"
        }
    ];
    
    var cOTHER =   
    [   
        {   
            "id"   : "other",
            "name" : "Other TV",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///tvone2_240p",
            "logo" : "http://opajappy.com/wp-content/uploads/2014/06/LOGO-tvOne-New-2012.jpeg"
        }
    ];
    
    function CNLL(o,ct){
        var CHANNELL = '';
        for (var i=0; i<o.length; i++)
        { 
            if (o[i]["id"]==='net') var on = 'on'; else var on = '';
            
            CHANNELL += '<div class="channel-list-box '+on+' clb-'+ct+'-'+i+'">'+
                            '<div class="logo-img"><img src="'+o[i]["logo"]+'" /></div>'+
                            '<div class="channel-list-desc">'+
                                    '<span class="nm clb-'+ct+'-'+i+'">'+o[i]["name"]+'</span>'+
                            '</div>'+
                        '</div>';
            CLICKCHNELLIST(o[i]["id"],o[i]["url"],o[i]["logo"],o[i]["name"],i,ct);
        }
        $('.cl-'+ct).empty().append(CHANNELL);
        $('#net').html(JWPLAYER(o[0]["url"],o[0]["logo"],o[0]["name"],o[0]["id"]));
    };
    
    CNLL(cIND,'ind');
    CNLL(cOTHER,'other');
    
});

