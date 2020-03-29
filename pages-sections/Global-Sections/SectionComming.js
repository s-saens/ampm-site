import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

import background from "assets/img/global/comming-bg.jpg";
import commingImg from "assets/img/global/comming.jpg";

import styles from "assets/jss/custom/pages/globalSections/commingStyle";

const useStyles = makeStyles(styles);

export default function SectionComming() {
  const classes = useStyles();
  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={7} lg={7}>
            <div className={classes.content}>
              <h2 className={classes.title}>
                <strong>서비스 구현 전</strong>입니다.
              </h2>
              <h5>
                &nbsp;AM:PM DevOps와 함께 AM:PM 공식 웹 서비스 구현(기획,
                디자인, 개발)에 참여하고 싶으시다면 아래의 연락처와 링크를
                참고해주십시오.
              </h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3} lg={3}>
            <img
              src={commingImg}
              alt="comming"
              className={classes.imgRounded + " " + classes.img}
            />
          </GridItem>
        </GridContainer>
      </div>
      <Footer whiteFont containerStyle={{backgroundColor: "transparent"}}/>
    </div>
  );
}
