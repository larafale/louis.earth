import React, { Component } from 'react'
// import { Link } from 'react-router'

import Portfolio from './Portfolio'
import Footer from './Footer'


const Intro = <section id="section-intro" className="wrapper style1 fullscreen fade-up">
  <div className="inner">
    <h1>Hello i'm Louis</h1>
    <span>I build stuff, from massive ecommerce platforms to regulated fintech wallets</span>
    <br/>
    <span>#apps&nbsp;&nbsp;#websites&nbsp;&nbsp;#API&nbsp;&nbsp;#bots&nbsp;&nbsp;#drones&nbsp;&nbsp;#iot</span>
    <br/>
    <br/>
    <ul className="icons">
      <li><a href="https://twitter.com/larafale" className="fa-twitter"><span className="label">Twitter</span></a></li>
      <li><a href="https://github.com/larafale" className="fa-github"><span className="label">GitHub</span></a></li>
      <li><a href="https://www.instagram.com/dibuffala" className="fa-instagram"><span className="label">Instagram</span></a></li>
      <li><a href="https://www.youtube.com/channel/UCEyuP7zfUr02JCvVoo4EGiA" className="fa-youtube"><span className="label">Youtube</span></a></li>
    </ul>
  </div>
</section>

const Skills = <p>
  I'm a fullstack programmer, here is snapshot of things i use on a daily basis:
  <br/>
  <br/>
  <pre>
    <code>
      unix
      bash
      git
      docker
      nodejs
      es6/7
      <br/>
      react
      react-native
      redux
      rxjs
      socketio
      <br/>
      heroku
      firebase
      aws
      webtask
      <br/>
      build-tools
      http
      dom
      css
      canvas
      <br/>
      oauth
      jwt
      reactive-programming
      flux-patterns
      streams
      realtime
      <br/>
      ARM-chips raspberry esp8266 basic-electronics
    </code>
  </pre>
</p>

const About = <section id="section-about" className="wrapper style3 fade-up">
  <div className="inner">
    <h1>About</h1>
    <p>
      I'm a 30 years old computer science engineer living in beautifull Aix en provence south of France.
      I launched my first website at the age of 14, an animated gifs library coded in 
      Frontpage over a 56ko/s modem, and never stopped since. 
    </p>
    <p>
      Today i'm an happy entrepreneur with a master degree in Science in Engineering 
      and I put all my efforts bringing ideas to life. 
      Like Arts, programming is a meaning of expression, where your mind is the only true limit.
      That makes it a perfect place for old kids like me who thought life was about playing Lego.
      So whatever you are talking about, let's make it real. 
      Ryan Holiday says: <strong>Obstacle is The way</strong>. 
      That's pretty much how i see things. 
    </p>
    {Skills}
    <p>
      When i'm not in the matrix you can find me in the sky. 
      Flying gives perspective and a higher point of view. 
      And it's sometime good to remember that we are just molecules floating around an ocean that we can't understand, so we might as well just enjoy it :)
      I also build my own racing drones and fly them 
      <a href="https://www.youtube.com/watch?v=KnsIKYcEipU" target="_new"><strong>FPV</strong></a> (first person view)
    </p>
  </div>
</section>

const Connect = <section id="section-connect" className="wrapper fade-up">
  <div className="inner" style={{'textAlign':'center'}}>
    <h2>Tell me about your awesome project</h2>
    <ul className="actions">
      <li><a href="mailto:as1cron@gmail.com" className="button scrolly">as1cron@gmail.com</a></li>
    </ul>
  </div>
</section>




class Home extends Component {

  render() {
    return (<div>

      {Intro}
      {About}
      {Portfolio}
      {Connect}
      <Footer/>

    </div>)
  }

}

export default Home
