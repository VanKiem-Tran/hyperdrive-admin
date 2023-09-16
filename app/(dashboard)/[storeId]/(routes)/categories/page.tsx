import { format } from "date-fns";

import { CategoryColumn } from "./components/columns"
import { CategoriesClient } from "./components/client";

const CategoriesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={[]} />
      </div>
    </div>
  );
};

export default CategoriesPage;
