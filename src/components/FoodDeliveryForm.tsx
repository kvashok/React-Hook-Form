import { useForm } from 'react-hook-form'
type FoodDeliveryFormType ={
    customerName: string,
    mobile: string
}
const FoodDeliveryForm = () => {
    const {register,handleSubmit} = useForm<FoodDeliveryFormType>()
    const onSubmit=(formData:FoodDeliveryFormType)=>{
        console.log(formData);
    }
    const onError=(errors: any)=>{
        console.log('Validate Error', errors)
    }
  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit,onError)}>
        <div className="form-floating mb-3">
            <input type="text" className='form-control' placeholder='Customer Name' {...register('customerName',{required:'Customer Name is Required'})}/>
            <label>Customer Name</label>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className='form-control' placeholder='Mobile' {...register('mobile',{required:'Mobile Number is Required'})}/>
            <label>Mobile</label>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default FoodDeliveryForm