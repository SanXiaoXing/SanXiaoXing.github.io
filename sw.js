/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","89184fe76ed6859e35aafecfe0312747"],["/about/index.html","90ef5ae7038d74bebd873372b1754131"],["/anzhiyu/random.js","f08d754baf48a649363d252f46b22b0f"],["/archives/2023/10/index.html","f48942b46c83b483ba68e5e1ae64673d"],["/archives/2023/11/index.html","8e5076897bb130fe5b2f1ea07b14f69a"],["/archives/2023/12/index.html","d6a4387c850ff78c1afd2fd8b9549f61"],["/archives/2023/index.html","f216309139931aec118b419ea090cce2"],["/archives/2023/page/2/index.html","dae1d58cc74fb02acde323500eac9d97"],["/archives/2024/03/index.html","5db0240bd2cf33d1d88c48d038703df5"],["/archives/2024/06/index.html","7b74d236a1ebcc70a8e1d766e25ec86e"],["/archives/2024/07/index.html","eede5f7502688e937b6c3b051bb9f114"],["/archives/2024/index.html","a46a613bce709f899823fadfa195d42c"],["/archives/index.html","3b4a4f6d35e0a03e874de3755e835785"],["/archives/page/2/index.html","754a077e8581884b5622d29533936b25"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","0cc762313c295d9efa2b6e6fcca50b80"],["/categories/Leetcode/index.html","efd6698c15c218ddc89b6665a4334a77"],["/categories/Windows/index.html","188360d2d1fdd8b70ec4957e432166ab"],["/categories/git/index.html","01ad3c9c7175efa11ee285339e7c1bf0"],["/categories/hexo/Github/index.html","54939c5a59e9603ccbc314bf5bb1cca5"],["/categories/hexo/anzhiyu/index.html","9f3d7c4c731a208590d26a0fb917132e"],["/categories/hexo/index.html","55a3c7d7be58dc98a9edf6202b2401b2"],["/categories/index.html","1b1c74606afc2badfa56075de49488fd"],["/categories/python/OpenCV/index.html","70ec2ecebfe12c758f5bd6643a259bfb"],["/categories/python/SSH/index.html","5b48677517b26f789f37832ce415e5df"],["/categories/python/index.html","2b5256f944d277ee4d6fb7fd8aaa70a9"],["/categories/python/爬虫/index.html","3177a9d2673f0d17e5af6a3b47bc8a33"],["/categories/节日快乐/index.html","5dc96397a8f483cf0b3ae986f1c0c000"],["/chatbot/index.html","b98c1ecc70bfa00e931d34b0e0994237"],["/css/bounce.css","630b5b7029c645ec853d5beebc27434c"],["/css/custom.css","6a1471286c9192d063b58c3fad378396"],["/css/custom_new.css","17b80cdaffd276a08a4d61315563b7f1"],["/css/index.css","626417095c9cee6f3739ca56a968e04f"],["/css/loading-bar.css","f2bf69d997e61abe1aff03df2d0de760"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","a7b1452c2fc9fdf093af1140bdf932a5"],["/essay/index.html","c3158ff2de9c8e3f93a90599ff18d14e"],["/gallery/genshin/index.html","c3c74310d8c76aea55de7a145d711317"],["/gallery/index.html","62dd433d369e905fc2f419aa73408415"],["/gallery/wallpaper/index.html","c3d663eb25fea9b30f4579cc32a95cce"],["/img/4.png","bdc5684e722beee2dc4c0b6be4bbd6ac"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/404.svg","ae7a29a56855256caef2db1e23a10b38"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/favicon.svg","085e7487dd445df8a00fa8a8d96b2412"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/happy.svg","e81640aca52cea826abfdd16d200207e"],["/img/image.svg","afe89da27fff6d31211930f3c3b5250f"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/1.png","f24eb803425cc9db1a11da3bdab1815e"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/2.png","fb33085a7e283b7079abd4a1bb0b954a"],["/img/siteicon/3.png","9990d25e773080c8993d971b75f92226"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/working.svg","10016cee5a9bd2f71822dc00efc121f4"],["/index.html","095d03ec0746f9d59495749b50bf02f0"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/announce.js","982f42003e6e5974bcff73462224e8f9"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/runtime/runtime.js","0b387338d7ce929b0b5a0bc286ca0fc5"],["/js/runtime/runtime.min.js","3ed6d95be42b99da00441194b3b3a29d"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/link/index.html","ec7f0f59180c23947adb7f053c84c8e5"],["/music/index.html","6f14b94b08fe7051b977547d61c67a3c"],["/page/2/index.html","af5160c97fd8854d81be7f934e7db6d7"],["/posts/11d731c5.html","38b935bc02a2051eba6f1ddee292e7d3"],["/posts/16107.html","eda4c6fbc9d4195a7fd836011955ae0d"],["/posts/33a8c27d.html","6a7b82445ed5ead49d0100bb2ef6bf82"],["/posts/372ff7a.html","2545b18b6125731b71fc1c160e143d42"],["/posts/5715173d.html","d8a3ab047ec919bca861a9f7ffe7a2e1"],["/posts/5bed7dca.html","070d9f900a00c13be486e828cadef69c"],["/posts/7011a3b2.html","22e4e23eb0990fb1e887e38221b6ae45"],["/posts/798ab618.html","523c42ee7f73a85592c651c7b5652332"],["/posts/a6a24535.html","3d5651c2d6b08265dd66708ebee5466b"],["/posts/c0981437.html","481b9569f400b347f6528fc10b3ec1f3"],["/posts/c62233d7.html","6401c9ca9f6333534356bf002e4f3855"],["/posts/de7f0b92.html","52874249f0947c5ad8917625c9009679"],["/posts/e5a66c8.html","8c4bf37345e3adc257bdaa8b264a69a1"],["/posts/e8b64c0.html","05b9a8ebe41dc967e8e19e2d005921b5"],["/posts/fb2e31d6.html","ca31ca8c15ee522349a25e0b0d131e6e"],["/posts/fd917c31.html","be30a00146e3700f17fe82a8fda14b9e"],["/sw-register.js","524c9b771ca54e8f0bad28e92c3b0442"],["/tags/Leetcode/index.html","a49c4ed921750b1baa85368f5ce42920"],["/tags/OpenCV/index.html","096929821fa7be9a30ce30096b73a56e"],["/tags/Tag-Plugins/index.html","e1dde4c39e1293e27d19dbfc255798ca"],["/tags/Windows/index.html","569f1654d90b1802b20a669268725ff5"],["/tags/anzhiyu/index.html","ff243eb1114c798dabe8d6642d861a60"],["/tags/git/index.html","b27448a892e208c4177049ea0a7e31fa"],["/tags/hexo/index.html","4d64a2af80368f2cb558defd65fa57ee"],["/tags/index.html","3176e23812d2549e743c116fc163d177"],["/tags/python/index.html","ace74f955fcbd6904f6c1331cdffc71a"],["/tags/爬虫/index.html","0a4b5ed895f76f88ed2e878253ba4e7f"],["/tags/节日快乐/index.html","3682d341c2c0a05b1bef73490c5274b1"]];
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
