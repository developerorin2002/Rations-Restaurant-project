function counter(options) {

   var settings = $.extend({
      duration: 2000,
      container: ".count"
   }, options)

   $(settings.container).each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: settings.duration,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
   });
}