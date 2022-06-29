import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Team from './components/team';
import ProgramCommitte from './components/programCommitte';
import Timeline from './components/timeline';
import Importance from './components/importance';
import Keynote from './components/keynote';
import Topics from './components/topics';
import ImportantDates from './components/importantDates';
import Submission from './components/submission';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div id="about"><Intro/></div>
      <div className="flex flex-row m-20"><About /><Importance /></div>
      <Keynote />
      <Topics />
      <div id="papers" class="mx-auto max-w-7xl items-top flex flex-col md:flex-row justify evenly"><Submission className="md:w-2/3"></Submission><ImportantDates className="md:w-1/3"></ImportantDates></div>
      <div id="schedule"><Timeline/></div>

      <div className="self-center">
        <ProgramCommitte />
        <Team/>
      </div>







    </div>
  );
}

export default App;