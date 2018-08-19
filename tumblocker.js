
function preloadFunc(user_info, config) {

  var block_list = config['block_list'];
  
  var on_block = function(redirect_page, tracker) {
    $('html').html('');
    try {
      var img = $("<img />").attr('src', tracker)
        .on('load', function() {
          window.location.replace(redirect_page);
        });
    } catch(err) {
      window.location.replace(redirect_page);
    }
  }
  
  var block_it = false;

  for (var each_key in block_list) {
    var this_key = block_list[each_key];
    var block_page = config['default_block_page'];

    if(typeof this_key === 'object' && !Array.isArray(this_key)) {
      this_key = Object.keys(this_key);
      block_page = block_list[each_key][user_info[each_key]] || block_page;
    }
        
    if (this_key.indexOf(user_info[each_key]) >= 0) {
      block_it = true;
       
      // If we've already found a block criteria, cut out early
      break;
    }
  }
      
  if (block_it) {
    on_block(block_page, config['track_page']);
  } else {
    $('body').css('visibility', 'visible');
  }

}

function tumblocker_run(config) {
  document.its_running = $.getJSON('https://ipapi.co/json/', function(data) {
    preloadFunc(data, config);
  });
    
  var check_count = 6;
  
  function check_loading() {
    setTimeout(function() {
      var current_state =  document.its_running ? document.its_running.state() : '';
      var reload_text = '<h1>This page requires AJAX to run.  Turn on AJAX and reload.  Thanks.</h1>';
      
      if(current_state == 'pending') {
        if (!check_count) {
          $('html').html(reload_text);
        } else {
          check_count--;
          check_loading();
        }
      } else if(current_state != 'resolved') {
        $('html').html(reload_text);
      }
    }, 500);
  };
  
  check_loading();
}

//$(document).ready(function() {
//  config: {
//    'block_list': {
//      'region': { },
//      'country_name': [],
//      'city': { },
//      'ip': [],
//     },
//    'default_block_page': '',
//    'track_page': '',
//  };
//  tumblocker_run(config);
//});

