# emoji
### 轻量的js表情插件


> **功能**

**功能：传递表情对应的字符格式到后台，后台返回字符串，前端将该字符串解析展示成相应的表情展示在页面上。**

> **使用方法：**

- **在option中配置需要的参数**

```

var option = {
      emojiArray: ['angry'],     //填写表情字符串的数组，【注：源文件image下面的图标，只需要写红框内的字符串，详见下图】 
      textareaId: 'emoji-editor',   //输入框的id 
      loadId: 'load',                //加载表情的id 
      emojiContainer: 'emojiContainer',    　//存储表情的容器对象 
      sendId: 'send',                   　　 //发送信息的按钮 id 
      emojiTranslateCls:'emoji-comment',//需要转换成表情（img）的容器类名，只需要添加一个类，即可自动将:kissing_heart:渲染成表情~ 
};

/*调用方法*/
var text = new Emoji(option);
text.init();

```
--- 
- **获取输入框的数据**
 
```
text.toText();   
```
---
- **将服务器返回的数据显示成表情 [只需给承载的容器加上类，即option的emojiTranslateCls]**
```
  <div class="emoji-comment"> fork我的github或者给赞:kissing_heart::kissing_heart::kissing_heart:么么哒:heart::heart::heart:
  </div>
  
```

[demo地址](http://121.42.190.17/demo/emoji/src/demo.html)



