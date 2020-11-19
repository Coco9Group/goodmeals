import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import { saveDeliveryMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import "./checkout.css";
export default function ShippingAddress(props) {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!userInfo) {
        props.history.push('/login');
    }

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [phone, setPhone] = useState(shippingAddress.phone);

    const [deliveryMethod, setDeliveryMethod] = useState('Ship');

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ fullName, address, city, postalCode, phone }));
        dispatch(saveDeliveryMethod(deliveryMethod));
        props.history.push('/payment');
    };

    return (
        <div
        style={{
            backgroundImage: "url(/images/paymentimg2.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingTop: "3%",
            marginTop: "-2%",
            paddingBottom: "3%",
            height: "100%",
            paddingLeft:"2em"
        }}>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className="forminfo">
            <div>
                <h1>Delivery Information</h1>
            </div>
            <div className="subt">
                <h2>Delivery Method </h2>
            </div>

            <div className="subt decideinfo">
                <div>
                    <input
                        type="radio"
                        id="ship"
                        value="Ship"
                        name="deliveryMethod"
                        //required
                        checked={deliveryMethod === "Ship"}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                    ></input>
                    <label className="subt" htmlFor="ship">Ship</label>
                </div>
            </div>
            <div className="subt decideinfo">
                <div>
                    <input
                        type="radio"
                        id="pickup"
                        value="Pickup"
                        name="deliveryMethod"
                        //required
                        checked={deliveryMethod === "Pickup"}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                    ></input>
                    <label className="subt" htmlFor="pickup">Pick Up</label>
                </div>
            </div>

            <form className="infoform" onSubmit={submitHandler}>
                {deliveryMethod === 'Ship' ? (
                    <div>
                        <div>
                            <h2>Shipping Address </h2>
                        </div>
                        <div className="infodiv">
                            <label className="infolable" htmlFor="fullName">Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Enter full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="infodiv">
                            <label className="infolable" htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="infodiv">
                            <label className="infolable" htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="infodiv">
                            <label className="infolable" htmlFor="postalCode">Postal Code</label>
                            <input
                                type="text"
                                id="postalCode"
                                placeholder="Enter postal code"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="infodiv">
                            <label className="infolable" htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="country"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            ></input>
                        </div>
                    </div>
                ) : (
                        <div className="message">
                            <h2>Pickup - pickup location</h2>
                            <div style={{paddingLeft:"1em"}}>
                            <p>GoodMeals</p>
                            <p>345 Oxford Street, London N56B3C</p>
                            <p>phone: 519)555-6686</p>
                            </div>
                        </div>
                    )
                }
                    <div>
                    <button className="checkbutton" type="submit">
                        Continue To Payment
                    </button>
                </div>
            </form>

            </div>
        </div>
    );
}