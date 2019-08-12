import React from 'react';
import { act, create } from 'react-test-renderer';
import EmbedPlayer from '../src';

const VIDEO_URL = 'https://www.youtube.com/watch?v=CyRDMAUr1gg';
const IMAGE_URL = 'http://i3.ytimg.com/vi/CyRDMAUr1gg/maxresdefault.jpg';

describe('Main functions', () => {
  let testRenderer;
  let testInstance

  beforeAll(() => {
    testRenderer = create(
      <EmbedPlayer href={VIDEO_URL} image={IMAGE_URL} />
    );
    testInstance = testRenderer.root;
  });

  afterAll(() => {
    testRenderer.unmount();
  });

  it('should render default state with current links', () => {
    expect(testInstance.findByType('a').props.href).toBe(VIDEO_URL);
    expect(testInstance.findByType('img').props.src).toBe(IMAGE_URL);
  });

  it('should render iframe after click', () => {
    act(() => {
      testInstance.instance.onClick({ preventDefault: () => {} });
    });

    expect( testInstance.findByType('iframe').props.src ).toBe(VIDEO_URL);
  });
});
