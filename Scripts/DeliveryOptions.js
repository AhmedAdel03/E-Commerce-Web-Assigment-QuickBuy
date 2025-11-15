import dayjs  from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
const deliveryDate=dayjs()
export const delivery={
  Tommorow:{
    deliverytime:deliveryDate.add(1,'days').format('dddd,MMMM D'),
    deliveryprice:9.99
  },
   AfterThreeDays:{
    deliverytime:deliveryDate.add(3,'days').format('dddd,MMMM D'),
    deliveryprice:4.99
  },
   AfterWeek:{
    deliverytime:deliveryDate.add(7,'days').format('dddd,MMMM D'),
    deliveryprice:'FREE Shipping'
  },
}
