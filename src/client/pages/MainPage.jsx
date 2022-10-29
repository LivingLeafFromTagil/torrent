import React from "react";
import { AddButton } from "../components/AddButton";

export const MainPage = () => {
  return (
    <div className="main">
      <div className="main-header">
        <h1>Torrent - сайт для любителей сэкономить!</h1>
      </div>
      <div className="main-body">
        <AddButton />
        <table>
          <tr>
            <td>Название</td>
            <td>Описание</td>
            <td>Жанр</td>
            <td>Разработчик</td>
            <td>Год выпуска</td>
          </tr>
        </table>
      </div>
      <div className="main-footer"></div>
    </div>
  )
};

