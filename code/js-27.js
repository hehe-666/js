var koe_27_reg_url = /(aid|bvid)=([a-zA-Z0-9]+)/.exec(document.querySelector('#video-frame,.t-video-switch,.bvideo').src);
var koe_27_id = koe_27_reg_url[1] === 'aid' ? 'av' + koe_27_reg_url[2] : koe_27_reg_url[2];
window.open('https://bilibili.com/video/' + koe_27_id);
