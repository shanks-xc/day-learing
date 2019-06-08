> 作用域
* 分为LHS和RHS, var a = 2 分为2步，第一步先声明变量， var a, 第二步 a = 2查询并进行赋值
```
function foo (a){
  console.log (b + a)
  b = a
}
foo(2) // 报错 b不存在
function foo (a){
  console.log (b + a)
  var b = a
}
foo(2) // undefiend
```

> eval 跟 with都能欺骗作用域
* eval
```
typeof('({"a":1})') 字符窜
typeof eval('({"a":1})') 对象 解析成为对象
```

* with 延长作用域
```
var obj = {a:2,b:3}
with(obj){
  a = 4
}
obj // {a:4,b:3}
```
> for循环只会造成全局变量
> try catch中 catch是拥有块级作用域的,let const可创造块级作用域
```
try{
	var d = 4
} catch(err){
	var dd = 44
}
d //4
dd // undefined
```


