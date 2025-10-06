import AboutImage from '../assets/About.png';
export default function About() {
    const config  = {
        line1:'I am an Motivated and detail-oriented Computer Science graduate with a strong foundation in Python programming. Passionate about building efficient and scalable software solutions and expertise in HTML, CSS, JavaScript basics and modern frameworks like Django and Strong problem-solving skills and a passion for learning new technologies.',
        line2:'Eager to begin a career as a Python Developer to apply my knowledge in real-world applications, grow professionally, and contribute to a dynamic development team.',
        line3:''
    }
    return <section className='flex flex-col md:flex-row bg-primary px-5' id = 'about'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImage}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center  text-white'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[170px] font-bold '>About Me</h1>
                <p className=' pb-5'>{config.line1}</p>
                <p className=' pb-5'> {config.line2}</p>
                <p> {config.line3} </p>

            </div>
            
    
        </div>
    </section>
}