import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          <div>
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
