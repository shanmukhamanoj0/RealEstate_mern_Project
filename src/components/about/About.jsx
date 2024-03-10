import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Real estate companies are pivotal players in facilitating property transactions, offering a suite of services encompassing sales, leasing, property management, and investment analysis. These firms leverage their expertise in local markets to provide valuable insights to a diverse clientele, ranging from individual homeowners to institutional investors. In an era of advancing technology, many real estate companies are embracing digital tools to enhance efficiency and client experiences. Upholding professionalism and ethical standards, these companies navigate challenges such as market fluctuations and regulatory changes while pursuing growth through strategic expansion and sustainability initiatives. Ultimately, real estate companies not only drive economic activity but also shape the built environment, playing a vital role in communities' development and prosperity.
</p>

            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
