import { Nav, Bio, Gallery} from './components';
import './App.css';
// import Footer from './components/Footer';

const App = ()=> {
  return (
    <>
    <Nav />
      <div className="container">
        <Bio />
        <Gallery />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
