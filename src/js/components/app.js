var React = require('react');
var Catalog = require('../components/catalog/catalog');
var Cart = require('../components/cart/cart');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Let&rsquo;s Shop</h1>

        <h2>Catalog</h2>
        <Catalog />

        <h2>Cart</h2>
        <Cart />
      </div>
    )
  }
});

module.exports = App;
