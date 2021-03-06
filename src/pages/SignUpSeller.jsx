import React from "react";
import Footer from "../components/Footer";
import NavBarSeller from "../components/NavBarSeller";

const SignUpSeller = () => {
  return (
    <div>
      <NavBarSeller />
      <div className="flex h-screen bg-white mt-36 mx-20">
        {/* LEFT */}
        <div className="bg-cover w-1/2 text-center px-20">
          <h3 className="text-2xl font-bold text-gray-900 p-10">
            Ban hang chuyen nghiep
          </h3>
          <p className="text-gray-400 p-5">
            Quản lý shop của bạn một cách hiệu quả hơn trên Shop Air với Shop
            Air - Kênh Người bán
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
            alt=""
          />
        </div>
        {/* RIGHT */}
        <div className="form-sign-up-seller w-1/2 px-20">
          <div className="form">
            <h3 className="text-2xl font-bold text-gray-900 p-10 text-center">
              Dang ky vao Kenh Nguoi Ban
            </h3>
            <input
              type="text"
              className="w-full p-3 shadow m-2"
              name=""
              id=""
              placeholder="Nhap email..."
            />
            <input
              type="text"
              className="w-full p-3 shadow m-2"
              name=""
              id=""
              placeholder="Nhap password..."
            />
            <button className="w-full m-2 p-3 bg-main text-white rounded">
              <a href="http://localhost:4000/login">Dang Ky</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpSeller;
