<script>
	
</script>

<template>
<div class="chat_fixed">
	<div class="chat-send">
		<div class="send-group">
			<span class="add-icon js-chat-fun">
				<input type="file" id="file_name" name="file_name" accept="image/*;capture=camera" onchange="getSrc('file_name')">
			</span>
			<span class="voice-icon voice"></span>
			<span class="voice-icon keyboard"></span>
			<input class="chat-input befor_chat" id="saytext" type="text" placeholder="在这里输入文字开始聊天">
			<div class="voice-speak "  ontouchstart="return false;" style="display: none"  id="startRecord"><span>按住&nbsp;&nbsp;说话</span></div>
			<div class="voice-speak "ontouchstart="return false;"  style="display: none" id="stopRecord"><span>松开&nbsp;&nbsp;发送</span></div>
			<!--- 灰色发送按钮
			<button class="btn btn-send disabled" type="button">发送</button>
			-->
			<span class="smile-icon emotion"></span>
			<button class="btn btn-send js-dialog" data-role="js-classGroup" type="button">发送</button>
		</div>
		<div class="chat-func">
			<span class="simg-icon">
				<input type="file" accept="image/*;capture=camera">
			</span>
			<span class="phone-icon"></span>
		</div>
		<div class="smile-face"></div>
	</div>
</div>
	
</template>

<style lang='less'>
.chat_fixed {
	background: #fff;
	position: fixed;
	bottom:0px;
	left:0px;
	width:100%;
}

.list .add-icon {
	padding: 0.25rem 0;
	width: 100%;
	display: flex;
	align-items: center;
}

.add-icon {
	display: inline-block;
	width: 35px;
	height: 1rem;
	background: url('../assets/phone-icon.png') no-repeat 0 5px;
	background-size: 31px;
	vertical-align: top;
	overflow: hidden;
	display:none;
}

.chat-send {
	background: #fff;
	height:100%;
}

.btn {
	border-radius: 3px;
	background:#ff900c;
	color: #fff;
	font-size:0.75rem;
	border: 1px solid #ff900c;
	outline: none;
}

.send-group {
	display:-webkit-flex;
	display: -moz-box;
	display: -o-box;
	display: -ms-flexbox;
	display: flex;
	display:flex;
	flex-wrap:nowrap;
	background:#f3f3f5;
	padding:0.20rem 0.5rem;
	padding:0.20rem 0.2rem;
	border-top:0.5px solid rgba(187, 187, 187, 0.80);
	border-bottom: 0.5px solid rgba(187, 187, 187, 0.80);
}

.send-group:after{
	content:'';
	display:block;
	clear:both;
}

.chat-input {
	display: inline-block;
	margin:0;
	min-height: 1.5rem;
	height:auto;
	width:12rem;
	border:0.5px solid #bbb;
	outline: none;
	border-radius: 3px;
	vertical-align: top;
	background:#fff;
	font-size:0.6rem;
	line-height:1.2;
	vertical-align: middle;
	margin-right:10px;
	padding-left:10px;
	box-shadow:none;
	-webkit-appearance: none;
	-webkit-box-sizing:border-box;
	-webkit-user-modify: read-write-plaintext-only;
}

.befor_chat{}

.chat-input img{width:0.5rem;height:0.5rem;}
.voice-speak{
	display: inline-block;
	margin:0;
	padding:0.25rem 0.3rem;
	min-height: 1.5rem;
	height:auto;
	width:10rem;
	border:0.5px solid #313131;
	border-radius: 3px;
	vertical-align: top;
	background:#e8e8e8;
	color: #666666;
	text-align:center;
	font-size: 0.75rem;
}
.btn-send {
	padding: 0 0.25rem;
	height:1.5rem;
	line-height:1.5rem;
	border: none;
	width:4rem;
}

.btn-send.disabled {
	border: 1px solid #cccccc;
	background: #cccccc;
}

.chat-func {
	padding: 0.25rem 0;
	display: none;

}

.chat-func span {
	margin-left: 0.25rem;
}


.qqFace{
	padding-bottom: 0.25rem;
	width: 100%;
	background: #fff;
	position: static;
}
</style>