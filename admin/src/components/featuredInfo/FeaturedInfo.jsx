import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const totalOrders = () => {
    for (let i = 0; i < orders.length; i++) {
      setTotal(total + parseInt(orders[i].amount));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUser(res.data);
        return axios.get("http://localhost:5000/products");
      })
      .then((res) => {
        setProduct(res.data);
        return axios.get("http://localhost:5000/orders");
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    totalOrders();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Active users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{user.length}</span>
          <span className="featuredMoneyRate">
            +{user.length*0.01}% <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Comparitvely</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹{total}</span>
          <span className="featuredMoneyRate">
          +{total*0.01}% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Comparaively</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{product.length}</span>
          <span className="featuredMoneyRate">
            +{product.length*0.01}% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Comparatively</span>
      </div>
    </div>
  );
}
