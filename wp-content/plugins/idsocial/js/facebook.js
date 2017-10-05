window.fbAsyncInit = function() {
  console.log('Facebook Loaded - IDSocial');
  FB.init({
    appId      : idsocial_fb_app_id,
    xfbml      : true,
    version    : 'v2.8'
  });
  if (idsocial_logged_in !== '1') {
    idsocial_fblogin_check();
  }
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));