import { format } from "date-fns";

import { BillboardColumn } from "./components/columns"
import { BillboardClient } from "./components/client";

const BillboardsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={[]} />
      </div>
    </div>
  );
};

export default BillboardsPage;