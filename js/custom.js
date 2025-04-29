(function () {
    // 判断是否为移动端，移动端不加载视频
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) return;
  
    // 创建 <video> 元素
    const video = document.createElement('video');
    video.id = 'bg-video';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.src = Hexo.theme.base + 'video/background.mp4'; // 自动适配 baseurl
  
    // 插入到 body 最前
    document.addEventListener('DOMContentLoaded', () => {
      document.body.insertBefore(video, document.body.firstChild);
    });
  })();
  