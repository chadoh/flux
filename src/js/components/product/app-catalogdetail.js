var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('../catalog/app-addtocart.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var Link = require('react-router-component').Link;

function getCatalogItem(component){
  var thisItem;
  AppStore.getCatalog().forEach(function(item){
    if (item.id.toString()===component.props.item)
      thisItem = item;
  });
  return { item: thisItem }
}

var CatalogDetail = React.createClass({
  mixins: [StoreWatchMixin(getCatalogItem)],

  render: function() {
    var itemStyle = {
      borderBottom: '1px solid #ccc',
      paddingBottom:15
    };
    return (
      <div className="col-sm-3" style={itemStyle}>
        <h2>{this.state.item.title}</h2>
        <img src={this.state.item.img} alt="" />
        <p>{this.state.item.description}</p>
        <p>
          ${this.state.item.cost}&nbsp;
          <span className="text-success">
            {this.state.item.inCart && '('  + this.state.item.qty + ' in cart)'}
          </span>
        </p>
        <div className="btn-group btn-group-sm">
          <AddToCart item={this.state.item} />
          <Link href={'/'} className="btn btn-default">Continue Shopping</Link>
        </div>
      </div>
    )
  }
});

module.exports = CatalogDetail;
