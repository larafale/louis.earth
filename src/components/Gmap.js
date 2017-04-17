import React, { Component } from 'react' // eslint-disable-line




export default class Gmap extends Component {

  componentDidMount() {

    let address = 'aix en provence, cours mirabeau, 15'
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&sensor=false`
    let lat, lng, map

    let attachSecretMessage = (marker, message) => {
      var infowindow = new window.google.maps.InfoWindow({ content: message })
      window.google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker)
      })
    }

    let draw = () => {
      let center = new window.google.maps.LatLng(lat, lng)
      let settings = {
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoom: 16,
        draggable: false,
        scrollwheel: false,
        center: center,
        // styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#e5c163"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#e5c163"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#e5c163"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#e5c163"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
      }
      map = new window.google.maps.Map(document.getElementById('section-map'), settings)

      let marker = new window.google.maps.Marker({
        position: center,
        title: 'Map title',
        map: map
      })
      marker.setTitle('Map title'.toString())
      //type your map title and description here
      attachSecretMessage(marker, '<h3>Map title</h3>Map HTML description')
    }

    window.$.getJSON(url, data => {
      lat = data.results[0].geometry.location.lat
      lng = data.results[0].geometry.location.lng
    }).complete(draw)

  }



  render() {

    const style = {
      width: '100%',
      height: 300
    }

    return (<section id="section-map" style={style} className="wrapper style1 fade-up"></section>)
  }

}
