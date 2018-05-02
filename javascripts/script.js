// var base = 'https://raw.githubusercontent.com/yurafuca/yurafuca.com/master/';

class Wallpaper {
  constructor() {
    this._items = [
      'river',
      'contact',
      'cat',
      // 'hope',
      'chicken',
      'drowsy',
      'star',
      'gong',
      'creek',
      'fan'
    ];
    this._count = Math.floor(Math.random() * this._items.length);
  }

  next() {
    return this._count = (++this._count) % this._items.length;
  }

  current() {
    return this._items[this._count];
  }

  length() {
    return this._items.length;
  }

  count() {
    return this._count;
  }
};

const wallpaper = new Wallpaper();

document.addEventListener("DOMContentLoaded", () => {
  render();

  //here code
});

() => {}

document.querySelector('#switch_wallpaper').addEventListener('click', () => {
  wallpaper.next();
  render();
});

const render = () => {
  const wall = document.querySelector('#wallpaper');
  const currentWallpaper = wallpaper.current();
  wall.src = `./videos/${currentWallpaper}.webm`;
  wall.play();

  const track = document.querySelector('#track');
  const trackText = `${wallpaper.count() + 1} of ${wallpaper.length()}`;
  track.textContent = trackText;
}