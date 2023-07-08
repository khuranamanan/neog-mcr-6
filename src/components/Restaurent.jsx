import { useNavigate } from "react-router";
import MenuItemCard from "./MenuItemCard";

/* eslint-disable react/prop-types */
function Restaurent({ restaurent }) {
  const navigate = useNavigate();

  function handleNavigationToResPage() {
    navigate(`restaurent/${restaurent.id}`);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-medium">{`Dishes By ${restaurent.name}`}</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {restaurent.menu.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onClick={handleNavigationToResPage}
            resName={restaurent.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Restaurent;
