import { useState, useCallback, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'

import './App.css'
import profilePicture from './assets/image/profile.jpg'
import sembuh from './assets/image/sembuh.jpg'
import fithappy from './assets/image/fithappy.jpg'
import syncargo from './assets/image/syncargo.jpg'
import andalingo from './assets/image/andalingo.jpg'

function App () {
  const [loading, setLoading] = useState(false)
  const sections = document.getElementsByClassName('content-card')
  const allMenu = document.getElementsByClassName('menu-icon')
  const formRef = useRef(null)

  const handleScroll = useCallback(e => {
    const { scrollTop } = e.target
    Array.from(sections).forEach((element, idx) => {
      const { offsetTop, clientHeight } = element
      const scrollPosition = scrollTop + Array.from(sections)[0].offsetTop
      const sectionEnd =
        offsetTop - Array.from(sections)[0].offsetTop - 1 + clientHeight
      const sectionStart = sectionEnd - clientHeight

      if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
        reset()
        Array.from(allMenu)[idx].classList.add('active')
      }
    })
  }, [])

  const reset = () => {
    Array.from(allMenu).forEach(element => {
      element.classList.remove('active')
    })
  }

  const sendEmail = e => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        result => {
          setLoading(false)
          toast.success('Email successfully sent')
          e.target.reset()
        },
        error => {
          console.log('err', error)
          setLoading(false)
          toast.error('Something when wrong')
        }
      )
  }

  return (
    <>
      <nav id='navbar' className='navbar'>
        <a href='#'></a>
      </nav>

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />

      <div className='container'>
        <div id='all-menu' className='menu'>
          <a
            href='#welcome-section'
            className='menu-icon active fas fa-home'
          ></a>
          <a href='#about' className='menu-icon fas fa-user'></a>
          <a href='#projects' className='menu-icon fas fa-code'></a>
          <a href='#experience' className='menu-icon fas fa-briefcase'></a>
          <a href='#contact' className='menu-icon fas fa-envelope'></a>
        </div>

        <div className='portfolio'>
          <div className='header'>
            <img className='header-img' src={profilePicture} alt='' />
            <h1 className='name'>Fransiska Yuliyanti Siburian</h1>
            <h2>Mobile Developer</h2>
            <div className='socials'>
              <a
                href='https://www.linkedin.com/in/fransiska-yuliyanti-siburian-87750b164'
                target='_blank'
                className='fab fa-linkedin-in'
                id='profile-link'
              ></a>
              <a
                href='https://github.com/fransiskasiburian'
                target='_blank'
                className='fab fa-github'
              ></a>
            </div>
            <a
              href='https://drive.google.com/file/d/1E178laA548QlwfRQg9Hqbw5UExoT-dcl/view?usp=sharing'
              target='_blank'
              className='cta'
            >
              DownIoad CV
            </a>
          </div>

          <div onScroll={handleScroll} className='content'>
            <section className='content-card home' id='welcome-section'>
              <h1>Hello, I am Fransiska Yuliyanti Siburian</h1>
            </section>

            <section className='content-card about' id='about'>
              <h1>About me</h1>
              <div className='about-item about-me'>
                <p>
                  I easily adapt to the environment, can work individually or in
                  a team. and quickly understand something. I also like
                  challenges, able to work under pressure, independent,
                  disciplined, honest and a good listener. Apart from coding, I
                  am also able to find good solutions for application
                  performance.
                </p>
              </div>
              <div className='col-2'>
                <div className='about-item'>
                  <h1>Skills</h1>
                  <div className='skills'>
                    <span className='skill'>HTML</span>
                    <span className='skill'>CSS</span>
                    <span className='skill'>JavaScript</span>
                    <span className='skill'>React Native</span>
                    <span className='skill'>React-Hooks</span>
                    <span className='skill'>Redux-Saga</span>
                    <span className='skill'>ReactJS</span>
                    <span className='skill'>Git</span>
                    <span className='skill'>Firebase</span>
                  </div>
                </div>

                <div className='about-item languages'>
                  <h1>Languages</h1>
                  <div className='language'>
                    <p>Indonesia</p>
                    <span className='bar'>
                      <span className='indonesia'></span>
                    </span>
                  </div>
                  <div className='language'>
                    <p>English</p>
                    <span className='bar'>
                      <span className='english'></span>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className='content-card projects' id='projects'>
              <h1>Projects</h1>
              <div className='col-2 project-list'>
                <div className='project-tile'>
                  <img src={syncargo} alt='' />
                  <div className='overlay'>
                    <div className='project-description'>
                      <h3>Syncargo</h3>
                      <p>
                        Syncargo app is designed specifically to cater to the
                        needs of freight forwarders. Syncargo helps you
                        effortlessly manage your forwarding business, providing
                        an unforgettable experience to your customers.
                      </p>
                      <a
                        href='https://play.google.com/store/apps/details?id=com.syncargo'
                        target='_blank'
                      >
                        click here
                      </a>
                    </div>
                  </div>
                </div>
                <div className='project-tile'>
                  <img src={andalingo} alt='' />
                  <div className='overlay'>
                    <div className='project-description'>
                      <h3>Andalin Go</h3>
                      <p>
                        Andalin is a digital freight forwarding company that
                        embodies simplicity by unraveling the complexity of the
                        import and export process with easy shipping procurement
                        steps. Easy Quotes & Easy Coordination.
                      </p>
                      <a
                        href='https://play.google.com/store/apps/details?id=com.andalinlite&hl=id&gl=US'
                        target='_blank'
                      >
                        click here
                      </a>
                    </div>
                  </div>
                </div>

                <div className='project-tile'>
                  <img src={fithappy} alt='' />
                  <div className='overlay'>
                    <div className='project-description'>
                      <h3>FitHappy</h3>
                      <p>
                        An end-to-end holistic wellness & well being solution
                        that changes the habits of healthy eating, exercise,
                        mindfulness, and productivity to help employees become
                        healthier, happier, and more productive.
                      </p>
                      <a
                        href='https://play.google.com/store/apps/details?id=app.fithappy&hl=en'
                        target='_blank'
                      >
                        click here
                      </a>
                    </div>
                  </div>
                </div>
                <div className='project-tile'>
                  <img src={sembuh} alt='' />
                  <div className='overlay'>
                    <div className='project-description'>
                      <h3>Sembuh</h3>
                      <p>
                        Now you can share with Fighters, Survivors, and Health
                        Workers in the Heal Application Support Group.
                      </p>
                      <a
                        href='https://play.google.com/store/apps/details?id=id.sembuh.app&hl=en'
                        target='_blank'
                      >
                        click here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='content-card experience' id='experience'>
              <h1>Experience</h1>
              <div className='timeline'>
                <div className='timeline-items'>
                  <div className='timeline-item'>
                    <div className='timeline-date'>2022 - now</div>
                    <div className='timeline-content'>
                      <h3>PT Eximku Teknologi Indonesia (Andalin)</h3>
                      <h4>- Syncargo</h4>
                      <p>
                        The purpose of this project is developing an freight
                        forwarders application that helps company to create
                        quotations, view quotation details, reject/cancel
                        quotations and manage customer data.
                      </p>
                      <h4>- Andalin Go</h4>
                      <p>
                        The purpose of this project is developing an freight
                        forwarders application that helps customer to create
                        shipments, accept quotations (order prices) and monitor
                        shipments. Customer can also chat with agent service
                        within the application.
                      </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-date'>2020 - 2022</div>
                    <div className='timeline-content'>
                      <h3>PT Cepat Sembuh Hidup Sehat</h3>
                      <br></br>
                      <h4>- FitHappy</h4>
                      <p>
                        The purpose of this project is developing a mobile
                        application that changes the habits of healthy eating,
                        exercise, mindfulness, and productivity to help
                        employees become healthier, happier, and more
                        productive.
                      </p>
                      <h4>- Sembuh</h4>
                      <p>
                        The purpose of this project is developing a mobile
                        application real time group chat application called
                        Support Group with React Native.
                      </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-date'>2019</div>
                    <div className='timeline-content'>
                      <h3>TaniHub - (Internship)</h3>
                      <p>
                        I was an intern at PT. TaniHub Indonesia where I build
                        mobile app in 3 months. In this project I have
                        responsibilty to fulfill the company's requirement for
                        develop activity reporting app for employee's activity
                        in field. For the specific task I have integrate app
                        with the API, authentication account with email for
                        employee access only and integrating storage system with
                        Google Cloud Storage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='content-card contact' id='contact'>
              <h1>Contact</h1>
              <form
                ref={formRef}
                className='form'
                id='form'
                onSubmit={e => sendEmail(e)}
              >
                <div className='input-box'>
                  <input
                    type='text'
                    className='text-input'
                    name='user_name'
                    placeholder='Name'
                    required
                  />
                </div>
                <div className='input-box'>
                  <input
                    type='email'
                    className='text-input'
                    name='user_email'
                    id='email'
                    placeholder='Email'
                    required
                  />
                </div>
                <div className='input-box'>
                  <input
                    type='subject'
                    className='text-input'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='input-box'>
                  <textarea
                    name='message'
                    className='message'
                    placeholder='Message...'
                    required
                  />
                </div>
                <div className='input-box'>
                  <button type='submit' className='submit-btn' id='submit'>
                    {loading ? <div className='loader'></div> : 'Submit'}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
