if (this.cursorpointer) {
  const pointerBase64Image = ct.w3b3.createImageBase64FromTexture('/*%pointer%*/')

  this.buttonMode = true
  this.interactive = true
  this.cursor = `url(${pointerBase64Image}), pointer`
}