module.exports = {
  modules: {
    wrapper:false
  },
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
