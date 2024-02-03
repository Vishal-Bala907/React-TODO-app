import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoItems = ({ item, date, deleteItem }) => {
  return (
    <div className="container item-container">
      <div className="row kg-row">
        <div className="row kg-row"></div>
        <div className="col-6">{item}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            className="btn btn-danger kg-button"
            onClick={(event) => {
              deleteItem(event, item, date);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItems;
