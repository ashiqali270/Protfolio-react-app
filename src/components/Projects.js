import WebsiteImag1 from '../assets/shoping.jpg'
import WebsiteImag2 from '../assets/travel.jpg'
import WebsiteImag3 from '../assets/protf.jpg'
export default function Projects() {
    const config ={
        Projects : [
            {
                Image: WebsiteImag1,
                description:'The Shopping App is a mobile/web-based e-commerce platform designed to provide users with a smooth and convenient online shopping experience.',
                link:'https://github.com/ashiqali270/shoping-python-app'

            },
            {
                Image: WebsiteImag2,
                description:'The Traveling App is a mobile/web application designed to make trip planning, booking, and traveling easier for users.',
                link:'https://github.com/ashiqali270/travel-python-app'

            },
            {
                Image: WebsiteImag3,
                description:'The Portfolio App is a personal/professional application designed to showcase an individual’s skills, projects, achievements, and experience in a modern, interactive way. ',
                link:'https://github.com/ashiqali270/Protfolio-react-app'

            }
        ]
    }
    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary" id= 'projects'>
        <div className="w-1/2 flex flex-col px-10 py-5">
        
         <h1 className='text-4xl border-b-4 border-primary  mb-5 w-[170px] font-bold '>Projects</h1>
         <p></p>
        </div>
        
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.Projects.map((project) => (
                    <a href={project.link}>
                    <div className='relative'>
                       <img  className='h-[200px] w-[500px]' src={project.Image}/>
                       <div className='project-desc'>
                           <p className='text-center px-2 py-2'>{project.description}</p>
                           <div className='flex justify-center'>
                          <a className='btn' target='_blank' href={project.link}>View Project</a>
                       </div>
                       </div>
                       
                    </div>
                     </a>
            
                
                ))}
        </div> 
        </div>      
                
        
    </section>

}
