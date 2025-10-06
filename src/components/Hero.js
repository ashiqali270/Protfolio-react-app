import { GiThunderBlade } from 'react-icons/gi';
import HeroImg from '../assets/Hero.png';
import { AiOutlineTwitter, AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
import { LiaLinkedin } from 'react-icons/lia';
export default function Hero() {
    const config = {
        subtitle:'Python Developer ',
        social : {
            twitter:'WWw.TWITTER.COM',
            LiaLinkedin:'www.linkedin.com/in/ashiq-ali-932952a9',
            github:'https://github.com/ashiqali270'
            
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center '>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='w-1/2 text-white text-6xl font-hero-font'>Hi  , <br/>Im<span className='text-black'>ASHIQ</span>
                <p className='text-2xl' >{config.subtitle}</p>
            </h1>
            <div className='flex py-5'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={35}/></a>
                <a href=  {config.social.LiaLinkedin} className='pr-5  hover:text-white'><AiOutlineLinkedin size={35}/></a>
                <a href={config.social.github} className=' hover:text-white'><AiOutlineGithub size={35}/></a>
            </div>

        </div>
        
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}
