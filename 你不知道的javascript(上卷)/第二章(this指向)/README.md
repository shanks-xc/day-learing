> this指向问题
* this跟调用者有关
```
var obj = {
id: "awesome",
         cool: function coolFn() {
             console.log( this.id );
} };
var id = "not awesome"
obj.cool(); // awesome
setTimeout( obj.cool, 100 ); // not awesome
```

> this和对象原型
* this的指向永远是你的调用者
```
var a = 2
foo.a = 3
function foo () {
    console.log(this.a)
}
foo() //2
```
* 隐式绑定
```
var a = 1
function foo () {
    console.log(this.a)
}
var obj = {
    a:3,
    foo:foo
}
obj.foo()  // a 当obj.foo()调用时，这时候上下文的调用对象就是obj,所以当前this指向obj

var bar = obj.foo
bar() // 1 这时候this指向是window,所以this指向就是看谁调用this就是指向谁
```

* 显式绑定:call,apply主要解决绑定丢失的问题
```
var a = 1
function foo () {
    console.log(this.a)
}
var obj = {
    a:3,
    foo:foo
}
obj.foo.call(window)  //1  这时候用call改变调用者为window，并且立即执行 
```

* 硬绑定:var bar = foo.bind(obj) 不会立即执行,bind的传惨跟call一样
```
funciton foo(){
    console.log(this.a)
}
obj  = {
    a:2
}
var bar = function () {
    foo.call(obj)
}
bar() // 2
bar.call(window)  // 2 因为在bar内部就已经硬性绑定了

最后出了一个bind的辅助函数 
bind(fn,obj){
    return function () {
        renturn fn.apply(obj)
    }
}
最后集成在Function.prototype.bind中
var bar = foo.bind(obj)
bar 的指向就硬性指向到obj中，不受调用者影响
```

* new绑定:会发生4个过程
```
1.创建(构造)一个新的对象
2.这个新对象会被执行[Prototype]连接
3.这个新对象会绑定到函数调用的this
4.如果函数没有返回其他函数，那么new表达式中的函数会自动调用返回这个新对象
```

* 最后this指向的优先顺序 new>硬式绑定(bind),显式(call,apply)>隐式

* 柯里化(预先设置一些函数)
```
function foo(a,b){
    return a + b
}
var bar = foo.bind('hello')
new bar('shanks')  // hello shanks
``` 

* 有时候apply,bind 会传入一个null
```
传入null其实会绑定默认对象，等于绑定this，但是呢用apply可以用数组当作参数，bind可以做一些柯里化
function foo(a,b){
    console.log('a:' + a + ', b:' + b );
}
foo.apply(null,[1,2])  // a:1,b:2 数组作为参数 在es6可以使用...[]展开符号 代替
var bar = foo.bind(null,1)  // 先传递了一个1
bar(2) // a:1,b:2 //柯里化 
```
* Object.create(null)这个创建对象的方法不会继承原型链

* 软绑定,跟硬绑定的区别就是可以使用call,apply,里面判断条件就是当绑定不是window的时候，就能进行显式绑定

### 总结:
```
假如想使用默认绑定的话，可以利用Object.create(null) 创建DMZ对象来保护全局对象
1.由new创建的时候，绑定到新建对象
2.call,apply,(bind)绑定到指定对象
3.上下文调用，调用对象
4.默认绑定到默认对象 严格模式undefined 否则全局，window或者global(node)
```