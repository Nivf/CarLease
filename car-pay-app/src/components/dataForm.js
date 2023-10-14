import { Slider, FormControl} from '@mui/material';
import { React,useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCarPriceValue,
  setMonthValue,
  setPrePriceValue
} from '../Redux/actions'
import { styled } from "@mui/material/styles";
import { Typography, TextField } from '@mui/material';

const BootstrapSlider = styled(Slider)(({ theme }) => ({
  width: "300px",
  display: "flex"
}));

const SliderContainer = styled("div")(({ theme }) => ({
  display: "inline-block",
  margin: "30px"
}));

const marks = [
  {
    value: 12,
    label: '12',
  },
  {
    value: 24,
    label: '24',
  },
  {
    value: 36,
    label: '36',
  },
  {
    value: 48,
    label: '48',
  },
  {
    value: 60,
    label: '60',
  }
];

const DataForm = () => {

  const dispatch = useDispatch();
  const [prePayText, setPrePayText] = useState(null);
 
  const handleChange = (newValue, action, isPriceChange = false) => {
    /*add input validations here*/
     if(isPriceChange){
    const isPriceValid =  (newValue != '' && newValue != 0);
    const prePayRange = isPriceValid ? `Minimum - ${(newValue * 0.1).toFixed(2)}$, Maximum - ${(newValue * 0.8).toFixed(2)}$` : null;
    setPrePayText(prePayRange);
    }
    dispatch(action(newValue));
  };

  return (
    <SliderContainer>
    <FormControl>
      <TextField style={{ marginBottom: 20 + 'px'}}
        name="carPrice"
        onChange={(event) => handleChange(event.target.value, setCarPriceValue, true)}
        label="Car Price"
        type="number"
        InputProps={{
          inputProps: { min: 0 }
        }}
        variant="outlined"
      />
      <TextField style={{ marginBottom: 20 + 'px' }}
        name="carPrePay"
        onChange={(event, newValue) => handleChange(event.target.value, setPrePriceValue)}
        label="Pre Pay"
        helperText={prePayText}
        disabled={prePayText == null}
        type="number"
        InputProps={{
          inputProps: { min: 0 }
        }}
        variant="outlined"
      />
      <Typography id="input-slider2">
        Month to pay
      </Typography>
      <BootstrapSlider
        onChange={(event, newValue) => handleChange(newValue, setMonthValue)}
        min={12}
        defaultValue={12}
        max={60}
        step={12}
        aria-labelledby="slider-label"
        valueLabelDisplay="auto"
        marks={marks}
      />
      </FormControl>
    </SliderContainer>
  );
}

export default DataForm;