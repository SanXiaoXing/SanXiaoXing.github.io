/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","961cbe56b3ee11c265fd4f2cf00a92cb"],["/about/index.html","7b2b4d24f4c082d68ca4e3651872ca13"],["/anzhiyu/random.js","c6ce07fa40bd34a81f72c005d811a3bb"],["/archives/2023/10/index.html","fdc7fbc00aec1c9ccf0e8070026e57bb"],["/archives/2023/11/index.html","c1a79b427811cfcb9c5c3add080e47c4"],["/archives/2023/12/index.html","43c2987c5751ecfb6f2f900dfc2a9e0d"],["/archives/2023/index.html","77e73fc0f4f45d991a885ac96d9e7bb3"],["/archives/2023/page/2/index.html","e17ae0a3a64246233133baea466cde8b"],["/archives/2024/03/index.html","c07f477591952986a4f9774a73216994"],["/archives/2024/index.html","1199da53bd39f9f2e078d7455b20faf5"],["/archives/index.html","539f3a93e25270b917a02dbcc2418599"],["/archives/page/2/index.html","a8f673d58e182a27a89441e1cc227eea"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","52bc85257e24a613f6fc0ef5cef20ce3"],["/categories/Windows/index.html","3a7227365d556010830f4bcd3c30b4b1"],["/categories/git/index.html","8dcb0a4be035bbc93b5a70ce9ad5cb81"],["/categories/hexo/Github/index.html","8fc28588cd1052af453bd5a010256a85"],["/categories/hexo/anzhiyu/index.html","6c4cd334f665860c085c58d3657abb37"],["/categories/hexo/index.html","8ffc814b08abcea45fb7431af4a5c006"],["/categories/index.html","640613596f597c6d9cf1b0f7fd2b1e8f"],["/categories/python/OpenCV/index.html","e3212e76c4d1e9eae36803a791727120"],["/categories/python/SSH/index.html","b6b0162f299320480985dd32185bee63"],["/categories/python/index.html","1f04c7e537a153b1b07242e53b0e08a5"],["/categories/python/爬虫/index.html","6e5b34b3ae940d950e54c88b56ebc90c"],["/categories/节日快乐/index.html","3de445969a32368978054c1fcf6efa08"],["/chatbot/index.html","d428d20cbe240e868a8ba51a786621a6"],["/css/bounce.css","630b5b7029c645ec853d5beebc27434c"],["/css/custom.css","6a1471286c9192d063b58c3fad378396"],["/css/custom_new.css","17b80cdaffd276a08a4d61315563b7f1"],["/css/index.css","626417095c9cee6f3739ca56a968e04f"],["/css/loading-bar.css","f2bf69d997e61abe1aff03df2d0de760"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","8e1a77631beeedf911d5e9b40756867f"],["/essay/index.html","f392bd4aa7bf03f6428f5d6bcb5068b7"],["/gallery/genshin/index.html","53395e7aa808867fcdf12b733d81ca87"],["/gallery/index.html","2c8ee032622130f69c1e57ba3799e5ba"],["/gallery/wallpaper/index.html","473da167580d83851a26c80599ff5e73"],["/img/4.png","bdc5684e722beee2dc4c0b6be4bbd6ac"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/404.svg","ae7a29a56855256caef2db1e23a10b38"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/favicon.svg","085e7487dd445df8a00fa8a8d96b2412"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/happy.svg","e81640aca52cea826abfdd16d200207e"],["/img/image.svg","afe89da27fff6d31211930f3c3b5250f"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/1.png","f24eb803425cc9db1a11da3bdab1815e"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/2.png","fb33085a7e283b7079abd4a1bb0b954a"],["/img/siteicon/3.png","9990d25e773080c8993d971b75f92226"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/working.svg","10016cee5a9bd2f71822dc00efc121f4"],["/index.html","739389d15080847ee14a7c380c6d7e65"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/announce.js","982f42003e6e5974bcff73462224e8f9"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/runtime/runtime.js","0b387338d7ce929b0b5a0bc286ca0fc5"],["/js/runtime/runtime.min.js","3ed6d95be42b99da00441194b3b3a29d"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/link/index.html","06a40adf3323dc9bb97d806157cfb9e5"],["/music/index.html","c1a0dba33d467f29daf37a86e0d6003e"],["/page/2/index.html","790896e3ffc4ccf7324c5a873b014f65"],["/posts/11d731c5.html","5db8ac8eed01b41feb4e9dd567dd0876"],["/posts/16107.html","a114c6210d58d66005dc4c43f2e52b3a"],["/posts/372ff7a.html","ae6316aa277afccb86eb2cfce7e46e5b"],["/posts/5bed7dca.html","656bbc75c8f2a345345c64675f4ae7fa"],["/posts/7011a3b2.html","7fce257b55c20e37e9c2ac514ee951f8"],["/posts/798ab618.html","fed97819ffa04c2eae4f75327637032d"],["/posts/a6a24535.html","bf714f7680ff4fc38a66b4e00ae4ea54"],["/posts/c0981437.html","3689dea3f6a2d215918a363f76cf8f5f"],["/posts/de7f0b92.html","fc7632c62f65ba9ecb638f0b986eaa49"],["/posts/e5a66c8.html","6615d9031903e57abd204c51b4d63928"],["/posts/e8b64c0.html","54a7ee3de2bd6322654d6284476c296a"],["/posts/fb2e31d6.html","96a74a42d95f1346880a71dc59708a2b"],["/posts/fd917c31.html","19edb766dd68b6d55bc57784ea3cfc7c"],["/sw-register.js","3f05a8c2e9ba37845558581960b50cc9"],["/tags/OpenCV/index.html","a2e1b0e1dec37e0b5cde6a6f74700e37"],["/tags/Tag-Plugins/index.html","a038977d44672ee0060efb340a538ae0"],["/tags/Windows/index.html","875a57d923c65d67e6706a42f7e87484"],["/tags/anzhiyu/index.html","e5082828a24b709b2b18cb4ab324576a"],["/tags/git/index.html","7716f5e48e97776b016858b5bb86cb7b"],["/tags/hexo/index.html","12c5aff642808fdf4ddff3ce9b2fc003"],["/tags/index.html","436d85bab795bf0caddaca73d762d42d"],["/tags/python/index.html","ebf410150fcfcd973544a95aa6d4b58e"],["/tags/爬虫/index.html","5c1ecabd27732f358cae5ada51317edd"],["/tags/节日快乐/index.html","837f8384b878f9f8e3dc2b1e66a808ac"]];
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
