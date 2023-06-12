import { styled } from 'styled-components'
import { Chip, Button, ButtonGroup } from '@mui/material'

// FORM
export const BgBox = styled.div`
&& {
  width: 100%;
  background-color: #e9e9e9;
}`;
export const TitleBox = styled.div`
&& {
  width: 100%;
  height: 400px;
  margin-top: 80px;
  background-color: #e2e2e2;
  display: flex;
  justify-content: space-around;
  align-items: center;
}`;
export const InfoBox = styled.div`
&& {
  h5.brand {
    font-size: 1.125rem;
    margin-bottom: 0 !important;
    font-weight: bold;
  }
  h1.name {
    font-size: 3.75rem;
  }
  p.price {
    color: #FFA30B;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: 0.125rem;
  }
}`;
export const StyledChip = styled(Chip)`
&& {
  margin-right: 10px;
}`;
export const ImgBox = styled.div`
&& {

}`;
export const StyledBtnGroup = styled(ButtonGroup)`
&& {
  margin-top: 50px;
}`;
export const StyledBtn = styled(Button)`
&& {
  color: black;
  border-color: black;
  transition: all 1;
  &.clicked {
    color: white;
    background-color: black;
  }
}`;
export const MoreInfo = styled.div`
&& {
  width: 100%;
  border: 1px solid black;
}`;
export const FormDl = styled.dl`
&& {
  display: flex;
  flex-wrap: wrap;
}`;
export const FormDt = styled.dt`
&& {
  width: 10%;
  height: 100%;
  margin-top: 10px;
  text-align: center;
}`;
export const FormDd = styled.dd`
&& {
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  gap: .5em;
}`;
export const ChipBtn = styled.div`
&& {
  padding: 5px 10px;
  border: 1px solid #d8d8d8;
  border-radius: 1.5em;
}`;

// INFO
export const PriceDl = styled.dl`
&& {
  display: flex;
}`;
export const PriceDt = styled.dt`
&& {
  width: 10%;
  margin-top: 10px;
  height: 100%;
  text-align: center;
}`;
export const PriceDd = styled.dd`
&& {
  width: 90%;
  span {
    font-size: 14px;
  }
}`;

// SPAC
export const SpacDl = styled.dl`
&& {
  display: flex;
}`;
export const SpacDt = styled.dt`
&& {
  width: 10%;
  /* margin-top: 10px; */
  height: 100%;
  text-align: center;
}`;
export const SpacDd = styled.dd`
&& {
  display: flex;
  width: 90%;
  span {
    font-size: 0.825em;
  }
}`;
export const OptionDl = styled.dl`
&& {
  width: 33.3333333333%;
}`;
export const OptionDt = styled.dt`
&& {
  width: 40%;
  color: #999999;
  font-weight: normal;
  float: left;
}`;
export const OptionDd = styled.dd`
&& {
  font-weight: bold;
  /* float: right; */
}`;