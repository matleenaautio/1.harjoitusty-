import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let blood_alcohol = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let grams_left = grams - (burning * time)

    if (gender === "male") {
      blood_alcohol = grams_left / (weight * 0.7);
      if (blood_alcohol < 0) {
        blood_alcohol = 0;
      }
    } else {
      blood_alcohol = grams_left / (weight * 0.6);
      if (blood_alcohol < 0) {
        blood_alcohol = 0;
      }
    }
    setResult(blood_alcohol);
  }

  return (
    <>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input type="number" name="weight" step="1" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <input type="number" name="bottles" step="1" value={bottles} onChange={e => setBottles(e.target.value)}/>
      </div>
      <div>
        <label>Time</label>
        <input type="number" name="time" step="1" value={time} onChange={e => setTime(e.target.value)}/>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/>
          <label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>
          <label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
    </>
  );
}

export default App;
