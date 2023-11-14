if (!ct.hasOwnProperty('w3b3')) ct.w3b3 = {
  pointer: null,
  cursor: null,
  scale: null,
  prevScale: null
}

ct.w3b3.getScale = () => {
  const canvaStyle = ct.pixiApp.view.style.cssText;
  if(canvaStyle.indexOf('scale') < 0) {
    return 1
  }
  const scale = canvaStyle.substring(canvaStyle.indexOf('scale') + 6);
  const scaleValue = scale.slice(0, scale.indexOf(')'));
  return parseInt(scaleValue)
}

ct.w3b3.createImageBase64FromTexture = (textureName) => {
  ct.w3b3.scale = ct.w3b3.getScale()
  const cursorTexture = ct.res.getTexture(textureName)[0]
  const tempCanvas = document.createElement('canvas')
  const scaled = {
    x: cursorTexture.width * ct.w3b3.scale,
    y: cursorTexture.height * ct.w3b3.scale,
  }
  tempCanvas.width = scaled.x
  tempCanvas.height = scaled.y
  const sprite = new PIXI.Sprite(cursorTexture)
  sprite.scale.set(ct.w3b3.scale, ct.w3b3.scale)
  const tempRenderer = new PIXI.Renderer({
      width: scaled.x,
      height: scaled.y,
      view: tempCanvas,
      transparent: true
  });
  tempRenderer.render(sprite)
  return tempCanvas.toDataURL('image/png')
}

ct.w3b3.createCursors = () => {
  ct.w3b3.cursor = ct.w3b3.createImageBase64FromTexture('/*%auto%*/')
  ct.w3b3.pointer = ct.w3b3.createImageBase64FromTexture('/*%pointer%*/')
  window.document.body.style.cursor = `url(${ct.w3b3.cursor}), auto`
  window.document.querySelector('html').style.cursor = `url(${ct.w3b3.cursor}), auto`  
}

ct.w3b3.timer;
onresize = (event) => {
  clearTimeout(ct.w3b3.timer);
    ct.w3b3.timer = setTimeout(() => {
    ct.w3b3.prevScale = ct.w3b3.scale
    ct.w3b3.scale = ct.w3b3.getScale()
    if(ct.w3b3.scale != ct.w3b3.prevScale) {
      ct.w3b3.createCursors()   
    }
  }, 100);
};