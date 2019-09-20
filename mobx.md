## mobx 的使用

[mobx](https://blog.csdn.net/weixin_34248023/article/details/88928046)
[mobx 与 mobx-react](https://blog.csdn.net/sinat_17775997/article/details/82765771)
```javascript
import {
  observable,
  action,
  computed
} from "mobx"; // 
```

##  1、@observable 
修饰的内容称为可观察对象

##  2、@observer 
修饰的内容称为观察者 通常用于修饰一个组件 这个组件中使用的 store 中的 `可观察对象` 发生变化时就会出发该组件的重新 render 达到显示刷新的效果

## 3、@action 
被称为动作，只有在 被 @action 修饰的方法中才可以修改 被 @observable 修饰的对象(一般来说这就是 react 中的 state)
## 4、computed

计算值(computed values)是可以根据现有的状态或其它计算值衍生出的值。
getter：获得计算得到的新state并返回。
setter： 不能用来直接改变计算属性的值，但是它们可以用来作“逆向”衍生。

## 5、autorun

经验法则：如果你有一个函数应该自动运行，但不会产生一个新的值，请使用autorun。 其余情况都应该使用 computed。

## 6、reactions
reactions 在 响应式编程和命令式编程之间建立沟通的桥梁。

## 工作流

actions ------> state(observable) ------> view

## 了解 响应式编程和命令式编程