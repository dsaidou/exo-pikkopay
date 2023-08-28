import { useEffect, useState, useRef} from "react";
import Loader from "./Components/Loader";


function App() {
  const [loading, setLoading] = useState(false)

  const style = {
    input: {
      base: {
        color: 'black',
        fontSize: '18px',
      },
      hover: {
        color: 'grey',
      },
      focus: {
        color: 'black',
      },
      invalid: {
        color: 'red',
      },
      placeholder: {
        base: {
          color: 'grey',
          backgroundColor:'red'
        },
      },
    },
    checkbox: {
      label: {
        base: {
          color: 'black',
        },
        unchecked: {
          color: 'black',
        },
      },
      box: {
        base: {
          color: '#0d6efd',
          hover: {
            color: '#424242',
          },
        },
        unchecked: {
          color: '#f00020',
        },
      },
    },
  };
  
  useEffect(() => {
      paygreenjs.init({
        publicKey: "pk_6d92047e838d4870b74857ba47e2eebd",
        mode: "instrument",
        paymentMethod: "conecs",
        style,
        modeOptions: {
          shopId: 'sh_69b974d635c34df18c807baed0794836',
        },
      });
    }, []);

      
  const handlePay = () => {
   paygreenjs.submitPayment();
   setLoading(true)
  };
  
  return (
    <>
    { loading ? <Loader/> :
    <div className="app">
      <div className="payform-container">

        <div className="header-form">

          <div className="header-title">
            <i className="fa-solid fa-chevron-left"></i>
            <h1>Payez <span id="title">en ligne</span></h1>
            <span className="material-symbols-outlined">verified_user</span>
          </div>
          
          <div className="icon-selection">
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-cc-discover"></i>
            <i className="fa-brands fa-cc-diners-club"></i>
            <i className="fa-brands fa-cc-jcb"></i>
          </div>
        </div>

        <div id="paygreen-container"></div>
            {/* Paygreen Form */}
        <div id="paygreen-methods-container"></div>
      
        <div className="pay-form">

          <div>
            <label> Nom sur la carte</label>
            <input type="text" placeholder="Nom" id="name-input" className="input-container"/>
          </div>

          <div>
            <label>N° de carte</label>
            <div id="paygreen-pan-frame" >
            <i className="fa-solid fa-credit-card"></i>
            </div>
          </div>

          <div className="line">
            <div>
              <label>Cryptogramme visuel </label>
              <div id="paygreen-cvv-frame"></div>
            </div>

            <div>
              <label>Date d'expiration</label>
              <div id="paygreen-exp-frame"></div>
            </div>

          </div>

          <div id="paygreen-reuse-checkbox-container"></div>

          <button id="payButton" className="button" onClick={()=>handlePay()}>

            <span className="material-symbols-sharp">lock</span>
            Payer 1€
          </button>

        </div>
      </div>
      
    </div>}
      
    </>
  )
}

export default App
