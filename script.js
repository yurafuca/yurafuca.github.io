var base = 'https://raw.githubusercontent.com/yurafuca/yurafuca.com/master/';
// var base = '';
var titles = [
  'river',
  'contact',
  'cat',
  // 'hope',
  'drowsy',
  'star',
  'gong',
  'creek',
  // 'run'
];
var count = 0;

$(document).ready(function(){
  count = Math.floor(Math.random() * titles.length);
  setResources();
});

$('#switch_wallpaper').on('click', function() {
  skip();
});

function skip() {
  count = (++count) % titles.length;
  setResources();
}

function setResources() {
  $('html').css({ 'background-image' : wallUrlText() });
  $('#track').text(trackText());
}

function wallUrlText() {
  return 'url("' + base + titles[count] + '.gif")'
}

function trackText() {
  return (count + 1) + ' of ' + titles.length;
}
