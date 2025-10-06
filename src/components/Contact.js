import { BsWhatsapp } from "react-icons/bs"

export default function Contact() {

    const config = {
        Email:'ashiqali270@gmail.com',
        Phone:'903719423',
        Whatsapp:'97781 72746'
    }
    return <section className='flex flex-col md:flex-col bg-secondary px-5 py-32' id='con'>
        
        <div className=' flex flex-col items-center'>
        
                <h1 className='text-4xl border-b-4 text-white border-primary mb-5 w-[140px] font-bold '>Contact</h1>
                <p className=' pb-5'>If you  want to discus more in detaile,please contact me</p>
                <p className='py-2'><span className='font bold'>Email:</span>{config.Email}</p>
                <p className='py-2'><span className='font bold'>Phone:</span>{config.Phone}</p>
                <p className='py-2'><span className='font bold'>Whatsapp:</span>{config.Whatsapp}</p>
                

            </div>
            
    

    </section>
}