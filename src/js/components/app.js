var React = require('react');
var Catalog = require('../components/catalog/catalog');
var Cart = require('../components/cart/cart');
var Router = require('react-router-component');
var CatalogDetail = require('../components/catalog/catalog-item');
var Template = require('../components/app-template');
var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  render: function(){
    return (
      <Template>
        <Locations>
          <Location path='/' handler={Catalog} />
          <Location path='/cart' handler={Cart} />
          <Location path='/item/:item' handler={CatalogDetail} />
        </Locations>
      </Template>
    )
  }
});

module.exports = App;
