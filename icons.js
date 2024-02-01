import React from 'react'
import Styles from './icons.module.css'
import Image from 'next/image';

const Icons = ({ index }) => {
  const dynamicStyles = {
    '--i': index
  };

  return (
    <div className={Styles.playground}>
    <div className={Styles.container}>
      <div className={Styles.circle_out}>
      <div className={Styles.iconOuter}>
        <div className={Styles.imgOBx} style={dynamicStyles}>
          <Image src='/web/public/enterprise/aws.webp' width="100" height="100" alt="AWS"/>
        </div>
        <div className={Styles.imgOBx} style={{ '--i': 1 }}>
          <img src='web/public/enterprise/azure.webp' width="90" height="90" alt="Azure"/>
        </div>
        <div className={Styles.imgOBx} style={{ '--i':  2 }}>
          <img src='web/public/enterprise/c-sharp.webp' width="100" height="100" alt="GCP"></img>
        </div>
        <div className={Styles.imgOBx} style={{ '--i': 3}}>
          <img src='web/public/enterprise/c.webp' width="100" height="100" alt="OpenStack"></img>
        </div>
      </div>
      </div>
      <div className={Styles.circle_in}>
      <div className={Styles.iconInner}>
        <div className={Styles.imgIBx} style={{ '--i': 4}}>
          <img src='https://static.wixstatic.com/media/cf7615_f3987486746b4b8b94da448dba41a57d~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/kubernetes.png' alt="Kubernetes"></img>
        </div>
        <div className={Styles.imgIBx} style={{ '--i': 5}}>
          <img src='https://static.wixstatic.com/media/cf7615_a1f8c7d096ef4c0ca24fb3a3a91d9e86~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/java.png' alt="Java"></img>
        </div>
        <div className={Styles.imgIBx} style={{ '--i': 6}}>
          <img src='https://static.wixstatic.com/media/cf7615_47fef1d3b6fc4f8faef378df53ea4f89~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/scala.png' alt="Scala"></img>
        </div>
        <div className={Styles.imgIBx} style={{ '--i':7}}>
          <img src='https://static.wixstatic.com/media/cf7615_caec872ff9f54b638159469c58c258b3~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c.png' alt="C"></img>
        </div>
      </div>
      </div>
    </div>
      <div className={Styles.title}>
            <h2>ENTERPRISE</h2>
        </div>
    
  <div className={Styles.container_one}>
  <div className={Styles.circle_out_one}>
    <div className={Styles.iconOuter_one}>
      <div className={Styles.imgOCx} style={{ '--i': 1 }}>
        <img src="https://static.wixstatic.com/media/cf7615_2f86d5db604248ae8e0c4a613414425b~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/js.png"alt="JavaScript"/>
      </div>
      <div className={Styles.imgOCx} style={{ '--i': 2 }}>
        <img src="https://static.wixstatic.com/media/cf7615_0acb65dc379a47be88b88bf2a7b65a3b~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/node.png" alt="Node.js"/>
      </div>
      <div className={Styles.imgOCx} style={{ '--i': 3 }}>
        <img src="https://static.wixstatic.com/media/cf7615_dda1820751ad491585090ffb4b2d52dc~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/jquery.png"
          alt="jQuery"
        />
      </div>
      <div className={Styles.imgOCx} style={{ '--i': 4 }}>
        <img src="https://static.wixstatic.com/media/cf7615_5a20f122cbe5429db22b54c0a9599334~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/php.png"
          alt="PHP" />
      </div>
      </div>
      <div className={Styles.circle_in_one}>
      <div className={Styles.iconInner_one}>
      <div className={Styles.imgICx} style={{ '--i': 5 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_b0f0183c7fba44c8992e99e3cedcf200~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/symfony.png"
          alt="Symfony"
        />
      </div>
      <div className={Styles.imgICx} style={{ '--i': 6 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_ddaacf5e2b084098bdcdeb507cf5802e~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ruby.png"
          alt="Ruby"
        />
      </div>
      <div className={Styles.imgICx} style={{ '--i': 7 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_d31568d38ecb47ce85a5fb886e3e7739~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/angular.png"
          alt="Angular"
        />
      </div>
      <div className={Styles.imgICx} style={{ '--i': 8 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_f6251b7171a342998403fb2502eb16e1~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/react.png"
          alt="React"
        />
      </div>
      </div>
      </div>
      </div>
    <div className={Styles.head_title}>
      <div className={Styles.head_one}><h2>WEB </h2></div>
      <h2 className={Styles.head_two}>DEVELOPMENT</h2>
    </div>
    </div>
    <div className={Styles.container_two}>
    <div className={Styles.circle_out_two}>
    <div className={Styles.iconOuter_two}>
      <div className={Styles.imgODx} style={{ '--i': 1 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_a2d3c6f5721a4411bbd44b6c72ee3b61~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_a2d3c6f5721a4411bbd44b6c72ee3b61~mv2.png"
          alt="Icon 1"
        />
      </div>
      <div className={Styles.imgODx} style={{ '--i': 2 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_b1b875c40037443e927cf1743d1bd08a~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_b1b875c40037443e927cf1743d1bd08a~mv2.png"
          alt="Icon 2"
        />
      </div>
      <div className={Styles.imgODx} style={{ '--i': 3 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_102901c0068241a79db28914a9a3a6f5~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_102901c0068241a79db28914a9a3a6f5~mv2.png"
          alt="Icon 3"
        />
      </div>
      </div>
      <div className={Styles.circle_in_two}>
      <div className={Styles.iconInner_two}>
      <div className={Styles.imgIDx} style={{ '--i': 4 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_09eafca26ee84ae78e3bf2ed365b27b6~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_09eafca26ee84ae78e3bf2ed365b27b6~mv2.png"
          alt="Icon 4"
        />
      </div>
      <div className={Styles.imgIDx} style={{ '--i': 5 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_067bf7a79ba042c39c21ed5e40a93933~mv2.png/v1/fill/w_52,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_067bf7a79ba042c39c21ed5e40a93933~mv2.png"
          alt="Icon 5"
        />
      </div>
      </div>
      </div>
    </div>
    <div className={Styles.head_title_one}>
      <h2 className={Styles.head_three}>MOBILE </h2>
      <h2 className={Styles.head_four}>DEVELOPMENT</h2>
    </div>
    </div>
    <div className={Styles.container_three}>
    <div className={Styles.circle_out_three}>
    <div className={Styles.iconOuter_three}>
      <div className={Styles.imgOEx} style={{ '--i': 1 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_ac7848c4932a40059a75c5664b797d89~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_ac7848c4932a40059a75c5664b797d89~mv2.png"
          alt="Icon 1"
        />
      </div>
      <div className={Styles.imgOEx} style={{ '--i': 2 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_d2a10a6bfbbe42bd945a9ccff04e460b~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_d2a10a6bfbbe42bd945a9ccff04e460b~mv2.png"
          alt="Icon 2"
        />
      </div>
      <div className={Styles.imgOEx} style={{ '--i': 3 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_ee24f2f2b0164b9cbd25e2c3f6c589fb~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_ee24f2f2b0164b9cbd25e2c3f6c589fb~mv2.png"
          alt="Icon 3"
        />
      </div>
      <div className={Styles.imgOEx} style={{ '--i': 4 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_1e3afb64b2034c538d9337c67e6f4343~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_1e3afb64b2034c538d9337c67e6f4343~mv2.png"
          alt="Icon 4"
        />
      </div>
      </div>
      <div className={Styles.circle_in_three}>
      <div className={Styles.iconInner_three}>
      <div className={Styles.imgIEx} style={{ '--i': 5 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_ea48104d32a049a4a403c66742413106~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_ea48104d32a049a4a403c66742413106~mv2.png"
          alt="Icon 5"
        />
      </div>
      <div className={Styles.imgIEx} style={{ '--i': 6 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_148a46c696474d9395484044b2a5c936~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_148a46c696474d9395484044b2a5c936~mv2.png"
          alt="Icon 6"
        />
      </div>
      <div className={Styles.imgIEx} style={{ '--i': 7 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_8747d95adc7146a99982855a3032d946~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_8747d95adc7146a99982855a3032d946~mv2.png"
          alt="Icon 7"
        />
      </div>
      <div className={Styles.imgIEx} style={{ '--i': 8 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_d35b80ce39084ebea171deaab8a5a824~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_d35b80ce39084ebea171deaab8a5a824~mv2.png"
          alt="Icon 8"
        />
      </div>
    </div>
    </div>
    </div>
    <div className={Styles.head_title_three}>
      <h2 className={Styles.head_five}>IoT </h2>
      <h2>DEVELOPMENT</h2>
    </div>
    </div>
    <div className={Styles.container_four}>
    <div className={Styles.icon_four}>
      <div className={Styles.imgFx} style={{ '--i': 1 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_753cd9a6aa44439483d11e32781ed018~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_753cd9a6aa44439483d11e32781ed018~mv2.png"
          alt="Icon 1"
        />
      </div>
      <div className={Styles.imgFx} style={{ '--i': 2 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_2fa40315c8044ae39aeaf8a762fe1e53~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_2fa40315c8044ae39aeaf8a762fe1e53~mv2.png"
          alt="Icon 2"
        />
      </div>
      <div className={Styles.imgFx} style={{ '--i': 3 }}>
        <img
          src="https://static.wixstatic.com/media/cf7615_abf830419a2444ccbcc5c211c15c228a~mv2.png/v1/fill/w_53,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cf7615_abf830419a2444ccbcc5c211c15c228a~mv2.png"
          alt="Icon 3"
        />
      </div>
    </div>
    </div>
    <div className={Styles.head_title_four}>
      <h2 className={Styles.head_six}>AI </h2>
      <h2 className={Styles.head__seven}>&</h2>
      <h2 className={Styles.head_eight}>ML</h2>
    </div>
    </div>
    


  );
};

export default Icons;