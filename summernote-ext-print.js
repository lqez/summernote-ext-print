(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {

  // Extends plugins for adding print.
  //  - plugin is external module for customizing.
  $.extend($.summernote.plugins, {
    /**
     * @param {Object} context - context object has status of editor.
     */
    'print': function (context) {
      var self = this;

      // ui has renders to build ui elements.
      //  - you can create a button with `ui.button`
      var ui = $.summernote.ui;
      var $editor = context.layoutInfo.editor;
      var options = context.options;

      // add print button
      context.memo('button.print', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-print"/>',
          tooltip: 'print',
          click: function () {
            self.$printframe.contents().find('body').html(context.invoke('code'));
            window.frames["summernote_print_frame"].window.focus();
            window.frames["summernote_print_frame"].window.print();
          }
        });
        // create jQuery object from button instance.
        var $print = button.render();
        return $print;
      });

      this.initialize = function () {
        var $container = options.dialogsInBody ? $(document.body) : $editor;

        this.$printframe = $('<iframe name="summernote_print_frame" width="0" height="0" frameborder="0" src="about:blank"></iframe>');
        this.$printframe.appendTo($container);

        var $head = this.$printframe.contents().find("head");
        $("style, link[rel=stylesheet]", document).each(function(){
          $head.append($(this).clone());
        });
      };

      this.destroy = function () {
        this.$printframe.remove();
        this.$printframe = null;
      };
    }
  });
}));
