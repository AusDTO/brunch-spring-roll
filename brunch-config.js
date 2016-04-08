module.exports = {
  paths :{
    public:'../public',
    watched: ['app','vendor','../templates']
  },
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  plugins: {
    copycat: {
      'images': ['app/assets/images'],
      '../../../../target/classes/public': ['../public'],
      '../../../../target/classes/templates': ['../templates'],
      verbose : true,
      onlyChanged: true
    }
  }
}

/*
module.exports = {
  paths: {
    public: '../public',
    watched: ['../templates']
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^vendor/
      },
      order: {
        before: ['vendor/js/modernizr-2.8.3-respond-1.4.2.min.js']
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^(app|vendor)/
      },
      order: {
        before: [
        'app/css/fontstack.css',
        'vendor/css/normalize.min.css',
        'vendor/css/skeleton.css'
        ],
        after: ['app/css/style.css']
      }
    }
  },
  plugins: {
    copycat: {
      'fonts': ['fonts'],
      'images': ['images'],
      '../../../../target/classes/public': ['../public'],
      '../../../../target/classes/templates': ['../templates'],
      verbose : true,
      onlyChanged: true
    }
  }
}
*/
