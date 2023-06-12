import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Grid, Typography } from '@mui/material'

export const BannerSwiper = styled(Swiper)`
&& {
  height: 472px;
  margin-top: 80px;
  margin-bottom: 100px;
  user-select: none;
  .swiper-button-next {
    right: 13%;
    color: black;
    opacity: .2;
    @media (max-width:1600px) {
      right: 7%;
    }
    @media (max-width:1440px) {
      right: 4%;
    }
    @media (max-width:1100px) {
      right: 2%;
    }
  }
  .swiper-button-prev {
    left: 13%;
    color: black; 
    opacity: .2;
    @media (max-width:1600px) {
      left: 7%;
    }
    @media (max-width:1440px) {
      left: 4%;
    }
    @media (max-width:1100px) {
      left: 2%;
    }
  }
  .swiper-scrollbar {
    width: 1100px;
    left: 50%;
    transform: translateX(-50%);
  }
}`;
export const BaseBox = styled.div`
&&{
  width: 1100px;
  margin: 0 auto;
  position: relative;
}`
export const BannerImg = styled.img`
&&{
  z-index: 1;
  width: 1100px;
  position: absolute;
  margin: 0 auto;
  /* top: 0; */
  left: 50%;
  transform: translateX(-50%);

}`;
export const BannerBtn = styled.img`
&& {
  width: 175px;
  z-index: 2;
  cursor: pointer;
  position: absolute;
  &.bannerBtn_1 {
    top: 387px;
    left: 26px;
  }
  &.bannerBtn_2 {
    top: 330px;
    left: 40px;
  }
  &.bannerBtn_3 {
    top: 305px;
    right: 123px;
  }
  &.bannerBtn_4 {
    top: 205px;
    right: 90px;
  }
}`;
export const BannerBackgound = styled.img`
&& {
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  left: 0;
}`;
export const GradientRelative = styled.div`
&& {
  position: relative;
}`;
export const GradientBox = styled.div`
&& {
  width: 100%;
  height: 300px;
  background: linear-gradient(180deg, rgba(230, 230, 230, 0) 0%, #E6E6E6 100%);
  position: absolute;
  top: -35%;
  left: 0;
  z-index: -1;
}`;
export const SecondSwiper = styled(Swiper)`
&& {
  height: 370px;
  margin: 36px 0 100px;
  display: flex;
  user-select: none;
  .swiper-pagination-bullets {
    width: 150px !important;
  }
  .swiper-pagination-bullet-active {
    width : 30px;
    background-color : #FFA30B;
    border-radius: 20px;
  } 
}`;
export const TitleTypography = styled(Typography)`
&& {
  font-size: 24px;
  margin-top: 100px;
}`;
export const InfoText = styled.p`
&& {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}`;
export const GalleryGrid = styled(Grid)`
&& {
  margin-top: 36px;
  .item {
    position: relative;
    width: 100%;
    .info {
      z-index: 1;
      width: 100%;
      height: 100%;
      color : #fff;
      position: absolute;
      text-align: center;
      opacity: 0;
      transition: opacity .3s;
      background-color: #FFA30B;
      .title {
        margin-top: 80px;
        font-size: 36px;
        font-weight: bold;
        text-align: center;
      }
      .title:after {
        content: "";
        display: block;
        width: 50%;
        border-bottom: 1px solid #bcbcbc;
        margin: 5px auto;
      }
      .btn {}
    }
  }
  /* HOVER EFFECT */
  .item:hover { .info { opacity: 1; } }
}`;