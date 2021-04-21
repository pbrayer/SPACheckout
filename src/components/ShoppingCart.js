import React from 'react';
import {
    BrowserRouter as Link
  } from "react-router-dom";
  import "./ShoppingCart.css";

//Shopping Cart Component
const ShoppingCart  = ({products, total, handleCartUpdate, handleTrashClick}) => {
return (<div className="container">
	            <div className="row">
		          <div className="col-xs-8">
			        <div className="panel panel-info">
				<div className="panel-heading">
					<div className="panel-title">
						<div className="row">
							<div className="col-xs-6">
								<h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
							</div>
							<div className="col-xs-6">
								<button type="button" className="btn btn-primary btn-sm btn-block">
									<span className="glyphicon glyphicon-share-alt"></span> Continue shopping
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-body">
                 {products.map((name)=>(
					<div className="row" id = {name}>
                    <div className="col-xs-2"><img className="img-responsive" src="http://placehold.it/100x70"></img>
                    </div>
                    <div className="col-xs-4">
                        <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                    </div>
                    <div className="col-xs-6">
                        <div className="col-xs-6 text-right">
                            <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                        </div>
                        <div className="col-xs-4">
                            <input type="number" className="form-control input-sm" placeholder = "0" id = {name + "quantity"} className = "productinput"></input>
                        </div>
                        <div className="col-xs-2">
                            <button type="button" className="btn btn-link btn-xs" value = {name} onClick ={() => handleTrashClick(name)}>
                                <span className="glyphicon glyphicon-trash"> </span>
                            </button>
                        </div>
                    </div>
                </div>
                 ))}

					<hr></hr>
					<div className="row">
						<div className="text-center">
							<div className="col-xs-9">
								<h6 className="text-right">Added items?</h6>
							</div>
							<div className="col-xs-3">
								<button type="button" className="btn btn-default btn-sm btn-block" onClick = {() => handleCartUpdate()} >
									Update cart
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-footer">
					<div className="row text-center">
						<div className="col-xs-9">
							<h4 className="text-right">Total <strong>${total}</strong></h4>
						</div>
						<div className="col-xs-3">
                            <Link to = "/checkout">
							<button type="button" className="btn btn-success btn-block">
								Checkout
							</button>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
);
};

export default ShoppingCart;