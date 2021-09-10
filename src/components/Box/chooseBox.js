import React, { useState, useEffect } from "react";
import "./Box.css";
import BoxComp from "./BoxComp";
import CustomBox from "../CustomBox/CustomBox";
function ChooseBox(props) {
  const [getComp, setComp] = useState(true);
  const [getBox, setBox] = useState(true);
  const [getBox1, setBox1] = useState(true);
 
  return (
    <div>
      <div style={{ marginTop: "40px" }} className="container desktop-head">
        <div className="row">
          <div className="col-lg-2">
            <button className="chooseButton">1. CHOOSE BOX</button>
          </div>
          <div className="col-lg-2">...........................</div>
          <div className="col-lg-3">2. FILL INFORMATION FORM</div>
          <div className="col-lg-2">...........................</div>
          <div className="col-lg-2">3. CONFIRMATION</div>
          <div className="col-lg-1"></div>
        </div>
      </div>

      <div className="mobile-head">
        <div className="row">
          <div className="col-lg-2 col-6">
            <button className="chooseButton" style={{ padding: "7px 8px" }}>
              1. CHOOSE BOX
            </button>
          </div>
          <div className="col-lg-2 col-1">......</div>
          <div className="col-lg-3 col-2">2.</div>
          <div className="col-lg-2 col-1">......</div>
          <div className="col-lg-2 col-2">3.</div>
        </div>
      </div>

      <div className="row fullLine">
        <div className="col-lg-1"></div>
        <div className="col-lg-3  RightText chooseboxHead">
          <h3>Choose Box:</h3>
        </div>
        <div className="col-lg-3">
          <div className="row">
            <div className="col-lg-2 ">
              <div
                className={getBox ? "Icons" : "Icons2"}
                onClick={() => {
                  setBox(!getBox);
                  setComp(true);
                  setBox1(true);
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 6 65 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.1763 15.119L30.4887 0.243964C30.3377 0.165718 30.1701 0.124878 30 0.124878C29.8299 0.124878 29.6623 0.165718 29.5113 0.243964L0.82375 15.119C0.652768 15.2109 0.509438 15.3468 0.408572 15.5127C0.307706 15.6786 0.252962 15.8684 0.25 16.0625V47.9375C0.249984 48.1322 0.303492 48.3232 0.404677 48.4896C0.505862 48.656 0.650833 48.7914 0.82375 48.881L29.5113 63.756C29.6549 63.8323 29.8148 63.8732 29.9775 63.875C30.1401 63.8769 30.3009 63.8397 30.4462 63.7666C30.4601 63.7602 30.476 63.7666 30.4887 63.756L59.1763 48.881C59.3492 48.7914 59.4941 48.656 59.5953 48.4896C59.6965 48.3232 59.75 48.1322 59.75 47.9375V16.0625C59.7468 15.8684 59.692 15.6787 59.5911 15.5129C59.4903 15.347 59.3471 15.2111 59.1763 15.119ZM18.5462 26.1966V33.2898L12.7662 30.2915V23.1982C15.4969 24.6135 14.53 24.113 18.5462 26.1966ZM45.9917 10.6767L19.6141 24.3553C15.4799 22.2122 16.6083 22.7966 14.0094 21.4483L40.3859 7.77496L45.9917 10.6767ZM56.3797 16.0625L30 29.7411L21.925 25.5517L48.3005 11.873L56.3797 16.0625ZM30 2.38384L38.075 6.57328L11.6995 20.2519L3.62025 16.0625L30 2.38384ZM2.375 17.8103L10.6412 22.0964V30.9375C10.6412 31.1322 10.6947 31.3232 10.7959 31.4896C10.8971 31.656 11.0421 31.7914 11.215 31.881L19.1189 35.9822C19.2809 36.0664 19.4619 36.1074 19.6443 36.1013C19.8268 36.0951 20.0046 36.0421 20.1606 35.9473C20.3166 35.8525 20.4455 35.7191 20.535 35.5599C20.6244 35.4008 20.6714 35.2213 20.6712 35.0387V27.2973L28.9375 31.5835V61.0647L2.375 47.2915V17.8103ZM57.625 47.2915L31.0625 61.0647V31.5835L57.625 17.8103V47.2915Z"
                    fill="#70717B"
                  />
                </svg>
              </div>
            </div>
            <div className="col-lg-4 RightText">
              <a>
                {" "}
                <h2>Boxes</h2>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="row">
            <div className="col-lg-2 ">
              <div
                className={getBox1 ? "CustomIcons" : "CustomIcons2"}
                onClick={() => {
                  setBox1(!getBox1);
                  setComp(false);
                  setBox(true);
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 3 60 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.4399 22.1821L46.322 17.7778L53.4391 13.3742C53.5612 13.2986 53.6619 13.193 53.7318 13.0675C53.8017 12.942 53.8383 12.8007 53.8383 12.657C53.8383 12.5134 53.8017 12.3721 53.7318 12.2466C53.6619 12.1211 53.5612 12.0155 53.4391 11.9399L35.7203 0.971103C35.5869 0.888467 35.433 0.844688 35.2761 0.844688C35.1191 0.844688 34.9653 0.888467 34.8318 0.971103L27.0002 5.81676L19.1668 0.969415C19.0334 0.886946 18.8798 0.843262 18.723 0.843262C18.5662 0.843262 18.4125 0.886946 18.2792 0.969415L0.56041 11.9382C0.438311 12.0138 0.337552 12.1194 0.267679 12.2449C0.197806 12.3704 0.161133 12.5117 0.161133 12.6554C0.161133 12.799 0.197806 12.9403 0.267679 13.0658C0.337552 13.1913 0.438311 13.2969 0.56041 13.3725L7.67829 17.7778L0.56041 22.1821C0.438311 22.2578 0.337552 22.3634 0.267679 22.4889C0.197806 22.6144 0.161133 22.7557 0.161133 22.8993C0.161133 23.043 0.197806 23.1842 0.267679 23.3097C0.337552 23.4352 0.438311 23.5408 0.56041 23.6165L8.43766 28.4934V41.3437C8.43773 41.4874 8.4745 41.6287 8.54449 41.7542C8.61449 41.8797 8.71538 41.9853 8.8376 42.0609L26.5563 53.0296C26.5809 53.0426 26.6062 53.0539 26.6323 53.0634C26.6584 53.076 26.6829 53.0879 26.7099 53.098C26.8019 53.1364 26.9005 53.1562 27.0002 53.1562C27.0998 53.1562 27.1985 53.1364 27.2904 53.098C27.3174 53.0879 27.3419 53.076 27.368 53.0634C27.3941 53.0539 27.4195 53.0426 27.444 53.0296L45.1627 42.0609C45.2849 41.9853 45.3858 41.8797 45.4558 41.7542C45.5258 41.6287 45.5626 41.4874 45.5627 41.3437V28.4934L53.4399 23.6165C53.562 23.5408 53.6628 23.4352 53.7326 23.3097C53.8025 23.1842 53.8392 23.043 53.8392 22.8993C53.8392 22.7557 53.8025 22.6144 53.7326 22.4889C53.6628 22.3634 53.562 22.2578 53.4399 22.1821ZM27.0002 27.7543L10.8845 17.7778L27.0002 7.80126L43.1158 17.7778L27.0002 27.7543ZM35.2773 2.6797L51.3921 12.6562L44.7189 16.7855L28.6033 6.80901L35.2773 2.6797ZM18.723 2.6797L25.397 6.80901L9.28141 16.7855L2.60735 12.6562L18.723 2.6797ZM9.28141 18.77L25.397 28.7465L18.723 32.8758L2.60735 22.8993L9.28141 18.77ZM10.1252 29.5379L18.2792 34.5853C18.4125 34.6677 18.5662 34.7114 18.723 34.7114C18.8798 34.7114 19.0334 34.6677 19.1668 34.5853L26.1564 30.261V50.7979L10.1252 40.8737V29.5379ZM43.8752 40.8737L27.8439 50.7979V30.261L34.8327 34.5861C34.9661 34.6687 35.12 34.7125 35.2769 34.7125C35.4339 34.7125 35.5877 34.6687 35.7212 34.5861L43.8752 29.5379V40.8737ZM35.2773 32.8758L28.6033 28.7465L44.7189 18.77L51.3921 22.8993L35.2773 32.8758Z"
                    fill="#1F3347"
                  />
                </svg>
              </div>
            </div>
            <div className="col-lg-5 RightText">
              <h2>Custom</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-fullLine">
        <div className="row">
          <div className="col-6">
            {" "}
            <div
              className={getBox ? "Icons" : "Icons2"}
              onClick={() => {
                setBox(!getBox);
                setComp(true);
                setBox1(true);
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 6 65 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.1763 15.119L30.4887 0.243964C30.3377 0.165718 30.1701 0.124878 30 0.124878C29.8299 0.124878 29.6623 0.165718 29.5113 0.243964L0.82375 15.119C0.652768 15.2109 0.509438 15.3468 0.408572 15.5127C0.307706 15.6786 0.252962 15.8684 0.25 16.0625V47.9375C0.249984 48.1322 0.303492 48.3232 0.404677 48.4896C0.505862 48.656 0.650833 48.7914 0.82375 48.881L29.5113 63.756C29.6549 63.8323 29.8148 63.8732 29.9775 63.875C30.1401 63.8769 30.3009 63.8397 30.4462 63.7666C30.4601 63.7602 30.476 63.7666 30.4887 63.756L59.1763 48.881C59.3492 48.7914 59.4941 48.656 59.5953 48.4896C59.6965 48.3232 59.75 48.1322 59.75 47.9375V16.0625C59.7468 15.8684 59.692 15.6787 59.5911 15.5129C59.4903 15.347 59.3471 15.2111 59.1763 15.119ZM18.5462 26.1966V33.2898L12.7662 30.2915V23.1982C15.4969 24.6135 14.53 24.113 18.5462 26.1966ZM45.9917 10.6767L19.6141 24.3553C15.4799 22.2122 16.6083 22.7966 14.0094 21.4483L40.3859 7.77496L45.9917 10.6767ZM56.3797 16.0625L30 29.7411L21.925 25.5517L48.3005 11.873L56.3797 16.0625ZM30 2.38384L38.075 6.57328L11.6995 20.2519L3.62025 16.0625L30 2.38384ZM2.375 17.8103L10.6412 22.0964V30.9375C10.6412 31.1322 10.6947 31.3232 10.7959 31.4896C10.8971 31.656 11.0421 31.7914 11.215 31.881L19.1189 35.9822C19.2809 36.0664 19.4619 36.1074 19.6443 36.1013C19.8268 36.0951 20.0046 36.0421 20.1606 35.9473C20.3166 35.8525 20.4455 35.7191 20.535 35.5599C20.6244 35.4008 20.6714 35.2213 20.6712 35.0387V27.2973L28.9375 31.5835V61.0647L2.375 47.2915V17.8103ZM57.625 47.2915L31.0625 61.0647V31.5835L57.625 17.8103V47.2915Z"
                  fill="#70717B"
                />
              </svg>
            </div>
            <h2>BOXES</h2>
          </div>
          <div className="col-6">
            {" "}
            <div
              className={getBox1 ? "CustomIcons" : "CustomIcons2"}
              onClick={() => {
                setBox1(!getBox1);
                setComp(false);
                setBox(true);
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.4399 22.1821L46.322 17.7778L53.4391 13.3742C53.5612 13.2986 53.6619 13.193 53.7318 13.0675C53.8017 12.942 53.8383 12.8007 53.8383 12.657C53.8383 12.5134 53.8017 12.3721 53.7318 12.2466C53.6619 12.1211 53.5612 12.0155 53.4391 11.9399L35.7203 0.971103C35.5869 0.888467 35.433 0.844688 35.2761 0.844688C35.1191 0.844688 34.9653 0.888467 34.8318 0.971103L27.0002 5.81676L19.1668 0.969415C19.0334 0.886946 18.8798 0.843262 18.723 0.843262C18.5662 0.843262 18.4125 0.886946 18.2792 0.969415L0.56041 11.9382C0.438311 12.0138 0.337552 12.1194 0.267679 12.2449C0.197806 12.3704 0.161133 12.5117 0.161133 12.6554C0.161133 12.799 0.197806 12.9403 0.267679 13.0658C0.337552 13.1913 0.438311 13.2969 0.56041 13.3725L7.67829 17.7778L0.56041 22.1821C0.438311 22.2578 0.337552 22.3634 0.267679 22.4889C0.197806 22.6144 0.161133 22.7557 0.161133 22.8993C0.161133 23.043 0.197806 23.1842 0.267679 23.3097C0.337552 23.4352 0.438311 23.5408 0.56041 23.6165L8.43766 28.4934V41.3437C8.43773 41.4874 8.4745 41.6287 8.54449 41.7542C8.61449 41.8797 8.71538 41.9853 8.8376 42.0609L26.5563 53.0296C26.5809 53.0426 26.6062 53.0539 26.6323 53.0634C26.6584 53.076 26.6829 53.0879 26.7099 53.098C26.8019 53.1364 26.9005 53.1562 27.0002 53.1562C27.0998 53.1562 27.1985 53.1364 27.2904 53.098C27.3174 53.0879 27.3419 53.076 27.368 53.0634C27.3941 53.0539 27.4195 53.0426 27.444 53.0296L45.1627 42.0609C45.2849 41.9853 45.3858 41.8797 45.4558 41.7542C45.5258 41.6287 45.5626 41.4874 45.5627 41.3437V28.4934L53.4399 23.6165C53.562 23.5408 53.6628 23.4352 53.7326 23.3097C53.8025 23.1842 53.8392 23.043 53.8392 22.8993C53.8392 22.7557 53.8025 22.6144 53.7326 22.4889C53.6628 22.3634 53.562 22.2578 53.4399 22.1821ZM27.0002 27.7543L10.8845 17.7778L27.0002 7.80126L43.1158 17.7778L27.0002 27.7543ZM35.2773 2.6797L51.3921 12.6562L44.7189 16.7855L28.6033 6.80901L35.2773 2.6797ZM18.723 2.6797L25.397 6.80901L9.28141 16.7855L2.60735 12.6562L18.723 2.6797ZM9.28141 18.77L25.397 28.7465L18.723 32.8758L2.60735 22.8993L9.28141 18.77ZM10.1252 29.5379L18.2792 34.5853C18.4125 34.6677 18.5662 34.7114 18.723 34.7114C18.8798 34.7114 19.0334 34.6677 19.1668 34.5853L26.1564 30.261V50.7979L10.1252 40.8737V29.5379ZM43.8752 40.8737L27.8439 50.7979V30.261L34.8327 34.5861C34.9661 34.6687 35.12 34.7125 35.2769 34.7125C35.4339 34.7125 35.5877 34.6687 35.7212 34.5861L43.8752 29.5379V40.8737ZM35.2773 32.8758L28.6033 28.7465L44.7189 18.77L51.3921 22.8993L35.2773 32.8758Z"
                  fill="#1F3347"
                />
              </svg>
            </div>
            <div style={{ textAlign: "left", paddingTop: "15px" }}>
              <h2>CUSTOM</h2>
            </div>
          </div>
        </div>
      </div>

      {getComp ? <BoxComp box={props.mybox} /> : <CustomBox box={props.mybox} />}

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

export default ChooseBox;
