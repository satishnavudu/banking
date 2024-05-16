
import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, Form } from 'react-hook-form'

interface customFormI{
  form:any,
  name:string,
  label:string,
  placeholder:string
}
const CustomInput = ({form,name,label,placeholder}:customFormI) => {
  return (
    <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <div className='form-item'>
        <FormLabel className='form-lable'>
        
         {label}
        </FormLabel>
        <div className="flex w-full flex-col">
          <FormControl>
          <Input type={name =='password' ? 'password':'text'} placeholder={placeholder} className='input-class' {...field}/>
          </FormControl>
          <FormMessage className='form-message'></FormMessage>
        </div>
      </div>
      
    )}
  />
  )
}

export default CustomInput