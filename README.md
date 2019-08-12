# rdi-react-embed-player

## Installation
```bash
npm i rdi-react-embed-player
```

## Usage

```jsx
import EmbedPlayer from 'rdi-react-embed-player';
import 'rdi-react-embed-player/assets/style.css';

<EmbedPlayer
  href="https://www.youtube.com/watch?v=CyRDMAUr1gg"
  image="http://i3.ytimg.com/vi/CyRDMAUr1gg/maxresdefault.jpg"
/>
```

## Props

* className {string}
* href {string} - external path to video
* description {string}
* image {string} - path to image
* buttonLabel {string} - label for `aria-label`
* iframeAttrs {object} - attributes for iframe tag

## Development

```bash
npm i && npm run build
```

### Run example

> EXAMPLE_DIR - the directory in which the example is deployed

```bash
npm i && \
npm run build && \
npm link && \
npx create-react-app ${EXAMPLE_DIR} && \
cd ${EXAMPLE_DIR} && \
npm link rdi-react-embed-player && \
npm start
```
