/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ad6229cd77b89fdfa9392502af30085c"],["/about/index.html","5bb0a027322f7ee5d5d144109c55edb0"],["/anzhiyu/random.js","7014e3f1dd89387bd04f5b4682be3da6"],["/archives/2023/10/index.html","c4f4984f107aad03243365c215b0e225"],["/archives/2023/11/index.html","a73cc76ef5241211a150d9ffb79cd71d"],["/archives/2023/12/index.html","786e9ebcaae97070fdcdbd5f1b33f89b"],["/archives/2023/index.html","646ec669dfff1ec04a1baefb3c26abbe"],["/archives/2023/page/2/index.html","625ea8b178707eb72bd4850558e0bd5c"],["/archives/2024/03/index.html","3d97d05208f327dc9543e902516670d2"],["/archives/2024/06/index.html","8d60bd56316327a0453453e0c5964d0a"],["/archives/2024/07/index.html","efe737a172113beb5fd72ec3730927b9"],["/archives/2024/index.html","0c7e6add2c99f00d912c4a349e008568"],["/archives/index.html","263542c4c28d5be2feb7ef5a065193b0"],["/archives/page/2/index.html","6b365e6d8dfbad435058587d190c408b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/bangumis/index.html","d010c9af87be9ede5a29b8d208b16727"],["/categories/Leetcode/index.html","6fdc9c00c65d6a10568be2c8408bd083"],["/categories/Windows/index.html","879e377102b0d04d044b58e3ddb77be1"],["/categories/git/index.html","07150d47a7c2c1fbcdbd01e6dbe26638"],["/categories/hexo/Github/index.html","08283a08141321e586c4cf3ff0eb84aa"],["/categories/hexo/anzhiyu/index.html","a2f36968a7ea7e1f5ead4a1558b8882a"],["/categories/hexo/index.html","998f2a8bcfe7209bf11e1823e5c0fff2"],["/categories/index.html","197e51584683aa49bb9743fe54416f69"],["/categories/python/OpenCV/index.html","55093cd7c53c0356f9e166b1491aed07"],["/categories/python/SSH/index.html","9341a3198685d7e6f766e550d429fbed"],["/categories/python/index.html","cde037bf5221abcd0344f8e553184e87"],["/categories/python/爬虫/index.html","dc79bb38af94856fd930f32c75e4d1ae"],["/categories/节日快乐/index.html","4dc4dee880894e3ebe8aef6fa2097eb4"],["/chatbot/index.html","7e7bdaf2b2297d0efd2817fa73c2e6d1"],["/css/bounce.css","630b5b7029c645ec853d5beebc27434c"],["/css/custom.css","6a1471286c9192d063b58c3fad378396"],["/css/custom_new.css","17b80cdaffd276a08a4d61315563b7f1"],["/css/index.css","626417095c9cee6f3739ca56a968e04f"],["/css/loading-bar.css","f2bf69d997e61abe1aff03df2d0de760"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/equipment/index.html","dfa0cad1f079f2d3f9ec3214e920adf7"],["/essay/index.html","11b964ad5cbc906eb5d84f93d788bd9e"],["/gallery/genshin/index.html","ab6d43575d91e15f3e82487896c131d4"],["/gallery/index.html","e6a3e4038c4a5a2896371acd9715d5f9"],["/gallery/wallpaper/index.html","eb68b159dbc3eb84b202ce0a90aa4320"],["/img/4.png","bdc5684e722beee2dc4c0b6be4bbd6ac"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/404.svg","ae7a29a56855256caef2db1e23a10b38"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/favicon.svg","085e7487dd445df8a00fa8a8d96b2412"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/happy.svg","e81640aca52cea826abfdd16d200207e"],["/img/image.svg","afe89da27fff6d31211930f3c3b5250f"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/1.png","f24eb803425cc9db1a11da3bdab1815e"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/2.png","fb33085a7e283b7079abd4a1bb0b954a"],["/img/siteicon/3.png","9990d25e773080c8993d971b75f92226"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/working.svg","10016cee5a9bd2f71822dc00efc121f4"],["/index.html","0d7436dc609a9a6e6f95d724b4cd0e1c"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/announce.js","982f42003e6e5974bcff73462224e8f9"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/runtime/runtime.js","0b387338d7ce929b0b5a0bc286ca0fc5"],["/js/runtime/runtime.min.js","3ed6d95be42b99da00441194b3b3a29d"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/link/index.html","05916724e7227fb799a4f8f169495d83"],["/music/index.html","e751419d732c0a6a625113c5a28c248a"],["/page/2/index.html","2f0a0ba1b147f23278e54eb57ad1d049"],["/posts/11d731c5.html","5834ff972b7e698100c8134bed7a7476"],["/posts/16107.html","92b109499aa186da51366e38db10ae67"],["/posts/33a8c27d.html","1d897ea1a382290449d6beb62a17a1ef"],["/posts/372ff7a.html","c0d3195c2c65569f58b3d5192267b4dc"],["/posts/5715173d.html","52a8196a112be772147c8a9e19b2547c"],["/posts/5bed7dca.html","a705e74a104a13d6f6e052d09ff414bd"],["/posts/7011a3b2.html","75a5f44337198c3f636661e292310dc5"],["/posts/798ab618.html","f11912bd2927e2f6edc03c2b17d4eefc"],["/posts/a6a24535.html","47780b896bc99b94ee9da016f612512d"],["/posts/c0981437.html","96e25fc43df16fa2ff0f67e5d7ad8422"],["/posts/c62233d7.html","e6ea32004bdb385c3adc7bc393576e26"],["/posts/de7f0b92.html","4fc4491bf4e983acaba4119b1b05d187"],["/posts/e5a66c8.html","5ec3d83d5f41875b4d7a37508f1a4328"],["/posts/e8b64c0.html","92bf37378a6b9ef8517a18357f83e119"],["/posts/fb2e31d6.html","57851fc8f2ffaa33ae111258a0cb2c67"],["/posts/fd917c31.html","2ddf57eaf2fd82db334ac95759274064"],["/sw-register.js","ea58fcde4e22138b09b94aa9ba21df20"],["/tags/Leetcode/index.html","ff60647543fde029f9a6395739bed226"],["/tags/OpenCV/index.html","d23c21b69af87a7bf114a54a635d24b1"],["/tags/Tag-Plugins/index.html","f21e03c70ea8ba8d24f5cd73eca7d747"],["/tags/Windows/index.html","3e07ecdf985651de859974283117460c"],["/tags/anzhiyu/index.html","6990517be5f94097d6cdae563827252b"],["/tags/git/index.html","c8b9c4e0cbe76bf718f76aa8b5ea5e6b"],["/tags/hexo/index.html","4719b5cd9d198037755122580bc146ed"],["/tags/index.html","3f461593d2c83a278a22a9ec8264a8d3"],["/tags/python/index.html","f5b0cbafd78132377cb048ad22dbedbf"],["/tags/爬虫/index.html","01c49f930a585431c90da51a256523aa"],["/tags/节日快乐/index.html","394dd9248cb62f8f7cce11807ef31348"]];
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
