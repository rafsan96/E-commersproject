import React from "react";
import StripeCheckout from "react-stripe-checkout";
import pement from '../Checkout/Laptop-Wallpapers-HD-Free-Download-Images-1.jpg';

const StripePay = React.memo(function StripePay({ price }) {
  const priceForStripe = price * 100; // Stripe uses the smallest currency unit (poisha for BDT)
  const publishableKey = "pk_test_51HsoAjDW9ZmubhRmS7JqNrP6ZNf8qx9DcNyUYfb7QTZmruBucwvItOEPhaUvOyuddJbLe3KeEbZYNTminM2X5pP600VZshyn1S";

  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful! Your order has been placed.");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="eTech"
      billingAddress
      shippingAddress
      image={pement}
      description={`Your total is ৳ ${price}`}
      amount={priceForStripe}
      currency="BDT" // ✅ Corrected: Set currency to Bangladeshi Taka
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
});

export default StripePay;
