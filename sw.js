/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e89be071048a84c630fcad0342e09014"],["/about/index.html","72accfb852ce30f351021918dd99853f"],["/anzhiyu/random.js","720c64caf11f7790237c6de94772aaee"],["/archives/2023/10/index.html","72c9588b871c21111f76341516e40041"],["/archives/2023/11/index.html","5babe2b4686a80a259ec48e09b29d209"],["/archives/2023/12/index.html","b24932bb06e48889256e9352b8a76366"],["/archives/2023/index.html","d81cbeb4602cda33db39aee12cefe6cb"],["/archives/2023/page/2/index.html","ea2e4445166650fc2e89ab5e5aff9f1c"],["/archives/2024/03/index.html","fcbef362266394fee413a2c5fd2716dd"],["/archives/2024/06/index.html","4a8561fa1f4e3d1bc989475e9585e778"],["/archives/2024/07/index.html","b75249f7ea1c8f5661e74bd3139c11a6"],["/archives/2024/index.html","45c9cb89d6756b8dd4e6cfff19c7c019"],["/archives/index.html","54456379b9daeb01417f3a273cec3b27"],["/archives/page/2/index.html","a40b3a31fe9bc6785cd31db31dae06a3"],["/assets/algolia/algoliasearch.js","e60af7521d3f52c07f91fb7a723893b8"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","3b2227064053f7ed2efae85ac38af782"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","c39cbc31e94e50685b8ed83396215fc4"],["/categories/Leetcode/index.html","e67bd2fd8da6071dfddb4c9bc75d5271"],["/categories/Windows/index.html","03d3b0412e1950809965749f5b8b13f5"],["/categories/git/index.html","13f18f0c76698de6a1e07f45d3bfb44d"],["/categories/hexo/Github/index.html","39e0d0af43735b55d86a25f45234dcaf"],["/categories/hexo/anzhiyu/index.html","ab24ae04359096119b46ebc4d274b3d6"],["/categories/hexo/index.html","e255780f3b7dac68cd9f9c3aba7d8bfe"],["/categories/index.html","0d6feb6178a7964eea05b50a02c6b452"],["/categories/python/OpenCV/index.html","c58b509dcf1d37f25494c09f8eeadd15"],["/categories/python/SSH/index.html","192409ca0f4eb34c9c037c8ba8f2720f"],["/categories/python/index.html","8252d247271ca1d58585898a32111888"],["/categories/python/爬虫/index.html","ea21666761ea3b725713f7bef60ed514"],["/categories/节日快乐/index.html","7d8889620710d31e831a3ea9742eceaa"],["/chatbot/index.html","1b0e1d76d90b7324d9e47342adb4c257"],["/css/bounce.css","4e69cd6be1adb49c857b1b573c51ee9f"],["/css/custom.css","fed19dc6cfbae940f779d508c2f8a97a"],["/css/custom_new.css","2bbd591caf0616c8b3bca93ca24a85d4"],["/css/index.css","5dd9255734e2ecc9a39030a7adced5d9"],["/css/loading-bar.css","37af47126cb78526be503bc981e2f415"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","11b40d9b7d8455d84bf42cf23c539f28"],["/essay/index.html","7c606eb9037a94d7113ae48b92829579"],["/gallery/genshin/index.html","b88855c50bfb7f93e0457e998b8c3ffd"],["/gallery/index.html","8fa24fcc3bf4d5155980ce96df2a772f"],["/gallery/wallpaper/index.html","686461378aaa722eb15755db42629d15"],["/img/4.png","bdc5684e722beee2dc4c0b6be4bbd6ac"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/404.svg","ae7a29a56855256caef2db1e23a10b38"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/favicon.svg","085e7487dd445df8a00fa8a8d96b2412"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/happy.svg","e81640aca52cea826abfdd16d200207e"],["/img/image.svg","afe89da27fff6d31211930f3c3b5250f"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/1.png","f24eb803425cc9db1a11da3bdab1815e"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/2.png","fb33085a7e283b7079abd4a1bb0b954a"],["/img/siteicon/3.png","9990d25e773080c8993d971b75f92226"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/working.svg","10016cee5a9bd2f71822dc00efc121f4"],["/index.html","98e2a4f00b80c687087765b5a1b13639"],["/js/ali_font.js","f023b135add7629e24e5257abe18b55a"],["/js/announce.js","e4fc1103798d302ea4d658174efaed2b"],["/js/anzhiyu/ai_abstract.js","bd7d0416a912651499efa1a2089a9fa0"],["/js/anzhiyu/comment_barrage.js","d27c413b80b8b250eb1493281299a4e3"],["/js/anzhiyu/people.js","19feb32bba8ba6faf0ec882112eb749b"],["/js/anzhiyu/random_friends_post.js","41796840c1aeb32f3407b426744953f5"],["/js/anzhiyu/right_click_menu.js","97b668396daaae5e05b11c7bfd612519"],["/js/main.js","736c8b13deaf2883426039e2897c8c08"],["/js/runtime/runtime.js","83ced5312bde89efeaa77bf11d19f5df"],["/js/runtime/runtime.min.js","3ed6d95be42b99da00441194b3b3a29d"],["/js/search/algolia.js","d6e42f82f4a683ff9ed2796b2839e5db"],["/js/search/local-search.js","408666da48024f36cdc803686fb19da9"],["/js/tw_cn.js","1ab93057e66c00a59bd33c93abd48932"],["/js/utils.js","bf86a9b13c8c46426f7e742165230372"],["/link/index.html","a1215c70fff9a0034d3021583c1f5ab1"],["/music/index.html","6a509c7e3f5ad14241760a8d58a2944d"],["/page/2/index.html","12afb80bb45945eafc6c38965c19e2ad"],["/posts/11d731c5.html","4aab8565424294b37aaf1e0ab268b7c6"],["/posts/16107.html","3cbac3f046f34133ecaa388d58ae4fd6"],["/posts/33a8c27d.html","90efb38a3463b790ae4f57abc0f0628e"],["/posts/372ff7a.html","2a73836ec64b56a37312d13b01b9a3a7"],["/posts/5715173d.html","26598d83b894d72b37a984bac8cfb93b"],["/posts/5bed7dca.html","1872551fc32c3b25b00fab6904e01db8"],["/posts/7011a3b2.html","1a83614eeb4dae0dac3cd1c88fc75244"],["/posts/798ab618.html","eaae17d9f704cf810e8386263df8071b"],["/posts/a6a24535.html","5f21905e86feede9489650dfec0a8dea"],["/posts/c0981437.html","a36d61a7b42a2370b331f2324c3ec993"],["/posts/c62233d7.html","bf467999a860bf9d553b93c749f1f342"],["/posts/de7f0b92.html","c3d9a41a58cfebab071642be8349bbf0"],["/posts/e5a66c8.html","490ae7245c66d2aa1f344cb968def0e9"],["/posts/e8b64c0.html","797cabb7bd2dd44de2ceb2159bd47fec"],["/posts/fb2e31d6.html","990d1a662291768c974884dfd923e84d"],["/posts/fd917c31.html","08d8f1c1675be80bae8d24f5d8d51309"],["/sw-register.js","1257136dee5c3a7a85c94ab3342745d8"],["/tags/Leetcode/index.html","2152e4f71dfa00ee079fdd51b419821b"],["/tags/OpenCV/index.html","09b9d33d8c3b30a2e49af8ee53b39eaa"],["/tags/Tag-Plugins/index.html","b4fedb4c9422f80a80e307f58936d70a"],["/tags/Windows/index.html","c6e0665b1d6a7c7b45e2cebadae06a59"],["/tags/anzhiyu/index.html","3fe3ee5aba0ff9501cdb48727f9c8924"],["/tags/git/index.html","51fa42f4cc8663acbe9a43e550394ce5"],["/tags/hexo/index.html","1620191ab8fbc656a6291ceac3280f58"],["/tags/index.html","91224613b97121af3e9eabdc9254a556"],["/tags/python/index.html","a691ba22fb7cd1fc4bb16947a6906975"],["/tags/爬虫/index.html","4ad547a84c0520bd56ce2a8c8b72592f"],["/tags/节日快乐/index.html","80caae2dcbb07caa016f39facc0f3ca0"]];
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
