import { ColorForm } from "./components/color-form";

const ColorPage = async ({
  params
}: {
  params: { colorId: string }
}) => {
  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={null} />
      </div>
    </div>
  );
}

export default ColorPage;
