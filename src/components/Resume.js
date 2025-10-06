import ResumeImage from '../assets/321516-P9LJQF-87.jpg'
export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/1jp7QxdfMiDYzjk6VuROhwKex7vy_6NVN/view?usp=drivesdk'
    }
    return <section id='res'  className='flex flex-col md:flex-row bg-primary px-5' >
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImage}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center  text-white'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold '>Resume</h1>
                <p className=' pb-5'>you can view my Resume <a className='btn' href = {config.link}>Download</a>  </p>
                

            </div>
            
    
        </div>
    </section>
}
