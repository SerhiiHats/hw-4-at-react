import {Component} from "react";
import './App.css';
import Header from "../Header/Header";
import ObjectLike from "../ObjectLike/ObjectLike";
import CounterFromUpdate from "../CounterFromUpdate/CounterFromUpdate";



class App extends Component{

  state = {
    aboutTask1: "React: Домашнє завдання 4. Завдання 2",
    aboutTask2: "React: Домашнє завдання 4. Завдання 3",
    aboutTask3: "React: Домашнє завдання 4. Завдання 4",
    descriptionTask1: "Створіть компонент, який з'являтиметься натисканням на кнопку та ховатиметься під час ще одного натискання. Після додайте методи життєвого циклу, у яких запускатиметься код, що показує «alert()» з інформацією про те, що компонент закрився або відкрився.",
    descriptionTask2: "Створіть компонент, який виводитиме на екран збільшене число щоразу, коли спрацьовує подія componentDidUpdate.",
    descriptionTask3: "Модифікуйте компонент із завдання 3 так, щоби він не збільшував число, якщо воно більше 3. Використовуйте для цього shouldComponentUpdate.",
    arrayNames: ["Анатолій", "Анатолій", "Буревій", "Анатолій", "Вероніка", "Буревій", "Кристина", "Ольга", "Сергій", "Анатолій", "Вероніка", "Сергій"],
    arrayOfRainbow1: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    arrayOfRainbow2: ["indigo"],
    visibleLike: false,
  }

  handlerLike(){
    const {visibleLike} = this.state;
    this.setState({
      visibleLike: !visibleLike
    })
  }

  render() {
    return (
      <div className="App">
        <Header aboutTask={this.state.aboutTask1} descriptionTask={this.state.descriptionTask1}/>
        <ObjectLike handlerLike={()=>this.handlerLike()} visible={this.state.visibleLike}/>
        <Header aboutTask={this.state.aboutTask2} descriptionTask={this.state.descriptionTask2}/>
        <CounterFromUpdate/>
      </div>
    );
  }


}

export default App;
