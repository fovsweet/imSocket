<script>
	export default{
		data(){
			return {
				time:new Date()
			}
		},
		methods:{
			handle( ev, words){
				console.log(words);
			}
		}
	}
</script>

<template>
	<div class="content-padded" v-gesture:touchmove="handle($event, 'touchmove')">
		<div class='content-padded' id="list">
         <h2>current time: {{time}}</h2>
         <h3>Pull to refresh and infinite scroll</h3>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
         <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        </div>
	</div>
</template>

<style lang='less'>
	.content-padded{
	    margin: .5rem;
	}
   h2{
      font-size:1rem;
   }
   h3{
      font-size:0.8rem
   }
   p{
      font-size:0.75rem
   }
</style>