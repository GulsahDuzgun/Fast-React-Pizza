import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import { deleteItem } from "./cartSlice.js";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" handleClickEvent={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
