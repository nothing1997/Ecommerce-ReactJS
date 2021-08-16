import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Link, useParams } from "react-router-dom";
import Offer from './Offer';
import Specifications from './Specifications';
import Product_desc from './Product_desc';
import Product_similar from './Product_similar';
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Mail from "components/body/Mail";
import Prod_info from "./Prod_info";


const Product_detail = ({ match }) => {

    const [product, setProduct] = useState([]);
    const [offerBonus, setOffer] = useState([]);
    const TITLE = 'Điện thoại ngon - bổ - rẻ';

    useEffect(() => {
        fetchOptionProd();
        fetchOffer();
    }, []);

    // Call api
    const fetchOptionProd = () => {
        axios.get(`https://y6896.sse.codesandbox.io/product_mobile/?id=${match.params.id}`)
            .then((res) => { setProduct(res.data); })
            .catch((err) => console.log(err));
    };

    const fetchOffer = () => {
        axios.get(`https://y6896.sse.codesandbox.io/product_mobile/?id=${match.params.id}`)
            .then((res) => { setOffer(res.data); })
            .catch((err) => console.log(err));
    };

    // Option number product
    const [count, setCount] = useState(1);
    const [error, setError] = useState(null);
    

    return (
        <div className="main bg-light pt-3 pb-3">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div className="container">
                {/* Product--detail  */}
                <h6 className="mb-2">CHI TIẾT SẢN PHẨM</h6>
                <div className="bg-white pt-4 pb-4 p-3 m-0 text-center row">
                    <Prod_info />
                    
                    {/* <Prod_buy qty={3} /> */}
                    {product.map((prod, key) => {
                        return (
                            <div className="col-md-6 pl-4 pr-2 text-left" key={prod.id}>
                                <h5>{prod.name}</h5>

                                <div className="rate row m-1 mt-3 mb-2 align-items-center">
                                    <span className="fa fa-star checked text-warning small" />
                                    <span className="fa fa-star checked text-warning small" />
                                    <span className="fa fa-star checked text-warning small" />
                                    <span className="fa fa-star text-secondary small" />
                                    <span className="fa fa-star text-secondary small" />
                                    <small className="ml-3">( Xem 46 đánh giá )</small>
                                </div>
                                <div className="price bg-light p-2">
                                    <div className="row m-1 align-items-center">
                                        <h4>
                                            {new Intl.NumberFormat("GB-en", {
                                                currency: "VND",
                                                style: "currency",
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0
                                            }).format(prod.price)}
                                        </h4>
                                        <span className="badge badge-pill badge-danger ml-3 mr-4">- {prod.sale_off}%</span>
                                        <strike className="small">
                                            {new Intl.NumberFormat("GB-en", {
                                                currency: "VND",
                                                style: "currency",
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0
                                            }).format(prod.price_old)}
                                        </strike>
                                    </div>
                                </div>
                                <div className="text-danger">
                                    <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
                                </div>

                                <div className="option">
                                    <Tabs>
                                        <TabPanel><small>Chọn màu:</small> <strong className="text-primary">Trắng</strong> </TabPanel>
                                        <TabPanel><small>Chọn màu:</small> <strong className="" style={{ color: 'orange' }}>Vàng</strong> </TabPanel>
                                        <TabPanel><small>Chọn màu:</small> <strong className="text-secondary">Xám</strong> </TabPanel>

                                        <TabList>
                                            <Tab>Trắng</Tab>
                                            <Tab>Vàng</Tab>
                                            <Tab>Xám</Tab>
                                        </TabList>
                                    </Tabs>

                                    <small>Số lượng:</small>
                                    <div className="input-group col-md-3 pt-2 col-6 p-0">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-success btn-sm" disabled={count <2 ? true: ""}><i className="fas fa-minus small" /></button>
                                        </div>
                                        <input type="text" min="1" defaultValue={count} onClick={() => setCount(1)} className="form-control text-center" style={{ height: '31px' }} />
                                        <div className="input-group-append">
                                            <button className="btn btn-success btn-sm"><i className="fas fa-plus small" /></button>
                                        </div>
                                    </div>
                                    {error}


                                    <Link to="/gio-hang-1">
                                        <button type="button" className="btn btn-success btn-md btn-block mt-5">Thêm vào giỏ hàng</button>
                                    </Link>
                                    <div className="row mt-2 m-0">
                                        <button type="button" className="col-md-6 btn btn-outline-primary btn-sm">
                                            <h6 className="m-0">TRẢ GÓP 0%</h6>
                                            <small>Duyệt nhanh qua điện thoại</small>
                                        </button>
                                        <button type="button" className="col-md-6 btn btn-outline-primary btn-sm">
                                            <h6 className="m-0">TRẢ GÓP QUA THẺ</h6>
                                            <small>Visa, Master Card, VCB</small>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <Offer bonus={offerBonus} />
                </div>

                <h6 className="mt-4 mb-2">THÔNG SỐ KỸ THUẬT</h6>
                <Specifications />

                <h6 className="mt-4 mb-2 m-0">MÔ TẢ SẢN PHẨM</h6>
                <Product_desc />

                <h6 className="mt-4 mb-2 m-0">SẢN PHẨM TƯƠNG TỰ</h6>
                <Product_similar />

                <Mail />
            </div>
        </div>
    );
}

export default Product_detail;
