设计模式
> 1.单体模式:只有一个实例，重复创建出来的实例都指向第一个new出来的对象;最后可理解为在构造函数里面创建一个实例，然后覆盖构造函数，利用闭包缓存实例
```
function Universe() {
  // 缓存实例
  var instance;

  // 重写构造函数
  Universe =  function () {
    return instance;
  }

  // 保留原型属性
  Universe.prototype = this

  // 实例
  instance = new Universe()

  // 重置构造函数
  instance.constructor = Universe;

  // 所有功能
  instance.start_name = 0;
  instance.bang = 'Big';

  return instance;
}
```

> 工厂模式: 建立一个公共的构造函数,在构造函数上面建立一个静态方法(不能被继承，所以写法是CarMaker.factory),最后在这个静态方法上面传递类型，在里面实现创建实例,最后返回一个实例处出来，达到工厂模式创建
```
function CarMaker () {
  CarMaker.prototype.drive = function () {
    return 'Vroom, I have' + this.doors + 'doors';
  }
}

CarMaker.factory = function (type){
  var constr = type,
  newcar;

  // 如果构造函数不存在，则发生报错
  if(typeof CarMaker[constr] !== 'function'){
    throw {
      name: 'Error',
      message: constr + " doesn't exist"
    };
  }

  // 当存在构造函数的时候，进行下一步
  // 原型继承父类，但仅继承一次
  if(typeof CarMaker[constr].prototype.drive !== 'function'){
    CarMaker[constr].prototype = new CarMaker()
  }
  // 创建一个实例
  newcar = new CarMaker[constr]
  // 返回实例
  return newcar;
}

// 先创建一个构造函数，准备创建一个Compact实例
 CarMaker.Compact = function() {
   this.door = 5
 }

 // 利用CarMaker创建实例
 var compact = CarMaker.factory('Compact') //  类似 new CarMaker.Compact()
 compact.door  //5 
```

> 3.迭代器模式:跟es6里面的迭代器差不多，不过es6后面出了生成器

> 4.装饰者模式:

> 5.策略者模式:验证表单

> 6.外观模式

> 7.代理模式

> 8.中介者模式
### 今周计划:写一个验证器