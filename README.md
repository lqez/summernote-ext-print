Print plugin for Summernote
===========================

This plugin allows summernote prints its document, not whole web page. 

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

AUTHOR
------
[@lqez](https://github.com/lqez/)


LICENSE
-------
MIT
