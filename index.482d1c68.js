// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e7zDJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5cb08447482d1c68";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"j6eqU":[function(require,module,exports) {
var _scroll = require("@modules/utils/scroll");
var _animation = require("@modules/animation");
var _mobileMenu = require("@modules/mobile-menu");
var _openQuestions = require("@modules/open-questions");
var _quiz = require("@modules/quiz");

},{"@modules/utils/scroll":"iNonJ","@modules/animation":"6PwFu","@modules/mobile-menu":"2YyAF","@modules/open-questions":"3QfXd","@modules/quiz":"aobIp"}],"iNonJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _smoothscrollPolyfill = require("smoothscroll-polyfill");
var _smoothscrollPolyfillDefault = parcelHelpers.interopDefault(_smoothscrollPolyfill);
(0, _smoothscrollPolyfillDefault.default).polyfill();
const arrowDown = document.querySelectorAll("[data-section]");
arrowDown.forEach((arrow)=>{
    const section = document.querySelector(`.${arrow.dataset.section}`);
    arrow.addEventListener("click", (event)=>{
        event.preventDefault();
        section?.scrollIntoView({
            block: window.innerWidth < 1000 ? "start" : "center",
            behavior: "smooth"
        });
    });
});

},{"smoothscroll-polyfill":"1W2LT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1W2LT":[function(require,module,exports) {
/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */ (function() {
    "use strict";
    // polyfill
    function polyfill() {
        // aliases
        var w = window;
        var d = document;
        // return if scroll behavior is supported and polyfill is not forced
        if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) return;
        // globals
        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        // object gathering original scroll methods
        var original = {
            scroll: w.scroll || w.scrollTo,
            scrollBy: w.scrollBy,
            elementScroll: Element.prototype.scroll || scrollElement,
            scrollIntoView: Element.prototype.scrollIntoView
        };
        // define timing method
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */ function isMicrosoftBrowser(userAgent) {
            var userAgentPatterns = [
                "MSIE ",
                "Trident/",
                "Edge/"
            ];
            return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }
        /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */ var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function scrollElement(x, y) {
            this.scrollLeft = x;
            this.scrollTop = y;
        }
        /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */ function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */ function shouldBailOut(firstArg) {
            if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === undefined || firstArg.behavior === "auto" || firstArg.behavior === "instant") // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
            if (typeof firstArg === "object" && firstArg.behavior === "smooth") // first argument is an object and behavior is smooth
            return false;
            // throw error when behavior is not supported
            throw new TypeError("behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior.");
        }
        /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function hasScrollableSpace(el, axis) {
            if (axis === "Y") return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
            if (axis === "X") return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
        /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function canOverflow(el, axis) {
            var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
            return overflowValue === "auto" || overflowValue === "scroll";
        }
        /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function isScrollable(el) {
            var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
            var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
            return isScrollableY || isScrollableX;
        }
        /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */ function findScrollableParent(el) {
            while(el !== d.body && isScrollable(el) === false)el = el.parentNode || el.host;
            return el;
        }
        /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */ function step(context) {
            var time = now();
            var value;
            var currentX;
            var currentY;
            var elapsed = (time - context.startTime) / SCROLL_TIME;
            // avoid elapsed times higher than one
            elapsed = elapsed > 1 ? 1 : elapsed;
            // apply easing to elapsed time
            value = ease(elapsed);
            currentX = context.startX + (context.x - context.startX) * value;
            currentY = context.startY + (context.y - context.startY) * value;
            context.method.call(context.scrollable, currentX, currentY);
            // scroll more if we have not reached our destination
            if (currentX !== context.x || currentY !== context.y) w.requestAnimationFrame(step.bind(w, context));
        }
        /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function smoothScroll(el, x, y) {
            var scrollable;
            var startX;
            var startY;
            var method;
            var startTime = now();
            // define scroll context
            if (el === d.body) {
                scrollable = w;
                startX = w.scrollX || w.pageXOffset;
                startY = w.scrollY || w.pageYOffset;
                method = original.scroll;
            } else {
                scrollable = el;
                startX = el.scrollLeft;
                startY = el.scrollTop;
                method = scrollElement;
            }
            // scroll looping over a frame
            step({
                scrollable: scrollable,
                method: method,
                startTime: startTime,
                startX: startX,
                startY: startY,
                x: x,
                y: y
            });
        }
        // ORIGINAL METHODS OVERRIDES
        // w.scroll and w.scrollTo
        w.scroll = w.scrollTo = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
                arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
        };
        // w.scrollBy
        w.scrollBy = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0])) {
                original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        };
        // Element.prototype.scroll and Element.prototype.scrollTo
        Element.prototype.scroll = Element.prototype.scrollTo = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                // if one number is passed, throw error to match Firefox implementation
                if (typeof arguments[0] === "number" && arguments[1] === undefined) throw new SyntaxError("Value could not be converted");
                original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
                arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
                arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
                return;
            }
            var left = arguments[0].left;
            var top = arguments[0].top;
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(this, this, typeof left === "undefined" ? this.scrollLeft : ~~left, typeof top === "undefined" ? this.scrollTop : ~~top);
        };
        // Element.prototype.scrollBy
        Element.prototype.scrollBy = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                return;
            }
            this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior
            });
        };
        // Element.prototype.scrollIntoView
        Element.prototype.scrollIntoView = function() {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            var scrollableParent = findScrollableParent(this);
            var parentRects = scrollableParent.getBoundingClientRect();
            var clientRects = this.getBoundingClientRect();
            if (scrollableParent !== d.body) {
                // reveal element inside parent
                smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
                // reveal parent in viewport unless is fixed
                if (w.getComputedStyle(scrollableParent).position !== "fixed") w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: "smooth"
                });
            } else // reveal element in viewport
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: "smooth"
            });
        };
    }
    // commonjs
    module.exports = {
        polyfill: polyfill
    };
})();

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6PwFu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _animejs = require("animejs");
var _animejsDefault = parcelHelpers.interopDefault(_animejs);
const promoTimeline = (0, _animejsDefault.default).timeline({
    easing: "easeInOutSine",
    duration: 1900,
    autoplay: false
});
let isDelay = false;
setTimeout(()=>{
    isDelay = true;
}, 300);
promoTimeline.add({
    targets: ".layer:nth-child(2)",
    opacity: 1
}).add({
    targets: ".layer:nth-child(3)",
    opacity: 1
}, "-=1100").add({
    targets: ".layer:nth-child(4)",
    opacity: 1
}, "-=1100");
window.addEventListener("load", ()=>{
    if (isDelay) promoTimeline.play();
    else setTimeout(()=>{
        promoTimeline.play();
    }, 300);
});

},{"animejs":"jokr5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jokr5":[function(require,module,exports) {
/*
 * anime.js v3.2.2
 * (c) 2023 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */ // Defaults
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaultInstanceSettings = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: true,
    timelineOffset: 0
};
var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0
};
var validTransforms = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d"
];
// Caching
var cache = {
    CSS: {},
    springs: {}
};
// Utils
function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
function stringContains(str, text) {
    return str.indexOf(text) > -1;
}
function applyArguments(func, args) {
    return func.apply(null, args);
}
var is = {
    arr: function(a) {
        return Array.isArray(a);
    },
    obj: function(a) {
        return stringContains(Object.prototype.toString.call(a), "Object");
    },
    pth: function(a) {
        return is.obj(a) && a.hasOwnProperty("totalLength");
    },
    svg: function(a) {
        return a instanceof SVGElement;
    },
    inp: function(a) {
        return a instanceof HTMLInputElement;
    },
    dom: function(a) {
        return a.nodeType || is.svg(a);
    },
    str: function(a) {
        return typeof a === "string";
    },
    fnc: function(a) {
        return typeof a === "function";
    },
    und: function(a) {
        return typeof a === "undefined";
    },
    nil: function(a) {
        return is.und(a) || a === null;
    },
    hex: function(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function(a) {
        return /^rgb/.test(a);
    },
    hsl: function(a) {
        return /^hsl/.test(a);
    },
    col: function(a) {
        return is.hex(a) || is.rgb(a) || is.hsl(a);
    },
    key: function(a) {
        return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== "targets" && a !== "keyframes";
    }
};
// Easings
function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(",").map(function(p) {
        return parseFloat(p);
    }) : [];
}
// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js
function spring(string, duration) {
    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
    var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a = 1;
    var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
    function solver(t) {
        var progress = duration ? duration * t / 1000 : t;
        if (zeta < 1) progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
        else progress = (a + b * progress) * Math.exp(-progress * w0);
        if (t === 0 || t === 1) return t;
        return 1 - progress;
    }
    function getDuration() {
        var cached = cache.springs[string];
        if (cached) return cached;
        var frame = 1 / 6;
        var elapsed = 0;
        var rest = 0;
        while(true){
            elapsed += frame;
            if (solver(elapsed) === 1) {
                rest++;
                if (rest >= 16) break;
            } else rest = 0;
        }
        var duration = elapsed * frame * 1000;
        cache.springs[string] = duration;
        return duration;
    }
    return duration ? solver : getDuration;
}
// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
function steps(steps) {
    if (steps === void 0) steps = 10;
    return function(t) {
        return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
    };
}
// BezierEasing https://github.com/gre/bezier-easing
var bezier = function() {
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    function A(aA1, aA2) {
        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
    function B(aA1, aA2) {
        return 3.0 * aA2 - 6.0 * aA1;
    }
    function C(aA1) {
        return 3.0 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) aB = currentT;
            else aA = currentT;
        }while (Math.abs(currentX) > 0.0000001 && ++i < 10);
        return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for(var i = 0; i < 4; ++i){
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }
    function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
        var sampleValues = new Float32Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        function getTForX(aX) {
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
            --currentSample;
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= 0.001) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            else if (initialSlope === 0.0) return guessForT;
            else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
        return function(x) {
            if (mX1 === mY1 && mX2 === mY2) return x;
            if (x === 0 || x === 1) return x;
            return calcBezier(getTForX(x), mY1, mY2);
        };
    }
    return bezier;
}();
var penner = function() {
    // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
    var eases = {
        linear: function() {
            return function(t) {
                return t;
            };
        }
    };
    var functionEasings = {
        Sine: function() {
            return function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            };
        },
        Expo: function() {
            return function(t) {
                return t ? Math.pow(2, 10 * t - 10) : 0;
            };
        },
        Circ: function() {
            return function(t) {
                return 1 - Math.sqrt(1 - t * t);
            };
        },
        Back: function() {
            return function(t) {
                return t * t * (3 * t - 2);
            };
        },
        Bounce: function() {
            return function(t) {
                var pow2, b = 4;
                while(t < ((pow2 = Math.pow(2, --b)) - 1) / 11);
                return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
            };
        },
        Elastic: function(amplitude, period) {
            if (amplitude === void 0) amplitude = 1;
            if (period === void 0) period = .5;
            var a = minMax(amplitude, 1, 10);
            var p = minMax(period, .1, 2);
            return function(t) {
                return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
            };
        }
    };
    var baseEasings = [
        "Quad",
        "Cubic",
        "Quart",
        "Quint"
    ];
    baseEasings.forEach(function(name, i) {
        functionEasings[name] = function() {
            return function(t) {
                return Math.pow(t, i + 2);
            };
        };
    });
    Object.keys(functionEasings).forEach(function(name) {
        var easeIn = functionEasings[name];
        eases["easeIn" + name] = easeIn;
        eases["easeOut" + name] = function(a, b) {
            return function(t) {
                return 1 - easeIn(a, b)(1 - t);
            };
        };
        eases["easeInOut" + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
            };
        };
        eases["easeOutIn" + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
            };
        };
    });
    return eases;
}();
function parseEasings(easing, duration) {
    if (is.fnc(easing)) return easing;
    var name = easing.split("(")[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
    switch(name){
        case "spring":
            return spring(easing, duration);
        case "cubicBezier":
            return applyArguments(bezier, args);
        case "steps":
            return applyArguments(steps, args);
        default:
            return applyArguments(ease, args);
    }
}
// Strings
function selectString(str) {
    try {
        var nodes = document.querySelectorAll(str);
        return nodes;
    } catch (e) {
        return;
    }
}
// Arrays
function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
    for(var i = 0; i < len; i++)if (i in arr) {
        var val = arr[i];
        if (callback.call(thisArg, val, i, arr)) result.push(val);
    }
    return result;
}
function flattenArray(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
}
function toArray(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [
        o
    ];
}
function arrayContains(arr, val) {
    return arr.some(function(a) {
        return a === val;
    });
}
// Objects
function cloneObject(o) {
    var clone = {};
    for(var p in o)clone[p] = o[p];
    return clone;
}
function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o1)o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
    return o;
}
function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o2)o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    return o;
}
// Colors
function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return "rgba(" + r + "," + g + "," + b + ",1)";
}
function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h = parseInt(hsl[1], 10) / 360;
    var s = parseInt(hsl[2], 10) / 100;
    var l = parseInt(hsl[3], 10) / 100;
    var a = hsl[4] || 1;
    function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 0.5) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    var r, g, b;
    if (s == 0) r = g = b = l;
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}
function colorToRgb(val) {
    if (is.rgb(val)) return rgbToRgba(val);
    if (is.hex(val)) return hexToRgba(val);
    if (is.hsl(val)) return hslToRgba(val);
}
// Units
function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) return split[1];
}
function getTransformUnit(propName) {
    if (stringContains(propName, "translate") || propName === "perspective") return "px";
    if (stringContains(propName, "rotate") || stringContains(propName, "skew")) return "deg";
}
// Values
function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) return val;
    return val(animatable.target, animatable.id, animatable.total);
}
function getAttribute(el, prop) {
    return el.getAttribute(prop);
}
function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
    if (arrayContains([
        unit,
        "deg",
        "rad",
        "turn"
    ], valueUnit)) return value;
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) return cached;
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = "absolute";
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
}
function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
        var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
        return unit ? convertPxToUnit(el, value, unit) : value;
    }
}
function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) return "attribute";
    if (is.dom(el) && arrayContains(validTransforms, prop)) return "transform";
    if (is.dom(el) && prop !== "transform" && getCSSValue(el, prop)) return "css";
    if (el[prop] != null) return "object";
}
function getElementTransforms(el) {
    if (!is.dom(el)) return;
    var str = el.style.transform || "";
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m;
    while(m = reg.exec(str))transforms.set(m[1], m[2]);
    return transforms;
}
function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
        animatable.transforms.list.set(propName, value);
        animatable.transforms["last"] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
}
function getOriginalTargetValue(target, propName, unit, animatable) {
    switch(getAnimationType(target, propName)){
        case "transform":
            return getTransformValue(target, propName, animatable, unit);
        case "css":
            return getCSSValue(target, propName, unit);
        case "attribute":
            return getAttribute(target, propName);
        default:
            return target[propName] || 0;
    }
}
function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) return to;
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ""));
    switch(operator[0][0]){
        case "+":
            return x + y + u;
        case "-":
            return x - y + u;
        case "*":
            return x * y + u;
    }
}
function validateValue(val, unit) {
    if (is.col(val)) return colorToRgb(val);
    if (/\s/g.test(val)) return val;
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    if (unit) return unitLess + unit;
    return unitLess;
}
// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744
function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, "r");
}
function getRectLength(el) {
    return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
}
function getLineLength(el) {
    return getDistance({
        x: getAttribute(el, "x1"),
        y: getAttribute(el, "y1")
    }, {
        x: getAttribute(el, "x2"),
        y: getAttribute(el, "y2")
    });
}
function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
    for(var i = 0; i < points.numberOfItems; i++){
        var currentPos = points.getItem(i);
        if (i > 0) totalLength += getDistance(previousPos, currentPos);
        previousPos = currentPos;
    }
    return totalLength;
}
function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}
// Path animation
function getTotalLength(el) {
    if (el.getTotalLength) return el.getTotalLength();
    switch(el.tagName.toLowerCase()){
        case "circle":
            return getCircleLength(el);
        case "rect":
            return getRectLength(el);
        case "line":
            return getLineLength(el);
        case "polyline":
            return getPolylineLength(el);
        case "polygon":
            return getPolygonLength(el);
    }
}
function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute("stroke-dasharray", pathLength);
    return pathLength;
}
// Motion path
function getParentSvgEl(el) {
    var parentEl = el.parentNode;
    while(is.svg(parentEl)){
        if (!is.svg(parentEl.parentNode)) break;
        parentEl = parentEl.parentNode;
    }
    return parentEl;
}
function getParentSvg(pathEl, svgData) {
    var svg = svgData || {};
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [
        0,
        0,
        width,
        height
    ]);
    return {
        el: parentSvgEl,
        viewBox: viewBox,
        x: viewBox[0] / 1,
        y: viewBox[1] / 1,
        w: width,
        h: height,
        vW: viewBox[2],
        vH: viewBox[3]
    };
}
function getPath(path, percent) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p = percent || 100;
    return function(property) {
        return {
            property: property,
            el: pathEl,
            svg: getParentSvg(pathEl),
            totalLength: getTotalLength(pathEl) * (p / 100)
        };
    };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
    function point(offset) {
        if (offset === void 0) offset = 0;
        var l = progress + offset >= 1 ? progress + offset : 0;
        return path.el.getPointAtLength(l);
    }
    var svg = getParentSvg(path.el, path.svg);
    var p = point();
    var p0 = point(-1);
    var p1 = point(1);
    var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
    var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
    switch(path.property){
        case "x":
            return (p.x - svg.x) * scaleX;
        case "y":
            return (p.y - svg.y) * scaleY;
        case "angle":
            return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
}
// Decompose value
function decomposeValue(val, unit) {
    // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
    // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
    return {
        original: value,
        numbers: value.match(rgx) ? value.match(rgx).map(Number) : [
            0
        ],
        strings: is.str(val) || unit ? value.split(rgx) : []
    };
}
// Animatables
function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return filterArray(targetsArray, function(item, pos, self) {
        return self.indexOf(item) === pos;
    });
}
function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function(t, i) {
        return {
            target: t,
            id: i,
            total: parsed.length,
            transforms: {
                list: getElementTransforms(t)
            }
        };
    });
}
// Properties
function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    // Override duration if easing is a spring
    if (/^spring/.test(settings.easing)) settings.duration = spring(settings.easing);
    if (is.arr(prop)) {
        var l = prop.length;
        var isFromTo = l === 2 && !is.obj(prop[0]);
        if (!isFromTo) // Duration divided by the number of tweens
        {
            if (!is.fnc(tweenSettings.duration)) settings.duration = tweenSettings.duration / l;
        } else // Transform [from, to] values shorthand to a valid tween value
        prop = {
            value: prop
        };
    }
    var propArray = is.arr(prop) ? prop : [
        prop
    ];
    return propArray.map(function(v, i) {
        var obj = is.obj(v) && !is.pth(v) ? v : {
            value: v
        };
        // Default delay value should only be applied to the first tween
        if (is.und(obj.delay)) obj.delay = !i ? tweenSettings.delay : 0;
        // Default endDelay value should only be applied to the last tween
        if (is.und(obj.endDelay)) obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
        return obj;
    }).map(function(k) {
        return mergeObjects(k, settings);
    });
}
function flattenKeyframes(keyframes) {
    var propertyNames = filterArray(flattenArray(keyframes.map(function(key) {
        return Object.keys(key);
    })), function(p) {
        return is.key(p);
    }).reduce(function(a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
    var properties = {};
    var loop = function(i) {
        var propName = propertyNames[i];
        properties[propName] = keyframes.map(function(key) {
            var newKey = {};
            for(var p in key){
                if (is.key(p)) {
                    if (p == propName) newKey.value = key[p];
                } else newKey[p] = key[p];
            }
            return newKey;
        });
    };
    for(var i = 0; i < propertyNames.length; i++)loop(i);
    return properties;
}
function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes = params.keyframes;
    if (keyframes) params = mergeObjects(flattenKeyframes(keyframes), params);
    for(var p in params)if (is.key(p)) properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
    });
    return properties;
}
// Tweens
function normalizeTweenValues(tween, animatable) {
    var t = {};
    for(var p in tween){
        var value = getFunctionValue(tween[p], animatable);
        if (is.arr(value)) {
            value = value.map(function(v) {
                return getFunctionValue(v, animatable);
            });
            if (value.length === 1) value = value[0];
        }
        t[p] = value;
    }
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
}
function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function(t) {
        var tween = normalizeTweenValues(t, animatable);
        var tweenValue = tween.value;
        var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
        var toUnit = getUnit(to);
        var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
        var previousValue = previousTween ? previousTween.to.original : originalValue;
        var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
        var fromUnit = getUnit(from) || getUnit(originalValue);
        var unit = toUnit || fromUnit;
        if (is.und(to)) to = previousValue;
        tween.from = decomposeValue(from, unit);
        tween.to = decomposeValue(getRelativeValue(to, from), unit);
        tween.start = previousTween ? previousTween.end : 0;
        tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
        tween.easing = parseEasings(tween.easing, tween.duration);
        tween.isPath = is.pth(tweenValue);
        tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
        tween.isColor = is.col(tween.from.original);
        if (tween.isColor) tween.round = 1;
        previousTween = tween;
        return tween;
    });
}
// Tween progress
var setProgressValue = {
    css: function(t, p, v) {
        return t.style[p] = v;
    },
    attribute: function(t, p, v) {
        return t.setAttribute(p, v);
    },
    object: function(t, p, v) {
        return t[p] = v;
    },
    transform: function(t, p, v, transforms, manual) {
        transforms.list.set(p, v);
        if (p === transforms.last || manual) {
            var str = "";
            transforms.list.forEach(function(value, prop) {
                str += prop + "(" + value + ") ";
            });
            t.style.transform = str;
        }
    }
};
// Set Value helper
function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function(animatable) {
        for(var property in properties){
            var value = getFunctionValue(properties[property], animatable);
            var target = animatable.target;
            var valueUnit = getUnit(value);
            var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
            var unit = valueUnit || getUnit(originalValue);
            var to = getRelativeValue(validateValue(value, unit), originalValue);
            var animType = getAnimationType(target, property);
            setProgressValue[animType](target, property, to, animatable.transforms, true);
        }
    });
}
// Animations
function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
        var tweens = normalizeTweens(prop, animatable);
        var lastTween = tweens[tweens.length - 1];
        return {
            type: animType,
            property: prop.name,
            animatable: animatable,
            tweens: tweens,
            duration: lastTween.end,
            delay: tweens[0].delay,
            endDelay: lastTween.endDelay
        };
    }
}
function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function(animatable) {
        return properties.map(function(prop) {
            return createAnimation(animatable, prop);
        });
    })), function(a) {
        return !is.und(a);
    });
}
// Create Instance
function getInstanceTimings(animations, tweenSettings) {
    var animLength = animations.length;
    var getTlOffset = function(anim) {
        return anim.timelineOffset ? anim.timelineOffset : 0;
    };
    var timings = {};
    timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration;
    })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.delay;
    })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration - anim.endDelay;
    })) : tweenSettings.endDelay;
    return timings;
}
var instanceID = 0;
function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations, tweenSettings);
    var id = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
        id: id,
        children: [],
        animatables: animatables,
        animations: animations,
        duration: timings.duration,
        delay: timings.delay,
        endDelay: timings.endDelay
    });
}
// Core
var activeInstances = [];
var engine = function() {
    var raf;
    function play() {
        if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) raf = requestAnimationFrame(step);
    }
    function step(t) {
        // memo on algorithm issue:
        // dangerous iteration over mutable `activeInstances`
        // (that collection may be updated from within callbacks of `tick`-ed animation instances)
        var activeInstancesLength = activeInstances.length;
        var i = 0;
        while(i < activeInstancesLength){
            var activeInstance = activeInstances[i];
            if (!activeInstance.paused) {
                activeInstance.tick(t);
                i++;
            } else {
                activeInstances.splice(i, 1);
                activeInstancesLength--;
            }
        }
        raf = i > 0 ? requestAnimationFrame(step) : undefined;
    }
    function handleVisibilityChange() {
        if (!anime.suspendWhenDocumentHidden) return;
        if (isDocumentHidden()) // suspend ticks
        raf = cancelAnimationFrame(raf);
        else {
            // first adjust animations to consider the time that ticks were suspended
            activeInstances.forEach(function(instance) {
                return instance._onDocumentVisibility();
            });
            engine();
        }
    }
    if (typeof document !== "undefined") document.addEventListener("visibilitychange", handleVisibilityChange);
    return play;
}();
function isDocumentHidden() {
    return !!document && document.hidden;
}
// Public Instance
function anime(params) {
    if (params === void 0) params = {};
    var startTime = 0, lastTime = 0, now = 0;
    var children, childrenLength = 0;
    var resolve = null;
    function makePromise(instance) {
        var promise = window.Promise && new Promise(function(_resolve) {
            return resolve = _resolve;
        });
        instance.finished = promise;
        return promise;
    }
    var instance = createNewInstance(params);
    var promise = makePromise(instance);
    function toggleInstanceDirection() {
        var direction = instance.direction;
        if (direction !== "alternate") instance.direction = direction !== "normal" ? "normal" : "reverse";
        instance.reversed = !instance.reversed;
        children.forEach(function(child) {
            return child.reversed = instance.reversed;
        });
    }
    function adjustTime(time) {
        return instance.reversed ? instance.duration - time : time;
    }
    function resetTime() {
        startTime = 0;
        lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }
    function seekChild(time, child) {
        if (child) child.seek(time - child.timelineOffset);
    }
    function syncInstanceChildren(time) {
        if (!instance.reversePlayback) for(var i = 0; i < childrenLength; i++)seekChild(time, children[i]);
        else for(var i$1 = childrenLength; i$1--;)seekChild(time, children[i$1]);
    }
    function setAnimationsProgress(insTime) {
        var i = 0;
        var animations = instance.animations;
        var animationsLength = animations.length;
        while(i < animationsLength){
            var anim = animations[i];
            var animatable = anim.animatable;
            var tweens = anim.tweens;
            var tweenLength = tweens.length - 1;
            var tween = tweens[tweenLength];
            // Only check for keyframes if there is more than one tween
            if (tweenLength) tween = filterArray(tweens, function(t) {
                return insTime < t.end;
            })[0] || tween;
            var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
            var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
            var strings = tween.to.strings;
            var round = tween.round;
            var numbers = [];
            var toNumbersLength = tween.to.numbers.length;
            var progress = void 0;
            for(var n = 0; n < toNumbersLength; n++){
                var value = void 0;
                var toNumber = tween.to.numbers[n];
                var fromNumber = tween.from.numbers[n] || 0;
                if (!tween.isPath) value = fromNumber + eased * (toNumber - fromNumber);
                else value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
                if (round) {
                    if (!(tween.isColor && n > 2)) value = Math.round(value * round) / round;
                }
                numbers.push(value);
            }
            // Manual Array.reduce for better performances
            var stringsLength = strings.length;
            if (!stringsLength) progress = numbers[0];
            else {
                progress = strings[0];
                for(var s = 0; s < stringsLength; s++){
                    var a = strings[s];
                    var b = strings[s + 1];
                    var n$1 = numbers[s];
                    if (!isNaN(n$1)) {
                        if (!b) progress += n$1 + " ";
                        else progress += n$1 + b;
                    }
                }
            }
            setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
            anim.currentValue = progress;
            i++;
        }
    }
    function setCallback(cb) {
        if (instance[cb] && !instance.passThrough) instance[cb](instance);
    }
    function countIteration() {
        if (instance.remaining && instance.remaining !== true) instance.remaining--;
    }
    function setInstanceProgress(engineTime) {
        var insDuration = instance.duration;
        var insDelay = instance.delay;
        var insEndDelay = insDuration - instance.endDelay;
        var insTime = adjustTime(engineTime);
        instance.progress = minMax(insTime / insDuration * 100, 0, 100);
        instance.reversePlayback = insTime < instance.currentTime;
        if (children) syncInstanceChildren(insTime);
        if (!instance.began && instance.currentTime > 0) {
            instance.began = true;
            setCallback("begin");
        }
        if (!instance.loopBegan && instance.currentTime > 0) {
            instance.loopBegan = true;
            setCallback("loopBegin");
        }
        if (insTime <= insDelay && instance.currentTime !== 0) setAnimationsProgress(0);
        if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) setAnimationsProgress(insDuration);
        if (insTime > insDelay && insTime < insEndDelay) {
            if (!instance.changeBegan) {
                instance.changeBegan = true;
                instance.changeCompleted = false;
                setCallback("changeBegin");
            }
            setCallback("change");
            setAnimationsProgress(insTime);
        } else if (instance.changeBegan) {
            instance.changeCompleted = true;
            instance.changeBegan = false;
            setCallback("changeComplete");
        }
        instance.currentTime = minMax(insTime, 0, insDuration);
        if (instance.began) setCallback("update");
        if (engineTime >= insDuration) {
            lastTime = 0;
            countIteration();
            if (!instance.remaining) {
                instance.paused = true;
                if (!instance.completed) {
                    instance.completed = true;
                    setCallback("loopComplete");
                    setCallback("complete");
                    if (!instance.passThrough && "Promise" in window) {
                        resolve();
                        promise = makePromise(instance);
                    }
                }
            } else {
                startTime = now;
                setCallback("loopComplete");
                instance.loopBegan = false;
                if (instance.direction === "alternate") toggleInstanceDirection();
            }
        }
    }
    instance.reset = function() {
        var direction = instance.direction;
        instance.passThrough = false;
        instance.currentTime = 0;
        instance.progress = 0;
        instance.paused = true;
        instance.began = false;
        instance.loopBegan = false;
        instance.changeBegan = false;
        instance.completed = false;
        instance.changeCompleted = false;
        instance.reversePlayback = false;
        instance.reversed = direction === "reverse";
        instance.remaining = instance.loop;
        children = instance.children;
        childrenLength = children.length;
        for(var i = childrenLength; i--;)instance.children[i].reset();
        if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) instance.remaining++;
        setAnimationsProgress(instance.reversed ? instance.duration : 0);
    };
    // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
    instance._onDocumentVisibility = resetTime;
    // Set Value helper
    instance.set = function(targets, properties) {
        setTargetsValue(targets, properties);
        return instance;
    };
    instance.tick = function(t) {
        now = t;
        if (!startTime) startTime = now;
        setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
    };
    instance.seek = function(time) {
        setInstanceProgress(adjustTime(time));
    };
    instance.pause = function() {
        instance.paused = true;
        resetTime();
    };
    instance.play = function() {
        if (!instance.paused) return;
        if (instance.completed) instance.reset();
        instance.paused = false;
        activeInstances.push(instance);
        resetTime();
        engine();
    };
    instance.reverse = function() {
        toggleInstanceDirection();
        instance.completed = instance.reversed ? false : true;
        resetTime();
    };
    instance.restart = function() {
        instance.reset();
        instance.play();
    };
    instance.remove = function(targets) {
        var targetsArray = parseTargets(targets);
        removeTargetsFromInstance(targetsArray, instance);
    };
    instance.reset();
    if (instance.autoplay) instance.play();
    return instance;
}
// Remove targets from animation
function removeTargetsFromAnimations(targetsArray, animations) {
    for(var a = animations.length; a--;)if (arrayContains(targetsArray, animations[a].animatable.target)) animations.splice(a, 1);
}
function removeTargetsFromInstance(targetsArray, instance) {
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for(var c = children.length; c--;){
        var child = children[c];
        var childAnimations = child.animations;
        removeTargetsFromAnimations(targetsArray, childAnimations);
        if (!childAnimations.length && !child.children.length) children.splice(c, 1);
    }
    if (!animations.length && !children.length) instance.pause();
}
function removeTargetsFromActiveInstances(targets) {
    var targetsArray = parseTargets(targets);
    for(var i = activeInstances.length; i--;){
        var instance = activeInstances[i];
        removeTargetsFromInstance(targetsArray, instance);
    }
}
// Stagger helpers
function stagger(val, params) {
    if (params === void 0) params = {};
    var direction = params.direction || "normal";
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === "first";
    var fromCenter = fromIndex === "center";
    var fromLast = fromIndex === "last";
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function(el, i, t) {
        if (fromFirst) fromIndex = 0;
        if (fromCenter) fromIndex = (t - 1) / 2;
        if (fromLast) fromIndex = t - 1;
        if (!values.length) {
            for(var index = 0; index < t; index++){
                if (!grid) values.push(Math.abs(fromIndex - index));
                else {
                    var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
                    var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
                    var toX = index % grid[0];
                    var toY = Math.floor(index / grid[0]);
                    var distanceX = fromX - toX;
                    var distanceY = fromY - toY;
                    var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                    if (axis === "x") value = -distanceX;
                    if (axis === "y") value = -distanceY;
                    values.push(value);
                }
                maxValue = Math.max.apply(Math, values);
            }
            if (easing) values = values.map(function(val) {
                return easing(val / maxValue) * maxValue;
            });
            if (direction === "reverse") values = values.map(function(val) {
                return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
            });
        }
        var spacing = isRange ? (val2 - val1) / maxValue : val1;
        return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
    };
}
// Timeline
function timeline(params) {
    if (params === void 0) params = {};
    var tl = anime(params);
    tl.duration = 0;
    tl.add = function(instanceParams, timelineOffset) {
        var tlIndex = activeInstances.indexOf(tl);
        var children = tl.children;
        if (tlIndex > -1) activeInstances.splice(tlIndex, 1);
        function passThrough(ins) {
            ins.passThrough = true;
        }
        for(var i = 0; i < children.length; i++)passThrough(children[i]);
        var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
        insParams.targets = insParams.targets || params.targets;
        var tlDuration = tl.duration;
        insParams.autoplay = false;
        insParams.direction = tl.direction;
        insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
        passThrough(tl);
        tl.seek(insParams.timelineOffset);
        var ins = anime(insParams);
        passThrough(ins);
        children.push(ins);
        var timings = getInstanceTimings(children, params);
        tl.delay = timings.delay;
        tl.endDelay = timings.endDelay;
        tl.duration = timings.duration;
        tl.seek(0);
        tl.reset();
        if (tl.autoplay) tl.play();
        return tl;
    };
    return tl;
}
anime.version = "3.2.1";
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.default = anime;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2YyAF":[function(require,module,exports) {
const $body = document.querySelector("body");
const $burgers = document.querySelectorAll(".hamburger");
const $mobileMenus = document.querySelectorAll(".mobile-menu__wrapper");
const mobileMenuHandler = (event)=>{
    const target = event.target;
    if (!target.closest(".mobile-menu")) {
        Array.from($burgers).forEach(($burger)=>$burger.classList.remove("is-active"));
        Array.from($mobileMenus).forEach(($mobileMenu)=>$mobileMenu.classList.remove("is-active"));
        $body.removeEventListener("click", mobileMenuHandler);
    }
};
Array.from($burgers).forEach(($burger)=>$burger.addEventListener("click", ()=>{
        $burger.classList.toggle("is-active");
        Array.from($mobileMenus).forEach(($mobileMenu)=>$mobileMenu.classList.toggle("is-active"));
        $body.addEventListener("click", mobileMenuHandler);
    }));

},{}],"3QfXd":[function(require,module,exports) {
const $questionsShowButtons = document.querySelectorAll(".questions__img");
const $questionsText = document.querySelectorAll(".questions__text");
const $questionsShowAreas = document.querySelectorAll(".questions__wrapper");
Array.from($questionsShowAreas).forEach(($questionsShowArea, index)=>$questionsShowArea.addEventListener("click", (event)=>{
        const question = event.target;
        if (question.closest(".questions__wrapper")) {
            $questionsText[index].classList.toggle("is-open");
            $questionsShowButtons[index].classList.toggle("transform-button");
        }
    }));

},{}],"aobIp":[function(require,module,exports) {
var _index = require("../utils/index");
var _const = require("./const");
var _data = require("./data");
var _promocodeInfo = require("./promocode-info");
var _templateQuiz = require("./template-quiz");
const promoElement = document.querySelector(".promo");
const mobileTitle = document.querySelector(".promo-mobile__title");
const promoMobileElement = document.querySelector(".promo-mobile__content");
let currentPromoElement;
const startTestBtn = document.querySelector(".promo__button");
const startTestMobileBtn = document.querySelector(".promo-mobile__button");
let currentStartTestBtn;
let prevValue = "";
let indexOfQuestion = 0;
let result = 0;
let isMobileMode;
let prevMode;
const createQuizCardsTemplates = (questions)=>questions.map((question)=>(0, _index.createElement)((0, _templateQuiz.quizTemplate)(question)));
let quizCardsTemplates;
let currentQuestionData = (0, _data.DataQuestions)[indexOfQuestion];
let currentQuestionTemplate;
const determinParametersByScreen = ()=>{
    prevMode = isMobileMode;
    if (window.innerWidth < 1000) {
        isMobileMode = true;
        currentStartTestBtn = startTestMobileBtn;
        currentPromoElement = promoMobileElement;
    } else {
        isMobileMode = false;
        currentStartTestBtn = startTestBtn;
        currentPromoElement = promoElement;
    }
};
determinParametersByScreen();
prevMode = isMobileMode;
const showPromoHandler = ()=>{
    if (isMobileMode) {
        const div = document.createElement("div");
        div.className = "promo-mobile";
        document.getElementsByTagName("main")[0].prepend(div);
        mobileTitle && document.querySelector(".promo-mobile")?.append(mobileTitle);
        document.querySelector(".promo-mobile")?.append(currentPromoElement);
    } else replaceElement(currentPromoElement, document.querySelector(".promo-mobile"));
    indexOfQuestion = 0;
    result = 0;
    document?.querySelector(".quiz__result-wrapper")?.remove();
    document?.querySelector(".quiz__wrapper")?.remove();
    quizCardsTemplates = createQuizCardsTemplates((0, _data.DataQuestions));
    currentQuestionData = (0, _data.DataQuestions)[indexOfQuestion];
};
const showResultHandler = ()=>{
    const resultElement = (0, _index.createElement)((0, _templateQuiz.resultTemplate)(result));
    const closeButton = resultElement?.querySelector(".quiz__result-button_close");
    const infoButton = resultElement?.querySelector(".quiz__result-info");
    closeButton?.addEventListener("click", showPromoHandler);
    infoButton?.addEventListener("click", togglePomoInfosHandler);
    quizCardsTemplates.push(resultElement);
};
const replaceElement = (newComponent, oldComponent)=>{
    const newElement = newComponent;
    const oldElement = oldComponent;
    const buttons = newComponent?.querySelectorAll(".quiz__answer");
    const parent = oldElement?.parentElement;
    const checkAnswer = currentQuestionTemplate.querySelector(".quiz__check");
    parent?.replaceChild(newElement, oldElement);
    if (!isMobileMode) buttons.forEach((button)=>button.addEventListener("click", showAnswerHandler));
    else {
        checkAnswer?.addEventListener("click", ()=>{
            replaceElement((0, _index.createElement)((0, _templateQuiz.answerTemplate)(currentQuestionData, prevValue === currentQuestionData.rightAnswer)), checkAnswer);
            const showNextQuestionButton = document.querySelector(".quiz__answer-button");
            showNextQuestionButton?.addEventListener("click", showNextElementHandler);
            if (prevValue === currentQuestionData.rightAnswer) result++;
        });
        document.querySelector(".quiz__answers")?.addEventListener("click", unlockingButtonsHandler);
    }
    if (indexOfQuestion === quizCardsTemplates.length - 1) {
        if (prevValue === currentQuestionData?.rightAnswer) result++;
        showResultHandler();
    }
};
const addProgress = (currentElement)=>{
    const progress = (0, _const.stepOfProgres) * (indexOfQuestion + 1) + "%";
    if (currentElement.querySelector(".quiz__progress-line")) return currentElement.querySelector(".quiz__progress-line").style.width = String(progress);
};
const showNextElementHandler = ()=>{
    currentQuestionData = (0, _data.DataQuestions)[indexOfQuestion + 1];
    currentQuestionTemplate = quizCardsTemplates[indexOfQuestion + 1];
    replaceElement(quizCardsTemplates[indexOfQuestion + 1], quizCardsTemplates[indexOfQuestion]);
    indexOfQuestion++;
    addProgress(quizCardsTemplates[indexOfQuestion]);
};
const showAnswerHandler = (evt)=>{
    const isRight = evt.target.innerHTML === currentQuestionData.rightAnswer;
    const questionImage = currentQuestionTemplate.querySelector(".quiz__img");
    const currentAnswerTemplate = (0, _templateQuiz.answerTemplate)(currentQuestionData, isRight);
    const activeButton = currentQuestionTemplate.querySelector(".quiz__button-img");
    activeButton.addEventListener("click", showNextElementHandler);
    if (isRight) {
        evt.target.style.background = (0, _const.rightOption);
        result++;
    } else evt.target.style.background = (0, _const.wrongOption);
    currentQuestionTemplate.querySelectorAll(".quiz__answer").forEach((button)=>{
        button.style["pointer-events"] = "none";
    });
    activeButton.style.display = "block";
    currentQuestionTemplate.querySelector(".quiz__button-img_gray").style.display = "none";
    replaceElement((0, _index.createElement)(currentAnswerTemplate), questionImage);
};
const unlockingButtonsHandler = (evt)=>{
    const checkAnswer = currentQuestionTemplate.querySelector(".quiz__check");
    if (evt.target.innerHTML !== "" && evt.target.innerHTML !== "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C") {
        prevValue = evt.target.innerHTML;
        checkAnswer.style["pointer-events"] = "all";
        checkAnswer.style["background-color"] = "#077BED";
    }
};
const togglePomoInfosHandler = ()=>{
    const infoElement = document.querySelector(".quiz__result-promocode");
    const closeButton = infoElement?.querySelector(".quiz__result-close");
    infoElement?.classList.toggle("quiz__result-promocode_active");
    (0, _promocodeInfo.closePromoInfo)(infoElement);
};
startTestBtn?.addEventListener("click", ()=>{
    quizCardsTemplates = createQuizCardsTemplates((0, _data.DataQuestions));
    currentQuestionTemplate = quizCardsTemplates[0];
    replaceElement(currentQuestionTemplate, promoElement);
});
startTestMobileBtn?.addEventListener("click", ()=>{
    quizCardsTemplates = createQuizCardsTemplates((0, _data.DataQuestions));
    currentQuestionTemplate = quizCardsTemplates[0];
    replaceElement(currentQuestionTemplate, promoMobileElement);
});
window.addEventListener("resize", ()=>{
    determinParametersByScreen();
    if (prevMode === isMobileMode) return;
    if (!document.querySelector(".promo") || !document.querySelector(".promo-mobile__content")) showPromoHandler();
});

},{"../utils/index":"caim5","./const":"lW0Pl","./data":"1N0GG","./promocode-info":"jSVMY","./template-quiz":"HBL09"}],"caim5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
const createElement = (template)=>{
    const newElement = document.createElement("div");
    newElement.innerHTML = template;
    return newElement.firstElementChild;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lW0Pl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stepOfProgres", ()=>stepOfProgres);
parcelHelpers.export(exports, "rightOption", ()=>rightOption);
parcelHelpers.export(exports, "wrongOption", ()=>wrongOption);
const stepOfProgres = 17;
const rightOption = "#39A786";
const wrongOption = "#FF774D";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1N0GG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataQuestions", ()=>DataQuestions);
parcelHelpers.export(exports, "dataResults", ()=>dataResults);
const DataQuestions = [
    {
        image: new URL(require("996b966c5238afa3")),
        questionText: "\u041A\u0430\u043A\u043E\u0432\u0430 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0432\u044B&nbsp;\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0432&nbsp;\u043F\u0443\u043B\u044C\u0442 \u0431\u0440\u0430\u043A\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0431\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0443 \u0438&nbsp;\u043D\u0435&nbsp;\u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u043C \u043D\u0430&nbsp;\u0431\u043E\u043B\u044C\u0448\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435?",
        questionAnswers: [
            "1 \u0438\u0437 100",
            "6 \u0438\u0437 100",
            "35 \u0438\u0437 100"
        ],
        number: 1,
        rightAnswer: "6 \u0438\u0437 100",
        answerText: {
            right: "\u0414\u0430, \u0442\u0430\u043A\u043E\u0439 \u0448\u0430\u043D\u0441 \u2014 6 \u0438\u0437 100",
            wrong: "\u041D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C. \u0422\u0430\u043A\u043E\u0439&nbsp;\u0448\u0430\u043D\u0441&nbsp;\u2014&nbsp;6&nbsp;\u0438\u0437&nbsp;100",
            text: "\u041D\u0435\u043C\u043D\u043E\u0433\u043E, \u0442\u0430\u043A \u0447\u0442\u043E \u0432\u0430\u0448 \u043A\u0438\u043D\u043E\u0432\u0435\u0447\u0435\u0440, \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0443\u0434\u0430\u0441\u0442\u0441\u044F. \u0415\u0441\u043B\u0438, \u043A\u043E\u043D\u0435\u0447\u043D\u043E, \u0443&nbsp;\u0441\u043E\u0441\u0435\u0434\u0435\u0439 \u043D\u0435&nbsp;\u043F\u0440\u043E\u0440\u0432\u0451\u0442 \u0442\u0440\u0443\u0431\u0443 \u0432&nbsp;\u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F. \u041F\u043E\u0442\u043E\u043F&nbsp;&mdash; \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u043E\u0440\u0447\u0438 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0432&nbsp;7&nbsp;\u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u0438\u0437&nbsp;100. \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0444\u0438\u043B\u044C\u043C\u044B \u0441\u0442\u0430\u043D\u0435\u0442 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u0435\u0435, \u0435\u0441\u043B\u0438 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u044C \u0440\u0438\u0441\u043A\u0438 \u043F\u043E&nbsp;\u0438\u043F\u043E\u0442\u0435\u043A\u0435 \u0432&nbsp;\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u043C \u0414\u043E\u043C\u0435 \u0412\u0421\u041A"
        }
    },
    {
        image: new URL(require("d040fd4aba32dfaf")),
        questionText: "\u041A\u0430\u043A\u043E\u0432\u0430 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0432\u044B&nbsp;\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0431\u0440\u0430\u043A \u0438&nbsp;\u043F\u0440\u043E\u0436\u0438\u0432\u0451\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0435\u0449\u0451 \u043E\u0434\u0438\u043D \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u0433\u043E\u0434?",
        questionAnswers: [
            "3 \u043A 10",
            "8 \u043A 10",
            "1 \u043A 20"
        ],
        number: 2,
        rightAnswer: "3 \u043A 10",
        answerText: {
            right: "\u0412\u0435\u0440\u043D\u043E",
            wrong: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E",
            text: "\u041F\u043E&nbsp;\u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0435, \u0432&nbsp;2022 \u0433\u043E\u0434\u0443 \u043D\u0430&nbsp;10&nbsp;\u0431\u0440\u0430\u043A\u043E\u0432 \u043F\u0440\u0438\u0448\u043B\u043E\u0441\u044C 7&nbsp;\u0440\u0430\u0437\u0432\u043E\u0434\u043E\u0432. \u041E\u0434\u043D\u0430 \u0438\u0437&nbsp;\u043F\u0440\u0438\u0447\u0438\u043D&nbsp;&mdash; \u0431\u044B\u0442\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B: \u0442\u043E&nbsp;\u0441\u043E\u0441\u0435\u0434\u0438 \u0437\u0430\u043B\u044C\u044E\u0442, \u0442\u043E&nbsp;\u0442\u0440\u0443\u0431\u0430 \u043B\u043E\u043F\u043D\u0435\u0442, \u0430&nbsp;\u0431\u044B\u0432\u0430\u0435\u0442 \u0438&nbsp;\u043F\u043E\u043B\u043D\u0430\u044F \u043F\u043E\u0440\u0447\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430... \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u044B \u0441\u0443\u043F\u0440\u0443\u0433\u0438, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u043D\u0435&nbsp;\u0438\u0441\u043F\u0440\u0430\u0432\u044F\u0442, \u043D\u043E&nbsp;\u043F\u043E\u043C\u043E\u0447\u044C \u0441\u0435\u0431\u0435 \u043F\u0440\u043E\u0449\u0435 \u0440\u0435\u0448\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B&nbsp;&mdash; \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u043C\u043E\u0433\u0443\u0442. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u044C \u0440\u0438\u0441\u043A\u0438 \u043F\u043E&nbsp;\u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0438\u043F\u043E\u0442\u0435\u0447\u043D\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u0432&nbsp;\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u043C \u0434\u043E\u043C\u0435 \u0412\u0421\u041A \u0438&nbsp;\u043D\u0435&nbsp;\u0432\u044B\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0431\u0430\u043D\u043A\u0443 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043E&nbsp;\u0438\u043F\u043E\u0442\u0435\u043A\u0435 \u0432&nbsp;\u0441\u043B\u0443\u0447\u0430\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0430\u0432\u0430\u0440\u0438\u0438."
        }
    },
    {
        image: new URL(require("8db686e3e50d102b")),
        questionText: "\u0410&nbsp;\u043A\u0430\u043A\u043E\u0432 \u0448\u0430\u043D\u0441, \u0447\u0442\u043E \u0432\u0430\u0441 \u043E\u0431\u0432\u043E\u0440\u0443\u044E\u0442 \u043D\u0430&nbsp;\u0443\u043B\u0438\u0446\u0435?",
        questionAnswers: [
            "1 \u0438\u0437 1274",
            "1 \u0438\u0437 20 054",
            "1 \u0438\u0437 8687"
        ],
        number: 3,
        rightAnswer: "1 \u0438\u0437 1274",
        answerText: {
            right: "\u0414\u0430, \u044D\u0442\u043E \u0432\u0435\u0440\u043D\u043E",
            wrong: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E",
            text: "\u0413\u043E\u0440\u043E\u0434 \u0437\u0430\u0441\u044B\u043F\u0430\u0435\u0442&nbsp;&mdash; \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u044E\u0442\u0441\u044F \u0432\u043E\u0440\u044B. \u0422\u0430\u043A\u043E\u0439 \u0448\u0430\u043D\u0441&nbsp;&mdash; 1&nbsp;\u0438\u0437&nbsp;1274. \u041F\u043E\u043C\u0438\u043C\u043E \u0440\u0438\u0441\u043A\u0430 \u043F\u043E\u043F\u0430\u0441\u0442\u044C\u0441\u044F \u043A\u0430\u0440\u043C\u0430\u043D\u043D\u0438\u043A\u0430\u043C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0443\u0434\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C&nbsp;&mdash; \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u0441&nbsp;\u043E\u0431\u0440\u0435\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C. \u0422\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0438&nbsp;\u0431\u0435\u0437 \u0436\u0438\u043B\u043F\u043B\u043E\u0449\u0430\u0434\u0438, \u0438&nbsp;\u0431\u0435\u0437 \u0434\u0435\u043D\u0435\u0433. \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0438\u0442\u0443\u043B\u0430 \u043E\u0442&nbsp;\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0434\u043E\u043C\u0430 \u0412\u0421\u041A \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0430 \u0438\u043F\u043E\u0442\u0435\u0447\u043D\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0438&nbsp;\u0432&nbsp;\u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u0445."
        }
    },
    {
        image: new URL(require("cc09c474b0048bea")),
        questionText: "\u041A\u0430\u043A\u043E\u0432\u0430 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0432\u044B&nbsp;\u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u0442\u0435 \u0432\u0441\u0435 \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u044F &laquo;\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0443 \u0431\u0430\u043D\u043A\u0430&raquo;?",
        questionAnswers: [
            "1 \u0438\u0437 580 000",
            "1 \u0438\u0437 20 000",
            "1 \u0438\u0437 1"
        ],
        number: 4,
        rightAnswer: "1 \u0438\u0437 20 000",
        answerText: {
            right: "\u0412\u0435\u0440\u043D\u043E",
            wrong: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u0422\u0430\u043A\u043E\u0439&nbsp;\u0448\u0430\u043D\u0441&nbsp;\u2014&nbsp;1&nbsp;\u043A&nbsp;20&nbsp;000",
            text: "\u0422\u0430\u043A\u043E\u0439 \u0448\u0430\u043D\u0441&nbsp;&mdash; 1&nbsp;\u043A 20&nbsp;000. \u0413\u043E\u0440\u0430\u0437\u0434\u043E \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u0435\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u043D\u0430&nbsp;\u0432\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u043C \u0440\u044B\u043D\u043A\u0435 \u0443&nbsp;\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0435\u0439\u0441\u044F \u043D\u0430&nbsp;\u0441\u0442\u0430\u0434\u0438\u0438 \u0431\u0430\u043D\u043A\u0440\u043E\u0442\u0441\u0442\u0432\u0430&nbsp;&mdash; \u043A\u043E\u0433\u0434\u0430 \u0441\u0434\u0435\u043B\u043A\u0438 \u0441&nbsp;\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u043C \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043E\u0441\u043F\u043E\u0440\u0435\u043D\u044B \u0432&nbsp;\u0441\u0443\u0434\u0435\u0431\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435. \u0415\u0441\u043B\u0438 \u0441\u0434\u0435\u043B\u043A\u0443 \u043F\u0440\u0438\u0437\u043D\u0430\u044E\u0442 \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439, \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u0434\u043E\u043C \u0412\u0421\u041A \u0432\u044B\u043F\u043B\u0430\u0442\u0438\u0442 \u0431\u0430\u043D\u043A\u0443 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043E&nbsp;\u0438\u043F\u043E\u0442\u0435\u043A\u0435."
        }
    },
    {
        image: new URL(require("aa6c4e807b702494")),
        questionText: "\u041A\u0430\u043A\u043E\u0432 \u0448\u0430\u043D\u0441, \u0447\u0442\u043E \u0432\u0430\u0448\u0430 \u043F\u043E\u0441\u044B\u043B\u043A\u0430 \u043D\u0435&nbsp;\u0434\u043E\u0435\u0434\u0435\u0442 \u0434\u043E&nbsp;\u0430\u0434\u0440\u0435\u0441\u0430\u0442\u0430, \u0435\u0441\u043B\u0438 \u0432\u044B&nbsp;\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435 \u0435\u0451&nbsp;\u0447\u0435\u0440\u0435\u0437 \u0433\u0440\u0443\u0437\u043E\u0432\u0443\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E?",
        questionAnswers: [
            "1 \u0438\u0437 96 000",
            "1 \u0438\u0437 15 000",
            "1 \u0438\u0437 7000"
        ],
        number: 5,
        rightAnswer: "1 \u0438\u0437 96 000",
        answerText: {
            right: "\u0412\u0435\u0440\u043D\u043E. \u0428\u0430\u043D\u0441 \u2014 1 \u0438\u0437 96 000",
            wrong: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u0428\u0430\u043D\u0441 \u2014 1 \u0438\u0437 96 000",
            text: "\u0415\u0441\u043B\u0438 \u0447\u0430\u0441\u0442\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0433\u0440\u0443\u0437\u044B, \u0442\u0430\u043A\u043E\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0442\u0438. \u041D\u043E&nbsp;\u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0442\u0435\u0440\u044F\u044E\u0442 \u0440\u0435\u0436\u0435, \u0447\u0435\u043C \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E \u043F\u043E\u0440\u0442\u0438\u0442\u0441\u044F \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0432&nbsp;\u0438\u043F\u043E\u0442\u0435\u0447\u043D\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435&nbsp;&mdash; \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0438 \u043F\u0440\u043E\u0440\u044B\u0432\u0435 \u043A\u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438. \u0416\u0438\u0442\u044C \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u043E&nbsp;&mdash; \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0437\u0430&nbsp;5&nbsp;\u043C\u0438\u043D\u0443\u0442 \u043E\u043D\u043B\u0430\u0439\u043D \u0432&nbsp;\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u043C \u0434\u043E\u043C\u0435 \u0412\u0421\u041A."
        }
    },
    {
        image: new URL(require("38d0f216ee99eec7")),
        questionText: "\u0410&nbsp;\u043A\u0430\u043A\u043E\u0432\u0430 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0432&nbsp;\u0432\u0430\u0441 \u043F\u043E\u043F\u0430\u0434\u0451\u0442 \u043C\u043E\u043B\u043D\u0438\u044F?",
        questionAnswers: [
            "1 \u0438\u0437 330 000",
            "1 \u0438\u0437 20 000",
            "1 \u0438\u0437 145 000"
        ],
        number: 6,
        rightAnswer: "1 \u0438\u0437 330 000",
        answerText: {
            right: "\u0414\u0430, \u0432\u0435\u0440\u043D\u043E. \u0422\u0430\u043A\u043E\u0439&nbsp;\u0448\u0430\u043D\u0441&nbsp;\u2014&nbsp;1&nbsp;\u043A&nbsp;330&nbsp;000",
            wrong: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u0422\u0430\u043A\u043E\u0439&nbsp;\u0448\u0430\u043D\u0441&nbsp;\u2014&nbsp;1&nbsp;\u043A&nbsp;330&nbsp;000",
            text: "\u041D\u0435\u043C\u043D\u043E\u0433\u043E. \u0417\u0430\u0442\u043E \u043C\u043E\u043B\u043D\u0438\u0438&nbsp;&mdash; \u043E\u0434\u043D\u0430 \u0438\u0437&nbsp;\u043F\u0440\u0438\u0447\u0438\u043D \u043F\u043E\u0436\u0430\u0440\u043E\u0432 \u0432&nbsp;\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435, \u043D\u0430\u0440\u044F\u0434\u0443 \u0441&nbsp;\u043F\u043E\u0434\u0436\u043E\u0433\u043E\u043C \u0438&nbsp;\u0432\u043E\u0437\u0433\u043E\u0440\u0430\u043D\u0438\u0435\u043C \u043E\u0442&nbsp;\u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0443\u0431\u0435\u0440\u0435\u0436\u0451\u0442 \u0432\u0430\u0441 \u043E\u0442&nbsp;\u0432\u044B\u043F\u043B\u0430\u0442 \u0434\u0435\u043D\u0435\u0433 \u0431\u0430\u043D\u043A\u0443, \u0435\u0441\u043B\u0438 \u0434\u043E\u043C \u0441\u0433\u043E\u0440\u0438\u0442 \u043F\u0440\u0438 \u043F\u043E\u0436\u0430\u0440\u0435."
        }
    }
];
const dataResults = {
    lowResult: {
        subtitle: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0432\u0430\u0448\u0430 \u0438\u043D\u0442\u0443\u0438\u0446\u0438\u044F \u0435\u0449\u0451 \u0441\u043F\u0438\u0442 \u0438 \u0432\u0430\u043C \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0438. \u041D\u043E, \u0441 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0448\u0430\u043D\u0441\u044B \u043F\u0430\u0434\u0435\u043D\u0438\u044F \u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u0430 \u0432\u043E \u0434\u0432\u043E\u0440 \u043D\u0435 \u0441\u043F\u0430\u0441\u0451\u0442 \u043E\u0442 \u043D\u0435\u0433\u043E.",
        text: "\u041D\u0435 \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0438 \u0437\u0430 \u043D\u0435\u0438\u0437\u0431\u0435\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u044B<br/>\u0438\u043F\u043E\u0442\u0435\u043A\u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0439 \u0414\u043E\u043C \u0412\u0421\u041A \u2014 <strong>\u0434\u043E 31 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2023</strong> \u0433\u043E\u0434\u0430<br/>\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u044C \u0438 \u0442\u043E, \u0438 \u0434\u0440\u0443\u0433\u043E\u0435, \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C, <strong>\u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 3%</strong> \u043D\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430, \u0436\u0438\u0437\u043D\u0438 \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F, \u0442\u0438\u0442\u0443\u043B\u0430, \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C\u043E\u0435 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0438\u043F\u043E\u0442\u0435\u043A\u0438, \u0438 <strong>15 % \u2014 \u043D\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</strong>, \u0436\u0438\u0437\u043D\u0438 \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0443 <strong>yandex23</strong>. \u0421\u043A\u0438\u0434\u043A\u0430 \u043D\u0435 \u0441\u0443\u043C\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0430\u043A\u0446\u0438\u044F\u043C\u0438 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432\u0441\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C."
    },
    middleResult: {
        subtitle: "\u0425\u043E\u0440\u043E\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442, \u0432\u0435\u043B\u0438\u043A\u0430 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437 \u0432\u044B \u0441\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u0441\u044C \u043B\u0443\u0447\u0448\u0435. \u041F\u043E\u0434\u043C\u0435\u0447\u0430\u0439\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0444\u0430\u043A\u0442\u044B \u0438 \u043F\u0440\u043E\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0448\u0430\u043D\u0441\u044B \u043D\u0435\u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u0438\u0441\u0445\u043E\u0434\u043E\u0432.",
        text: "\u0410 \u043F\u043E\u043A\u0430 \u2014 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u043E \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E,<br/>\u043D\u043E \u0438 \u0440\u0438\u0441\u043A\u0438 \u043F\u043E \u0438\u043F\u043E\u0442\u0435\u043A\u0435, \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C, <strong>\u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 3%</strong> \u043D\u0430<br/>\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430, \u0436\u0438\u0437\u043D\u0438 \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F, \u0442\u0438\u0442\u0443\u043B\u0430, \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C\u043E\u0435 \u0432<br/>\u0440\u0430\u043C\u043A\u0430\u0445 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0438\u043F\u043E\u0442\u0435\u043A\u0438, \u0438 <strong>15 % \u2014 \u043D\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</strong>,<br/>\u0436\u0438\u0437\u043D\u0438 \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0443 <strong>yandex23</strong>. \u0421\u043A\u0438\u0434\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442<br/><strong>\u0434\u043E 31 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2023</strong> \u0433\u043E\u0434\u0430, \u043D\u0435 \u0441\u0443\u043C\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0430\u043A\u0446\u0438\u044F\u043C\u0438<br/>\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0414\u043E\u043C\u0430 \u0412\u0421\u041A \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432\u0441\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C."
    },
    highResult: {
        subtitle: "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C! \u0412 \u044D\u0442\u043E\u0442 \u0440\u0430\u0437 \u0438\u043D\u0442\u0443\u0438\u0446\u0438\u044F \u0432\u0430\u0441 \u043D\u0435 \u043F\u043E\u0434\u0432\u0435\u043B\u0430. \u041D\u043E \u043D\u0430 \u0442\u043E \u043E\u043D\u0430 \u0438 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0438\u043D\u043E\u0433\u0434\u0430 \u0441\u043B\u0443\u0447\u0430\u0442\u044C\u0441\u044F.",
        text: "\u041F\u043E\u044D\u0442\u043E\u043C\u0443, \u0447\u0442\u043E\u0431\u044B \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u0435\u0435, \u043C\u043E\u0436\u043D\u043E<br/>\u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u043E \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E, \u043D\u043E \u0438 \u0440\u0438\u0441\u043A\u0438 \u043F\u043E \u0438\u043F\u043E\u0442\u0435\u043A\u0435,<br/>\u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C, <strong>\u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 3%</strong> \u043D\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430,<br/>\u0436\u0438\u0437\u043D\u0438 \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F, \u0442\u0438\u0442\u0443\u043B\u0430, \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C\u043E\u0435 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430<br/>\u0438\u043F\u043E\u0442\u0435\u043A\u0438, \u0438 <strong>15 % \u2014 \u043D\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</strong>, \u0436\u0438\u0437\u043D\u0438 \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F,<br/>\u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0443 <strong>yandex23</strong>. \u0421\u043A\u0438\u0434\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 <strong>\u0434\u043E 31 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2023</strong><br/>\u0433\u043E\u0434\u0430, \u043D\u0435 \u0441\u0443\u043C\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0430\u043A\u0446\u0438\u044F\u043C\u0438 \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043E\u0433\u043E \u0414\u043E\u043C\u0430<br/>\u0412\u0421\u041A \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432\u0441\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C."
    },
    image: String(new URL(require("43c8786a9390690"))),
    pomocodeText: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u043D\u0430&nbsp;\u0441\u043A\u0438\u0434\u043A\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432&nbsp;\u043F\u0435\u0440\u0438\u043E\u0434 \u0441&nbsp;18&nbsp;\u043F\u043E&nbsp;30&nbsp;\u043D\u043E\u044F\u0431\u0440\u044F 2023&nbsp;\u0433.&nbsp;\u0438&nbsp;\u0434\u0430\u0435\u0442 \u043F\u0440\u0430\u0432\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043A\u0438\u0434\u043A\u0438 \u0432&nbsp;\u0440\u0430\u0437\u043C\u0435\u0440\u0435 3&nbsp;% \u043D\u0430&nbsp;\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430, \u0436\u0438\u0437\u043D\u0438 \u0438&nbsp;\u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F, \u0442\u0438\u0442\u0443\u043B\u0430, \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C\u043E\u0435 \u0432&nbsp;\u0440\u0430\u043C\u043A\u0430\u0445 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0438\u043F\u043E\u0442\u0435\u043A\u0438, \u0430&nbsp;\u0442\u0430\u043A\u0436\u0435 \u0441\u043A\u0438\u0434\u043A\u0438 \u0432&nbsp;\u0440\u0430\u0437\u043C\u0435\u0440\u0435 15&nbsp;% \u043D\u0430&nbsp;\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430, \u0436\u0438\u0437\u043D\u0438 \u0438&nbsp;\u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F, \u0442\u0438\u0442\u0443\u043B\u0430.\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E 1&nbsp;\u0440\u0430\u0437 \u0432&nbsp;\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0432\u0438\u0434\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F. \u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0435&nbsp;\u0441\u0443\u043C\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0441&nbsp;\u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0430\u043A\u0446\u0438\u044F\u043C\u0438 \u0438&nbsp;\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438. \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u044B\u043C \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u044B\u043C \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\u043C &laquo;\u0412\u0421\u041A&raquo;, \u0418\u041D\u041D: 7710026574. \u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0431\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u043E\u0442&nbsp;11.09.2015: \u0421\u041B &#8470;&nbsp;0621, \u0421\u0418 &#8470;&nbsp;0621, \u041E\u0421 &#8470;&nbsp;0621, \u041E\u0421 &#8470;&nbsp;0621&ndash;04, \u041E\u0421 &#8470;&nbsp;0621&ndash;05, \u041F\u0421 &#8470;&nbsp;0621."
};

},{"996b966c5238afa3":"aGDDt","d040fd4aba32dfaf":"iDNQP","8db686e3e50d102b":"d1cyr","cc09c474b0048bea":"5qq5U","aa6c4e807b702494":"aDYno","38d0f216ee99eec7":"ao0Yq","43c8786a9390690":"4kaAF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGDDt":[function(require,module,exports) {
module.exports = require("9629cedd53c1cf57").getBundleURL("7XnOB") + "question1.a45c23e9.png" + "?" + Date.now();

},{"9629cedd53c1cf57":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"iDNQP":[function(require,module,exports) {
module.exports = require("8b5192155a1201e1").getBundleURL("7XnOB") + "question2.6a4ed7d8.png" + "?" + Date.now();

},{"8b5192155a1201e1":"lgJ39"}],"d1cyr":[function(require,module,exports) {
module.exports = require("ce0230cbfdeca639").getBundleURL("7XnOB") + "question3.ed130377.png" + "?" + Date.now();

},{"ce0230cbfdeca639":"lgJ39"}],"5qq5U":[function(require,module,exports) {
module.exports = require("d6b74154d018d524").getBundleURL("7XnOB") + "question4.59e58e5a.png" + "?" + Date.now();

},{"d6b74154d018d524":"lgJ39"}],"aDYno":[function(require,module,exports) {
module.exports = require("f1eccf327897a2a0").getBundleURL("7XnOB") + "question5.52eaabc1.png" + "?" + Date.now();

},{"f1eccf327897a2a0":"lgJ39"}],"ao0Yq":[function(require,module,exports) {
module.exports = require("19e695d7869e5fef").getBundleURL("7XnOB") + "question6.d4fe1e29.png" + "?" + Date.now();

},{"19e695d7869e5fef":"lgJ39"}],"4kaAF":[function(require,module,exports) {
module.exports = require("a0ce9127d5911e83").getBundleURL("7XnOB") + "result.c6bf3127.png" + "?" + Date.now();

},{"a0ce9127d5911e83":"lgJ39"}],"jSVMY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closePromoInfo", ()=>closePromoInfo);
const closePromoInfo = (info)=>{
    const yStart = parseInt(window.getComputedStyle(info, null).getPropertyValue("top"));
    let yCurrent;
    info.addEventListener("touchstart", (e)=>{
        e.preventDefault();
        yCurrent = +e.targetTouches[0].clientY - parseInt(info.style.top) || 0;
    });
    info.addEventListener("touchmove", (e)=>{
        if (yCurrent !== undefined) {
            e.preventDefault();
            info.style.top = +e.targetTouches[0].clientY - yCurrent + "rem";
        }
    });
    info.addEventListener("touchend", (e)=>{
        e.preventDefault();
        const yFinal = parseInt(window.getComputedStyle(info, null).getPropertyValue("top"));
        if (yFinal + 50 < yStart) info.style.top = "auto";
        else if (yFinal - 50 > yStart) {
            info.style.top = "auto";
            info.classList.remove("quiz__result-promocode_active");
        }
        yCurrent = yStart;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"HBL09":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quizTemplate", ()=>quizTemplate);
parcelHelpers.export(exports, "answerTemplate", ()=>answerTemplate);
parcelHelpers.export(exports, "resultTemplate", ()=>resultTemplate);
var _data = require("./data");
const renderAnswers = (answers)=>answers.map((answer)=>`
      <button class="quiz__answer">${answer}</button>
      `).join("");
const generateResultText = (count, field)=>{
    if (count === 6) return (0, _data.dataResults).highResult[field];
    else if (count >= 4) return (0, _data.dataResults).middleResult[field];
    else return (0, _data.dataResults).lowResult[field];
};
const quizTemplate = (question)=>{
    return `
    <div class="quiz__wrapper">
      <img class="quiz__img" src="${question.image}">
      <div class="quiz__content">
        <div class="quiz__progress">
          <div class="quiz__progress-line"></div>
        </div>
        <h3 class="quiz__title-mobile">${question.number}/6</h3>
        <h3 class="quiz__title">\u{412}\u{43E}\u{43F}\u{440}\u{43E}\u{441} ${question.number} \u{438}\u{437} 6</h3>
        <p class="quiz__text">${question.questionText}</p>
        <div class="quiz__buttons">
          <div class="quiz__answers">
            ${renderAnswers(question.questionAnswers)}
          </div>
          <buttton class="quiz__button">
            <img class="quiz__button-img_gray" src="${new URL(require("547d4b825eb8ee07"))}" alt="">
            <img class="quiz__button-img" src="${new URL(require("d3d4ddd2740c03e0"))}" alt="">
          </buttton>
        </div>
      </div>
      <div class="quiz__check">\u{41F}\u{440}\u{43E}\u{432}\u{435}\u{440}\u{438}\u{442}\u{44C}
      </div>
    </div>
  `;
};
const answerTemplate = (question, isRight)=>{
    return `
    <div class=${isRight ? "quiz__answer-wrapper_green" : "quiz__answer-wrapper_red"}>
      <div class="quiz__answer-content">
        <h3 class="quiz__answer-title">
          ${isRight ? question.answerText.right : question.answerText.wrong}
        </h3>
        <p class="quiz__answer-text">
          ${question.answerText.text}
        </p>
      </div>
      <button class="quiz__answer-button">${question.number === 6 ? "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" : "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"}</button>
    </div>
  `;
};
const resultTemplate = (count)=>{
    return `
  <div class="quiz__result-wrapper">
    <img class="quiz__result-img" src="${(0, _data.dataResults).image}">
    <div class="quiz__result-content">
      <div class="quiz__result-content_wrapper">
        <h3 class="quiz__result-title">\u{420}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442} \u{442}\u{435}\u{441}\u{442}\u{430}</h3>
        <p class="quiz__result-subtitle">${count} \u{432}\u{435}\u{440}\u{43D}\u{44B}\u{439} \u{43E}\u{442}\u{432}\u{435}\u{442} \u{438}\u{437} 6</p>
        <p class="quiz__result-text">${generateResultText(count, "subtitle")}</p>
        <p class="quiz__result-description">${generateResultText(count, "text")}<button class="quiz__result-info"></button>
        <div class="quiz__result-promocode">
          <button class="quiz__result-close">
          </button>${(0, _data.dataResults).pomocodeText}</div>
        </p>
      </div>
      <a class="quiz__result-button" 
        target="_blank"
        href="https://www.vsk.ru/klientam/ipoteka?t=about&utm_source=yandex_promo&utm_medium=ipoteka&adrclid=DYL5lh3KnJy1dqguDmBXXJn3hRfDh7y1jILg_dq_NYNJsuAkC0Td2X1QPBm2pYSObQM_VCoW_Sf2LRpKN6fiY">
        \u{418}\u{441}\u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{43F}\u{440}\u{43E}\u{43C}\u{43E}\u{43A}\u{43E}\u{434}
      </a>
      <buttton class="quiz__result-button_close"></buttton>
    </div>
  </div>
  `;
};

},{"./data":"1N0GG","547d4b825eb8ee07":"ceq1t","d3d4ddd2740c03e0":"grUfi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ceq1t":[function(require,module,exports) {
module.exports = require("1f46267c47479353").getBundleURL("7XnOB") + "button_gray.8181a352.svg" + "?" + Date.now();

},{"1f46267c47479353":"lgJ39"}],"grUfi":[function(require,module,exports) {
module.exports = require("772ce443750a64c1").getBundleURL("7XnOB") + "button.8d621ddf.svg" + "?" + Date.now();

},{"772ce443750a64c1":"lgJ39"}]},["e7zDJ","j6eqU"], "j6eqU", "parcelRequire9b17")

//# sourceMappingURL=index.482d1c68.js.map
