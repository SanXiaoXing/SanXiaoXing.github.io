/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","25d612db5711e2d8a945a9a2c931c253"],["/about/index.html","87a373c52db5d932b244e61b84c0d212"],["/anzhiyu/random.js","08d8055568a2397fe7221b48d140bb93"],["/archives/2023/10/index.html","8333519cd3d93cf8f196961157d5ff24"],["/archives/2023/11/index.html","9eb11f7c00c0b962e3aa8acccc5db59a"],["/archives/2023/12/index.html","cee48c31f539d837162bf80bbfdab6cc"],["/archives/2023/index.html","2938eb04136d2b8c816dae356842ad3c"],["/archives/2023/page/2/index.html","573248f717939cb21b4e18d5807e06f1"],["/archives/2024/03/index.html","d260c6685304f9108c11eb72bff9164a"],["/archives/2024/index.html","d67a680595068cee2147c4c8e9abf379"],["/archives/index.html","ff2a73b32a0d42f770335e8222b6f61f"],["/archives/page/2/index.html","f89ab4b3588268b7f655d2e24a1c23a4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","fbf1595af451deaade7c6322222c89d1"],["/categories/Windows/index.html","81149971da5fa4b41d7e779dc89a3bf6"],["/categories/git/index.html","6bbf71b56e2be389a122942c6a63d287"],["/categories/hexo/Github/index.html","78644e793026f682c58b155caac8d900"],["/categories/hexo/anzhiyu/index.html","25e0c7cc5d8ec55e861c3ff1b8e679c9"],["/categories/hexo/index.html","499869b64fc9dec0cc74e350a923bb03"],["/categories/index.html","7e4b434e872fcd20d5e0b09cfef94b6e"],["/categories/python/OpenCV/index.html","c8f41ab3e06db8c89c6b7b142a9a7954"],["/categories/python/SSH/index.html","416355fabe9a02f720e7c7e3da1cadc7"],["/categories/python/index.html","48e7d38c41543b258c1038e2ba9af19a"],["/categories/python/爬虫/index.html","78a2c346e079cc271f79047717886e26"],["/categories/节日快乐/index.html","23edaaec86d19b9562463d258060bfd8"],["/chatbot/index.html","3969af730fcc45d4d445311ffbf0438e"],["/css/bounce.css","630b5b7029c645ec853d5beebc27434c"],["/css/custom.css","6a1471286c9192d063b58c3fad378396"],["/css/custom_new.css","17b80cdaffd276a08a4d61315563b7f1"],["/css/index.css","626417095c9cee6f3739ca56a968e04f"],["/css/loading-bar.css","f2bf69d997e61abe1aff03df2d0de760"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","3fcfbe12ff6867fe4a3be1d48e6556a3"],["/essay/index.html","fb4f8cc49f4470cd338adf4c5189660e"],["/gallery/genshin/index.html","47a3a4e0f30df8a494cc93ef98d9ee59"],["/gallery/index.html","7268927d568dae9b3558624ca9645744"],["/gallery/wallpaper/index.html","143385c715da84815899d81216eb9505"],["/img/4.png","bdc5684e722beee2dc4c0b6be4bbd6ac"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/404.svg","ae7a29a56855256caef2db1e23a10b38"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/favicon.svg","085e7487dd445df8a00fa8a8d96b2412"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/happy.svg","e81640aca52cea826abfdd16d200207e"],["/img/image.svg","afe89da27fff6d31211930f3c3b5250f"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/1.png","f24eb803425cc9db1a11da3bdab1815e"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/2.png","fb33085a7e283b7079abd4a1bb0b954a"],["/img/siteicon/3.png","9990d25e773080c8993d971b75f92226"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/working.svg","10016cee5a9bd2f71822dc00efc121f4"],["/index.html","39b285bb9b905eccaf4e3fe384c2bc2c"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/announce.js","982f42003e6e5974bcff73462224e8f9"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/runtime/runtime.js","0b387338d7ce929b0b5a0bc286ca0fc5"],["/js/runtime/runtime.min.js","3ed6d95be42b99da00441194b3b3a29d"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/link/index.html","348db3fa80d5a2a66c04985f9e480f10"],["/music/index.html","23f675c41dc96df51783d85b0c7e39d2"],["/page/2/index.html","144b71c6db9438c7e6f3468c0d983d29"],["/posts/11d731c5.html","1caa0268f0c36346238312500bd81163"],["/posts/16107.html","9b6e67908973dc9c23702db911fa6d72"],["/posts/372ff7a.html","4c39f843339e89857296fd53ef038768"],["/posts/5bed7dca.html","27f1a88a33a0343077d136a4b0556151"],["/posts/7011a3b2.html","e675e39bd2a5603f448545e58b0aedaa"],["/posts/798ab618.html","4aaaa11f95aaeca29e3d29768f580259"],["/posts/a6a24535.html","cd8bbe7873cb4268d3954e4b7e7552e9"],["/posts/c0981437.html","aeae6ad8188088d1640b6f1f406b20da"],["/posts/de7f0b92.html","9e39403d021c6a8878663145d46f41c5"],["/posts/e5a66c8.html","c2e50b5e89cb5dac8ba297c7cc89d6ba"],["/posts/e8b64c0.html","889f466a657e4265870a63eb291a9a75"],["/posts/fb2e31d6.html","19dd7ca5339e141e48c595802b031602"],["/posts/fd917c31.html","39b855e99f40284a2093d7defd62ce43"],["/sw-register.js","bfe2ecd2cc31d136e583d4a58c6c80f1"],["/tags/OpenCV/index.html","b23fd0fe6132c87f0740d9695796dbd6"],["/tags/Tag-Plugins/index.html","b5c545c0c8591a39a452761368b4a356"],["/tags/Windows/index.html","00550e5bc6cec961bb88e2eb46cb897d"],["/tags/anzhiyu/index.html","ea50a19863936e500c7e5abc5985f0b2"],["/tags/git/index.html","0c85d762ddb8cf104c66dc037bda0a63"],["/tags/hexo/index.html","98bebd31171ed6a68c377c9deceed0d7"],["/tags/index.html","66fc8011f7351f97ddf4e24aa535684d"],["/tags/python/index.html","dac06a2ecdf6fc4d42637b85132e40c7"],["/tags/爬虫/index.html","7bc423b64d3751c3754cb6ac99a34bd3"],["/tags/节日快乐/index.html","da44be57fb93cab322398491ceb74f34"]];
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
