import{_ as s,c as n,o as a,a as l}from"./app.9f6fc7f4.js";const i=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5728\u5F00\u59CB\u4E4B\u524D...","slug":"\u5728\u5F00\u59CB\u4E4B\u524D"},{"level":2,"title":"PlanA - \u5168\u57DF\u5B89\u88C5","slug":"plana-\u5168\u57DF\u5B89\u88C5"},{"level":2,"title":"PlanB - \u81EA\u5B9A\u4E49\u5B89\u88C5","slug":"planb-\u81EA\u5B9A\u4E49\u5B89\u88C5"}],"relativePath":"start.md","lastUpdated":null}'),o={name:"start.md"},p=l(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="\u5728\u5F00\u59CB\u4E4B\u524D" tabindex="-1">\u5728\u5F00\u59CB\u4E4B\u524D... <a class="header-anchor" href="#\u5728\u5F00\u59CB\u4E4B\u524D" aria-hidden="true">#</a></h2><ol><li>ServiceWorker\u662F\u4E00\u4E2A\u6CE8\u518C\u5728\u6307\u5B9A\u6E90\u548C\u8DEF\u5F84\u4E0B\u7684\u4E8B\u4EF6\u9A71\u52A8worker\u3002\u800CClientWorker\u662F\u5229\u7528\u89C4\u5219\u5168\u5C40\u9A71\u52A8sw\u7684\u63D2\u4EF6\u3002</li><li>ClientWorker\u76EE\u524D\u53EA\u6DB5\u76D6\u4E86ServiceWorker\u7684 \u8DEF\u7531\u62E6\u622A\u3001\u8DEF\u7531\u52AB\u6301\u3001\u8BF7\u6C42/\u54CD\u5E94\uFF08\u5934\u3001\u72B6\u6001\uFF09\u4FEE\u6539\uFF0C\u672A\u6765\u5C06\u652F\u6301\u7F13\u5B58\u63A7\u5236\u3001\u8BF7\u6C42/\u54CD\u5E94\uFF08\u5185\u5BB9\uFF09\u4FEE\u6539\u3002</li><li>ClientWorker\u76EE\u524D\u4E0D\u517C\u5BB9\u539F\u6709\u7684ServiceWorker\uFF0C\u8BF7\u901A\u8FC7\u4FEE\u6539Scope\u7ED5\u5F00\u76F8\u4E92\u7684\u4F5C\u7528\u57DF\u3002</li><li><strong>ClientWorker\u9700\u8981\u5728<code>HTTPS</code>\u73AF\u5883\u4E0B\u5DE5\u4F5C\uFF0C<code>HTTP</code>\u5C06\u76F4\u63A5\u5B89\u88C5\u5931\u8D25</strong></li></ol><h2 id="plana-\u5168\u57DF\u5B89\u88C5" tabindex="-1">PlanA - \u5168\u57DF\u5B89\u88C5 <a class="header-anchor" href="#plana-\u5168\u57DF\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>\u8FDB\u5165<a href="https://github.com/ChenYFan/ClientWorker/releases" target="_blank" rel="noopener noreferrer">ClientWorker Github Release\u53D1\u5E03\u9875</a>\uFF0C\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u5185\u5BB9\u3002</li><li>\u89E3\u538B\uFF0C\u5C06<code>/dist/</code>\u6587\u4EF6\u5939\u4E2D<code>404.html</code>\u548C<code>cw.js</code>\u62F7\u51FA\uFF0C\u653E\u5728\u7F51\u9875\u670D\u52A1\u5668\u4E0B</li></ol><blockquote><p>\u4F60\u8981\u786E\u4FDD\u5F53\u524D\u8DEF\u5F84\u4E0B\u6CA1\u6709index.html\uFF0C\u5373\u7528\u6237\u65E0\u8BBA\u8BBF\u95EE\u54EA\u4E2A\u7F51\u9875\uFF0C\u7B2C\u4E00\u6B21\u8BF7\u6C42\u7684\u4E00\u5B9A\u662F404.html\u3002\u6211\u4EEC\u66F4\u5EFA\u8BAE\u5C06\u4E24\u4E2A\u6587\u4EF6\u5355\u72EC\u653E\u5728\u4E00\u4E2A\u6587\u4EF6\u5939</p></blockquote><ol start="3"><li>\u5728\u76F8\u540C\u8DEF\u5F84\u65B0\u5EFA\u4E00\u4E2A<code>config.yml</code>\uFF0C\u91CC\u9762\u5199\u4E0A:</li></ol><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ClientWorker</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u81EA\u5B9A\u4E49\u540D\u79F0</span></span>
<span class="line"><span style="color:#F07178;">catch_rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u8F6C\u6362\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">rule</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">_</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#ClientWorker\u8BED\u6CD5\u7CD6\uFF0C\u5339\u914D\u5F53\u524D\u57DF\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u57DF\u540D\u5E26\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">transform_rules</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">search</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\\#.+</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u5728\u53D1\u9001\u8BF7\u6C42\u65F6\u5339\u914D#\u540E\u5185\u5BB9\u5E76\u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">url</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u652F\u6301url status statusCode\uFF0C\u9ED8\u8BA4url</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">replace</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">search</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">_</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#ClientWorker\u8BED\u6CD5\u7CD6\uFF0C\u5339\u914D\u4E0Ecatchrule\u76F8\u540C\u7684\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u6B63\u5E38\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">fetch</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">engine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u5355\u8BF7\u6C42\u5F15\u64CE\uFF0C\u9ED8\u8BA4fetch</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">search</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">(^4|^5)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u5339\u914D4XX/5XX\u72B6\u6001\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u5728status\u4E2D\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u76F4\u63A5\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">return</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u8FD4\u56DE\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">The Full Installation is enabled!</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">status</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u542F\u52A8\u670D\u52A1\u5668\uFF0C\u7528<a href="https://caniuse.com/?search=ServiceWorker" target="_blank" rel="noopener noreferrer">\u5148\u8FDB\u7684\u6D4F\u89C8\u5668\u8BBF\u95EE</a>\uFF0C\u5982\u679C\u9875\u9762\u8DF3\u8F6C\u51E0\u4E0B\u4E4B\u540E\u663E\u793A<code>The Full Installation is enabled!</code>\uFF0C\u5219\u6210\u529F\u3002</li></ol><p>\u8FD9\u5C31\u7ED3\u675F\u4E86\uFF1F\u662F\u7684\uFF01\u81F3\u5C11\u5B89\u88C5\u8FC7\u7A0B\u662F\u7ED3\u675F\u4E86\uFF0C\u5168\u57DF\u5B89\u88C5\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u8BA9ClientWorker\u6258\u7BA1\u6574\u4E2A\u57DF\u540D\u4E0B\u7684\u6240\u6709\u8BF7\u6C42\uFF0C\u56E0\u6B64\u6211\u4EEC\u901A\u5E38\u5EFA\u8BAE\u5728\u5168\u57DF\u6258\u7BA1\u4E0B\u53EA\u8981\u5B58\u653E\u4E09\u4E2A\u6587\u4EF6<code>cw.js</code>\u3001<code>404.html</code>\u3001<code>config.yml</code>\u5373\u53EF\u3002</p><p>\u63A5\u4E0B\u6765\u4F60\u8981<a href="/rule/">\u7F16\u5199\u89C4\u5219</a>\uFF0C\u8BA9ClientWorker\u6B63\u786E\u62E6\u622A\u4F60\u7684\u8BF7\u6C42\uFF0C\u5E76\u4E14\u8F6C\u6362\u6210\u4F60\u60F3\u8981\u7684\u54CD\u5E94\u3002</p><h2 id="planb-\u81EA\u5B9A\u4E49\u5B89\u88C5" tabindex="-1">PlanB - \u81EA\u5B9A\u4E49\u5B89\u88C5 <a class="header-anchor" href="#planb-\u81EA\u5B9A\u4E49\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>\u8FDB\u5165<a href="https://github.com/ChenYFan/ClientWorker/releases" target="_blank" rel="noopener noreferrer">ClientWorker Github Release\u53D1\u5E03\u9875</a>\uFF0C\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u5185\u5BB9\u3002</li><li>\u89E3\u538B\uFF0C\u5C06<code>/dist/</code>\u6587\u4EF6\u5939\u4E2D<code>cw.js</code>\u62F7\u51FA\uFF0C\u653E\u5728\u7F51\u9875\u670D\u52A1\u5668\u4E0B</li><li>\u4FEE\u6539\u4F60\u7F51\u9875\u7684\u6A21\u677F\uFF0C\u6DFB\u52A0\u4E00\u6BB5html</li></ol><blockquote><p>\u7528\u6237\u6BCF\u6B21\u8BBF\u95EE\u65F6\u90FD\u5E94\u8BE5\u80FD\u8FD0\u884C\u63A5\u4E0B\u6765\u7684\u811A\u672C\uFF0C\u5982\u679C\u4F60\u4F7F\u7528hexo\u7B49\u5176\u4ED6\u535A\u5BA2\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u5728body\u6216footer\u6A21\u677F\u4E2D\u6DFB\u52A0\u8FD9\u4E00\u6BB5\u3002</p></blockquote><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">load</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ClientWorkerInstall</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ClientWorkerConfig</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/cw-cgi/api?type=config</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">text</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">===</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ok</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ClientWorkerConfig</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">ClientWorkerConfig Error:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">serviceWorker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">register</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">/cw.js?time=</span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">async</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reg</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ClientWorkerConfig</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ClientWorker Installed,Need to reload page to Config!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ClientWorkerInstall</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">search</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">?time=</span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//#1</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">ClientWorker Install Failed:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u5728\u7F51\u7AD9<code>/</code>\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A<code>config.yml</code>\uFF0C\u91CC\u9762\u5199\u4E0A:</li></ol><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ClientWorker</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u81EA\u5B9A\u4E49\u540D\u79F0</span></span>
<span class="line"><span style="color:#F07178;">catch_rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u8F6C\u6362\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">rule</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">_</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#ClientWorker\u8BED\u6CD5\u7CD6\uFF0C\u5339\u914D\u5F53\u524D\u57DF\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u57DF\u540D\u5E26\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">transform_rules</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">search</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\\#.+</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u5728\u53D1\u9001\u8BF7\u6C42\u65F6\u5339\u914D#\u540E\u5185\u5BB9\u5E76\u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">url</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u652F\u6301url status statusCode\uFF0C\u9ED8\u8BA4url</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">replace</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">search</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">_</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#ClientWorker\u8BED\u6CD5\u7CD6\uFF0C\u5339\u914D\u4E0Ecatchrule\u76F8\u540C\u7684\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u6B63\u5E38\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">fetch</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">engine</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u5355\u8BF7\u6C42\u5F15\u64CE\uFF0C\u9ED8\u8BA4fetch</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">search</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">(^4|^5)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u5339\u914D4XX/5XX\u72B6\u6001\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u5728status\u4E2D\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u76F4\u63A5\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">return</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u8FD4\u56DE\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">The GateWay is down!This Page is provided by ClientWorker!</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">status</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u542F\u52A8\u670D\u52A1\u5668\uFF0C\u7528<a href="https://caniuse.com/?search=ServiceWorker" target="_blank" rel="noopener noreferrer">\u5148\u8FDB\u7684\u6D4F\u89C8\u5668\u8BBF\u95EE</a>\uFF0C\u5982\u679C\u9875\u9762\u8DF3\u8F6C\u51E0\u4E0B\u4E4B\u540E\u663E\u793A\u4F60\u539F\u672C\u7684\u7F51\u9875\uFF0C\u5B89\u88C5\u5C31\u7B97\u6210\u529F\u4E86\u3002\u5982\u679C\u8FD4\u56DE<code>The GateWay is down!This Page is provided by ClientWorker!</code>\uFF0C\u4F60\u9700\u8981\u68C0\u67E5\u539F\u670D\u52A1\u5668\u6709\u65E0\u51FA\u73B0\u6545\u969C\u3002</li></ol>`,18),e=[p];function t(c,r,y,D,F,C){return a(),n("div",null,e)}var d=s(o,[["render",t]]);export{i as __pageData,d as default};
