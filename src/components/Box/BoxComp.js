import React, { useState, useEffect } from "react";

import "./Box.css";
import WhiteProduct from "./Whiteproducts";
import Cart1 from "../ProductComponent/Cart1";

function BoxComp(props) {
  const [getBox, setBox] = useState("box1");
  const [getBox1, setBox1] = useState(false);
  const [getBox2, setBox2] = useState(true);
  const [getBox3, setBox3] = useState(true);
  const [getBox4, setBox4] = useState(true);
  const [getBox5, setBox5] = useState(true);
  const [getBox6, setBox6] = useState(true);

  const box1 = [
    {
      name: "K94 MASK",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size  :"M",
      price:40

    },
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
      size:"M",
      price:20
    },
    {
      name: "Gloves ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size:"M"
    },

    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size:"M"
    },
  ];
  const box2 = [
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
      size:"M"

    },
    {
      name: "Box2",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size:"M"

    },
    {
      name: "Gloves ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size:"M"

      
    },

    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size:"M"

    },
  ];
  const box3 = [
    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size:"M"

    },
    {
      name: "Box3",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size:"M"

    },
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
      size:"M"

    },
    {
      name: "Gloves ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size:"M"

    },
  ];
  const box4 = [
    {
      name: "Box4",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size:"M"

    },
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
      size:"M"

    },
    {
      name: "Gloves ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size:"M"

    },

    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size:"M"

    },
  ];
  const box5 = [
    {
      name: "Box5",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size:"M"

    },
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
      size:"M"

    },
    {
      name: "Gloves ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size:"M"

    },

    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size:"M"

    },
  ];
  const box6 = [
    {
      name: "Box6",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size:"M"

    },
    {
      name: "hand sanitizer",
      pcs: 20,
      img: "./Images/neil-bates-tAZElyZEm40-unsplash.jpg",
      size:"M"

    },
    {
      name: "Gloves ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size:"M"

    },

    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size:"M"

    },
  ];
 
  function check() {
    if (getBox == "box1") {
      props.box(box1);
    }
  }
  return (
    <div className="row box-section">
      <div
        className="col-lg-6"
        style={{ textAlign: "left", paddingRight: "30px" }}
      >
        <h2 className="cart-h2">Choose Box</h2>
        <div className="row majorbox" style={{ textAlign: "center" }}>
          <div className="col-lg-4 col-4 ">
            <div
              className={getBox1 ? "boxes" : "boxes2"}
              onClick={() => {
                setBox("box1");
                
                check();
                setBox1(false);
                setBox2(true);
                setBox3(true);
                setBox4(true);
                setBox5(true);
                setBox6(true);
              }}
            >
              <svg
                width="60"
                height="64"
                viewBox="0 0 60 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.1763 15.119L30.4887 0.243964C30.3377 0.165718 30.1701 0.124878 30 0.124878C29.8299 0.124878 29.6623 0.165718 29.5113 0.243964L0.82375 15.119C0.652768 15.2109 0.509438 15.3468 0.408572 15.5127C0.307706 15.6786 0.252962 15.8684 0.25 16.0625V47.9375C0.249984 48.1322 0.303492 48.3232 0.404677 48.4896C0.505862 48.656 0.650833 48.7914 0.82375 48.881L29.5113 63.756C29.6549 63.8323 29.8148 63.8732 29.9775 63.875C30.1401 63.8769 30.3009 63.8397 30.4462 63.7666C30.4601 63.7602 30.476 63.7666 30.4887 63.756L59.1763 48.881C59.3492 48.7914 59.4941 48.656 59.5953 48.4896C59.6965 48.3232 59.75 48.1322 59.75 47.9375V16.0625C59.7468 15.8684 59.692 15.6787 59.5911 15.5129C59.4903 15.347 59.3471 15.2111 59.1763 15.119ZM18.5462 26.1966V33.2898L12.7662 30.2915V23.1982C15.4969 24.6135 14.53 24.113 18.5462 26.1966ZM45.9917 10.6767L19.6141 24.3553C15.4799 22.2122 16.6083 22.7966 14.0094 21.4483L40.3859 7.77496L45.9917 10.6767ZM56.3797 16.0625L30 29.7411L21.925 25.5517L48.3005 11.873L56.3797 16.0625ZM30 2.38384L38.075 6.57328L11.6995 20.2519L3.62025 16.0625L30 2.38384ZM2.375 17.8103L10.6412 22.0964V30.9375C10.6412 31.1322 10.6947 31.3232 10.7959 31.4896C10.8971 31.656 11.0421 31.7914 11.215 31.881L19.1189 35.9822C19.2809 36.0664 19.4619 36.1074 19.6443 36.1013C19.8268 36.0951 20.0046 36.0421 20.1606 35.9473C20.3166 35.8525 20.4455 35.7191 20.535 35.5599C20.6244 35.4008 20.6714 35.2213 20.6712 35.0387V27.2973L28.9375 31.5835V61.0647L2.375 47.2915V17.8103ZM57.625 47.2915L31.0625 61.0647V31.5835L57.625 17.8103V47.2915Z"
                  fill="#70717B"
                />
              </svg>
              <p>BOX 1</p>
            </div>
          </div>
          <div className="col-lg-4 col-4">
            <div
              className={getBox2 ? "boxes" : "boxes2"}
              onClick={() => {
                setBox("box2");

                setBox2(false);
                setBox1(true);
                setBox3(true);
                setBox4(true);
                setBox5(true);
                setBox6(true);
              }}
            >
              <svg
                width="60"
                height="64"
                viewBox="0 0 60 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.1763 15.119L30.4887 0.243964C30.3377 0.165718 30.1701 0.124878 30 0.124878C29.8299 0.124878 29.6623 0.165718 29.5113 0.243964L0.82375 15.119C0.652768 15.2109 0.509438 15.3468 0.408572 15.5127C0.307706 15.6786 0.252962 15.8684 0.25 16.0625V47.9375C0.249984 48.1322 0.303492 48.3232 0.404677 48.4896C0.505862 48.656 0.650833 48.7914 0.82375 48.881L29.5113 63.756C29.6549 63.8323 29.8148 63.8732 29.9775 63.875C30.1401 63.8769 30.3009 63.8397 30.4462 63.7666C30.4601 63.7602 30.476 63.7666 30.4887 63.756L59.1763 48.881C59.3492 48.7914 59.4941 48.656 59.5953 48.4896C59.6965 48.3232 59.75 48.1322 59.75 47.9375V16.0625C59.7468 15.8684 59.692 15.6787 59.5911 15.5129C59.4903 15.347 59.3471 15.2111 59.1763 15.119ZM18.5462 26.1966V33.2898L12.7662 30.2915V23.1982C15.4969 24.6135 14.53 24.113 18.5462 26.1966ZM45.9917 10.6767L19.6141 24.3553C15.4799 22.2122 16.6083 22.7966 14.0094 21.4483L40.3859 7.77496L45.9917 10.6767ZM56.3797 16.0625L30 29.7411L21.925 25.5517L48.3005 11.873L56.3797 16.0625ZM30 2.38384L38.075 6.57328L11.6995 20.2519L3.62025 16.0625L30 2.38384ZM2.375 17.8103L10.6412 22.0964V30.9375C10.6412 31.1322 10.6947 31.3232 10.7959 31.4896C10.8971 31.656 11.0421 31.7914 11.215 31.881L19.1189 35.9822C19.2809 36.0664 19.4619 36.1074 19.6443 36.1013C19.8268 36.0951 20.0046 36.0421 20.1606 35.9473C20.3166 35.8525 20.4455 35.7191 20.535 35.5599C20.6244 35.4008 20.6714 35.2213 20.6712 35.0387V27.2973L28.9375 31.5835V61.0647L2.375 47.2915V17.8103ZM57.625 47.2915L31.0625 61.0647V31.5835L57.625 17.8103V47.2915Z"
                  fill="#70717B"
                />
              </svg>
              <p>BOX 2</p>
            </div>
          </div>
          <div className="col-lg-4 col-4 ">
            <div
              className={getBox3 ? "boxes" : "boxes2"}
              onClick={() => {
                setBox("box3");

                setBox3(false);
                setBox1(true);
                setBox2(true);
                setBox4(true);
                setBox5(true);
                setBox6(true);
              }}
            >
              <svg
                width="60"
                height="64"
                viewBox="0 0 60 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.1763 15.119L30.4887 0.243964C30.3377 0.165718 30.1701 0.124878 30 0.124878C29.8299 0.124878 29.6623 0.165718 29.5113 0.243964L0.82375 15.119C0.652768 15.2109 0.509438 15.3468 0.408572 15.5127C0.307706 15.6786 0.252962 15.8684 0.25 16.0625V47.9375C0.249984 48.1322 0.303492 48.3232 0.404677 48.4896C0.505862 48.656 0.650833 48.7914 0.82375 48.881L29.5113 63.756C29.6549 63.8323 29.8148 63.8732 29.9775 63.875C30.1401 63.8769 30.3009 63.8397 30.4462 63.7666C30.4601 63.7602 30.476 63.7666 30.4887 63.756L59.1763 48.881C59.3492 48.7914 59.4941 48.656 59.5953 48.4896C59.6965 48.3232 59.75 48.1322 59.75 47.9375V16.0625C59.7468 15.8684 59.692 15.6787 59.5911 15.5129C59.4903 15.347 59.3471 15.2111 59.1763 15.119ZM18.5462 26.1966V33.2898L12.7662 30.2915V23.1982C15.4969 24.6135 14.53 24.113 18.5462 26.1966ZM45.9917 10.6767L19.6141 24.3553C15.4799 22.2122 16.6083 22.7966 14.0094 21.4483L40.3859 7.77496L45.9917 10.6767ZM56.3797 16.0625L30 29.7411L21.925 25.5517L48.3005 11.873L56.3797 16.0625ZM30 2.38384L38.075 6.57328L11.6995 20.2519L3.62025 16.0625L30 2.38384ZM2.375 17.8103L10.6412 22.0964V30.9375C10.6412 31.1322 10.6947 31.3232 10.7959 31.4896C10.8971 31.656 11.0421 31.7914 11.215 31.881L19.1189 35.9822C19.2809 36.0664 19.4619 36.1074 19.6443 36.1013C19.8268 36.0951 20.0046 36.0421 20.1606 35.9473C20.3166 35.8525 20.4455 35.7191 20.535 35.5599C20.6244 35.4008 20.6714 35.2213 20.6712 35.0387V27.2973L28.9375 31.5835V61.0647L2.375 47.2915V17.8103ZM57.625 47.2915L31.0625 61.0647V31.5835L57.625 17.8103V47.2915Z"
                  fill="#70717B"
                />
              </svg>
              <p>BOX 3</p>
            </div>
          </div>

          <div className="col-lg-4 col-4 ">
            <div
              className={getBox4 ? "boxes" : "boxes2"}
              onClick={() => {
                setBox("box1");
                check();
                setBox1(true);
                setBox2(true);
                setBox3(true);
                setBox4(false);
                setBox5(true);
                setBox6(true);
              }}
            >
              <svg
                width="60"
                height="64"
                viewBox="0 0 60 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.1763 15.119L30.4887 0.243964C30.3377 0.165718 30.1701 0.124878 30 0.124878C29.8299 0.124878 29.6623 0.165718 29.5113 0.243964L0.82375 15.119C0.652768 15.2109 0.509438 15.3468 0.408572 15.5127C0.307706 15.6786 0.252962 15.8684 0.25 16.0625V47.9375C0.249984 48.1322 0.303492 48.3232 0.404677 48.4896C0.505862 48.656 0.650833 48.7914 0.82375 48.881L29.5113 63.756C29.6549 63.8323 29.8148 63.8732 29.9775 63.875C30.1401 63.8769 30.3009 63.8397 30.4462 63.7666C30.4601 63.7602 30.476 63.7666 30.4887 63.756L59.1763 48.881C59.3492 48.7914 59.4941 48.656 59.5953 48.4896C59.6965 48.3232 59.75 48.1322 59.75 47.9375V16.0625C59.7468 15.8684 59.692 15.6787 59.5911 15.5129C59.4903 15.347 59.3471 15.2111 59.1763 15.119ZM18.5462 26.1966V33.2898L12.7662 30.2915V23.1982C15.4969 24.6135 14.53 24.113 18.5462 26.1966ZM45.9917 10.6767L19.6141 24.3553C15.4799 22.2122 16.6083 22.7966 14.0094 21.4483L40.3859 7.77496L45.9917 10.6767ZM56.3797 16.0625L30 29.7411L21.925 25.5517L48.3005 11.873L56.3797 16.0625ZM30 2.38384L38.075 6.57328L11.6995 20.2519L3.62025 16.0625L30 2.38384ZM2.375 17.8103L10.6412 22.0964V30.9375C10.6412 31.1322 10.6947 31.3232 10.7959 31.4896C10.8971 31.656 11.0421 31.7914 11.215 31.881L19.1189 35.9822C19.2809 36.0664 19.4619 36.1074 19.6443 36.1013C19.8268 36.0951 20.0046 36.0421 20.1606 35.9473C20.3166 35.8525 20.4455 35.7191 20.535 35.5599C20.6244 35.4008 20.6714 35.2213 20.6712 35.0387V27.2973L28.9375 31.5835V61.0647L2.375 47.2915V17.8103ZM57.625 47.2915L31.0625 61.0647V31.5835L57.625 17.8103V47.2915Z"
                  fill="#70717B"
                />
              </svg>
              <p
                onClick={() => {
                  setBox("box4");
                  {
                    props.box(box4);
                  }
                }}
              >
                BOX 4
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-4 ">
            <div
              className={getBox5 ? "boxes" : "boxes2"}
              onClick={() => {
                setBox("box1");
                check();
                setBox1(true);
                setBox2(true);
                setBox3(true);
                setBox4(true);
                setBox5(false);
                setBox6(true);
              }}
            >
              <svg
                width="60"
                height="64"
                viewBox="0 0 60 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.1763 15.119L30.4887 0.243964C30.3377 0.165718 30.1701 0.124878 30 0.124878C29.8299 0.124878 29.6623 0.165718 29.5113 0.243964L0.82375 15.119C0.652768 15.2109 0.509438 15.3468 0.408572 15.5127C0.307706 15.6786 0.252962 15.8684 0.25 16.0625V47.9375C0.249984 48.1322 0.303492 48.3232 0.404677 48.4896C0.505862 48.656 0.650833 48.7914 0.82375 48.881L29.5113 63.756C29.6549 63.8323 29.8148 63.8732 29.9775 63.875C30.1401 63.8769 30.3009 63.8397 30.4462 63.7666C30.4601 63.7602 30.476 63.7666 30.4887 63.756L59.1763 48.881C59.3492 48.7914 59.4941 48.656 59.5953 48.4896C59.6965 48.3232 59.75 48.1322 59.75 47.9375V16.0625C59.7468 15.8684 59.692 15.6787 59.5911 15.5129C59.4903 15.347 59.3471 15.2111 59.1763 15.119ZM18.5462 26.1966V33.2898L12.7662 30.2915V23.1982C15.4969 24.6135 14.53 24.113 18.5462 26.1966ZM45.9917 10.6767L19.6141 24.3553C15.4799 22.2122 16.6083 22.7966 14.0094 21.4483L40.3859 7.77496L45.9917 10.6767ZM56.3797 16.0625L30 29.7411L21.925 25.5517L48.3005 11.873L56.3797 16.0625ZM30 2.38384L38.075 6.57328L11.6995 20.2519L3.62025 16.0625L30 2.38384ZM2.375 17.8103L10.6412 22.0964V30.9375C10.6412 31.1322 10.6947 31.3232 10.7959 31.4896C10.8971 31.656 11.0421 31.7914 11.215 31.881L19.1189 35.9822C19.2809 36.0664 19.4619 36.1074 19.6443 36.1013C19.8268 36.0951 20.0046 36.0421 20.1606 35.9473C20.3166 35.8525 20.4455 35.7191 20.535 35.5599C20.6244 35.4008 20.6714 35.2213 20.6712 35.0387V27.2973L28.9375 31.5835V61.0647L2.375 47.2915V17.8103ZM57.625 47.2915L31.0625 61.0647V31.5835L57.625 17.8103V47.2915Z"
                  fill="#70717B"
                />
              </svg>
              <p
                onClick={() => {
                  setBox("box5");
                }}
              >
                BOX 5
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-4  ">
            <div
              className={getBox6 ? "boxes" : "boxes2"}
              onClick={() => {
                setBox("box1");
                check();
                setBox1(true);
                setBox2(true);
                setBox3(true);
                setBox4(true);
                setBox5(true);
                setBox6(false);
              }}
            >
              <svg
                width="60"
                height="64"
                viewBox="0 0 60 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.1763 15.119L30.4887 0.243964C30.3377 0.165718 30.1701 0.124878 30 0.124878C29.8299 0.124878 29.6623 0.165718 29.5113 0.243964L0.82375 15.119C0.652768 15.2109 0.509438 15.3468 0.408572 15.5127C0.307706 15.6786 0.252962 15.8684 0.25 16.0625V47.9375C0.249984 48.1322 0.303492 48.3232 0.404677 48.4896C0.505862 48.656 0.650833 48.7914 0.82375 48.881L29.5113 63.756C29.6549 63.8323 29.8148 63.8732 29.9775 63.875C30.1401 63.8769 30.3009 63.8397 30.4462 63.7666C30.4601 63.7602 30.476 63.7666 30.4887 63.756L59.1763 48.881C59.3492 48.7914 59.4941 48.656 59.5953 48.4896C59.6965 48.3232 59.75 48.1322 59.75 47.9375V16.0625C59.7468 15.8684 59.692 15.6787 59.5911 15.5129C59.4903 15.347 59.3471 15.2111 59.1763 15.119ZM18.5462 26.1966V33.2898L12.7662 30.2915V23.1982C15.4969 24.6135 14.53 24.113 18.5462 26.1966ZM45.9917 10.6767L19.6141 24.3553C15.4799 22.2122 16.6083 22.7966 14.0094 21.4483L40.3859 7.77496L45.9917 10.6767ZM56.3797 16.0625L30 29.7411L21.925 25.5517L48.3005 11.873L56.3797 16.0625ZM30 2.38384L38.075 6.57328L11.6995 20.2519L3.62025 16.0625L30 2.38384ZM2.375 17.8103L10.6412 22.0964V30.9375C10.6412 31.1322 10.6947 31.3232 10.7959 31.4896C10.8971 31.656 11.0421 31.7914 11.215 31.881L19.1189 35.9822C19.2809 36.0664 19.4619 36.1074 19.6443 36.1013C19.8268 36.0951 20.0046 36.0421 20.1606 35.9473C20.3166 35.8525 20.4455 35.7191 20.535 35.5599C20.6244 35.4008 20.6714 35.2213 20.6712 35.0387V27.2973L28.9375 31.5835V61.0647L2.375 47.2915V17.8103ZM57.625 47.2915L31.0625 61.0647V31.5835L57.625 17.8103V47.2915Z"
                  fill="#70717B"
                />
              </svg>
              <p
                onClick={() => {
                  setBox("box6");
                }}
              >
                BOX 6
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 yourCart">
        <h2 className="cart-h2">Your Cart</h2>
        <div className="col-lg-12">
          {getBox == "box1" &&
            box1.map((user) => (
              <Cart1 Name={user.name} pcs={user.pcs} image={user.img} size={user.size} array={box1} />
            ))}
          {getBox == "box2" &&
            box2.map((user) => (
              <Cart1 Name={user.name} pcs={user.pcs} image={user.img} size={user.size}  array={box2}/>
            ))}
          {getBox == "box3" &&
            box3.map((user) => (
              <Cart1 Name={user.name} pcs={user.pcs} image={user.img}size={user.size}  array={box3} />
            ))}
          {getBox == "box4" &&
            box4.map((user) => (
              <Cart1 Name={user.name} pcs={user.pcs} image={user.img} size={user.size}  array={box4}/>
            ))}
          {getBox == "box5" &&
            box5.map((user) => (
              <Cart1 Name={user.name} pcs={user.pcs} image={user.img}size={user.size}  array={box5}/>
            ))}
          {getBox == "box6" &&
            box6.map((user) => (
              <Cart1 Name={user.name} pcs={user.pcs} image={user.img} size={user.size}  array={box6}/>
            ))}
        </div>
      </div>
      
      <div style={{ textAlign: "right", margin: "30px 0" }}>
        <button
         
          className="button confirmation-button"
          onClick={() => props.change("info")}
        >
          continue
        </button>
      </div>
    </div>
  );
}

export default BoxComp;