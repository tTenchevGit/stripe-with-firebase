  
 const firebaseConfig = {
  apiKey: "AIzaSyBYmVOHLOIPLDHlyAVA9-BclWLuHWxh8xk",
  authDomain: "new-stripe.firebaseapp.com",
  projectId: "new-stripe",
  storageBucket: "new-stripe.appspot.com",
  messagingSenderId: "648908661156",
  appId: "1:648908661156:web:472801b5b5622770f7a131",
  measurementId: "G-C90VPF06DT"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const checkoutButton = document.getElementById('checkout-button')
  const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout')
  const stripe = Stripe('pk_live_51NdcTXBeHRRqjgdXrvLHLfDg0Mu5qkyO9PBBMAMVGMtqGT4hDoEsDiDPKRnQS1g5YJTzfdJ6Jz36F5gfUbmbo45R00NfnUoeGA')
  
  checkoutButton.addEventListener('click', () => {
    createStripeCheckout()
      .then(response => {
        const sessionId = response.data.id
        stripe.redirectToCheckout({ sessionId: sessionId })
      })
  })