import jquery from 'jquery';

window.$ = window.jQuery = jquery;


$('#summernote').summernote({
  placeholder: 'Comment',
  tabsize: 2,
  height: 250,
  toolbar: [ ["style", ["style"]], ["font", ["bold", "italic", "underline", "fontname", "superscript", "subscript", "clear"]], ["color", ["forecolor", "color"]], ["paragraph", ["ul", "ol", "paragraph", "height"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ]
});

