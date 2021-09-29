import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";


const ProductDetail = () => {
  return (
    <div className="bg-maingray">
      <Navbar />

      <div className="flex h-screen bg-white mt-36 mx-20 p-20 bg-mainWhite">
        <div className="bg-cover w-1/3">
          <img
            src="https://cf.shopee.vn/file/3131a60f9c8b1e0b0bb244e4bad379f2"
            alt=""
          />
          <Slider/>
        </div>

        <div className="bg-cover w-2/3">
          <h3 className="text-3xl font-bold text-gray-900">
            Giày Ecco Golf S-Three nam
          </h3>
          <p className="text-gray-400 p-4"> 15 đánh giá | 732 Đã bán</p>
          <h3 className="text-2xl font-bold text-red-400 px-10 ">đ579.999</h3>
          <div className="flex">
            <p className="text-xs p-3"> Vận Chuyển </p>
            <img
              className="m-3.5 h-3.5"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1cdd37339544d858f4d0ade5723cd477.png"
              alt=""
            />
            <p className="text-xs mt-3"> Miễn Phí Vận Chuyển </p>
          </div>
          <div className="flex">
            <p className="text-xs p-3"> Size </p>
            <button className="w-20 m-1 shadow text-black rounded"> 39</button>
            <button className="w-20 m-1 shadow  text-black rounded"> 40</button>
            <button className="w-20 m-1 shadow  text-black rounded"> 41</button>
            <button className="w-20 m-1 shadow  text-black rounded"> 42</button>
            <button className="w-20 m-1 shadow  text-black rounded"> 43</button>
            <button className="w-20 m-1 shadow  text-black rounded"> 44</button>
            <button className="w-20 m-1 shadow  text-black rounded"> 45</button>
          </div>
          <div className="flex p-3 py-5">
            <p className="text-xs py-2"> Số Lượng </p>
            <div className="pl-5 py-1">
              <button className="w-10 shadow  text-black"> - </button>
              <input
                type="text"
                className="w-10 shadow text-center"
                name=""
                id=""
                placeholder="1"
              />
              <button className="w-10 shadow  text-black"> + </button>
            </div>
            <p className="text-xs py-2 pl-3"> 12000 sản phẩm sẳn có </p>
          </div>
          <div className="flex">
            <button className="w-100 m-1 p-3 shadow bg-mainbtn1 text-red-500 rounded">
              {" "}
              Thêm Vào Giỏ Hàng
            </button>
            <button className="w-100 m-1 p-3 shadow bg-mainbtn text-white rounded">
              {" "}
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
