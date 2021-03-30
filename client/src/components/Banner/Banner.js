import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannersStart } from "./BannerActions";
function Banner() {
  // const [banners, setBanners] = useState([]);
  const { banners = [] } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  useEffect(() => {
    // instance.get("/categories").then((res) => {
    //   const sortedData = res.data
    //     .filter((item) => item.enabled)
    //     .sort((a, b) => a.order - b.order);
    //   setBanners(sortedData);
    // });
    dispatch(getBannersStart());
  }, []);

  return (
    <div>
      {banners &&
        banners.length > 0 &&
        banners.map((banner, i) => (
          <div
            key={banner.id}
            className="row shadow-row"
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className="col banner-img">
              <img
                className="img-fluid"
                src={banner.imageUrl}
                alt={banner.name}
              />
            </div>
            <div className="col flex-center">
              <div className="space text-center">
                <h4 className="title-xl">{banner.name}</h4>
                <p className="title">{banner.description}</p>
                <button className="btn btn-primary">
                  Explore {banner.name}
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Banner;