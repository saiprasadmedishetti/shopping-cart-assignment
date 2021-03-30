import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannersStart } from "../Banner/BannerActions";

function Sidebar({ filter, selectedcategory }) {
  const { banners } = useSelector((state) => state.banner);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!(banners?.length > 0)) {
      dispatch(getBannersStart());
    }
  }, [banners.length]);

  //   filter
  const handleFilter = (id) => {
    filter(id);
  };
  return (
    <div className="sidebar">
      <nav className="nav">
        {banners?.length > 0 &&
          banners.map((banner) => (
            <a
              className={`nav-link ${
                banner.id === selectedcategory ? "active" : ""
              }`}
              key={banner.id}
              onClick={() => handleFilter(banner.id)}
            >
              {banner.name}
            </a>
          ))}
      </nav>
    </div>
  );
}

export default Sidebar;
