function Tabz({ filterCategory, tabsData }) {
  return (
    <>
      <div className="containers filter">
        {tabsData.map((category, index) => {
          return (
            <button
              type="button"
              className="btn"
              onClick={() => filterCategory(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}
export default Tabz;
