ct.w3b3 = {}
ct.w3b3.createImageBase64FromTexture = (textureName) => {
  const cursorTexture = ct.res.getTexture(textureName)[0]
  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = cursorTexture.width
  tempCanvas.height = cursorTexture.height

  const tempRenderer = new PIXI.Renderer({
      width: cursorTexture.width,
      height: cursorTexture.height,
      view: tempCanvas,
      transparent: true
  });
  tempRenderer.render(new PIXI.Sprite(cursorTexture))

  return tempCanvas.toDataURL('image/png')
}