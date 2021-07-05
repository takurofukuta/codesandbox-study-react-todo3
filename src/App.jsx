import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompletedTasks, setIncompletedTasks] = useState(["aaaaa", "bbbbb"]);
  const [completedTasks, setCompletedTasks] = useState(["ccccc", "ddddd"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="入力してください"></input>
        <button>追加</button>
      </div>
      <div className="incompleted-task-area">
        <p className="title">未完了のタスク</p>
        <ul>
          {incompletedTasks.map((task) => {
            return (
              <div key={task} className="list-row">
                <li>{task}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="completed-task-area">
        <p className="title">完了したタスク</p>
        <ul>
          {completedTasks.map((task) => {
            return (
              <div key={task} className="list-row">
                <li>{task}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
