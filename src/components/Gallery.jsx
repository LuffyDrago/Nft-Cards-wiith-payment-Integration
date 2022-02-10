import Tabs from "./Tabz";
import Items from "./Item";
import Data from "./Data";
import { useState } from "react";
function Gallery() {
  const [data, setData] = useState(Data);
  const categoryData = Data.map((value) => {
    return value.category;
  });
  const tabsData = ["all", ...new Set(categoryData)];

  const filterCategory = (category) => {
    if (category === "all") {
      setData(Data);
      return;
    }
    const filteredData = Data.filter((value) => {
      return value.category === category;
    });
    setData(filteredData);
  };
  return (
    <div className="container">
      <div className="rowz">
        <div className="container2">
          <Tabs filterCategory={filterCategory} tabsData={tabsData} />
          <Items data={data} />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
