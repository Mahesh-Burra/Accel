'use client';

//import React from 'react';
import Styles from './footers.module.css'

const Footers = () => {
  return (
    <div className={Styles.footer}>
    <div className={Styles.list} id="list1">
        <h5 class={Styles.head1}>SERVICES</h5>
        <ul>
            <li>Strategy</li>
            <li>Product Engineering</li>
            <li>Architecture</li>
            <li>UI / UX Design</li>
            <li>App Development</li>
            <li>Dedicated Teams</li>
            <li>QA & Testing</li>
            <li>Cyber Security</li>
            <li>Web Development</li>
            <li>Custom Software Development</li>
        </ul>
    </div>
   
    <div className={Styles.list} id="list2">
        <h5 className={Styles.head2}>TECHNOLOGIES</h5>
        <ul>
            <li>Internet of Things</li>
            <li>Cloud Computing</li>
            <li>Artificial Intelligence</li>
            
        </ul>
    </div>
    <div class={Styles.list} id="list3">
        <h5 class={Styles.head3}>PLATFORMS</h5>
        <ul>
            <li>iOS</li>
            <li>Android</li>
            <li>Windows</li>
            <li>Hybrid Platform</li>
            <li>Azure</li>
        </ul>
    </div>
    <div class={Styles.list} id="list4">
        <h5 class={Styles.head4}>COMPANY</h5>
        <ul>
            <li>About</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
        </ul>
    </div>
    <div class={Styles.list} id="list5">
        <h5 class={Styles.head5}>CONTACTS</h5>
    </div>
    
    </div>
    
  );
}

export default Footers;