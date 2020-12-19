import pic1 from './images/undraw_skateboard_d6or.svg';
import pic2 from './images/undraw_programmer_imem.svg';
import './index.css';

function App() {
  return (
    <div className="img">
        <img className="pic" src={pic1} alt="Olympics"/>
        <div style={{display: "block"}}>
          <h1><u>Winter Hacklympics</u></h1>
          <br></br>
          <h3><b>Quiz me Up!</b></h3>
        </div>
        <img className="pic" src={pic2} alt="Programmer"/>
    </div>
  );
}
export default App;
