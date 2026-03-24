import { useForm } from 'react-hook-form'
type FoodDeliveryFormType ={
    orderNo: number,
    customerName: string,
    mobile: string,
    email: string
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
        <div className="row mb-2">
            <div className="col">
                <div className="form-floating">
                    <input type="text" className='form-control' placeholder='#Order No' {...register('orderNo')}/>
                    <label>Order No</label>
                </div>
            </div>
            <div className="col">
                <div className="form-floating">
                    <input type="text" className='form-control' placeholder='Mobile' {...register('mobile',{required:'Mobile Number is Required'})}/>
                    <label>Mobile</label>
                </div>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col">
                <div className="form-floating">
            <input type="text" className='form-control' placeholder='Customer Name' {...register('customerName',{required:'Customer Name is Required'})}/>
            <label>Customer Name</label>
        </div>
            </div>
            <div className="col">
                <div className="form-floating">
            <input type="text" className='form-control' placeholder='Email' {...register('email',{required:'Email is Required'})}/>
            <label>Email</label>
        </div>
            </div>
        </div>
        
        
        <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default FoodDeliveryForm