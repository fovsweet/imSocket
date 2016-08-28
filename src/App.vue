<script>
   import Main from './components/Main'
   import Scroll from './components/Scroll'

   export default {
   	ready(){
   		this.init();
   	},
   	data(){
   		return {
   			offset:0
   		}
   	},
      components: {
         Main,Scroll
      },
      methods:{
      	init(){
				!function (a) {
				  function b() {
				      var b = g.getBoundingClientRect().width;
				      b / c > 640 && (b = 640 * c), a.rem = b / 16, g.style.fontSize = a.rem + "px"
				  }

				  var c, d, e, f = a.document, g = f.documentElement, h = f.querySelector('meta[name="viewport"]'), i = f.querySelector('meta[name="flexible"]');
				  if (h) {
				      console.warn("将根据已有的meta标签来设置缩放比例");
				      var j = h.getAttribute("content").match(/initial-scale=(["']?)([d.]+)1?/);
				      j && (d = parseFloat(j[2]), c = parseInt(1 / d))
				  } else if (i) {
				      var j = i.getAttribute("content").match(/initial-dpr=(["']?)([d.]+)1?/);
				      j && (c = parseFloat(j[2]), d = parseFloat((1 / c).toFixed(2)))
				  }
				  if (!c && !d) {
				      var k = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)), c = a.devicePixelRatio;
				      c = k ? c >= 3 ? 3 : c >= 2 ? 2 : 1 : 1, d = 1 / c
				  }
				  if (g.setAttribute("data-dpr", c), !h)if (h = f.createElement("meta"), h.setAttribute("name", "viewport"), h.setAttribute("content", "initial-scale=" + d + ", maximum-scale=" + d + ", minimum-scale=" + d + ", user-scalable=no"), g.firstElementChild)g.firstElementChild.appendChild(h); else {
				      var l = f.createElement("div");
				      l.appendChild(h), f.write(l.innerHTML)
				  }
				  a.dpr = c, a.addEventListener("resize", function () {
				      clearTimeout(e), e = setTimeout(b, 300)
				  }, !1), a.addEventListener("pageshow", function (a) {
				      a.persisted && (clearTimeout(e), e = setTimeout(b, 300))
				  }, !1), "complete" === f.readyState ? f.body.style.fontSize = 12 * c + "px" : f.addEventListener("DOMContentLoaded", function () {
				      f.body.style.fontSize = 12 * c + "px"
				  }, !1), b()
				}(window);
			},
			onRefresh (done) {
				let self = this
				setTimeout(function () {
					self.time = new Date()
					done()  // call done
				}, 2000)
			},
			onInfinite (done) {
				console.log('infinite')
				setTimeout(function () {
					var f = document.createDocumentFragment()
					for (let i = 0; i < 10; i++) {
						let p = document.createElement('p')
						p.textContent = 'Write some HTML, grab some JSON, create a Vue instance, that\'s it.'
						f.appendChild(p)
					}
					document.getElementById('list').appendChild(f)
					done()  // call done()
				}, 2000)
			}
      }
   }
</script>

<template>
   <div id="app">
   	<div class="content">
   		<Scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
				<Main></Main>
			</Scroll>
   	</div>
   </div>
</template>

<style lang='less'>
	/*@import './components/weui.css';*/
	[v-cloak] {
		display: none;
	}
	body, html {
		height: 100%;
		-webkit-tap-highlight-color: transparent;
		margin: 0;
	}
	* {
	    margin: 0;
	    padding: 0;
	}
	body {
	    position: absolute;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    overflow: hidden;
	    font-family: Helvetica Neue,Helvetica,sans-serif;
	    font-size: .85rem;
	    line-height: 1.5;
	    color: #3d4145;
	}
	.content{
		box-sizing: border-box;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
</style>
