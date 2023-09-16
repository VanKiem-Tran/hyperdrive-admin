import { format } from "date-fns";

import { formatter } from "@/lib/utils";

import { OrderColumn } from "./components/columns"
import { OrderClient } from "./components/client";


const OrdersPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={[]} />
      </div>
    </div>
  );
};

export default OrdersPage;
