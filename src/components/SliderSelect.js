import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data,setData}) => {
  console.log(data)
  const bank_limit=10000
  return (
    <>
      <SliderComponent label={'Home Value'} unit={'$'} amount={data.homeValue} defaultValue={data.homeValue} value={data.homeValue} min={1000} max={bank_limit} step={100} marks 
       onChange={(e,value)=>setData({
        ...data,
        downPayment:value*0.2,
        loanAmount:value*0.8,
        homeValue:value})}/>



<SliderComponent label={'Down Payment'} unit={'$'} amount={data.downPayment} defaultValue={data.downPayment} value={data.downPayment} min={0} max={data.homeValue} step={100} marks 
       onChange={(e,value)=>setData({
        ...data,
        loanAmount:(data.homeValue-value),
        downPayment:value})}/>



<SliderComponent label={'Loan Amount'} unit={'$'} amount={data.loanAmount} defaultValue={data.loanAmount} value={data.loanAmount} min={0} max={data.homeValue} step={100} marks 
       onChange={(e,value)=>setData({
        ...data,
        downPayment:(data.homeValue-value),
        loanAmount:value})}/>

<SliderComponent label={'Intrest Rate'} unit={'%'} amount={data.intrestRate} defaultValue={data.intrestRate} value={data.intrestRate} min={2} max={18} step={0.5} marks 
       onChange={(e,value)=>setData({
        ...data,
        intrestRate:value})}/>

    </>
  )
}

export default SliderSelect