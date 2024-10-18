import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
