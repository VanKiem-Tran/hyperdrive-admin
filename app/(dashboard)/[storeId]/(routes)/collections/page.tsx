import { format } from "date-fns";

import { CollectionsClient } from './components/client';

const CategoriesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<CollectionsClient data={[]} />
			</div>
		</div>
	);
};

export default CategoriesPage;
