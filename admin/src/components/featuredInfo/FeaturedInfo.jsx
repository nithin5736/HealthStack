import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUser(res.data);
        return axios.get("http://localhost:5000/products");
      })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Active users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{user.length}</span>
          <span className="featuredMoneyRate">
            +{user.length} <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Comparitvely</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹24,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Comparaively</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{product.length}</span>
          <span className="featuredMoneyRate">
          +{product.length} <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Comparatively</span>
      </div>
    </div>
  );
}
