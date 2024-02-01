import Styles from './product.module.css'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
const page = () => {
  return (
    <>
    <div className={Styles.bg_container}>
        <div className={Styles.image_container}>
        <div className={Styles.product_content}>
        <Navbar/>
        </div>
            <div className={Styles.text_container}>
                <p className={Styles.product_title}>PRODUCT ENGINEERING</p>
                <h1 className={Styles.enterprise_title}>ENTERPRISE SOFTWARE<br />DEVELOPMENT</h1>
                <p className={Styles.para_content}>Need a solid software foundation for your business? Uncoordinated mobile apps<br />
                    and software stress out your employees and impede your productivity? Leverage<br/>
                    our decade-long expertise in enterprise software development, API integration,
                    <br/> modernizing legacy systems, and consolidating app portfolios.
                </p>
            </div>

        </div>
        <div className={Styles.solutions_container}>
            <h1 className={Styles.our_ent_heading}>OUR ENTERPRISE <br/> SOFTWARE SOLUTIONS</h1>
            <p className={Styles.software_para}>Your business needs a reliable enterprise software solution to support your many <br/> operations. It needs to scale, coordinate other software and mobile apps, <br/> incorporate advanced tech, and cover an extensive list of other objectives. <br/>
                Intellectsoft has the experience, tools, and technologies to create such demanding <br/> custom software.</p>
        </div>
        <div className={Styles.fimage}>
        
        
            <div className={Styles.hover_bg_container} >
                <p className={Styles.para}>CUSTOM ENTERPRISE <br/>SOFTWARE DEVELOPMENT</p>
                <div className={Styles.text}>
                    <p>Support your business <br/>infrastructure with scalable <br/>software that improves key facets <br/>of your enterprise, from automation <br/>to employee collaboration. Leverage <br/>our decade-long expertise to build <br/>an enterprise software solution<br/> that solves a particular business<br/> objective in one of your <br/>departments.</p>
                </div>
            </div>
            <div className={Styles.hover_bg_container_one} d-flex flex-column justify-content-center>
                    <p className={Styles.para}>SOFTWARE INTEGRATION</p>
                <div className={Styles.text}>
                    <p>Enterprises like yours rely on well-coordinated SaaS and on-premise third-party applications. Improve your software infrastructure with well-built microservices, reliable API, and data integration. Launch your mobile strategy with our comprehensive enterprise application development, or use our enterprise app integration solutions.</p>
                </div>
            </div>
            <div className={Styles.hover_bg_container2}d-flex flex-column justify-content-center>
                <p className={Styles.para}>LEGACY APPLICATION MODERNIZATION</p>
                <div className={Styles.text}>
                    <p>Outdated enterprise applications often cause employees to spend more time working around limitations. Hire our team to perform an in-depth feature and technical analysis of your legacy solution and improve it with the latest tools and technologies. A well-built legacy solution will help your employees become more productive and satisfied.</p>
                </div>
            </div>
            <div className={Styles.hover_bg_container3} d-flex flex-column justify-content-center>
                <p className={Styles.para}>APPLICATION PORTFOLIO CONSOLIDATION</p>
                <div className={Styles.text}>
                    <p>Frequent mergers and acquisitions leave enterprises with a wide variety of uncoordinated software solutions. Our experts will help you consolidate, integrate, and refactor your enterprise software as necessary, moving them to modern software stacks and cloud hosting. You will streamline IT operations, minimize costs, and increase employee efficiency.</p>
                </div>
                
            
            
            </div>
        
        <div className={Styles.latest_tech_container}>
            <h1 className={Styles.latest_heading_one}>THE LATEST TECH</h1>
            <p className={Styles.latest_tech_para}>Intellectsoft always keeps track of new technologies to deliver advanced enterprise <br /> software solutions. The latest tech give you many crucial benefits, from the highest <br /> level of security with blockchain - to reliable automation with Artificial Intelligence <br /> based algorithms like machine learning.</p>
        
        <div className={Styles.latest_tech_container}>
            <h1 className={Styles.latest_heading_two}>CAPABILITIES OF OUR ENTERPRISE <br/> SOFTWARE DEVELOPERS</h1>
            <p className={Styles.latest_tech_para_one}>Our enterprise software developers have the knowledge, niche skills, and <br /> experience to build you a solid software solution.</p>
        </div> 
        
        </div>
        </div>
        
        </div>

<Footers/>
</>
    
    
  )
}

export default page