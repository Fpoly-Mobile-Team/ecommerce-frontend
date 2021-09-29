import React from 'react';
import Footer from "../components/Footer";
import NavBarSeller from "../components/NavBarSeller";

const Cart = () => {
    return (
        <div>
            <NavBarSeller/>
            <div className=" h-screen mt-36"> 
                <div className="w-full px-8 flex bg-mainWhite">
                    <div className="w-1/2 flex">
                        <input type="checkbox" name="" id="" className="w-5 h-5 p-3 shadow m-2"/>
                        <h3 className="py-1 px-8">Sản Phẩm</h3>
                    </div>
                    <div className="w-1/2 flex justify-evenly">
                        <h3 className="py-1 mx-4 text-gray-400">Đơn Giá</h3>
                        <h3 className="py-1 mx-14 text-gray-400">Số Lượng</h3>
                        <h3 className="py-1 text-gray-400">Số Tiền</h3>
                        <h3 className="py-1 text-gray-400">Thao Tác</h3>
                    </div>
                </div>
                <div className="w-full px-8 py-10 flex bg-mainWhite">
                    <div className="w-1/2 flex">
                        <input type="checkbox" name="" id="" className="w-5 h-5 mt-7 shadow m-2"/>
                        <img className="w-20 h-20 mx-8" src="https://cf.shopee.vn/file/be468076649059d2c94942cc7698cd17_tn" alt="" />
                        <h3 className="p-2">Bộ thể thao nam cộc tay thông hơi.<br/> Bộ nam mặc nè</h3>
                    </div>
                    <div className="w-1/2 flex justify-evenly mt-5">
                        <h3 className="py-1 ">đ199.000</h3>
                        <div className="pl-5 py-1">
                            <button className="w-10 shadow  text-black"> - </button>
                            <input
                                type="text"
                                className="w-10 shadow text-center"
                                name=""
                                id=""
                                placeholder="1"/>
                            <button className="w-10 shadow  text-black"> + </button>
                        </div>
                        <h3 className="py-1 text-red-600">đ199.000</h3>
                        <h3 className="py-1 ">Xóa</h3>
                    </div>
                </div>
                <div className="w-full px-8 py-1 flex bg-mainWhite">
                    <div className="w-1/2 flex">
                        <input type="checkbox" name="" id="" className="w-5 h-5 mt-7 shadow m-2"/>
                        <img className="w-20 h-20 mx-8" src="https://cf.shopee.vn/file/be468076649059d2c94942cc7698cd17_tn" alt="" />
                        <h3 className="p-2">Bộ thể thao nam cộc tay thông hơi.<br/> Bộ nam mặc nè</h3>
                    </div>
                    <div className="w-1/2 flex justify-evenly mt-5">
                        <h3 className="py-1 ">đ199.000</h3>
                        <div className="pl-5 py-1">
                            <button className="w-10 shadow  text-black"> - </button>
                            <input
                                type="text"
                                className="w-10 shadow text-center"
                                name=""
                                id=""
                                placeholder="1"/>
                            <button className="w-10 shadow  text-black"> + </button>
                        </div>
                        <h3 className="py-1 text-red-600">đ199.000</h3>
                        <h3 className="py-1 ">Xóa</h3>
                    </div>
                </div>
                <div className="w-full px-8 py-10 flex bg-mainWhite">
                    <div className="w-1/2 flex">
                        <input type="checkbox" name="" id="" className="w-5 h-5 mt-7 shadow m-2"/>
                        <img className="w-20 h-20 mx-8" src="https://cf.shopee.vn/file/be468076649059d2c94942cc7698cd17_tn" alt="" />
                        <h3 className="p-2">Bộ thể thao nam cộc tay thông hơi.<br/> Bộ nam mặc nè</h3>
                    </div>
                    <div className="w-1/2 flex justify-evenly mt-5">
                        <h3 className="py-1 ">đ199.000</h3>
                        <div className="pl-5 py-1">
                            <button className="w-10 shadow  text-black"> - </button>
                            <input
                                type="text"
                                className="w-10 shadow text-center"
                                name=""
                                id=""
                                placeholder="1"/>
                            <button className="w-10 shadow  text-black"> + </button>
                        </div>
                        <h3 className="py-1 text-red-600">đ199.000</h3>
                        <h3 className="py-1 ">Xóa</h3>
                    </div>
                </div>

                <div className="w-full px-8 flex bg-mainWhite">
                    <div className="w-1/2 flex">
                        <input type="checkbox" name="" id="" className="w-5 h-5 mt-3 shadow m-2"/>
                        <h3 className="py-3 px-4">Chọn Tất Cả</h3>
                        <h3 className="py-3 px-2">Xóa</h3>
                    </div>
                    <div className="w-1/2 flex justify-evenly">
                        <h3 className="py-3 mx-7 text-xl">Tổng thanh toán (0 Sản Phẩm): </h3>
                        <h3 className="py-2 text-3xl text-red-500">đ0</h3>
                        <button className="w-72 mx-2 bg-mainbtn shadow text-white p-3 ">Mua hàng</button>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
