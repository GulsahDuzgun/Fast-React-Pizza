import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button.jsx";
import { updateOrder } from "../../services/apiRestaurant.js";

export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
