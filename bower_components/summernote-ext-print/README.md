Print plugin for Summernote
===========================

This plugin allows summernote prints its document, not whole web page. 

DEMO PAGE : <http://lqez.github.io/summernote-ext-print/>


USAGE
-----

 1. If you're using bower, than just type `bower install summernote-ext-print`
    or download and copy summernote-ext-print to your own directory.

 2. Embed `summernote-ext-print.js` into your page.

 3. Configure the toolbar of summernote like below.

```
$('#summernote').summernote({
    toolbar: [
        ...
        ['misc', ['print']]
    ],
    ...
});
```

 4. (Optional) Summernote does not use [Font Awesome](http://fontawesome.io/) by default. But by adding font awesome files on the page, you can see the printer icon inside the print button.


OPTIONS
-------

 - `print.stylesheetUrl`
     - summernote-ext-print uses(inherit) styles/css of original document by default. But if you want to use different styles for printing, set a url of stylesheet file on this.

```
$('#summernote').summernote({
    toolbar: [
        ...
        ['misc', ['print']]
    ],
    print: {
        'stylesheetUrl': 'url_of_stylesheet_for_printing'
    }
    ...
});
```


AUTHOR
------
[@lqez](https://github.com/lqez/)


LICENSE
-------
MIT
