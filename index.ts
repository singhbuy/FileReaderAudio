// Import stylesheets
import './style.css';
import { Howl } from 'howler';

const input = document.getElementById('input');

input.onchange = (event) => {
  const fileReader = new FileReader();
  fileReader.addEventListener('load', (e) => {
    if (e && e.target && e.target.result && files !== null) {
      const arrayBuffer = e.target.result;
      const base64Str = Buffer.from(arrayBuffer).toString('base64');
      const contentType = 'audio/mp3';
      const sound = new Howl({
        src: [`data:${contentType};base64,${base64Str}`],
      });
      sound.play();
      console.log('howlInstance' + sound);
    }
  });
  const files = event.target.files;
  fileReader.readAsArrayBuffer(files[0]);
};
