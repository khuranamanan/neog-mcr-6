import { useData } from "../context/DataContext";
import { Tab } from "@headlessui/react";
import Restaurent from "../components/Restaurent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HomePage() {
  const {
    cuisineTypes,
    selectedTabIndex,
    restaurentData,
    setSelectedTabIndex,
  } = useData();

  return (
    <div className="w-full px-2 py-8 flex flex-col gap-2 items-center">
      <h1 className="text-2xl font-bold">Select your Cuisine:</h1>
      <Tab.Group
        selectedIndex={selectedTabIndex}
        onChange={setSelectedTabIndex}
      >
        <Tab.List className="flex rounded-xl gap-4 flex-wrap justify-center">
          {cuisineTypes.map((cuisine) => (
            <Tab
              key={cuisine.id}
              className={({ selected }) =>
                classNames(
                  "rounded-md py-2.5 px-5 text-sm font-medium leading-5 text-white bg-red-500",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-neutral-300 focus:outline-none focus:ring-2",
                  selected ? "bg-red-600 shadow" : "text-blue-100"
                )
              }
            >
              {cuisine.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {cuisineTypes.map((cuisine) => {
            const cuisineRes = restaurentData.filter(
              ({ cuisine_id }) => cuisine_id === cuisine.id
            );

            return (
              <Tab.Panel key={cuisine.id}>
                {cuisineRes.map((res) => (
                  <Restaurent restaurent={res} key={res.id} />
                ))}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default HomePage;
