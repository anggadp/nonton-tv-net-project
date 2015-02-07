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

    function CLICKCHNELLIST(id,url,logo,name,i){
        $.ajax({
            success: function(){
                $('.clb-'+i).click(function(){
                    //JWPLAYER(url,logo,name);
                    $('#'+id).html(JWPLAYER(url,logo,name,id));
                    //alert("Hoi");
                });
            }
        });
    };

    var CHANNELLIST =   
    [   
        {   
            "id"   : "tvone",
            "name" : "TV One",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///tvone2_240p",
            "logo" : "http://opajappy.com/wp-content/uploads/2014/06/LOGO-tvOne-New-2012.jpeg"
        },
        {   
            "id"   : "rcti",
            "name" : "RCTI",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///rcti2",
            "logo" : "http://upload.wikimedia.org/wikipedia/id/0/09/RCTI_MNC-Group.png"
        }
    ];
    
    var CHANNELLISTOTHER =   
    [   
        {   
            "id"   : "other",
            "name" : "Other TV",        
            "url"  : "rtmp://cdnjkt.mivo.tv/mivotvjkt///tvone2_240p",
            "logo" : "http://opajappy.com/wp-content/uploads/2014/06/LOGO-tvOne-New-2012.jpeg"
        }
    ];

    var CT = ('#channel-list').data('xyz');
    if (CT === "ind"){
        var o = CHANNELLIST;
    } else {
        var o = CHANNELLISTOTHER;
    }
    
    var CHANNELL = '';
    for (var i=0; i<o.length; i++)
    { 
        CHANNELL += '<div class="channel-list-box clb-'+i+'">'+
                        '<div class="logo-img"><img src="'+o[i]["logo"]+'" /></div>'+
                        '<div class="channel-list-desc">'+
                                '<span class="nm clb-'+i+'">'+o[i]["name"]+'</span>'+
                        '</div>'+
                    '</div>';
        CLICKCHNELLIST(o[i]["id"],o[i]["url"],o[i]["logo"],o[i]["name"],i);
    }
    $('#channel-list').empty().append(CHANNELL);
    $('#tvone').html(JWPLAYER(o[0]["url"],o[0]["logo"],o[0]["name"],o[0]["id"]));
});

