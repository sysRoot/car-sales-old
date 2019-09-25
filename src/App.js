import React from "react";
import { connect } from "react-redux";
import { buyItem, removeFeature } from "./actions/actionCreators";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
    const removeFeature = (e, item) => {
        e.preventDefault();
        props.removeFeature(item);
    };

    const buyItem = (e, item) => {
        e.preventDefault();
        props.buyItem(item);
    };

    return (
        <div className="boxes">
            <div className="box">
                <Header car={props.car} />
                <AddedFeatures car={props.car} removeFeature={removeFeature} />
            </div>
            <div className="box">
                <AdditionalFeatures store={props.store} buyItem={buyItem} />
                <Total
                    car={props.car}
                    additionalPrice={props.additionalPrice}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        additionalPrice: state.additionalPrice,
        store: state.store,
        car: state.car
    };
};

export default connect(
    mapStateToProps,
    { buyItem, removeFeature }
)(App);
