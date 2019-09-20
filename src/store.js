import {
  observable,
  action,
  computed
} from "mobx"; // 

let id = 0;

class Store {
  
  @observable
  todos = [];

  
  @observable
  num = [];

  @observable
  theme = "";

  @action
  addTodo = text => {
    this.todos.push({
      id: id++,
      text,
      completed: false
    });
  };

  getVisibleTodos = () => {
    switch (this.filter) {
      case "SHOW_COMPLETED":
        return this.todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return this.todos.filter(t => !t.completed);
      case "SHOW_ALL":
      default:
        return this.todos;
    }
  };

  @action
  toggleTodo = id => {
    this.todos.forEach(i => {
      if (i.id === id) {
        i.completed = !i.completed;
      }
    });
  };

  @observable
  filter = "SHOW_ALL";

  @action
  changeFilter = filter => {
    this.filter = filter;
    // 被观察者修改发生了什么?
    // 被observable 修饰的数据将会暴露给整个app，
    // 各观察者组件(被 @observer 修饰的组件)都可以根据这个数据值的变化作出响应 - 重新渲染
  }


  @computed get double() {
    return this.todos.length*2
  }
  // set test(value) { // 这是一个自动的动作，不需要注解
  //   // this.todos = Math.sqrt(value);
  // }
}

export default new Store();