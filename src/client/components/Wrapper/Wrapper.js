import AddForm from '../AddForm';
import '../GameList/GameList.css';

//Компонент формы добавления (основная страница) либо формы выбора (страница карточки)
function Wrapper(props){

  return(
    <div className={props.classes}>
      {props.classes==="modal-wrapper none n1 show"? <AddForm onAdd={(newGame)=>props.onAdd(newGame)}/> : <p></p>}
    </div>
  );
}

export default Wrapper;