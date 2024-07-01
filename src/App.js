import { Children, useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setisOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''} `}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <Messagehandle step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="green"
                textColor="#fff"
                onClick={() =>
                  alert(`do you really want to Learn ${messages[step - 1]} `)
                }
              >
                Learn Now
              </Button>
            </div>
          </Messagehandle>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
            >
              <span>👈</span> Previous
            </Button>

            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              text="Next"
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Messagehandle({ step, children }) {
  return (
    <p className="message">
      Step {step} :{children}
    </p>
  );
}
function Button({ bgColor, textColor, onClick, text, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
