/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b1d89bd883c2700243c2a3c1250de793"],["/about/index.html","fb991aa3bfd05dbd67f39836584bf370"],["/anzhiyu/random.js","70afc58e168b2954e9331ccb7abc819d"],["/archives/2023/10/index.html","b211a0707604bca6153c9dcd49b96418"],["/archives/2023/11/index.html","9ae9146b7b98eb3bac9d04f144f375c3"],["/archives/2023/12/index.html","37cca203cff168eb96f62a4809462e55"],["/archives/2023/index.html","33da11cfdcb1e37e27a15bedca838452"],["/archives/2023/page/2/index.html","283f518ff94135a78f7a02a266d19ac2"],["/archives/2024/03/index.html","6cd790508ad4eb863a54482d03045e98"],["/archives/2024/06/index.html","ca08ebee56f5ea97537cb71da51f4f97"],["/archives/2024/index.html","88ca35ab38f38dcb4a1d69ce3c680849"],["/archives/index.html","e9fb0f4c96a57546e60e6fe4f353925b"],["/archives/page/2/index.html","6571923e2bd501d587e78e66651a8ddb"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","136b2659a1587a526db9416546e6f20f"],["/categories/Leetcode/index.html","d04af4985be21a669120ae66c88dc8a3"],["/categories/Windows/index.html","f88507fdbc5f9124b8534246e2569be5"],["/categories/git/index.html","1e8cc241a33d8e7dda3e20bb2ae817e7"],["/categories/hexo/Github/index.html","3e4284701263c0376429a39b37e50cba"],["/categories/hexo/anzhiyu/index.html","38cd4a46d929202ceb7a3f6a5cc9d3a8"],["/categories/hexo/index.html","e4f388d9d66826d9dcc8180974eb5cb0"],["/categories/index.html","96a64291bab27da1a35b2a44a0915fd9"],["/categories/python/OpenCV/index.html","9f13a02b75fc796a2bb24adf689adde4"],["/categories/python/SSH/index.html","729d8e55fabf067424da44222d9fa07c"],["/categories/python/index.html","c7e9a498e682710440bc94de9763e8e0"],["/categories/python/爬虫/index.html","14ee60fd107bf2ceaefcaa1473b656f1"],["/categories/节日快乐/index.html","aba7ad9ff006abaab08b7b036a55eb6c"],["/chatbot/index.html","b9e543f818d1dfce0fc874fb7e4b64f8"],["/css/bounce.css","630b5b7029c645ec853d5beebc27434c"],["/css/custom.css","6a1471286c9192d063b58c3fad378396"],["/css/custom_new.css","17b80cdaffd276a08a4d61315563b7f1"],["/css/index.css","626417095c9cee6f3739ca56a968e04f"],["/css/loading-bar.css","f2bf69d997e61abe1aff03df2d0de760"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","88458529a30d42c219c89a515939b330"],["/essay/index.html","ec215fbee45c14fd59c764f86ee7c154"],["/gallery/genshin/index.html","40a33e0df59d04169dbac658d4665df5"],["/gallery/index.html","7efe625941aa7dfe3310c38dfd9132fd"],["/gallery/wallpaper/index.html","22c38bc7635332d8def1a8a3bc5780e9"],["/img/4.png","bdc5684e722beee2dc4c0b6be4bbd6ac"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/404.svg","ae7a29a56855256caef2db1e23a10b38"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/favicon.svg","085e7487dd445df8a00fa8a8d96b2412"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/happy.svg","e81640aca52cea826abfdd16d200207e"],["/img/image.svg","afe89da27fff6d31211930f3c3b5250f"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/1.png","f24eb803425cc9db1a11da3bdab1815e"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/2.png","fb33085a7e283b7079abd4a1bb0b954a"],["/img/siteicon/3.png","9990d25e773080c8993d971b75f92226"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/working.svg","10016cee5a9bd2f71822dc00efc121f4"],["/index.html","8aa168856c1ae0783da1ade8f84f44f2"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/announce.js","982f42003e6e5974bcff73462224e8f9"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/runtime/runtime.js","0b387338d7ce929b0b5a0bc286ca0fc5"],["/js/runtime/runtime.min.js","3ed6d95be42b99da00441194b3b3a29d"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/link/index.html","576c8d90c72c83be8df59d55719024fa"],["/music/index.html","1a55b5b07a89724bc2e532e3f2b9c4e1"],["/page/2/index.html","2affcc3131079ac63dd329fd10b11c3a"],["/posts/11d731c5.html","4fd9812d6ceb8ff7b1f56460b8595350"],["/posts/16107.html","e360c90ed0c2a4742993cc3277434ca7"],["/posts/33a8c27d.html","b46a07d0ff9d0361431fe82e78224939"],["/posts/372ff7a.html","36ec274881b4c5e9e4b84c5a708b68ad"],["/posts/5bed7dca.html","0d90e1737f0b9b1f3d88697bea8158e4"],["/posts/7011a3b2.html","35752808a1d03e6a3530109587f359b2"],["/posts/798ab618.html","3b28ff0b0c176db559c9c32e6fdbe4f5"],["/posts/a6a24535.html","1fd3c4839e3f9a6d625aabb48a53611b"],["/posts/c0981437.html","6d3fc97dde82a15fd44be3b750e1773d"],["/posts/de7f0b92.html","a5f6113e3c01f469601a320d0b6e3d7f"],["/posts/e5a66c8.html","c1026ae60d427c1e7d65f6e7ab93072e"],["/posts/e8b64c0.html","c89f067b7d3a7708df5427611ecba6bc"],["/posts/fb2e31d6.html","3a04a28018669c466e119bdf3a1f7fd6"],["/posts/fd917c31.html","f7502708dc91bfe90db0932730b16269"],["/sw-register.js","aecee50d8c6dcd01c54bae3c8b8fa364"],["/tags/Leetcode/index.html","825d6ef3ecf3074f1c05e6bca413f7c5"],["/tags/OpenCV/index.html","bed411a456add43870e941b5c46ce3d8"],["/tags/Tag-Plugins/index.html","4b5cc3f7d52e6ff21bde9d0226242f7e"],["/tags/Windows/index.html","584f588b5ab209e4966da3532af62fb8"],["/tags/anzhiyu/index.html","fb1b0f6c025621e780fcbb598910046c"],["/tags/git/index.html","143a1964ed92377f3c76c9d741c0ff9e"],["/tags/hexo/index.html","5b4a58a552a78f03598b1210b65f6bec"],["/tags/index.html","8dc40fa578cc1398cd0b27511a03a265"],["/tags/python/index.html","663905aeaabca15784769e711b40c909"],["/tags/爬虫/index.html","100ec4d2dc8f2fa61f4600eadad1e817"],["/tags/节日快乐/index.html","6cd27d0306e4a58e41247dbcce085917"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
