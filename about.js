import React from 'react';
import Styles from './about.module.css'
import Navbar from '../components/Navbar';
import Footers from '../components/Footers';
import Image from 'next/image';


const About = () => {
  return (
    <>
    <Navbar/>
    <div className={Styles.nav}>
    </div>
    <div className={Styles.theory}>
      <div className={Styles.welcome}>
        <h1 className={Styles.head}>Welcome to Accelotics</h1>
        <p>
          Accelotics is one of the active start-ups growing with impeccable results. Accelotics will never <br/>compromise on the standards and quality of the user needs. The team of Accelotics will strive to meet the<br/> disciplines of the company.
        </p>
      </div>
      <div className={Styles.mission}>
        <h1 className={Styles.head_one}>OUR MISSION & VISION</h1>
        <p>
          Our mission is to help enterprises accelerate the adoption of new technologies, untangle complex issues that<br/> always emerge during digital evolution, and orchestrate ongoing innovation. Whether it is a consumer-oriented <br/>app or a transformative enterprise-class solution, the company leads the process from ideation and concept <br/>to delivery and provides ongoing support.
        </p>
      </div>
      <div className={Styles.picture}>
       <Image src = '/web/public/ceo-img.jpg' width="280" height="280"
       alt='CEO image'/>
       
      </div>
      <div>
        <h1 className={Styles.name}>BHAVESH ASANABADA</h1>
        <p className={Styles.designation}>Chief Executive Officer <br/>Software Developer</p>
      </div>
      <div className={Styles.message}>
        <h1 className={Styles.head_two}>CEO MESSAGE</h1>
        <p className={Styles.para_one}>
          Many years ago, as a young man, I dreamt of an opportunity that will afford people,<br/> regardless of age, gender, socio-economic status, and educational background the<br/> opportunity to realize their life dreams. I was an idealist; I had always believed that <br/>good things are in store for those who are willing to work hard for their dreams.<br/> Although my environment inculcated to my young minds that such was just a myth <br/>and opportunities of that kind didn't exist, I lead on to my hopes.
        </p>
        <p className={Styles.para_two}>
          Then one day, I stumbled upon this industry called Software Enterprise and <br/>Marketing. As I said "eureka!", I excitingly embarked on the journey of my life. The<br/> dreamer in me, who was yearning for an opportunity to realize my full potential,<br/> found its home. This industry continues to amaze me, with its power to breach <br/>cultural, religious, social, and political barriers and be an equalizer of statuses, it <br/>empowers people to change their lives and their environment.
        </p>
      </div>
    </div>
    <Footers/>
     </>
  );
}

export default About;