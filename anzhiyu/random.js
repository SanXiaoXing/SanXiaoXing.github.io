var posts=["posts/11d731c5.html","posts/e5a66c8.html","posts/7011a3b2.html","posts/fb2e31d6.html","posts/798ab618.html","posts/16107.html","posts/fd917c31.html","posts/de7f0b92.html","posts/5bed7dca.html","posts/a6a24535.html","posts/c0981437.html","posts/372ff7a.html","posts/e8b64c0.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };