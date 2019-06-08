> let 命令

- 不存在变量提升

```
console.log(foo)
let foo = 2 // ReferenceError 如果是var的是不会报错，会出现undefined,因为var变量提升了
```

- 暂时性死区
  不受外部影响，形成块级作用域， 块级作用域有效阻止 for 循环的污染全局变量
- 不允许重复声明
- let,const,class 声明的全局变量不属于全局对象的属性

```
let name = 'shanks'
console.log(window.name)  // undefined

var name = 'shanks'
console.log(windos.name) // shanks
```

> const  命令

-  一旦声明，其值就不能改变
- 同样不存在变量提升
- 对于复合类型来说，const 指向一个地址，也就是说值是可以改变的

```
const animal = []
animal.push('dog')  //不报错
animal = ['dog']  //报错
```

- Object.freeze 对象冻结

```
const foo = Object.freeze({}) 
foo.push('shanks')  //不起作用
```

- 跨模块常量

```
export const A = 1
import {A} from 'XXX.js'
```

> es6 一共有 6 种声明变量的方法

- var
- function
- let
- const
- import
- class
  >
