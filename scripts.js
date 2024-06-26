  
 const firebaseConfig = {
  
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const checkoutButton = document.getElementById('checkout-button')
  const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout')
  const stripe = Stripe('')
  
  checkoutButton.addEventListener('click', () => {
    createStripeCheckout()
      .then(response => {
        const sessionId = response.data.id
        stripe.redirectToCheckout({ sessionId: sessionId })
      })
  })