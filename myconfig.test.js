  $(document).ready(function() {
    var config = {
      'check_count': 5,
      'check_delay': 1000,
      'track_page': 'https://c.statcounter.com/11758150/0/8aa75d45/1/',
      'default_block_page': 'https://noyouabsolutelycannot.tumblr.com/post/176601194749/online-harassment',
      'block_tracker_img': '//c.statcounter.com/11786683/0/0e7d8c66/1/',
      'block_list': {
        'region': {
          'Andalusia': '',  
          'Perm Krai': 'https://noyouabsolutelycannot.tumblr.com/private/176601577774/tumblr_pcwnt7BgfV1xc9dw4',
        },
        'country_name': [],
        'city': {
          'Tucson': '',
          'Rochester': 'https://noyouabsolutelycannot.tumblr.com/post/176742452854/super-fan-or-cyber-stalker-how-you-can-tell-the',
          'Zagreb':'https://noyouabsolutelycannot.tumblr.com/post/176601512024'
        },
        'ip': ["195.176.3.20","178.47.92.193","212.92.208.46","213.202.108.1","213.202.67.54","31.162.23.77","47.62.9.57","83.34.130.204","188.17.92.183","31.162.22.217","213.202.65.23","178.47.70.11","90.151.47.215","69.207.102.206","67.241.180.11","5.141.231.1","5.141.232.70","94.50.5.157","94.50.241.247","188.18.65.11","5.140.88.67","94.50.6.99","94.50.6.2","94.50.6.47","94.50.2.207","94.50.2.37","94.50.6.254","31.162.16.248","94.50.5.18","94.50.5.205","94.50.5.4","94.50.5.152","94.50.5.231","94.50.5.117","178.47.67.17","5.140.89.64","31.162.28.68","178.47.70.11","90.151.47.215","67.241.180.11","154.48.166.50"],
      }
    }

    tumblocker_run(config);
  });
