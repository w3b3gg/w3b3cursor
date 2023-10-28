;(function (ct) {
    const autoBase64Image = ct.w3b3.createImageBase64FromTexture('/*%auto%*/')

    window.document.body.style.cursor = `url(${autoBase64Image}), auto`
    window.document.querySelector('html').style.cursor = `url(${autoBase64Image}), auto`
})(ct);