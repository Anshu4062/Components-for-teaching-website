import './App.css';
import SubjectSelection from "./components/SubjectSelection/SubjectSelection.js"
import InstructorInfo from './components/InstructorInfo/InstructorInfo.js';

function App() {
  return (
    <div className="App">
      <SubjectSelection />
      <InstructorInfo />
    </div>
  );
}

export default App;
