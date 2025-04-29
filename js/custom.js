function loadBackgroundVideo() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) return;
  
    // 检查是否已经有视频了，避免重复插入
    if (document.getElementById('bg-video')) return;
  
    // 不在音乐页加载
    if (location.pathname.includes('/music') || location.pathname.includes('/音乐')) return;
  
    const video = document.createElement('video');
    video.id = 'bg-video';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.src = '/medias/video/background.mp4';
    document.body.insertBefore(video, document.body.firstChild);
  }
  
  // 初次加载
  document.addEventListener('DOMContentLoaded', loadBackgroundVideo);
  
  // PJAX 刷新后也加载
  document.addEventListener('pjax:complete', loadBackgroundVideo);
  