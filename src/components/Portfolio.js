import React, { Component } from 'react' // eslint-disable-line

const projects = [

{ 
  name: 'Flooz', 
  url: 'http://flooz.com',
  role: 'Founder',
  preview: '/assets/portfolio/flooz.png',
  text: 'Fintech social wallet (like Venmo but with EU regulation). 1M€ backed funds, 50k users and 3M€ exchanged as today. We also infiltrated the gaming scene by creating the first donation Bot on twitch.tv'
},
{ 
  name: 'Roadzila', 
  url: 'http://roadzila.com',
  role: 'CTO',
  preview: '/assets/portfolio/roadzila.png',
  text: 'Roadzila is an European B2B tires market place. I\'m proud of my taylor-made catalog :) 700 brands over 80.000 references, with total stocks around 15 millions tires. Roadzila use bleeding edge technologies in it\'s market, also the only company providing a standard Http Api consumed by major international manufacturers and brokers.'
},
{ 
  name: 'Allopneus', 
  url: 'http://allopneus.com',
  role: 'CTO',
  preview: '/assets/portfolio/allopneus.png',
  text: 'I\'ve built from scratch what is now the n°1 digital pure player in France. With almost 8% global market share, Allopneus is top 5 biggest France ecommerce. 400M€ of revenue in 2016 & more than 200 employees. Michelin acquired 40% of the company for 60M€. Allopneus process more than 80k orders/month with an average of 2M visitors/month.'
},
{ 
  name: 'Kalio', 
  url: 'http://kalio.com',
  role: 'Founder',
  preview: '/assets/portfolio/kalio.png',
  text: 'Kal.io (for calendar) is a dead simple visual time scheduler where you can seamlessly book resources and eventually assign them to other shared resources. UX is the primary goal of this project, and calendar is designed to render on very small devices. Kalio is mainly used by flight schools. It\'s so easy that pilots can safely book planes on their phones while flying an aircraft :) (tested myself)'
},
{ 
  name: 'Edoki Academy', 
  url: 'http://sevenacademy.com',
  role: 'CTO',
  preview: '/assets/portfolio/sevenacademy.png',
  text: 'Edoki Academy is a multilingual educational game platform. Kids learn from a variety of high quality ios apps developed in collaboration with experienced Montessori teachers. Game levels, scores and stats are centralized in real time and parents can follow their kids progression.'
},

]

export default <section id="section-portfolio" className="wrapper style2 spotlights">
  { projects.map(p => 
    <section key={p.name}>
      <a className="image">
        <img src={p.preview} alt="" data-position="center center" />
      </a>
      <div className="content">
        <div className="inner">
          <h2>
            {p.name}
            <span style={{fontSize:12}}>  ~  {p.role}</span>
          </h2>
          <p>{p.text}</p>
          
        </div>
      </div>
    </section>
    
  ) }
</section>