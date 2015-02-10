/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    $('#adver').click(function(){ $('#myModalAdvertising').modal('show'); });
    
    var ADSPA = [
        {
            'id'    : '1',
            'cd'    : '<h3>718 x 100</h3><p>Click <button id="adver-pa-1" class="btn btn-warning">Advertising</button> button to put your advertising</p>',
            'exp'   : ''
        },
        {
            'id'    : '2',
            'cd'    : '<h3>718 x 100</h3><p>Click <button id="adver-pa-1" class="btn btn-warning">Advertising</button> button to put your advertising</p>',
            'exp'   : ''
        }
    ];
    
    var ADSSB = [
        {
            'id'    : '1',
            'cd'    : '<h1>200 x 200</h1><p>Click <button id="adver4" class="btn btn-warning">Advertising</button> button to put your advertising</p>',
            'exp'   : ''
        },
        {
            'id'    : '2',
            'cd'    : '<h1>200 x 200</h1><p>Click <button id="adver4" class="btn btn-warning">Advertising</button> button to put your advertising</p>',
            'exp'   : ''
        },
        {
            'id'    : '3',
            'cd'    : '<h1>200 x 200</h1><p>Click <button id="adver4" class="btn btn-warning">Advertising</button> button to put your advertising</p>',
            'exp'   : ''
        }
    ];
    
    function ADSL(o,ct){
        var ADVERTISE = '';
        for (var i=0; i<o.length; i++)
        {
            ADVERTISE += '<div class="adv-'+ct+'-content adv-'+ct+'-'+o[i]["id"]+'">'+
                         +o[i]["cd"]+
                         '</div>';
            $('#adver-'+ct+'-'+o[i]["id"]).click(function(){ $('#myModalAdvertising').modal('show'); });
        }
        $('#adv-'+ct).empty().append();
    };
    
    ADSL(ADSPA,'pa');
    ADSL(ADSSB,'sb');
});



