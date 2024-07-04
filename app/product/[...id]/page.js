"use client";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Imagegal1 from "../../../public/img/security.png";
import Imagegal2 from "../../../public/img/security2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { InputNumber } from "primereact/inputnumber";
import Link from "next/link";
import { Image } from "primereact/image";
import { useParams, useRouter } from "next/navigation";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductDetails, getUserOrderDetails } from "../../../Components/redux/reducers/lorem/loremSlice";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Toast } from "primereact/toast";
import styles from "../../page.module.css";
import Loading from "../../../Components/Loading"

const About = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const router = useRouter();
  const { id } = useParams();
  const productId = parseInt(id, 10);

  // const productId =  router.query;
  const [value2, setValue2] = useState(1);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const productData = useSelector((state) => state.lorem.getProductDetailsData);
  const dispatch = useDispatch();
  const toast = useRef(null);

  useEffect(() => {
    if (productId) {
      dispatch(getProductDetails({ productId  }));
    }
    Aos.init({ duration: 1000 });
    // SwiperCore.use([Navigation]);
  }, [productId, dispatch]);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "تم",
      detail: "تم اضافة المنتج بنجاح",
    });
  };

  const handleAddToCart = async (catId, productId, productName, productImage) => {
    showSuccess();
    const localStorageData = window.localStorage.getItem("zayadyStorage");
    const finishLocalStorage = JSON.parse(localStorageData);
    const data = [
      ...finishLocalStorage,
      {
        productId,
        name: productName,
        image: productImage,
        code: "QXA930B",
        count: 1,
      },
    ];
    const userId = window.localStorage.getItem("ib_ID") == 0 ? null : window.localStorage.getItem("ib_ID");
    if (!userId) {
      window.localStorage.setItem("zayadyStorage", JSON.stringify(data));
    } else {
      try {
        await dispatch(getUserOrderDetails({ id: userId }));
        await dispatch(addToCart({ UserId: userId, productId, count: value2 }));
        dispatch(addToCart(data)).then(() => {
          getCart();
          showSuccess();
        });
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  const getCart = () => {
    const ID = window.localStorage.getItem("ib_ID");
    dispatch(getUserOrderDetails(ID));
  };

  if (!productData) {
    return (
      <Loading/> 
    );
  }

  return (
    <Container style={{ maxWidth: "1800px" }}>
      <Row className={`${styles.imageGallery} ${styles.imageGallery_padding}`}>
        <Col md={7} className={styles.imageGallery_left}>
          <div className={styles.imageGallery_left_button12}>
            <div className={styles.sala_contantp}>
              <div className="heart-card">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="productData_name">
                {productData && (
                  <>
                    <h5>{productData.catName}</h5>
                    <h2>{productData.name}</h2>
                    <p>{productData.shortDescription}</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.imageGallery_left_button12}>
            <div>
              <label htmlFor="minmax-buttons" className="count">
                <h5> الكميه :</h5>
              </label>
              <InputNumber
                inputId="horizontal-buttons"
                value={value2}
                onValueChange={(e) => setValue2(e.value)}
                showButtons
                buttonLayout="horizontal"
                step={1}
                min={1}
                decrementButtonClassName="p-button-danger"
                incrementButtonClassName="p-button-success"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
              />
            </div>
            <button
              className="add-cart"
              onClick={() =>
                handleAddToCart(
                  productData.catId,
                  productData.id,
                  productData.name,
                  productData.mainImage
                )
              }
            >
              <i className="fa-solid fa-cart-shopping"></i>
              اضف الى السله
            </button>
          </div>
          <div className="imageGallery_left_button12">
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <Image
                loading="lazy"
                alt=""
                src={Imagegal1}
                style={{ height: " fit-content" }}
              />
              <div>
                <h6 style={{ color: "#0382b1" }}>الضمان</h6>
                <p> سنوات3</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <Image
                loading="lazy"
                alt=""
                src={Imagegal2}
                style={{ height: " fit-content" }}
              />
              <div>
                <h6 style={{ color: "#0382b1" }}>الدفع الامن </h6>
                <p> الدفع عند الاستلام</p>
              </div>
            </div>
          </div>
        </Col>

        <Col md={4} className="img_left">
          {productData && (
            <>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
              >
                {productData.imgs?.imgs?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      loading="lazy"
                      src={`/api/images?id=${image.medium}`}
                      zoomSrc={`/api/images?id=${image.large}`}
                      alt="Image"
                      width="auto"
                      height="auto"
                      preview
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
              >
                {productData.imgs?.imgs?.map((image, index) => (
                  <SwiperSlide key={index} style={{ border: selectedImageId === image.medium ? "1px solid #ccc" : "", padding: "5px", cursor: "pointer" }}>
                    <Image
                      loading="lazy"
                      alt=""
                      style={{ boxShadow: "0 0 50px #f3f2f2", borderRadius: "1.4pc" }}
                      src={`/api/images?id=${image.small}`}
                      width={90}
                      height={80}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </Col>
      </Row>

      <div style={{ direction: "rtl" }} className={styles.imageGallery_padding}>
        <div>
          <h2 style={{ color: "#0382b1" }}>تفاصيل المنتج</h2>
          <div style={{ paddingTop: "10px" }}>
            {productData && (
              <p style={{ color: "rgb(137 137 137)" }}>
                {productData.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px", direction: "rtl" }}>
        <div style={{ padding: "50px" }} className="main-breadcrumb">
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
            style={{
              background: "#ffff",
              padding: "6px",
              borderRadius: "9px",
              color: "#0382b1",
            }}
          >
            <Tab eventKey="home" title="مواصفات المنتج" style={{ padding: "30px" }}>
              <div className={styles.imageGallery_padding}>
                {productData && (
                  <p style={{ color: "rgb(137 137 137)" }}>
                    {productData.features}
                  </p>
                )}
              </div>
            </Tab>
            <Tab eventKey="profile" title="نصائح الاستخدام" style={{ padding: "30px" }}>
              <div className={styles.imageGallery_padding}>
                {productData && (
                  <p style={{ color: "rgb(137 137 137)" }}>
                    {productData.usageTips}
                  </p>
                )}
              </div>
            </Tab>
            <Tab eventKey="contact" title="الخدمه">
              <div className={styles.imageGallery_padding}>
                {productData && (
                  <p style={{ color: "rgb(137 137 137)", padding: "30px" }}>
                    {productData.service}
                  </p>
                )}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Toast ref={toast} />
    </Container>
  );
};

export default About;
