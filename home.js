import React from 'react'
import Icons from './icons'
import Styles from './home.module.css'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'

const page = () => {
  return (
    <div  className={Styles.main_container}>
    <div className={Styles.container}>
      <Navbar/>
      <center>
        <section className='software_solution'>
        <div className={Styles.solution_head}>
          <h1>SOFTWARE SOLUTIONS DEVELOPMENT WITH <br /> THE LATEST TECHNOLOGIES</h1>
          <p>Today, every business faces the challenge of performing Digital Transformation.
            Whether you aim to use AR to simplify <br/> a part of your value chain or create an IoT
            ecosystem with Smart Contracts, our engineers <br/>know all key tech stacks needed to
            help you in this way. Accelotics has been <br/>leveraging emerging technologies to help
            our clients with impactful, enterprise-wide software solutions.</p>
        </div>
        </section>
        <section className='enterprise_software'>
        <div className={Styles.enterprise}>
          <h1>ENTERPRISE SOFTWARE SOLUTIONS<br />POWERED BY THE LATEST TECH</h1>
          <p>From the manufacturing line to the meeting room, our software
            development solutions will help you elevate your <br/>Enterprise Core and overcome the challenges of
            technological transformation both in daily and large-scale operations.</p>
        </div>
        </section> 
        <div style={{display:'grid',gridTemplateColumns:'repeat(4, 1fr)',justifyContent: "center", alignItems: "center" ,height: "30vh" }}>
        <div className={Styles.about_section} >
          <div className={Styles.about} style={{ marginRight: '200px' }}>
            <h1 className={Styles.about_hover}>A B O U T</h1>
            <p className={Styles.about_text}>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className={Styles.about} style={{ marginRight: '200px' }}>
            <h1 className={Styles.about_hover}>A B O U T</h1>
            <p className={Styles.about_text}>This is a great place to tell <br /> your story and give people <br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className={Styles.about} style={{ marginRight: '200px' }}>
            <h1 className={Styles.about_hover}>A B O U T</h1>
            <p className={Styles.about_text}>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className={Styles.about} style={{ marginRight: '200px' }}>
            <h1 className={Styles.about_hover}>A B O U T</h1>
            <p className={Styles.about_text}>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
        </div>
        </div>
        
        <section className='software_development'>
        <div className={Styles.development}>
          <h1>SOFTWARE DEVELOPMENT<br /> PLATFORMS, TECHNOLOGIES & <br />LANGUAGES</h1>
          <p>Smart solutions are the core of all that we do at Technowall.
            Our experts are bringing you wide-ranging expertise in all the <br/>areas needed for a
            reliable software development solution that works across the board.</p>
        </div>
        </section>
      </center>
      <>
      <Icons/>
      <Footers/>
      </>
      
    </div>
    </div>
    
    
  )
}

export default page