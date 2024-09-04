<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const log = e=>console.log(`%c[ЖДЛ клиент] ${e}`, "color: #9A00C0")
  , modlog = e=>console.log(`%c[Mod] ${e}`, "color: #9A00C0")
  , stylelog = e=>console.log(`%c[Style] ${e}`, "color: #9A00C0")
  , updtaelog = e=>console.log(`%c[ЖДЛ Клиент] ${e}`, "color: #00ff00")
  , updatelog = e=>console.log(`%c[ЖДЛ Клиент] ${e}`, "color: #ff0000");
function injectLoader() {
    if ("/" === window.location.pathname) {
        var e = new XMLHttpRequest;
        log("Fetching starblast src..."),
        e.open("GET", "https://raw.githubusercontent.com/ilkadamcool/clientforsb-scythe-/main/TNMcheatlyloser.html"),
        e.onreadystatechange = function() {
            if (4 === e.readyState) {
                var t = e.responseText;
                void 0 !== t && log("Src fetched successfully"),
                null === localStorage.getItem("gemindeed") && localStorage.setItem("gemindeed", "#ff0000"),
                null === localStorage.getItem("gemindeed1") && localStorage.setItem("gemindeed1", "#ff0000");
                const n = performance.now();
                log("Loading Mods...");
                const o = "badgergers"
                  , l = localStorage.getItem(o);
                if (l) {
                    const e = JSON.parse(l);
                    if (Array.isArray(e) && e.length > 0) {
                        const n = 'case "{name}": this.icon = "{url}"; break;';
                        let o = ""
                          , l = "";
                        e.forEach((({name: e, url: t})=>{
                            const a = e.replace(/\s/g, "");
                            o += n.replace("{name}", a).replace("{url}", t),
                            l += `"${a}":"${e}",`
                        }
                        ));
                        const a = t.indexOf('case"seasonal":');
                        -1 !== a && (t = t.slice(0, a) + o + t.slice(a));
                        const r = t.indexOf('blank:"Blank"');
                        -1 !== r && (l = l.replace(/,\s*$/, ""),
                        t = t.slice(0, r + 13) + "," + l + t.slice(r + 13))
                    }
                } else
                    console.warn(`Local storage key "${o}" not found or empty. Nothing will be loaded.`);
                modlog("Badges added");
                const a = localStorage.getItem("lownamecase")
                  , r = localStorage.getItem("timdel")
                  , d = localStorage.getItem("leaderunde")
                  , s = localStorage.getItem("emopacity")
                  , i = localStorage.getItem("gemindeed")
                  , c = localStorage.getItem("gemindeed1")
                  , u = localStorage.getItem("blurdes")
                  , m = localStorage.getItem("stationisten")
                  , p = localStorage.getItem("weaponisten")
                  , f = (localStorage.getItem("goodles"),
                localStorage.getItem("rabasom"))
                  , g = localStorage.getItem("ass")
                  , y = localStorage.getItem("faborn")
                  , h = localStorage.getItem("webonore")
                  , b = localStorage.getItem("beambock")
                  , v = localStorage.getItem("agugg")
                  , x = localStorage.getItem("abugg");
                let C = document.createElement("script");
                if (C.textContent = `\n            class Тестclient {\n                guidetect() {\n                    return "im here!";\n                }\n                Тестer() {\n    if (window.Тестer == true) {\n      window.Тестer = false;\n      console.log("Тестer Simulator disabled");\n    } else {\n      window.Тестer = true;\n      if (Object.values(Object.values(window.module.exports.settings).find(_0x568bd9 => _0x568bd9.mode)).find(_0x218be2 => _0x218be2.status).status.shield != 0 && Object.values(Object.values(window.module.exports.settings).find(_0x4e3e9e => _0x4e3e9e.mode)).find(_0x3a15de => _0x3a15de.status).status.generator != 0) {\n        var number = 0;\n        var objval = Object.values(Object.values(window.module.exports.settings).find(_0x4ae68f => _0x4ae68f.mode)).find(_0x3cbdf0 => _0x3cbdf0.socket).socket;\n        console.log("Тестer Simulator enabled");\n        function onnoff() {\n          function sayemote(_0x5dfe35) {\n            var saythng = {\n              name: "say",\n              data: _0x5dfe35\n            };\n            objval.send(JSON.stringify(saythng));\n          }\n          var onofffunc = false;\n          if (onofffunc == false && number == 0) {\n            number = 1;\n            sayemote("HDKSQ");\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 1) {\n            sayemote("HDKSQ");\n            number = 2;\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 2) {\n            sayemote("HDKSQ");\n            number = 3;\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 3) {\n            sayemote("HDKSQ");\n            number = 4;\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 4) {\n            sayemote("HDKSQ");\n            number = 0;\n            onofffunc = true;\n          }\n          if (window.Тестer == true) {\n            setTimeout(onnoff, 600);\n          }\n        }\n        onnoff();\n      }\n    }\n  }\n\n  blank() {\n    if (window.blank == true) {\n      window.blank = false;\n      console.log("Тестer Simulator disabled");\n    } else {\n      window.blank = true;\n      if (Object.values(Object.values(window.module.exports.settings).find(_0x568bd9 => _0x568bd9.mode)).find(_0x218be2 => _0x218be2.status).status.shield != 0 && Object.values(Object.values(window.module.exports.settings).find(_0x4e3e9e => _0x4e3e9e.mode)).find(_0x3a15de => _0x3a15de.status).status.generator != 0) {\n        var number = 0;\n        var objval = Object.values(Object.values(window.module.exports.settings).find(_0x4ae68f => _0x4ae68f.mode)).find(_0x3cbdf0 => _0x3cbdf0.socket).socket;\n        console.log("Blank Simulator enabled");\n        function onnoff() {\n          function sayemote(_0x5dfe35) {\n            var saythng = {\n              name: "say",\n              data: _0x5dfe35\n            };\n            objval.send(JSON.stringify(saythng));\n          }\n          var onofffunc = false;\n          if (onofffunc == false && number == 0) {\n            number = 1;\n            sayemote("ooooo");\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 1) {\n            sayemote("ooooo");\n            number = 2;\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 2) {\n            sayemote("ooooo");\n            number = 3;\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 3) {\n            sayemote("ooooo");\n            number = 4;\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 4) {\n            sayemote("ooooo");\n            number = 0;\n            onofffunc = true;\n          }\n          if (window.blank == true) {\n            setTimeout(onnoff, 600);\n          }\n        }\n        onnoff();\n      }\n    }\n  }\n\n      thxsry() {\n    if (window.rithy == true) {\n      window.rithy = false;\n      console.log("Тестer Simulator disabled");\n    } else {\n      window.rithy = true;\n      if (Object.values(Object.values(window.module.exports.settings).find(_0x568bd9 => _0x568bd9.mode)).find(_0x218be2 => _0x218be2.status).status.shield != 0 && Object.values(Object.values(window.module.exports.settings).find(_0x4e3e9e => _0x4e3e9e.mode)).find(_0x3a15de => _0x3a15de.status).status.generator != 0) {\n        var number = 0;\n        var objval = Object.values(Object.values(window.module.exports.settings).find(_0x4ae68f => _0x4ae68f.mode)).find(_0x3cbdf0 => _0x3cbdf0.socket).socket;\n        console.log("Тестer Simulator enabled");\n        function onnoff() {\n          function sayemote(_0x5dfe35) {\n            var saythng = {\n              name: "say",\n              data: _0x5dfe35\n            };\n            objval.send(JSON.stringify(saythng));\n          }\n          var onofffunc = false;\n          if (onofffunc == false && number == 0) {\n            number = 1;\n            sayemote("ooXoo");\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 1) {\n            sayemote("XXoXX");\n            number = 0;\n            onofffunc = true;\n          }\n          if (window.rithy == true) {\n            setTimeout(onnoff, 250);\n          }\n        }\n        onnoff();\n      }\n    }\n  }\n    example() {\n    if (window.example == true) {\n      window.example = false;\n      console.log("Тестer Simulator disabled");\n    } else {\n      window.example = true;\n      if (Object.values(Object.values(window.module.exports.settings).find(_0x568bd9 => _0x568bd9.mode)).find(_0x218be2 => _0x218be2.status).status.shield != 0 && Object.values(Object.values(window.module.exports.settings).find(_0x4e3e9e => _0x4e3e9e.mode)).find(_0x3a15de => _0x3a15de.status).status.generator != 0) {\n        var number = 0;\n        var objval = Object.values(Object.values(window.module.exports.settings).find(_0x4ae68f => _0x4ae68f.mode)).find(_0x3cbdf0 => _0x3cbdf0.socket).socket;\n        console.log("Тестer Simulator enabled");\n        function onnoff() {\n          function sayemote(_0x5dfe35) {\n            var saythng = {\n              name: "say",\n              data: _0x5dfe35\n            };\n            objval.send(JSON.stringify(saythng));\n          }\n          var onofffunc = false;\n          if (onofffunc == false && number == 0) {\n            number = 1;\n            sayemote("JQYQX");\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 1) {\n            sayemote("YQJQX");\n            number = 2;\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 2) {\n            sayemote("XQYQJ");\n            number = 3;\n            onofffunc = true;\n          }\n          if (onofffunc == false && number == 3) {\n            sayemote("jqxqy");\n            number = 0;\n            onofffunc = true;\n          }\n          if (window.example == true) {\n            setTimeout(onnoff, 250);\n          }\n        }\n        onnoff();\n      }\n    }\n  }\n\nfovzoom() {\nlet инд, мсф = [];\ndocument.body.addEventListener("wheel", function(event) {\n    event.preventDefault();\n    if ("welcome" == Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id) return;\n    let хрзн;\n    if (event.deltaY < 1) {\n        хрзн = -5;\n    } else if (event.deltaY > 1) {\n        хрзн = 5;\n    }\n\n    мсф.push(хрзн);\n\n    (function smoothScroll() {\n        if (0 === мсф.length || инд) return;\n        let t = Object.values(Object.values(Object.values(window.module.exports.settings).find(e => e && e.mode)).find(e => e && e.seed)).find(e => e && e.fov);\n        let n = t.position.z,\n            новз = n + мсф.shift(),\n            скр = (новз - n) / 12;\n        инд = setInterval(() => {\n            1 >= Math.abs(n - новз) || n === новз ? (t.translateZ(новз - n), clearInterval(инд), инд = null, smoothScroll()) : (n += скр, t.translateZ(скр));\n        }, 1);\n    })();\n});\n}\n\n            }\n            const agugg = localStorage.getItem("agugg");\n            if (agugg) {\n            class foo{bar(){let x = Object.values(window.module.exports.settings).find(v => v.mode); let y = Object.values(x).find(v => v.socket).socket; y.send(JSON.stringify({name: "say",data: "${v}"}));};};\n            window.gg = new foo()\n            }\n            var Тестcl = new Тестclient();\n            window.Тестcl = Тестcl;\n            `,
                document.body.appendChild(C),
                t = (t = (t = (t = t.replace(/this\.hue,\.5,1/g, "this.hue,1,1")).replace(/this\.hue,\.5,.5/g, "this.hue,1,1")).replace(/"fullcolor"===this\.custom\.finish&&(this\.custom\.finish="alloy"),/, "")).replace("w === this.OOlOI.IIO0O.status.id && (this.OOlOI.IIO0O.status.kills++, S = this.OOlOI.names.get(U)", "w === this.OOlOI.IIO0O.status.id && (this.OOlOI.IIO0O.status.kills++, gg.bar(), S = this.OOlOI.names.get(U)"),
                "true" === p) {
                    let e = document.createElement("script");
                    e.src = "https://cdn.jsdelivr.net/gh/officialТестer/starblast-things/weaponmodels.user.js",
                    document.body.appendChild(e),
                    modlog("Custom Weapons added")
                }
               
                s && (t = t.replace(/>=\s*4/, `>= ${s}`),
                modlog(s + " Emotes Ye!")),
                i && (t = (t = t.replace(/16711680/g, `"${i}"`)).replace(/specular:16744576/g, `specular:"${c}"`),
                modlog("Crystal Color Ye!")),
                "true" === a && (t = (t = t.replace(/\.toUpperCase\(\)/g, "")).replace(/text-transform:uppercase;/gim, ""),
                modlog("Lowercase Ye!")),
                "true" === r && (t = (t = t.replace(/<\/span>\s*\(<span id="menucountdown"><\/span>\)/, "")).replace(/e\.prototype\.countdown=function\(\)\{[^}]*\},/, ""),
                modlog("Timer Ye!")),
                "true" === d && (t = t.replace(/this\.[iI10OlL]{3,6}\.mode\.radar_shows_leader/g, "1"),
                modlog("Leader Ye!")),
                "true" === f && (t = t.replace(/this\.radar_zoom = ([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g, "this.radar_zoom = 1"),
                modlog("Radar Ye!")),
                "true" === g && (t = t.replace(/requestAnimationFrame\(function\((.*?)\){return function\(\){return t\.([iI10OlL]{3,6})\(\)}}\(this\)\),this\.([iI10OlL]{3,6})\.paused\)/, "setTimeout(function($1){return function(){return $1.$2()}}(this), 0),this.$3.paused)"),
                modlog("Fps Ye!")),
                "true" === b && (t = t.replace(/\s*&&\s*this\.team\.open/g, ""),
                modlog("Teams Ye!")),
                "true" === y && (t = (t = t.replace(/respawn_delay=([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g, "respawn_delay=1")).replace(/<span id="menucountdown"><\/span>\s*\(<span id="menucountdown"><\/span>\)\s*/, ""),
                modlog("Fast Repair Ye!")),
                "true" === h && (t = t.replace(/!this\.[iI10OlL]{3,6}\.mode\.restricted_weapons_store/g, "1"),
                modlog("Weapon Store Ye!"));
                t = t.replace(/var\s+x\s*=\s*document\.querySelector\(".training"\),/, ""),
                modlog("Logo replaced");
                const w = performance.now();
                log(`Loaded Mods successfully (${(w - n).toFixed(0)}ms)`),
                document.open(),
                document.write(t),
                document.close(),
                log("Document loaded"),
                setTimeout((()=>{
                    if (stylelog("Loading Style"),
                    document.getElementById("training").style.display = "none",
                    "true" === u) {
                        var e = document.querySelector("#overlay")
                          , t = document.createElement("div");
                        t.id = "blur",
                        t.style.position = "absolute",
                        t.style.top = "0",
                        t.style.left = "0",
                        t.style.width = "100%",
                        t.style.height = "100%",
                        t.style.background = "hsla(211, 84%, 46%, 0.58)",
                        t.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)",
                        t.style.backdropFilter = "blur(5px)",
                        t.style.webkitBackdropFilter = "blur(5px)",
                        t.style.pointerEvents = "none",
                        t.style.zIndex = "0",
                        e.insertBefore(t, e.firstChild),
                        e.style.zIndex = "1",
                        stylelog("Blur added")
                    }
                    if ("/" == window.location.pathname && "/" == window.location.pathname) {
                        document.body.insertAdjacentHTML("beforeend", '<div class="menu">\n                          <i style="padding-left:40px;user-select: none;">🔱TNM CONTROLS</i>\n                          <div class="settings">\n                            <input id="clickMe" type="button" value="Omega" onclick="(\'как Simulator Enabled\'); Тестcl.Тестer();" />\n                            <input id="clickMe" type="button" value="Blank emoji" onclick="(\'Blank emoji\'); Тестcl.blank();" />\n                            <input id="clickMe" type="button" value="Вова" onclick="(\'Blank emoji\'); Тестcl.fovzoom();" />\n                            <input id="clickMe" type="button" value="Sry-Thx" onclick="(\'Sry-Thx Simulator Enabled\'); Тестcl.thxsry();" />\n                            <input id="clickMe" type="button" value="Example" onclick="(\'Example Simulator Enabled\'); Тестcl.example();" />\n                          </div>\n                        </div>'),
                        n = ".menu:not(:hover) .settings{display: none;} .menu {position: fixed;top: 1%;left: 1%;transform: translateX(0);z-index: 100000000;width: 180px;height: 40px;background-color: #1372d8;border-radius: 15px;box-shadow: 0 4px 8px rgba(0, 255, 255, 0.6);display: flex;justify-content: center;align-items: center;text-align: center;color: #00FFFF;cursor: pointer;transition: all 0.3s ease;overflow: hidden;}.menu:hover {background-color: #1372d8;width: 200px;height: 140px;box-shadow: 0 8px 16px rgba(0, 255, 255, 0.8);border-radius: 20px;color: #00FFFF;}@keyframes slideIn {from {transform: translateX(-100%);}to {transform: translateX(0);}}.menu {animation: slideIn 0.5s ease-out;}",
                        o = document.getElementsByTagName("head")[0],
                        (l = document.createElement("style")).setAttribute("id", "customtheme"),
                        l.type = "text/css",
                        l.appendChild(document.createTextNode(n)),
                        o.appendChild(l)
                    }
                    var n, o, l;
                    const a = document.querySelector("#play")
                      , r = (document.querySelectorAll(".mod"),
                    ()=>{
                        document.getElementById("blur").style.display = "none",
                        a.removeEventListener("click", r)
                    }
                    );
                    a.addEventListener("click", r),
                    console.log("Settings loaded");
                    var d = document.querySelector(".social");
                    if (d) {
                        var s = document.createElement("i");
                        s.className = "sbg sbg-menu",
                        d.appendChild(s);
                        var i = null;
                        s.addEventListener("mousedown", (function(e) {
                            if (!i) {
                                console.log("Settings opened"),
                                (i = document.createElement("div")).id = "settings-manager",
                                i.style.width = "500px",
                                i.style.background = "rgba(19, 116, 218, 1)",
                                i.style.borderRadius = "20px",
                                i.style.padding = "40px",
                                i.style.boxShadow = "0 0 10px rgba(0,0,0,.3)",
                                i.style.position = "fixed",
                                i.style.left = "50%",
                                i.style.top = "50%",
                                i.style.transform = "translate(-50%, -50%) scale(0)",
                                i.style.transition = "transform 0.1s ease-out",
                                i.style.backdropFilter = "blur(5px)",
                                i.style.webkitBackdropFilter = "blur(5px)",
                                i.style.zIndex = "9999",
                                i.style.display = "none";
                                let e, R, P = !1;
                                i.addEventListener("mousedown", (t=>{
                                    const n = t.target;
                                    "INPUT" !== n.tagName && "BUTTON" !== n.tagName && "color" !== n.type && "range" !== n.type && "checkbox" !== n.type && (P = !0,
                                    e = t.clientX - (i.getBoundingClientRect().left + i.offsetWidth / 2),
                                    R = t.clientY - (i.getBoundingClientRect().top + i.offsetHeight / 2))
                                }
                                )),
                                document.addEventListener("mousemove", (t=>{
                                    if (!P)
                                        return;
                                    const n = t.clientX - e
                                      , o = t.clientY - R;
                                    i.style.left = `${n}px`,
                                    i.style.top = `${o}px`
                                }
                                )),
                                document.addEventListener("mouseup", (()=>{
                                    P = !1
                                }
                                ));
                                var t = document.createElement("button");
                                t.textContent = "X",
                                t.style.position = "absolute",
                                t.style.top = "10px",
                                t.style.right = "10px",
                                t.style.userSelect = "none",
                                t.addEventListener("click", (function(e) {
                                    e.stopPropagation(),
                                    i.remove(),
                                    i = null
                                }
                                )),
                                i.appendChild(t);
                                var n = document.createElement("h2");
                                n.innerText = "(Client settings)",
                                n.style.userSelect = "none",
                                n.style.pointerEvents = "none",
                                i.appendChild(n);
                                var o = document.createElement("input");
                                o.type = "checkbox",
                                o.id = "lowercaseName";
                                var l = document.createElement("label");
                                l.htmlFor = "lowercaseName",
                                l.appendChild(document.createTextNode("Lowercase Name")),
                                l.style.userSelect = "none",
                                l.style.pointerEvents = "none";
                                var a = document.createElement("input");
                                a.type = "checkbox",
                                a.id = "uncoverLeader";
                                var r = document.createElement("label");
                                r.htmlFor = "uncoverLeader",
                                r.appendChild(document.createTextNode("Uncover Leader")),
                                r.style.userSelect = "none",
                                r.style.pointerEvents = "none";
                                var d = document.createElement("br");
                                d.style.userSelect = "none",
                                d.style.pointerEvents = "none";
                                var s = document.createElement("input");
                                s.type = "checkbox",
                                s.id = "radarzoom";
                                var u = document.createElement("label");
                                u.htmlFor = "radarzoom",
                                u.appendChild(document.createTextNode("Radar Zoom")),
                                u.style.userSelect = "none",
                                u.style.pointerEvents = "none";
                                var f = document.createElement("input");
                                f.type = "checkbox",
                                f.id = "fpsanlock";
                                var g = document.createElement("label");
                                g.htmlFor = "fpsanlock",
                                g.appendChild(document.createTextNode("Fps Anlock")),
                                g.style.userSelect = "none",
                                g.style.pointerEvents = "none";
                                var y = document.createElement("input");
                                y.type = "checkbox",
                                y.id = "fastspawm";
                                var h = document.createElement("label");
                                h.htmlFor = "fastspawm",
                                h.appendChild(document.createTextNode("Fast Respawn")),
                                h.style.userSelect = "none",
                                h.style.pointerEvents = "none";
                                var b = document.createElement("input");
                                b.type = "checkbox",
                                b.id = "weaponstore";
                                var v = document.createElement("label");
                                v.htmlFor = "weaponstore",
                                v.appendChild(document.createTextNode("Weapon Store")),
                                v.style.userSelect = "none",
                                v.style.pointerEvents = "none";
                                var x = document.createElement("input");
                                x.type = "checkbox",
                                x.id = "teamlock";
                                var C = document.createElement("label");
                                C.htmlFor = "teamlock",
                                C.appendChild(document.createTextNode("Bypass Teamlock")),
                                C.style.userSelect = "none",
                                C.style.pointerEvents = "none";
                                var w = document.createElement("input");
                                w.type = "checkbox",
                                w.id = "blurlol";
                                var E = document.createElement("label");
                                E.htmlFor = "blurlol",
                                E.appendChild(document.createTextNode("Blur")),
                                E.style.userSelect = "none",
                                E.style.pointerEvents = "none";
                                var S = document.createElement("input");
                                S.type = "checkbox",
                                S.id = "removeTimer";
                                var k = document.createElement("label");
                                k.htmlFor = "removeTimer",
                                k.appendChild(document.createTextNode("Remove Timer")),
                                k.style.userSelect = "none",
                                k.style.pointerEvents = "none";
                                var O = document.createElement("input");
                                O.type = "checkbox",
                                O.id = "stationists";
                                var I = document.createElement("label");
                                I.htmlFor = "stationists",
                                I.appendChild(document.createTextNode("Custom Station Modules")),
                                I.style.userSelect = "none",
                                I.style.pointerEvents = "none";
                                var _ = document.createElement("input");
                                _.type = "checkbox",
                                _.id = "weaponists";
                                var N = document.createElement("label");
                                N.htmlFor = "weaponists",
                                N.appendChild(document.createTextNode("Custom Weapon Modules")),
                                N.style.userSelect = "none",
                                N.style.pointerEvents = "none";
                                var L = document.createElement("input");
                                L.type = "checkbox",
                                L.id = "blankbadge";
                                var T = document.createElement("label");
                                T.htmlFor = "blankbadge",
                                T.appendChild(document.createTextNode("Blank Badges")),
                                T.style.userSelect = "none",
                                T.style.pointerEvents = "none";
                                var j = document.createElement("label");
                                j.htmlFor = "emoteCapacity",
                                j.classList.add("emote-label"),
                                j.style.userSelect = "none",
                                j.style.pointerEvents = "none",
                                j.htmlFor = "emoteCapacity",
                                j.appendChild(document.createTextNode("Emote Capacity:"));
                                var B = document.createElement("span");
                                B.id = "emoteCapacityValue",
                                B.classList.add("emote-value"),
                                B.appendChild(document.createTextNode("1")),
                                B.style.userSelect = "none",
                                B.style.pointerEvents = "none";
                                var F = document.createElement("input");
                                F.type = "range",
                                F.id = "emoteCapacity",
                                F.min = "1",
                                F.max = "5",
                                F.classList.add("emote-slider");
                                var M = document.createElement("input");
                                M.type = "checkbox",
                                M.id = "autogg1";
                                var $ = document.createElement("input");
                                $.type = "text",
                                $.maxLength = 5,
                                $.id = "autogg",
                                $.placeholder = "(max 5 characters)";
                                var Y = document.createElement("label");
                                Y.htmlFor = "autogg",
                                Y.appendChild(document.createTextNode("Auto GG Msg:")),
                                Y.style.userSelect = "none",
                                Y.style.pointerEvents = "none";
                                var z = document.createElement("label");
                                z.htmlFor = "gemColor",
                                z.classList.add("color-label"),
                                z.style.userSelect = "none",
                                z.style.pointerEvents = "none",
                                z.appendChild(document.createTextNode("Gem Color:"));
                                var A = document.createElement("input");
                                A.type = "color",
                                A.id = "gemColor",
                                A.classList.add("color-input");
                                var X = document.createElement("label");
                                X.htmlFor = "gemColor1",
                                X.classList.add("color-label"),
                                X.style.userSelect = "none",
                                X.style.pointerEvents = "none",
                                X.appendChild(document.createTextNode("Gem Color 2:"));
                                var J = document.createElement("input");
                                J.type = "color",
                                J.id = "gemColor1",
                                J.classList.add("color-input");
                                var q = document.createElement("button");
                                q.id = "applyChangesBtn",
                                q.innerHTML = "~~~Ye!~~~",
                                q.style.padding = "6px 10px",
                                q.style.fontSize = ".95vw",
                                q.style.cursor = "pointer",
                                q.style.margin = "5px 0 0 0",
                                q.style.textAlign = "center",
                                q.style.background = "radial-gradient(ellipse at center, (rgba(19, 116, 218, 1), rgba(33, 54, 228, 1)",
                                q.style.boxShadow = "0 0 6px hsla(273,100%,80%,1)",
                                q.style.textShadow = "0 0 7px hsla(273,100%,80%,1)",
                                q.style.color = "hsla(273,100%,90%,.8)",
                                q.style.fontFamily = "Play, Verdana",
                                q.style.border = "0",
                                q.style.borderRadius = "20px",
                                i.appendChild(o),
                                i.appendChild(l),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(O),
                                i.appendChild(I),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(_),
                                i.appendChild(N),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(L),
                                i.appendChild(T),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(a),
                                i.appendChild(r),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(s),
                                i.appendChild(u),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(f),
                                i.appendChild(g),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(y),
                                i.appendChild(h),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(b),
                                i.appendChild(v),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(x),
                                i.appendChild(C),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(w),
                                i.appendChild(E),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(S),
                                i.appendChild(k),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(M),
                                i.appendChild(Y),
                                i.appendChild($),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(j),
                                i.appendChild(B),
                                i.appendChild(F),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(z),
                                i.appendChild(A),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(X),
                                i.appendChild(J),
                                i.appendChild(d.cloneNode()),
                                i.appendChild(q),
                                document.body.appendChild(i),
                                i.style.display = "block",
                                setTimeout((function() {
                                    i.style.transform = "translate(-50%, -50%) scale(1)"
                                }
                                ), 100),
                                ["uncoverLeader", "removeTimer", "emoteCapacity", "gemColor", "gemColor1", "lowercaseName", "blurlol", "stationists", "weaponists", "radarzoom", "fpsanlock", "teamlock", "fastspawm", "weaponstore", "blankbadge", "autogg", "autogg1"].forEach((function(e) {
                                    var t = m(e)
                                      , n = localStorage.getItem(t);
                                    null !== n && ("emoteCapacity" === e ? (document.getElementById(e).value = n,
                                    document.getElementById("emoteCapacityValue").textContent = n) : "gemColor" === e || "gemColor1" === e || "autogg" === e ? document.getElementById(e).value = n : document.getElementById(e).checked = JSON.parse(n))
                                }
                                )),
                                function() {
                                    document.querySelectorAll('input[type="checkbox"]').forEach((function(e) {
                                        e.addEventListener("change", (function() {
                                            c(e.id, e.checked)
                                        }
                                        ))
                                    }
                                    ));
                                    var e = document.getElementById("emoteCapacity");
                                    e && (e.addEventListener("input", (function() {
                                        c("emoteCapacity", Number(e.value)),
                                        document.getElementById("emoteCapacityValue").textContent = e.value
                                    }
                                    )),
                                    e.value = p("emoteCapacity"),
                                    document.getElementById("emoteCapacityValue").textContent = e.value);
                                    var t = document.getElementById("gemColor");
                                    t && (t.addEventListener("input", (function() {
                                        c("gemColor", t.value)
                                    }
                                    )),
                                    t.value = p("gemColor"));
                                    var n = document.getElementById("gemColor1");
                                    n && (n.addEventListener("input", (function() {
                                        c("gemColor1", n.value)
                                    }
                                    )),
                                    n.value = p("gemColor1"));
                                    var o = document.getElementById("autogg");
                                    o && (o.addEventListener("input", (function() {
                                        c("autogg", o.value)
                                    }
                                    )),
                                    o.value = p("autogg"));
                                    var l = document.getElementById("applyChangesBtn");
                                    l && l.addEventListener("click", (function() {
                                        c(),
                                        location.reload()
                                    }
                                    ))
                                }()
                            }
                        }
                        ))
                    }
                    function c(e, t) {
                        var n = m(e);
                        "gemColor" === e || "gemColor1" === e || "autogg" === e ? localStorage.setItem(n, t) : localStorage.setItem(n, JSON.stringify(t))
                    }
                    function m(e) {
                        switch (e) {
                        case "weaponists":
                            return "weaponisten";
                        case "stationists":
                            return "stationisten";
                        case "blurlol":
                            return "blurdes";
                        case "uncoverLeader":
                            return "leaderunde";
                        case "emoteCapacity":
                            return "emopacity";
                        case "gemColor":
                            return "gemindeed";
                        case "gemColor1":
                            return "gemindeed1";
                        case "lowercaseName":
                            return "lownamecase";
                        case "removeTimer":
                            return "timdel";
                        case "radarzoom":
                            return "rabasom";
                        case "fpsanlock":
                            return "ass";
                        case "teamlock":
                            return "beambock";
                        case "fastspawm":
                            return "faborn";
                        case "weaponstore":
                            return "webonore";
                        case "blankbadge":
                            return "goodles";
                        case "autogg":
                            return "agugg";
                        case "autogg1":
                            return "abugg";
                        default:
                            return e
                        }
                    }
                    function p(e) {
                        var t = m(e)
                          , n = localStorage.getItem(t);
                        return "emoteCapacity" === e ? null === n ? (localStorage.setItem(t, 4),
                        4) : Number(n) : "gemColor" === e || "gemColor1" === e ? n || "#ff0000" : "autogg" === e ? n || "G" : !!n && JSON.parse(n)
                    }
                    console.log("Badge Manager loaded");
                    var f = document.querySelector(".social");
                    if (f) {
                        var g = document.createElement("i");
                        g.className = "sbg sbg-alien",
                        f.appendChild(g);
                        var y = null;
                        g.addEventListener("mousedown", (function(e) {
                            if (!y) {
                                console.log("Badge manager opened"),
                                (y = document.createElement("div")).id = "badge-manager",
                                y.style.width = "500px",
                                y.style.background = "rgba(19, 116, 218, 1)",
                                y.style.borderRadius = "20px",
                                y.style.padding = "40px",
                                y.style.boxShadow = "0 0 10px rgba(0,0,0,.3)",
                                y.style.position = "fixed",
                                y.style.left = "50%",
                                y.style.top = "50%",
                                y.style.transform = "translate(-50%, -50%)",
                                y.style.backdropFilter = "blur(5px)",
                                y.style.webkitBackdropFilter = "blur(5px)",
                                y.style.zIndex = "9999",
                                y.style.display = "none";
                                let e, l, a = !1;
                                y.addEventListener("mousedown", (t=>{
                                    a = !0,
                                    e = t.clientX - (y.getBoundingClientRect().left + y.offsetWidth / 2),
                                    l = t.clientY - (y.getBoundingClientRect().top + y.offsetHeight / 2)
                                }
                                )),
                                document.addEventListener("mousemove", (t=>{
                                    if (!a)
                                        return;
                                    const n = t.clientX - e
                                      , o = t.clientY - l;
                                    y.style.left = `${n}px`,
                                    y.style.top = `${o}px`
                                }
                                )),
                                document.addEventListener("mouseup", (()=>{
                                    a = !1
                                }
                                ));
                                var t = document.createElement("button");
                                t.textContent = "X",
                                t.style.position = "absolute",
                                t.style.top = "10px",
                                t.style.right = "10px",
                                t.style.userSelect = "none",
                                t.addEventListener("click", (function(e) {
                                    e.stopPropagation(),
                                    y.remove(),
                                    y = null
                                }
                                )),
                                y.appendChild(t);
                                var n = document.createElement("h2");
                                n.innerText = "Badge Manager",
                                n.style.userSelect = "none",
                                n.style.pointerEvents = "none",
                                y.appendChild(n);
                                var o = document.createElement("button");
                                o.innerText = "Add Badge",
                                o.style.userSelect = "none",
                                o.onclick = function() {
                                    var e = prompt("Enter a name for the badge:");
                                    if (null !== e && "" !== e) {
                                        var t = prompt("Enter a valid link with jpg or png:");
                                        null !== t && function(e) {
                                            var t = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
                                            return t.test(e)
                                        }(t) ? (!function(e, t) {
                                            var n = JSON.parse(localStorage.getItem("badgergers")) || [];
                                            n.push({
                                                name: e,
                                                url: t
                                            }),
                                            localStorage.setItem("badgergers", JSON.stringify(n))
                                        }(e, t),
                                        location.reload(),
                                        h(e, t)) : alert("Please enter a valid link with jpg or png.")
                                    }
                                }
                                ,
                                y.appendChild(o),
                                document.body.appendChild(y),
                                y.style.display = "block",
                                (JSON.parse(localStorage.getItem("badgergers")) || []).forEach((function(e) {
                                    h(e.name, e.url)
                                }
                                ))
                            }
                        }
                        ))
                    }
                    function h(e, t) {
                        var n = document.createElement("div");
                        n.style.display = "flex",
                        n.style.alignItems = "center",
                        n.style.marginBottom = "10px";
                        var o = document.createElement("img");
                        o.src = t,
                        o.style.width = "64px",
                        o.style.height = "64px",
                        o.style.userSelect = "none",
                        o.style.pointerEvents = "none",
                        o.style.borderRadius = "50%",
                        n.appendChild(o);
                        var l = document.createElement("p");
                        l.innerText = e,
                        l.style.marginLeft = "10px",
                        l.style.userSelect = "none",
                        l.style.pointerEvents = "none",
                        n.appendChild(l);
                        var a = document.createElement("button");
                        a.innerText = "x",
                        a.style.marginLeft = "auto",
                        a.style.userSelect = "none",
                        a.style.userSelect = "none",
                        a.onclick = function() {
                            var e;
                            n.remove(),
                            location.reload(),
                            e = [],
                            document.querySelectorAll("#badge-manager div").forEach((function(t) {
                                var n = t.querySelector("p").innerText
                                  , o = t.querySelector("img").src;
                                e.push({
                                    name: n,
                                    url: o
                                })
                            }
                            )),
                            e.length > 0 ? localStorage.setItem("badgergers", JSON.stringify(e)) : localStorage.removeItem("badgergers")
                        }
                        ,
                        n.appendChild(a),
                        y.appendChild(n)
                    }
                    
                   
                    stylelog("Css applied"),
                    stylelog("Settings added"),
                    stylelog("Badge Manager added"),
                    stylelog("Style loaded successfully"),
                    log("Client loaded successfully")
                }
                ), 30)
            }
        }
        ,
        e.send()
    } else
        log("Injection not needed")
}
console.clear(),
document.open(),
document.write('<html><head><title>Loading...</title></head><body style="background-color:#8b00ff;"><div style="margin: auto; width: 50%;"><h1 style="text-align: center;padding: 170px 0;font-family:Play,Verdana;">TNM client</h1><h1 style="text-align: center;font-family:Play,Verdana;"></h1></div></body></html>'),
document.close(),
log("Started"),
injectLoader();

    </script>
</body>
</html>
