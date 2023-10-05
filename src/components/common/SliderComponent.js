import React from 'react'
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';


const SliderComponent = ({defaultValue,min,max,step,onChange,value,label,unit,amount}) => {
  return (
    <>
    <Stack spacing={1}>
    <Typography color='text.secondary' variant='subtitle2'>{label}</Typography>
    <Typography variant='h5'>{unit}{amount} </Typography>
    </Stack>
    
    <Slider defaultValue={defaultValue} min={min} max={max} marks step={step} onChange={onChange} value={value} aria-label="Default" valueLabelDisplay="auto" />

    <Stack justifyContent={'space-between'} direction='row'>
    <Typography variant='caption' color='text.secondary' >{unit} {min} </Typography>
    <Typography variant='caption' color='text.secondary'>{unit} {max} </Typography>
    </Stack>

    </>
  )
}

export default SliderComponent