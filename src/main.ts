import './style.css'
import { setupCounter } from './counter.ts'

async function fetchImages() {
  const response = await fetch('/files.json');
  const images = await response.json();
  return images;
}

function createImageElement(image: { filename: string, alttext: string, caption: string }) {
  return `
    <article>
      <figure>
        <picture>
          <img alt="${image.alttext}" src="${image.filename}" loading="lazy">
        </picture>
        <figcaption>${image.caption} debugging information ${image.filename}</figcaption>
      </figure>
    </article>
  `;
}

async function setupGallery() {
  const images = await fetchImages();
  const gallery = `<aside><p>click the button and have some fun</p><button id="counter" type="button">testing</button></aside>` + images.map(createImageElement).join('');
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = gallery;

  // Move the setupCounter call here
  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
}

setupGallery();
