import React, { Component } from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'
import Rx from 'rxjs'

import '../assets/rxjsgame.css'

const DEBUG = false 
const o = Rx.Observable
const c = { w: window.innerWidth, h: 340 }
 
function keyboard(key){
  let s = new Rx.Subject()
  window.Mousetrap.bind(key, (e) => s.next(key))
  return s
}

function makeElement(node, i){
  let isBackground = node.id === 'bg'
  let className = `el ${node.id}`
  if(DEBUG&&!isBackground) className += ' debug'
  return React.DOM.div({
    className: className,
    key: 'el'+i,
    style: {
      left: (node.x||0)+(node.baseX||0)+'px',
      top: (node.y||0)+(node.baseY||0)+'px'
    }
  })
}

function renderScenes(nodes){
  ReactDOM.render(
    React.DOM.div(null, nodes.map(makeElement)),
    document.getElementById('canvas')
  )
}

function velocity(e){
  return Object.assign({}, e, {
    x: (e.x||0) + (e.vx||0),
    y: (e.y||0) + (e.vy||0),
    vx: e.vx||0,
    vy: e.vy||0
  })
}

function onscreen(e){
  return e.x > -100
}

let loop$ = o.interval(1000/60)
  
let bg$ = loop$
  .map(i => ({
    id: 'bg',
    x: -((2*i)%600)
  }))
  

let cat_ = {
  id: 'cat',
  y: 50,
  x: c.w + 50,
  vx: -3
}

let cat$ = loop$
  .scan((e, key)=>{
    e = velocity(e)
    return onscreen(e) ? e : cat_
  }, cat_)
     
let hero$ = o.zip(loop$.merge(keyboard("space")), cat$)
  .scan((e, [key, cat])=>{
    e = velocity(e)
    e.vy += 1*1.8//create gravity 
    e.vx = e.x < (c.w/2 - 20) ? 3 : 0//walk to center 
    if(e.y >= 0){
      e.vy = 0    
      e.y=0
    }
    if(key === "space" && e.y === 0){
      e.vy = -24  
    }
    
    return e
  }, {
    id: 'hero', 
    baseY: 226
  })






export default class Footer extends Component {

  componentDidMount() {
    setTimeout(()=>{

      // overide container width
      c.w = window.$('#wrapper').width()

      requestAnimationFrame((ts)=>{
        console.log(ts)
        o.zip(bg$, hero$, cat$)
          //.take(600)
          .subscribe(renderScenes) 
      })  
    }, 3000)
  }

  componentWillUnmount() {

  }

  render() {

    return <section style={{position:'relative',overflow:'hidden',marginTop:0}} id="section-footer">
      <div id="canvas"></div>
      <div id="love">
        crafted with  
        <i className="fa fa-heart" />
          from my couch
      </div>
    </section>

  }

}







