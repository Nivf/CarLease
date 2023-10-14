import {React} from 'react';
import {useSelector} from 'react-redux';
import { Typography } from '@mui/material';

  const interestRates = {
    12: 5.8,
    24: 7.9,
    36: 8.4,
    48: 11.2,
    60: 13.9,
  };

const calculateLeasingPayments = (carPrice, prePay, monthsToReturn) => {

  const maxPrePayPercentage = 0.8;
  const minPrePayPercentage = 0.1;

  const interestRate = interestRates[monthsToReturn] || 0;

  const interest = interestRate != 0 ? ((carPrice - prePay) * interestRate) / 100 : null;
  const costPerMonth = interestRate != 0 ? (carPrice - prePay + interest) / monthsToReturn : null;

  const maxPrePay = carPrice * maxPrePayPercentage;
  const minPrePay = carPrice * minPrePayPercentage;

  return {
    numberOfReturnPayments: monthsToReturn,
    costPerMonth: costPerMonth?.toFixed(2),
    minimumPrePay: minPrePay.toFixed(2),
    maximumPrePay: maxPrePay.toFixed(2),
    interest: interest?.toFixed(2),
    prePay,
  };
};

let leasingInfo = null;
const PricingInfo = () => {

const prePay = useSelector((state) => state.prePay);
const carPrice = useSelector((state) => state.carPrice);
const monthsToReturn = useSelector((state) => state.monthsToReturn);

leasingInfo = calculateLeasingPayments(carPrice, prePay, monthsToReturn);

  return (
     <div>
          <Typography variant="h5">Leasing Information:</Typography>
          <Typography>Number of Return Payments: {leasingInfo?.numberOfReturnPayments}</Typography>
          <Typography>Cost Per Month: ${leasingInfo.costPerMonth}</Typography>
          <Typography>Minimum Initial Payment: ${leasingInfo.minimumPrePay}</Typography>
          <Typography>Maximum Initial Payment: ${leasingInfo.maximumPrePay}</Typography>
          <Typography>Interest: ${leasingInfo.interest}</Typography>
          <Typography>Initial Payment: ${leasingInfo.prePay}</Typography>
      </div>
    );
}

export default PricingInfo;