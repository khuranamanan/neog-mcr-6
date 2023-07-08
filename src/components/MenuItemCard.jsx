/* eslint-disable react/prop-types */
function MenuItemCard({ item, onClick, resName }) {
  return (
    <div
      className="p-4 shadow-xl rounded-lg bg-white flex flex-col gap-1 w-60 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <img
        src={item.imgSrc}
        alt={item.name}
        className="aspect-square object-cover rounded-sm w-full"
      />
      <h4 className="text-lg font-medium">{item.name}</h4>
      <p className="text-gray-600 text-sm">{`Rs. ${item.price} for ${item.qty}`}</p>
      <p className="text-gray-600 text-sm">{`${resName}`}</p>
    </div>
  );
}

export default MenuItemCard;
